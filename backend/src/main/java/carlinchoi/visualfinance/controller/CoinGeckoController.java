package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.CoinGecko;
import carlinchoi.visualfinance.service.CoinGeckoAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/")  // Update the mapping to "/api" to be consistent
public class CoinGeckoController {
    private final CoinGeckoAPIService coinGeckoAPIService;

    @Autowired
    public CoinGeckoController(CoinGeckoAPIService coinGeckoAPIService) {
        this.coinGeckoAPIService = coinGeckoAPIService;
    }

    @GetMapping("/coins")
    public List<CoinGecko.Result> getAllCoins() throws IOException {
        return coinGeckoAPIService.getCoinData();
    }
}
