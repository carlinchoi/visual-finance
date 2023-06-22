package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.StockFinancials;
import carlinchoi.visualfinance.service.StockFinancialAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin
public class StockFinancialController {

    @Autowired
    private final StockFinancialAPIService stockFinancialAPIService;

    public StockFinancialController(StockFinancialAPIService stockFinancialAPIService) {
        this.stockFinancialAPIService = stockFinancialAPIService;
    }

    @RequestMapping("/financial-data")
    public StockFinancials getFinancialData(@RequestParam("ticker") String ticker, Model model) {
        StockFinancials financialData = stockFinancialAPIService.getFinancialData(ticker);
        System.out.println(financialData); // Log the financial data
        return financialData;
    }

    // ...
}
