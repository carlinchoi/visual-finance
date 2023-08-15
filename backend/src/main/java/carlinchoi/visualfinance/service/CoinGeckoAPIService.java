package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.CoinGecko;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

@Service
public class CoinGeckoAPIService {
    private static final String API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    public CoinGeckoAPIService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public List<CoinGecko.Result> getCoinData() throws IOException {
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(API_URL, String.class);
        String responseBody = responseEntity.getBody();

        List<CoinGecko.Result> coinGeckoResults = objectMapper.readValue(
                responseBody,
                new TypeReference<List<CoinGecko.Result>>() {}
        );

        return coinGeckoResults;
    }
}

