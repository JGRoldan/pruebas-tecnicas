package reserva.peluqueria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import reserva.peluqueria.model.UserModel;
import reserva.peluqueria.repository.IUserRepository;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException{
        UserModel user = userRepository.findByName(name)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with name: " + name));

        return new UserDetailsImp(user.getName(), user.getPassword());
    }

    public Optional<UserModel> findUserByUsername(String name){
        return userRepository.findByName(name);
    }

    public ResponseEntity<String> createUser(@RequestBody UserModel user) {
        UserModel savedUser = userRepository.save(user);
        return new ResponseEntity<>("Usuario creado exitosamente con ID=" + savedUser.getId(), HttpStatus.CREATED);
    }
}
