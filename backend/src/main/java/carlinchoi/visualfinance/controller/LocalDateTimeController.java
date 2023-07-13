package carlinchoi.visualfinance.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/")
@CrossOrigin

public class LocalDateTimeController {

    @GetMapping("/time")
    public LocalDateTime getCurrentTime() {
        LocalDateTime currentTime = LocalDateTime.now();
        return currentTime;
    }
}
