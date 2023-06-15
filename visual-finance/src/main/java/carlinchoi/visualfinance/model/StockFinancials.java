package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;

public class StockFinancials {
    private Result[] results;

    public Result[] getResults() {
        return results;
    }

    public void setResults(Result[] results) {
        this.results = results;
    }

    public static class Result {
        @JsonProperty("tickers")
        private String[] tickers;
        @JsonProperty("company_name")
        private String companyName;
        @JsonProperty("financials")
        private Financials financials;

        public String[] getTickers() {
            return tickers;
        }

        public void setTickers(String[] tickers) {
            this.tickers = tickers;
        }

        public String getCompanyName() {
            return companyName;
        }

        public void setCompanyName(String companyName) {
            this.companyName = companyName;
        }

        public Financials getFinancials() {
            return financials;
        }

        public void setFinancials(Financials financials) {
            this.financials = financials;
        }

        @Override
        public String toString() {
            return "Result{" +
                    "tickers=" + Arrays.toString(tickers) +
                    ", companyName='" + companyName + '\'' +
                    ", financials=" + financials +
                    '}';
        }
    }

    public static class Financials {
        @JsonProperty("balance_sheet")
        private BalanceSheet balanceSheet;

        public BalanceSheet getBalanceSheet() {
            return balanceSheet;
        }

        public void setBalanceSheet(BalanceSheet balanceSheet) {
            this.balanceSheet = balanceSheet;
        }

        @Override
        public String toString() {
            return "Financials{" +
                    "balanceSheet=" + balanceSheet +
                    '}';
        }
    }

    public static class BalanceSheet {
        @JsonProperty("current_liabilities")
        private BalanceSheetItem currentLiabilities;

        public BalanceSheetItem getCurrentLiabilities() {
            return currentLiabilities;
        }

        public void setCurrentLiabilities(BalanceSheetItem currentLiabilities) {
            this.currentLiabilities = currentLiabilities;
        }

        @Override
        public String toString() {
            return "BalanceSheet{" +
                    "currentLiabilities=" + currentLiabilities +
                    '}';
        }
    }

    public static class BalanceSheetItem {
        private long value;
        private String unit;
        private String label;
        private int order;

        public long getValue() {
            return value;
        }

        public void setValue(long value) {
            this.value = value;
        }

        public String getUnit() {
            return unit;
        }

        public void setUnit(String unit) {
            this.unit = unit;
        }

        public String getLabel() {
            return label;
        }

        public void setLabel(String label) {
            this.label = label;
        }

        public int getOrder() {
            return order;
        }

        public void setOrder(int order) {
            this.order = order;
        }

        @Override
        public String toString() {
            return "BalanceSheetItem{" +
                    "value=" + value +
                    ", unit='" + unit + '\'' +
                    ", label='" + label + '\'' +
                    ", order=" + order +
                    '}';
        }
    }

    @Override
    public String toString() {
        return "StockFinancials{" +
                "results=" + Arrays.toString(results) +
                '}';
    }
}
