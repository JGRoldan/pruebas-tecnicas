package com.example.java.controller;


import com.example.java.security.JWT.JwtTokenUtil;
import com.example.java.security.PAYLOAD.JwtResponse;
import com.example.java.security.PAYLOAD.LoginRequest;
import com.example.java.security.PAYLOAD.MessageResponse;
import com.example.java.security.PAYLOAD.RegisterRequest;
import com.example.java.model.User;
import com.example.java.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;
    private final AuthenticationManager authManager;
    private final PasswordEncoder encoder;
    private final JwtTokenUtil jwtTokenUtil;

    @GetMapping("/any")
    public String NoAuthRequired(){ return "Ruta para cualquier persona."; }
    @GetMapping("/auth")
    public String auth(){
        return "Ruta para cualquier persona logueada.";
    }
    @GetMapping("/admin")
    public String admin(){
        return "Ruta para el ADMIN.";
    }
    @PostMapping("/register")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody RegisterRequest signUpRequest){
        if(!userService.findUserByEmail((signUpRequest.getEmail())).isEmpty()){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        User user = new User(
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getRole());

        userService.createUser(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        Optional<User> user = userService.findUserByEmail(loginRequest.getEmail());

        String jwt = jwtTokenUtil.generateJwtToken(authentication, user);

        return ResponseEntity.ok(new JwtResponse(jwt));
    }
}
