package in.mpawank.filebabaapi.exceptions;

import com.mongodb.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<Map<String, Object>> handleDuplicateEmailException(DuplicateKeyException exception) {
        Map<String, Object> data = new HashMap<>();
        data.put("status", HttpStatus.CONFLICT.value());
        data.put("message", exception.getMessage());

        return ResponseEntity.status(HttpStatus.CONFLICT).body(data);
    }
}
