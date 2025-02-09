package reserva.peluqueria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import reserva.peluqueria.model.UserModel;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<UserModel, Integer> {
    Optional<UserModel> findByName(String name);
}
