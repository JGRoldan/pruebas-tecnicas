package apirest.java.controller;

import apirest.java.models.User;
import apirest.java.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getUsers(){return userService.getUsers();}

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserByID(@PathVariable Long id){
        return userService.getUserByID(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteByID(@PathVariable Long id){
        return userService.deleteByID(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user){
        return userService.updateByID(id, user);
    }

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
