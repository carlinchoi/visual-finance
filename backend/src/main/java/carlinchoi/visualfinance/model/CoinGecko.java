package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

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

        @JsonProperty("market_cap")
        private long marketCap;

        @JsonProperty("total_volume")
        private long totalVolume;

        @JsonProperty("high_24h")
        private double high24;

        @JsonProperty("low_24h")
        private double low24;

        @JsonProperty("price_change_percentage_24h")
        private double priceChangePct;

        @JsonProperty("circulating_supply")
        private long circulatingSupply;

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

        public long getMarketCap() {
            return marketCap;
        }

        public void setMarketCap(long marketCap) {
            this.marketCap = marketCap;
        }

        public long getTotalVolume() {
            return totalVolume;
        }

        public void setTotalVolume(long totalVolume) {
            this.totalVolume = totalVolume;
        }

        public double getHigh24() {
            return high24;
        }

        public void setHigh24(double high24) {
            this.high24 = high24;
        }

        public double getLow24() {
            return low24;
        }

        public void setLow24(double low24) {
            this.low24 = low24;
        }

        public double getPriceChangePct() {
            return priceChangePct;
        }

        public void setPriceChangePct(double priceChangePct) {
            this.priceChangePct = priceChangePct;
        }

        public long getCirculatingSupply() {
            return circulatingSupply;
        }

        public void setCirculatingSupply(long circulatingSupply) {
            this.circulatingSupply = circulatingSupply;
        }
    }
}
