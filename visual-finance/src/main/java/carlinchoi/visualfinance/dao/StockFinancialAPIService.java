package carlinchoi.visualfinance.dao;

import carlinchoi.visualfinance.model.StockFinancials;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class StockFinancialAPIService {
    private static final String API_URL = "https://api.polygon.io/vX/reference/financials";
    private final RestTemplate restTemplate;
    private final String apiKey;

    public StockFinancialAPIService(RestTemplate restTemplate, @Value("${polygon.api.key}") String apiKey) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public StockFinancials getFinancialData(String ticker) {
        String url = API_URL + "?ticker=" + ticker + "&apiKey=" + apiKey;
        return restTemplate.getForObject(url, StockFinancials.class);
    }
}

