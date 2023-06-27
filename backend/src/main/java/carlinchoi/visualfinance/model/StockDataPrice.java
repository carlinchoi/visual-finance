package carlinchoi.visualfinance.model;


import com.fasterxml.jackson.annotation.JsonProperty;

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
        @JsonProperty("price")
        private int price;
        @JsonProperty("market_cap")
        private int marketCap;
        @JsonProperty("52_week_high")
        private int yearlyHigh;
        @JsonProperty("52_week_low")
        private int yearlyLow;

        public String getTicker() {
            return ticker;
        }

        public void setTicker(String ticker) {
            this.ticker = ticker;
        }

        public int getPrice() {
            return price;
        }

        public void setPrice(int price) {
            this.price = price;
        }

        public int getMarketCap() {
            return marketCap;
        }

        public void setMarketCap(int marketCap) {
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

        @Override
        public String toString() {
            return "response{" +
                    "ticker='" + ticker + '\'' +
                    ", price=" + price +
                    ", marketCap=" + marketCap +
                    ", yearlyHigh=" + yearlyHigh +
                    ", yearlyLow=" + yearlyLow +
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