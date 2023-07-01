package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.TwelveData;
import carlinchoi.visualfinance.service.TwelveDataAPIService;
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
    public ResponseEntity<List<TwelveData>> getLogo(@RequestParam("symbol") String symbol) {
        List<TwelveData> logo = twelveDataAPIService.getTwelveLogo(symbol);
        return ResponseEntity.ok(logo);
    }
}