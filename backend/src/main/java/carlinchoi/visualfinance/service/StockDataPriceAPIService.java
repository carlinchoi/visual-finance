package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.StockDataPrice;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@CrossOrigin
public class StockDataPriceAPIService {
    private static final String API_URL  = "https://api.stockdata.org/v1/data/quote";
    private final RestTemplate restTemplate;
    private final String apiToken;

    public StockDataPriceAPIService(RestTemplate restTemplate, @Value("${stockdata.api.token}") String apiToken){
        this.restTemplate = restTemplate;
        this.apiToken = apiToken;
    }

    public List<StockDataPrice.Response> getStockDataPrice(String symbol) {
        String url = API_URL + "?symbols=" + symbol + "&api_token=" + apiToken;
        StockDataPrice stockDataPrice = restTemplate.getForObject(url, StockDataPrice.class);
        if (stockDataPrice != null) {
            return List.of(stockDataPrice.getData());
        }
        return List.of();
    }
}
