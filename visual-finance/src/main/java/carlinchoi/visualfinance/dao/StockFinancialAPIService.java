package carlinchoi.visualfinance.dao;

import carlinchoi.visualfinance.model.StockFinancials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

public class StockFinancialAPIService {
    @Service
    public class FinancialAPIService {
        private static final String API_URL = "https://api.polygon.io/vX/reference/financials?ticker=AAPL&apiKey=vwp7xrRUR8gCvOCfzsjMK_AFhqgSt_hj"; // Replace with the actual API endpoint

        private final RestTemplate restTemplate;

        @Autowired
        public FinancialAPIService(RestTemplate restTemplate) {
            this.restTemplate = restTemplate;
        }

        public StockFinancials getFinancialData() {
            return restTemplate.getForObject(API_URL, StockFinancials.class);
        }
    }

}
