package reserva.peluqueria.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {
    private Integer clientId;
    private String clientName;
    private String clientEmail;
    private String clientNumber;
    private LocalDateTime clientAppointmentDate;
}
