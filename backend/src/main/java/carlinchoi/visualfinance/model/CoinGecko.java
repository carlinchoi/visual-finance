package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CoinGecko {
    @JsonProperty("symbol")
    private int symbol;
    @JsonProperty("name")
    private int name;
    @JsonProperty("market_cap")
    private int marketCap;
    @JsonProperty("total_volume")
    private int totalVolume;
    @JsonProperty("high_24h")
    private int high24;
    @JsonProperty("low_24h")
    private int low24;
    @JsonProperty("price_change_percentage_24h")
    private int priceChangePct;
    @JsonProperty("circulating_supply")
    private long circulatingSupply;

    public int getSymbol() {
        return symbol;
    }

    public void setSymbol(int symbol) {
        this.symbol = symbol;
    }

    public int getName() {
        return name;
    }

    public void setName(int name) {
        this.name = name;
    }

    public int getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(int marketCap) {
        this.marketCap = marketCap;
    }

    public int getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(int totalVolume) {
        this.totalVolume = totalVolume;
    }

    public int getHigh24() {
        return high24;
    }

    public void setHigh24(int high24) {
        this.high24 = high24;
    }

    public int getLow24() {
        return low24;
    }

    public void setLow24(int low24) {
        this.low24 = low24;
    }

    public int getPriceChangePct() {
        return priceChangePct;
    }

    public void setPriceChangePct(int priceChangePct) {
        this.priceChangePct = priceChangePct;
    }

    public long getCirculatingSupply() {
        return circulatingSupply;
    }

    public void setCirculatingSupply(long circulatingSupply) {
        this.circulatingSupply = circulatingSupply;
    }

    @Override
    public String toString() {
        return "CoinGecko{" +
                "symbol=" + symbol +
                ", name=" + name +
                ", marketCap=" + marketCap +
                ", totalVolume=" + totalVolume +
                ", high24=" + high24 +
                ", low24=" + low24 +
                ", priceChangePct=" + priceChangePct +
                ", circulatingSupply=" + circulatingSupply +
                '}';
    }
}
