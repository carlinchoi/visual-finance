package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.StockDividends;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@CrossOrigin
public class StockDividendsAPIService {
    private static final String API_URL = "https://api.polygon.io/v3/reference/dividends";
    private final RestTemplate restTemplate;
    private final String apiKey;

    public StockDividendsAPIService(RestTemplate restTemplate, @Value("${polygon.api.key}") String apiKey) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public List<StockDividends.Result> getStockDividends(String ticker) {
        String url = API_URL + "?ticker=" + ticker + "&apiKey=" + apiKey;
        StockDividends stockDividends = restTemplate.getForObject(url, StockDividends.class);
        if (stockDividends != null) {
            return List.of(stockDividends.getResults());
        }
        return List.of();
    }
}
