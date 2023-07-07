package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.Indices;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
@CrossOrigin
public class IndicesAPIService {
    private static final String API_URL = "https://api.polygon.io/v1/open-close/";
    private final RestTemplate restTemplate;
    private final String apiKey;

    public IndicesAPIService(RestTemplate restTemplate, @Value("${polygon.api.key}") String apiKey) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public Indices getIndicesData(String symbol, String date) {
        String url = API_URL + "I:" + symbol + "/" + date + "/?apiKey=" + apiKey;
        return restTemplate.getForObject(url, Indices.class);
    }

}
