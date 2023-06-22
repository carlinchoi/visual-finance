package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.StockFinancials;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@CrossOrigin
public class StockFinancialAPIService {
    private static final String API_URL = "https://api.polygon.io/vX/reference/financials";
    private final RestTemplate restTemplate;
    private final String apiKey;

    public StockFinancialAPIService(RestTemplate restTemplate, @Value("${polygon.api.key}") String apiKey) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public List<StockFinancials.Result> getFinancialData(String ticker) {
        String url = API_URL + "?ticker=" + ticker + "&apiKey=" + apiKey;
        StockFinancials stockFinancials = restTemplate.getForObject(url, StockFinancials.class);
        if (stockFinancials != null) {
            return List.of(stockFinancials.getResults());
        }
        return List.of();
    }
}
