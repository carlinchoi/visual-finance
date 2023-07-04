package carlinchoi.visualfinance.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.util.Arrays;

public class StockDataPrice {
    private Response[] data;

    public Response[] getData() {
        return data;
    }

    public void setData(Response[] data) {
        this.data = data;
    }

    public static class Response {
        @JsonProperty("ticker")
        private String ticker;
        @JsonProperty("name")
        private String name;
        @JsonProperty("price")
        private BigDecimal  price;
        @JsonProperty("market_cap")
        private long marketCap;
        @JsonProperty("52_week_high")
        private int yearlyHigh;
        @JsonProperty("52_week_low")
        private int yearlyLow;
        @JsonProperty("previous_close_price")
        private BigDecimal previousCloseprice;

        public String getTicker() {
            return ticker;
        }

        public void setTicker(String ticker) {
            this.ticker = ticker;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public BigDecimal  getPrice() {
            return price;
        }

        public void setPrice(BigDecimal  price) {
            this.price = price;
        }

        public long getMarketCap() {
            return marketCap;
        }

        public void setMarketCap(long marketCap) {
            this.marketCap = marketCap;
        }

        public int getYearlyHigh() {
            return yearlyHigh;
        }

        public void setYearlyHigh(int yearlyHigh) {
            this.yearlyHigh = yearlyHigh;
        }

        public int getYearlyLow() {
            return yearlyLow;
        }

        public void setYearlyLow(int yearlyLow) {
            this.yearlyLow = yearlyLow;
        }

        public BigDecimal  getPreviousCloseprice() {
            return previousCloseprice;
        }

        public void setPreviousCloseprice(BigDecimal  previousCloseprice) {
            this.previousCloseprice = previousCloseprice;
        }
        @Override
        public String toString() {
            return "response{" +
                    "ticker='" + ticker + '\'' +
                    ", price=" + price +
                    ", marketCap=" + marketCap +
                    ", yearlyHigh=" + yearlyHigh +
                    ", yearlyLow=" + yearlyLow +
                    ", previousClosePrice=" + previousCloseprice +
                    '}';
        }
    }
    @Override
    public String toString() {
        return "StockDataResponse{" +
                "data=" + Arrays.toString(data) +
                '}';
    }
}
