package apirest.java.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
public class ErrorResponse {
    private int statusCode;
    private String message;
}
