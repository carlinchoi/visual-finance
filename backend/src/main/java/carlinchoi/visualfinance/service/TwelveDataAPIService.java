package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.TwelveEarnings;
import carlinchoi.visualfinance.model.TwelveIndices;
import carlinchoi.visualfinance.model.TwelveLogo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@CrossOrigin
public class TwelveDataAPIService {
    private static final String API_URL = "https://api.twelvedata.com/";
    private final RestTemplate restTemplate;
    private final String apiKey;
    private final ObjectMapper objectMapper;

    public TwelveDataAPIService(RestTemplate restTemplate, @Value("${twelve-data.api.key}") String apiKey, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
        this.objectMapper = objectMapper;
    }

    public List<TwelveLogo>getTwelveLogo(String symbol) {
        String url = API_URL + "logo?symbol=" + symbol + "&apikey=" + apiKey;
        TwelveLogo twelveLogo = restTemplate.getForObject(url, TwelveLogo.class);
        return List.of(twelveLogo);
    }

    public List<TwelveEarnings>getTwelveEarnings(String symbol) {
        String url = API_URL + "earnings?symbol=" + symbol + "&apikey=" + apiKey;
        TwelveEarnings twelveEarnings = restTemplate.getForObject(url, TwelveEarnings.class);
        return List.of(twelveEarnings);
    }

    public List<TwelveIndices> getTwelveIndices(String symbol) {
        String url = API_URL + "quote?symbol=" + symbol + "&apikey=" + apiKey;
        TwelveIndices twelveIndices = restTemplate.getForObject(url, TwelveIndices.class);
        return List.of(twelveIndices);
    }
}
