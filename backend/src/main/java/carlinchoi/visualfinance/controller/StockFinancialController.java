package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.StockFinancials;
import carlinchoi.visualfinance.service.StockFinancialAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class StockFinancialController {
    private final StockFinancialAPIService financialAPIService;

    @Autowired
    public StockFinancialController(StockFinancialAPIService financialAPIService) {
        this.financialAPIService = financialAPIService;
    }

    @GetMapping("/financial-data")
    public ResponseEntity<List<StockFinancials.Result>> getFinancialData(@RequestParam String ticker) {
        List<StockFinancials.Result> financialData = financialAPIService.getFinancialData(ticker);
        return ResponseEntity.ok(financialData);
    }
}
