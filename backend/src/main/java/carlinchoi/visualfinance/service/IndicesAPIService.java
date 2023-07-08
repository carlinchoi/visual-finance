package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.Indices;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;


@Service
@CrossOrigin
public class IndicesAPIService {
    private static final String API_URL = "https://api.marketdata.app/v1/indices/quotes/";
    private final RestTemplate restTemplate;
    private final String apiToken;

    public IndicesAPIService(RestTemplate restTemplate, @Value("${market-data.api.token}") String apiToken) {
        this.restTemplate = restTemplate;
        this.apiToken = apiToken;
    }

    public Indices getIndicesData(String symbol) {
        String url = API_URL + symbol + "/?token=" + apiToken;
        return restTemplate.getForObject(url, Indices.class);
    }
}
