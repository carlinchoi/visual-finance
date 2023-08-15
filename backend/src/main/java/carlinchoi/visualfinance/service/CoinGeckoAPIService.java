package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.CoinGecko;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class CoinGeckoAPIService {
    private static final String API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    private final RestTemplate restTemplate;

    @Autowired
    public CoinGeckoAPIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<CoinGecko> getCoinData() {
        String url = API_URL;
        ResponseEntity<List<CoinGecko>> responseEntity = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<CoinGecko>>() {}
        );

        return responseEntity.getBody();
    }
}
