package com.example.java.service;

import com.example.java.model.User;
import com.example.java.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        com.example.java.model.User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),user.getPassword(), Collections.singletonList(new SimpleGrantedAuthority(user.getRole())));
    }

    public Optional<User> findUserByEmail(String email){
        return  userRepository.findByEmail(email);
    }
    public ResponseEntity<String> createUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);
        return new ResponseEntity<>("Usuario creado exitosamente con ID=" + savedUser.getEmail(), HttpStatus.CREATED);
    }
}
