package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class TwelveEarnings {
    private Meta meta;
    private List<Earning> earnings;
    private String status;

    public Meta getMeta() {
        return meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    public List<Earning> getEarnings() {
        return earnings;
    }

    public void setEarnings(List<Earning> earnings) {
        this.earnings = earnings;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public static class Meta {
        @JsonProperty("symbol")
        private String symbol;
        @JsonProperty("name")
        private String name;
        @JsonProperty("currency")
        private String currency;
        @JsonProperty("exchange")
        private String exchange;
        @JsonProperty("mic_code")
        private String micCode;
        @JsonProperty("exchange_timezone")
        private String exchangeTimezone;

        public String getSymbol() {
            return symbol;
        }

        public void setSymbol(String symbol) {
            this.symbol = symbol;
        }

        // Getters and setters for other properties

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getCurrency() {
            return currency;
        }

        public void setCurrency(String currency) {
            this.currency = currency;
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

        public String getExchangeTimezone() {
            return exchangeTimezone;
        }

        public void setExchangeTimezone(String exchangeTimezone) {
            this.exchangeTimezone = exchangeTimezone;
        }
    }

    public static class Earning {
        @JsonProperty("date")
        private String date;
        @JsonProperty("time")
        private String time;
        @JsonProperty("eps_estimate")
        private Double epsEstimate;
        @JsonProperty("eps_actual")
        private Double epsActual;
        @JsonProperty("difference")
        private Double difference;
        @JsonProperty("surprise_prc")
        private Double surprisePercentage;

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        // Getters and setters for other properties

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }

        public Double getEpsEstimate() {
            return epsEstimate;
        }

        public void setEpsEstimate(Double epsEstimate) {
            this.epsEstimate = epsEstimate;
        }

        public Double getEpsActual() {
            return epsActual;
        }

        public void setEpsActual(Double epsActual) {
            this.epsActual = epsActual;
        }

        public Double getDifference() {
            return difference;
        }

        public void setDifference(Double difference) {
            this.difference = difference;
        }

        public Double getSurprisePercentage() {
            return surprisePercentage;
        }

        public void setSurprisePercentage(Double surprisePercentage) {
            this.surprisePercentage = surprisePercentage;
        }
    }
}
