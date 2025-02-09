package reserva.peluqueria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import reserva.peluqueria.model.AppointmentModel;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface IAppointmentRepository extends JpaRepository<AppointmentModel, Integer> {
    Optional<AppointmentModel> findByAppointmentDate(LocalDateTime date);
}
