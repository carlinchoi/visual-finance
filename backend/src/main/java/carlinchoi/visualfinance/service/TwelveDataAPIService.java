package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.TwelveData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@CrossOrigin
public class TwelveDataAPIService {
    private static final String API_URL  = "https://api.twelvedata.com/";
    private final RestTemplate restTemplate;
    private final String apiKey;

    public TwelveDataAPIService(RestTemplate restTemplate, @Value("${twelvedata.api.key}") String apiKey){
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public List<TwelveData.Meta> getTwelveLogo(String symbol) {
        String url = API_URL + "logo?symbol=" + symbol + "&apikey=" + apiKey;
        TwelveData twelveData = restTemplate.getForObject(url, TwelveData.class);
        if (twelveData != null && twelveData.getMeta() != null) {
            return List.of(twelveData.getMeta());
        }
        return List.of();
    }

}
