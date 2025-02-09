package reserva.peluqueria.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "appointment")
public class AppointmentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id", nullable = false)
    private Integer client_id;

    @Column(name = "client_name", nullable = false)
    private String client_name;

    @Column(name = "client_email", nullable = false)
    private String client_email;

    @Column(name = "client_number", nullable = false)
    private String client_number;

    @Column(name = "client_appointment_date", nullable = false)
    private LocalDateTime appointmentDate;
}
