package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.StockDataNews;
import carlinchoi.visualfinance.model.StockDataPrice;
import carlinchoi.visualfinance.service.StockDataPriceAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class StockDataPriceController {
    private final StockDataPriceAPIService stockDataPriceAPIService;

    @Autowired
    public StockDataPriceController(StockDataPriceAPIService stockDataPriceAPIService) {
        this.stockDataPriceAPIService = stockDataPriceAPIService;
    }

    @GetMapping("/quote")
    public ResponseEntity<List<StockDataPrice.Response>> getDataPrice(@RequestParam("symbols") String symbol) {
        List<StockDataPrice.Response> dataPrice = stockDataPriceAPIService.getStockDataPrice(symbol);
        return ResponseEntity.ok(dataPrice);
    }

    @GetMapping("/news")
    public ResponseEntity<List<StockDataNews.Response>> getStockNews() {
       List<StockDataNews.Response>stockNews = stockDataPriceAPIService.getStockNews();
       return ResponseEntity.ok(stockNews);
    }

}
