package carlinchoi.visualfinance.model;

public class StockFinancials {
    private String tickers;
    private String company_name;
    private long current_liabilities;
    private int diluted_earnings_per_share;
    private long gross_profit;
    private int basic_earnings_per_share;
    private long revenues;
    private long costs_and_expenses;
    private long net_income_loss;
    private long net_cash_flow;

    public String getTickers() {
        return tickers;
    }

    public void setTickers(String tickers) {
        this.tickers = tickers;
    }

    public String getCompany_name() {
        return company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public long getCurrent_liabilities() {
        return current_liabilities;
    }

    public void setCurrent_liabilities(long current_liabilities) {
        this.current_liabilities = current_liabilities;
    }

    public int getDiluted_earnings_per_share() {
        return diluted_earnings_per_share;
    }

    public void setDiluted_earnings_per_share(int diluted_earnings_per_share) {
        this.diluted_earnings_per_share = diluted_earnings_per_share;
    }

    public long getGross_profit() {
        return gross_profit;
    }

    public void setGross_profit(long gross_profit) {
        this.gross_profit = gross_profit;
    }

    public int getBasic_earnings_per_share() {
        return basic_earnings_per_share;
    }

    public void setBasic_earnings_per_share(int basic_earnings_per_share) {
        this.basic_earnings_per_share = basic_earnings_per_share;
    }

    public long getRevenues() {
        return revenues;
    }

    public void setRevenues(long revenues) {
        this.revenues = revenues;
    }

    public long getCosts_and_expenses() {
        return costs_and_expenses;
    }

    public void setCosts_and_expenses(long costs_and_expenses) {
        this.costs_and_expenses = costs_and_expenses;
    }

    public long getNet_income_loss() {
        return net_income_loss;
    }

    public void setNet_income_loss(long net_income_loss) {
        this.net_income_loss = net_income_loss;
    }

    public long getNet_cash_flow() {
        return net_cash_flow;
    }

    public void setNet_cash_flow(long net_cash_flow) {
        this.net_cash_flow = net_cash_flow;
    }
}
