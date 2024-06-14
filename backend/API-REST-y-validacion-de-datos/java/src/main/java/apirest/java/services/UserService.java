package apirest.java.services;

import apirest.java.exceptions.UserNotFoundException;
import apirest.java.models.User;
import apirest.java.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private IUserRepository userRepository;

    public ResponseEntity<List<User>> getUsers(){
            return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<User> getUserByID(@PathVariable Long id){
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new UserNotFoundException(id);
        }
        return new ResponseEntity<>(user.get(), HttpStatus.OK);
    }

    public ResponseEntity<String> deleteByID(@PathVariable Long id){
        Optional<User> user = userRepository.findById(id);

        if (user.isEmpty()) {
            throw new UserNotFoundException(id);
        }

        userRepository.deleteById(id);
        return new ResponseEntity<>("Usuario eliminado.", HttpStatus.OK);
    }

    public ResponseEntity<String> updateByID(@PathVariable Long id, @RequestBody User user){
        try {
            Optional<User> userToFind = userRepository.findById(id);

            if (userToFind.isEmpty()) {
                throw new UserNotFoundException(id);
            }

            User existingUser = userToFind.get();
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setEdad(user.getEdad());

            userRepository.save(existingUser);
            return new ResponseEntity<>("Usuario actualizado exitosamente.", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error interno del servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> createUser(@RequestBody User user) {
        User savedUser = userRepository.save(user);
        return new ResponseEntity<>("Usuario creado exitosamente con ID=" + savedUser.getId_user(), HttpStatus.CREATED);
    }
}
