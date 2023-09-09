package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwelveIndices {
    @JsonProperty("symbol")
    private String symbol;
    @JsonProperty("name")
    private String name;
    @JsonProperty("exchange")
    private String exchange;
    @JsonProperty("mic_code")
    private String micCode;
    @JsonProperty("currency")
    private String currency;
    @JsonProperty("datetime")
    private String datetime;
    @JsonProperty("timestamp")
    private long timestamp;
    @JsonProperty("open")
    private double open;
    @JsonProperty("high")
    private double high;
    @JsonProperty("low")
    private double low;
    @JsonProperty("close")
    private double close;
    @JsonProperty("volume")
    private long volume;
    @JsonProperty("previous_close")
    private double previousClose;
    @JsonProperty("change")
    private double change;
    @JsonProperty("percent_change")
    private double percentChange;
    @JsonProperty("average_volume")
    private long averageVolume;
    @JsonProperty("is_market_open")
    private boolean isMarketOpen;
    @JsonProperty("fifty_two_week")
    private FiftyTwoWeek fiftyTwoWeek;

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

    public String getExchange() {
        return exchange;
    }

    public void setExchange(String exchange) {
        this.exchange = exchange;
    }

    public String getMicCode() {
        return micCode;
    }

    public void setMicCode(String micCode) {
        this.micCode = micCode;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public double getOpen() {
        return open;
    }

    public void setOpen(double open) {
        this.open = open;
    }

    public double getHigh() {
        return high;
    }

    public void setHigh(double high) {
        this.high = high;
    }

    public double getLow() {
        return low;
    }

    public void setLow(double low) {
        this.low = low;
    }

    public double getClose() {
        return close;
    }

    public void setClose(double close) {
        this.close = close;
    }

    public long getVolume() {
        return volume;
    }

    public void setVolume(long volume) {
        this.volume = volume;
    }

    public double getPreviousClose() {
        return previousClose;
    }

    public void setPreviousClose(double previousClose) {
        this.previousClose = previousClose;
    }

    public double getChange() {
        return change;
    }

    public void setChange(double change) {
        this.change = change;
    }

    public double getPercentChange() {
        return percentChange;
    }

    public void setPercentChange(double percentChange) {
        this.percentChange = percentChange;
    }

    public long getAverageVolume() {
        return averageVolume;
    }

    public void setAverageVolume(long averageVolume) {
        this.averageVolume = averageVolume;
    }

    public boolean isMarketOpen() {
        return isMarketOpen;
    }

    public void setMarketOpen(boolean marketOpen) {
        isMarketOpen = marketOpen;
    }

    public FiftyTwoWeek getFiftyTwoWeek() {
        return fiftyTwoWeek;
    }

    public void setFiftyTwoWeek(FiftyTwoWeek fiftyTwoWeek) {
        this.fiftyTwoWeek = fiftyTwoWeek;
    }

    public static class FiftyTwoWeek {
        @JsonProperty("low")
        private double low;
        @JsonProperty("high")
        private double high;
        @JsonProperty("low_change")
        private double lowChange;
        @JsonProperty("high_change")
        private double highChange;
        @JsonProperty("low_change_percent")
        private double lowChangePercent;
        @JsonProperty("high_change_percent")
        private double highChangePercent;
        @JsonProperty("range")
        private String range;

        public double getLow() {
            return low;
        }

        public void setLow(double low) {
            this.low = low;
        }

        public double getHigh() {
            return high;
        }

        public void setHigh(double high) {
            this.high = high;
        }

        public double getLowChange() {
            return lowChange;
        }

        public void setLowChange(double lowChange) {
            this.lowChange = lowChange;
        }

        public double getHighChange() {
            return highChange;
        }

        public void setHighChange(double highChange) {
            this.highChange = highChange;
        }

        public double getLowChangePercent() {
            return lowChangePercent;
        }

        public void setLowChangePercent(double lowChangePercent) {
            this.lowChangePercent = lowChangePercent;
        }

        public double getHighChangePercent() {
            return highChangePercent;
        }

        public void setHighChangePercent(double highChangePercent) {
            this.highChangePercent = highChangePercent;
        }

        public String getRange() {
            return range;
        }

        public void setRange(String range) {
            this.range = range;
        }
    }
}
