package reserva.peluqueria.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import reserva.peluqueria.model.UserModel;
import reserva.peluqueria.security.JWT.JwtTokenUtil;
import reserva.peluqueria.security.PAYLOAD.JwtResponse;
import reserva.peluqueria.security.PAYLOAD.LoginRequest;
import reserva.peluqueria.security.PAYLOAD.MessageResponse;
import reserva.peluqueria.security.PAYLOAD.RegisterRequest;
import reserva.peluqueria.service.UserService;

//Pruebas de tiempo
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
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

    @GetMapping("/test")
    public LocalTime test(){
        return LocalDateTime.now().toLocalTime();
    }

    @PostMapping("/register")
    public ResponseEntity<MessageResponse> registerUser(@RequestBody RegisterRequest signUpRequest){
        if(userService.findUserByUsername((signUpRequest.getUsername())).isPresent()){
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already in use!"));
        }

        UserModel user = new UserModel(
                signUpRequest.getUsername(),
                encoder.encode(signUpRequest.getPassword()));

        userService.createUser(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest){
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        Optional<UserModel> user = userService.findUserByUsername(loginRequest.getUsername());

        String jwt = jwtTokenUtil.generateJwtToken(authentication, user);

        return ResponseEntity.ok(new JwtResponse(jwt));
    }
}
