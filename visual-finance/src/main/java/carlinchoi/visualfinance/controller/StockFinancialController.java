package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.dao.StockFinancialAPIService;
import carlinchoi.visualfinance.model.StockFinancials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class StockFinancialController {

    private final StockFinancialAPIService stockFinancialAPIService;

    @Autowired
    public StockFinancialController(StockFinancialAPIService stockFinancialAPIService) {
        this.stockFinancialAPIService = stockFinancialAPIService;
    }

    @GetMapping("/financial-data")
    public String getFinancialData(@RequestParam("ticker") String ticker, Model model) {
        StockFinancials stockFinancials = stockFinancialAPIService.getFinancialData(ticker);
        model.addAttribute("stockFinancials", stockFinancials);
        return "financial-data"; // Return the name of the view template
    }
}
