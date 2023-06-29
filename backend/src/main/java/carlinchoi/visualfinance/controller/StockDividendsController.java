package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.StockDividends;
import carlinchoi.visualfinance.service.StockDividendsAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class StockDividendsController {
    private final StockDividendsAPIService dividendsAPIService;
    @Autowired
    public StockDividendsController(StockDividendsAPIService dividendsAPIService) {
        this.dividendsAPIService = dividendsAPIService;
    }

    @GetMapping("/dividends")
    public ResponseEntity<List<StockDividends.Result>> getDataPrice(@RequestParam String ticker) {
        List<StockDividends.Result> stockDividends = dividendsAPIService.getStockDividends(ticker);
        return ResponseEntity.ok(stockDividends);
    }
}
