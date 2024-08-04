package com.example.java.controller;


import com.example.java.config.JWT.JwtTokenUtil;
import com.example.java.config.PAYLOAD.MessageResponse;
import com.example.java.config.PAYLOAD.RegisterRequest;
import com.example.java.model.User;
import com.example.java.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
    public String NoAuthRequired(){
        return "RUTA PARA CUALQUIER PERSONA.";
    }
    @PostMapping("/register")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody RegisterRequest signUpRequest){
        System.out.println("Received registration request: " + signUpRequest);

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
}
