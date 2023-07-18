package carlinchoi.visualfinance.service;

import carlinchoi.visualfinance.model.StockDataNews;
import carlinchoi.visualfinance.model.StockDataPrice;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.util.List;
@Service
@CrossOrigin
public class StockDataPriceAPIService {
    private static final String API_URL  = "https://api.stockdata.org/v1/";
    private final RestTemplate restTemplate;
    private final String apiToken;

    public StockDataPriceAPIService(RestTemplate restTemplate, @Value("${stock-data.api.token}") String apiToken){
        this.restTemplate = restTemplate;
        this.apiToken = apiToken;
    }

    public List<StockDataPrice.Response> getStockDataPrice(String symbol) {
        String url = API_URL + "data/quote?symbols=" + symbol + "&api_token=" + apiToken;
        StockDataPrice stockDataPrice = restTemplate.getForObject(url, StockDataPrice.class);
        if (stockDataPrice != null) {
            return List.of(stockDataPrice.getData());
        }
        return List.of();
    }

    public List<StockDataNews.Response> getStockNews() {
        String url = API_URL + "news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=" + apiToken;
        StockDataNews stockDataNews = restTemplate.getForObject(url, StockDataNews.class);
        if (stockDataNews != null) {
            return stockDataNews.getData();
        }
        return List.of();
    }


}
