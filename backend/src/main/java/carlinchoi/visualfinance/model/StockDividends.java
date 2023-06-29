package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StockDividends {
    private Result[] results;

    public Result[] getResults() {
        return results;
    }

    public void setResults(Result[] results) {
        this.results = results;
    }

    public static class Result {
        @JsonProperty("cash_amount")
        private double cashAmount;

        @JsonProperty("currency")
        private String currency;

        @JsonProperty("declaration_date")
        private String declarationDate;

        @JsonProperty("dividend_type")
        private String dividendType;

        @JsonProperty("ex_dividend_date")
        private String exDividendDate;

        @JsonProperty("frequency")
        private int frequency;

        @JsonProperty("pay_date")
        private String payDate;

        @JsonProperty("record_date")
        private String recordDate;

        @JsonProperty("ticker")
        private String ticker;

        public double getCashAmount() {
            return cashAmount;
        }

        public void setCashAmount(double cashAmount) {
            this.cashAmount = cashAmount;
        }

        public String getCurrency() {
            return currency;
        }

        public void setCurrency(String currency) {
            this.currency = currency;
        }

        public String getDeclarationDate() {
            return declarationDate;
        }

        public void setDeclarationDate(String declarationDate) {
            this.declarationDate = declarationDate;
        }

        public String getDividendType() {
            return dividendType;
        }

        public void setDividendType(String dividendType) {
            this.dividendType = dividendType;
        }

        public String getExDividendDate() {
            return exDividendDate;
        }

        public void setExDividendDate(String exDividendDate) {
            this.exDividendDate = exDividendDate;
        }

        public int getFrequency() {
            return frequency;
        }

        public void setFrequency(int frequency) {
            this.frequency = frequency;
        }

        public String getPayDate() {
            return payDate;
        }

        public void setPayDate(String payDate) {
            this.payDate = payDate;
        }

        public String getRecordDate() {
            return recordDate;
        }

        public void setRecordDate(String recordDate) {
            this.recordDate = recordDate;
        }

        public String getTicker() {
            return ticker;
        }

        public void setTicker(String ticker) {
            this.ticker = ticker;
        }

        @Override
        public String toString() {
            return "Result{" +
                    "cashAmount=" + cashAmount +
                    ", currency='" + currency + '\'' +
                    ", declarationDate='" + declarationDate + '\'' +
                    ", dividendType='" + dividendType + '\'' +
                    ", exDividendDate='" + exDividendDate + '\'' +
                    ", frequency=" + frequency +
                    ", payDate='" + payDate + '\'' +
                    ", recordDate='" + recordDate + '\'' +
                    ", ticker='" + ticker + '\'' +
                    '}';
        }
    }
}
