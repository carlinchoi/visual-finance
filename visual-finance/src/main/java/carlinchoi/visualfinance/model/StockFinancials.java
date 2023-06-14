package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StockFinancials {
    @JsonProperty("tickers")
    private String ticker;
    @JsonProperty("company_name")
    private String companyName;
    @JsonProperty("financials")
    private StockFinancials financialsData;

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public StockFinancials getFinancialsData() {
        return financialsData;
    }

    public void setFinancialsData(StockFinancials financialsData) {
        this.financialsData = financialsData;
    }

    @Override
    public String toString() {
        return "StockFinancials{" +
                "ticker='" + ticker + '\'' +
                ", companyName='" + companyName + '\'' +
                ", financialsData=" + financialsData +
                '}';
    }
}
