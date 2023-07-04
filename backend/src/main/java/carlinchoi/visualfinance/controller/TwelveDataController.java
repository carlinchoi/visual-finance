package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.TwelveEarnings;
import carlinchoi.visualfinance.model.TwelveLogo;
import carlinchoi.visualfinance.service.TwelveDataAPIService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class TwelveDataController {
    private final TwelveDataAPIService twelveDataAPIService;

    @Autowired
    public TwelveDataController(TwelveDataAPIService twelveDataAPIService) {
        this.twelveDataAPIService = twelveDataAPIService;
    }

    @GetMapping("/logo")
    public ResponseEntity<List<TwelveLogo>>getLogo(@RequestParam("symbol") String symbol) {
        List<TwelveLogo> logo = twelveDataAPIService.getTwelveLogo(symbol);
        return ResponseEntity.ok(logo);
    }

    @GetMapping("/earnings")
    public ResponseEntity<List<TwelveEarnings>> getEarnings(@RequestParam("symbol") String symbol) {
        List<TwelveEarnings> earnings = twelveDataAPIService.getTwelveEarnings(symbol);
        return ResponseEntity.ok(earnings);
    }
}