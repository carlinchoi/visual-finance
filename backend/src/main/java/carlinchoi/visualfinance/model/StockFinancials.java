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
        @JsonProperty("fiscal_period")
        private String fiscalPeriod;
        @JsonProperty("fiscal_year")
        private String fiscalYear;
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

        public String getFiscalPeriod() {
            return fiscalPeriod;
        }

        public void setFiscalPeriod(String fiscalPeriod) {
            this.fiscalPeriod = fiscalPeriod;
        }

        public String getFiscalYear() {
            return fiscalYear;
        }

        public void setFiscalYear(String fiscalYear) {
            this.fiscalYear = fiscalYear;
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
                    ", fiscalPeriod='" + fiscalPeriod + '\'' +
                    ", fiscalYear='" + fiscalYear + '\'' +
                    ", financials=" + financials +
                    '}';
        }
    }

    public static class Financials {
        @JsonProperty("balance_sheet")
        private BalanceSheet balanceSheet;
        @JsonProperty("income_statement")
        private IncomeStatement incomeStatement;
        @JsonProperty("cash_flow_statement")
        private CashFlowStatement cashFlowStatement;

        public BalanceSheet getBalanceSheet() {
            return balanceSheet;
        }

        public void setBalanceSheet(BalanceSheet balanceSheet) {
            this.balanceSheet = balanceSheet;
        }

        public IncomeStatement getIncomeStatement() {
            return incomeStatement;
        }

        public void setIncomeStatement(IncomeStatement incomeStatement) {
            this.incomeStatement = incomeStatement;
        }

        public CashFlowStatement getCashFlowStatement() {
            return cashFlowStatement;
        }

        public void setCashFlowStatement(CashFlowStatement cashFlowStatement) {
            this.cashFlowStatement = cashFlowStatement;
        }

        @Override
        public String toString() {
            return "Financials{" +
                    "balanceSheet=" + balanceSheet +
                    ", incomeStatement=" + incomeStatement +
                    ", cashFlowStatement=" + cashFlowStatement +
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

    public static class IncomeStatement {
        @JsonProperty("gross_profit")
        private IncomeStatementItem grossProfit;
        @JsonProperty("operating_expenses")
        private IncomeStatementItem operatingExpenses;
        @JsonProperty("revenues")
        private IncomeStatementItem revenues;
        @JsonProperty("basic_earnings_per_share")
        private IncomeStatementItem basicEarningsPerShare;

        public IncomeStatementItem getGrossProfit() {
            return grossProfit;
        }

        public void setGrossProfit(IncomeStatementItem grossProfit) {
            this.grossProfit = grossProfit;
        }

        public IncomeStatementItem getOperatingExpenses() {
            return operatingExpenses;
        }

        public void setOperatingExpenses(IncomeStatementItem operatingExpenses) {
            this.operatingExpenses = operatingExpenses;
        }

        public IncomeStatementItem getRevenues() {
            return revenues;
        }

        public void setRevenues(IncomeStatementItem revenues) {
            this.revenues = revenues;
        }

        public IncomeStatementItem getBasicEarningsPerShare() {
            return basicEarningsPerShare;
        }

        public void setBasicEarningsPerShare(IncomeStatementItem basicEarningsPerShare) {
            this.basicEarningsPerShare = basicEarningsPerShare;
        }

        @Override
        public String toString() {
            return "IncomeStatement{" +
                    "grossProfit=" + grossProfit +
                    ", operatingExpenses=" + operatingExpenses +
                    ", revenues=" + revenues +
                    ", basicEarningsPerShare=" + basicEarningsPerShare +
                    '}';
        }
    }

    public static class CashFlowStatement {
        @JsonProperty("net_cash_flow")
        private CashFlowStatementItem netCashFlow;

        public CashFlowStatementItem getNetCashFlow() {
            return netCashFlow;
        }

        public void setNetCashFlow(CashFlowStatementItem netCashFlow) {
            this.netCashFlow = netCashFlow;
        }

        @Override
        public String toString() {
            return "CashFlowStatement{" +
                    "netCashFlow=" + netCashFlow +
                    '}';
        }
    }

    public static class IncomeStatementItem {
        private double value;
        private String unit;
        private String label;
        private int order;

        public double getValue() {
            return value;
        }

        public void setValue(double value) {
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
            return "IncomeStatementItem{" +
                    "value=" + value +
                    ", unit='" + unit + '\'' +
                    ", label='" + label + '\'' +
                    ", order=" + order +
                    '}';
        }
    }

    public static class CashFlowStatementItem {
        private double value;
        private String unit;
        private String label;
        private int order;

        public double getValue() {
            return value;
        }

        public void setValue(double value) {
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
            return "CashFlowStatementItem{" +
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
