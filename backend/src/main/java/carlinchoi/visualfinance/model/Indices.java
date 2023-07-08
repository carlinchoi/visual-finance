package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.math.BigDecimal;

public class Indices {
    @JsonProperty("symbol")
    private String[] symbol;
    @JsonProperty("last")
    private BigDecimal[] last;
    @JsonProperty("change")
    private BigDecimal[] change;
    @JsonProperty("changepct")
    private Float[] changePct;

    public String[] getSymbol() {
        return symbol;
    }

    public void setSymbol(String[] symbol) {
        this.symbol = symbol;
    }

    public BigDecimal[] getLast() {
        return last;
    }

    public void setLast(BigDecimal[] last) {
        this.last = last;
    }

    public BigDecimal[] getChange() {
        return change;
    }

    public void setChange(BigDecimal[] change) {
        this.change = change;
    }

    public Float[] getChangePct() {
        return changePct;
    }

    public void setChangePct(Float[] changePct) {
        this.changePct = changePct;
    }

    @Override
    public String toString() {
        return "Indices{" +
                "symbol='" + symbol + '\'' +
                ", last=" + last +
                ", change=" + change +
                ", changePct=" + changePct +
                '}';
    }
}
