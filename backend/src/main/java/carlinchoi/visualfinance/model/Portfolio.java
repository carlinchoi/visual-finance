package carlinchoi.visualfinance.model;

import java.math.BigDecimal;
public class StockPortfolio {
    private int portfolioId;
    private int userId; // References the user who owns the portfolio
    private String stockName;
    private BigDecimal dollarsInvested;
    private int numberOfShares;
    private BigDecimal stockPrice;


    public StockPortfolio() {
        // Default constructor
    }

    public StockPortfolio(int portfolioId, int userId, String stockName, BigDecimal dollarsInvested, int numberOfShares, BigDecimal stockPrice) {
        this.portfolioId = portfolioId;
        this.userId = userId;
        this.stockName = stockName;
        this.dollarsInvested = dollarsInvested;
        this.numberOfShares = numberOfShares;
        this.stockPrice = stockPrice;
    }

    // Getters and setters for all fields

    public int getPortfolioId() {
        return portfolioId;
    }

    public void setPortfolioId(int portfolioId) {
        this.portfolioId = portfolioId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public BigDecimal getDollarsInvested() {
        return dollarsInvested;
    }

    public void setDollarsInvested(BigDecimal dollarsInvested) {
        this.dollarsInvested = dollarsInvested;
    }

    public int getNumberOfShares() {
        return numberOfShares;
    }

    public void setNumberOfShares(int numberOfShares) {
        this.numberOfShares = numberOfShares;
    }

    public BigDecimal getStockPrice() {
        return stockPrice;
    }

    public void setStockPrice(BigDecimal stockPrice) {
        this.stockPrice = stockPrice;
    }
}


