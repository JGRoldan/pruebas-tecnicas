package reserva.peluqueria.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import reserva.peluqueria.DTO.AppointmentDTO;
import reserva.peluqueria.model.AppointmentModel;
import reserva.peluqueria.repository.IAppointmentRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AppointmentService {
    private final IAppointmentRepository appointmentRepository;

    public AppointmentService(IAppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public List<AppointmentDTO> getAllAppointments() {
        List<AppointmentModel> appointments = appointmentRepository.findAll();
        return appointments.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public AppointmentDTO getAppointmentById(Integer id) {
        return appointmentRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró una reserva con ID: " + id));
    }

    public AppointmentDTO createAppointment(AppointmentDTO appointmentDTO) {
        AppointmentModel appointment = convertToEntity(appointmentDTO);
        AppointmentModel savedAppointment = appointmentRepository.save(appointment);
        return convertToDTO(savedAppointment);
    }

    public AppointmentDTO findByAppointmentDate(LocalDateTime date){
        return appointmentRepository.findByAppointmentDate(date)
                .map(this::convertToDTO)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró una reserva con date: " + date));
    }

    public AppointmentDTO deleteAppointmentById(Integer id) {
        return appointmentRepository.findById(id)
                .map(appointment -> {
                    appointmentRepository.delete(appointment);
                    return convertToDTO(appointment);
                })
                .orElseThrow(() -> new EntityNotFoundException("No se encontró una reserva con ID: " + id));
    }

    private AppointmentDTO convertToDTO(AppointmentModel appointment) {
        return new AppointmentDTO(
                appointment.getClient_id(),
                appointment.getClient_name(),
                appointment.getClient_email(),
                appointment.getClient_number(),
                appointment.getAppointmentDate()
        );
    }

    private AppointmentModel convertToEntity(AppointmentDTO dto) {
        return new AppointmentModel(
                dto.getClientId(),
                dto.getClientName(),
                dto.getClientEmail(),
                dto.getClientNumber(),
                dto.getClientAppointmentDate()
        );
    }
}
