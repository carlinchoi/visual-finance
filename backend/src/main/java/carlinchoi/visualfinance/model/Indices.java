package carlinchoi.visualfinance.model;

public class Indices {
    private String status;
    private String from;
    private String symbol;
    private double open;
    private double high;
    private double low;
    private double close;
    private double afterHours;
    private double preMarket;

    // Default constructor
    public Indices() {
    }

    // Getters and setters
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
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

    public double getAfterHours() {
        return afterHours;
    }

    public void setAfterHours(double afterHours) {
        this.afterHours = afterHours;
    }

    public double getPreMarket() {
        return preMarket;
    }

    public void setPreMarket(double preMarket) {
        this.preMarket = preMarket;
    }
}
