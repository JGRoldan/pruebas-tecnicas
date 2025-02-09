package reserva.peluqueria.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reserva.peluqueria.DTO.AppointmentDTO;
import reserva.peluqueria.service.AppointmentService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public List<AppointmentDTO> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public AppointmentDTO getAppointmentById(@PathVariable Integer id) {
        return appointmentService.getAppointmentById(id);
    }

    @GetMapping("/by-date")
    public AppointmentDTO getAppointmentByDate(@RequestParam String date) {
        LocalDateTime appointmentDate = LocalDateTime.parse(date);
        return appointmentService.findByAppointmentDate(appointmentDate);
    }

    @PostMapping
    public AppointmentDTO createAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        return appointmentService.createAppointment(appointmentDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable Integer id) {
        AppointmentDTO deletedAppointment = appointmentService.deleteAppointmentById(id);
        return ResponseEntity.ok("Reserva eliminada correctamente.");
    }

}
