package carlinchoi.visualfinance.controller;// Import necessary packages

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class APITokenController {

    @Value("${stockdata.api.token}") // Inject the API token from the application.properties
    private String apiToken;

    @GetMapping("/token")
    public ResponseEntity<Map<String, String>> getAPIToken() {
        Map<String, String> response = new HashMap<>();
        response.put("token", apiToken);
        return ResponseEntity.ok(response);
    }
}
