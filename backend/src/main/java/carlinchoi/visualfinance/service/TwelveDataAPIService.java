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
    private static final String API_URL  = "https://api.twelvedata.com/logo";
    private final RestTemplate restTemplate;
    private final String apiKey;

    public TwelveDataAPIService(RestTemplate restTemplate, @Value("${twelve-data.api.key}") String apiKey){
        this.restTemplate = restTemplate;
        this.apiKey = apiKey;
    }

    public List<TwelveData> getTwelveLogo(String symbol) {
        String url = API_URL + "?symbol=" + symbol + "&apikey=" + apiKey;
        TwelveData twelveData = restTemplate.getForObject(url, TwelveData.class);
            return List.of(twelveData);


    }

}
