package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public class CoinGecko {
    private Result[] results;

    public Result[] getResults() {
        return results;
    }

    public void setResults(Result[] results) {
        this.results = results;
    }

    public static class Result {
        @JsonProperty("symbol")
        private String symbol;

        @JsonProperty("name")
        private String name;

        @JsonProperty("current_price")
        private BigDecimal currentPrice;

        @JsonProperty("market_cap")
        private BigDecimal marketCap;

        @JsonProperty("total_volume")
        private BigDecimal totalVolume;

        @JsonProperty("high_24h")
        private BigDecimal high24;

        @JsonProperty("low_24h")
        private BigDecimal low24;

        @JsonProperty("price_change_percentage_24h")
        private double priceChangePct;

        @JsonProperty("circulating_supply")
        private BigDecimal circulatingSupply;

        @JsonProperty("image")
        private String image;

        public String getSymbol() {
            return symbol;
        }

        public void setSymbol(String symbol) {
            this.symbol = symbol;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public BigDecimal getMarketCap() {
            return marketCap;
        }

        public void setMarketCap(BigDecimal marketCap) {
            this.marketCap = marketCap;
        }

        public BigDecimal getTotalVolume() {
            return totalVolume;
        }

        public void setTotalVolume(BigDecimal totalVolume) {
            this.totalVolume = totalVolume;
        }

        public BigDecimal getHigh24() {
            return high24;
        }

        public void setHigh24(BigDecimal high24) {
            this.high24 = high24;
        }

        public BigDecimal getLow24() {
            return low24;
        }

        public void setLow24(BigDecimal low24) {
            this.low24 = low24;
        }

        public double getPriceChangePct() {
            return priceChangePct;
        }

        public void setPriceChangePct(double priceChangePct) {
            this.priceChangePct = priceChangePct;
        }

        public BigDecimal getCirculatingSupply() {
            return circulatingSupply;
        }

        public void setCirculatingSupply(BigDecimal circulatingSupply) {
            this.circulatingSupply = circulatingSupply;
        }

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }

        public BigDecimal getCurrentPrice() {
            return currentPrice;
        }

        public BigDecimal setCurrentPrice(BigDecimal currentPrice) {
            return this.currentPrice = currentPrice;
        }
    }
}
