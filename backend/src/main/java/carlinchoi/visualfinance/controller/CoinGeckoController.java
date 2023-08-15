package carlinchoi.visualfinance.controller;

import carlinchoi.visualfinance.model.CoinGecko;
import carlinchoi.visualfinance.service.CoinGeckoAPIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class CoinGeckoController {
    private final CoinGeckoAPIService coinGeckoAPIService;

    @Autowired
    public CoinGeckoController(CoinGeckoAPIService coinGeckoAPIService) {
        this.coinGeckoAPIService = coinGeckoAPIService;
    }

    @GetMapping("/coins")
    public List<CoinGecko> getAllCoins() {
        return coinGeckoAPIService.getCoinData();
    }

}
