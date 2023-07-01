package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TwelveData {
    private Meta meta;
    private String url;

    public Meta getMeta() {
        return meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    public static class Meta {
        @JsonProperty("symbol")
        private String symbol;
//        @JsonProperty("name")
//        private String name;

        public String getSymbol() {
            return symbol;
        }

        public void setSymbol(String symbol) {
            this.symbol = symbol;
        }

//        public String getName() {
//            return name;
//        }
//
//        public void setName(String name) {
//            this.name = name;
//        }
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "TwelveData{" +
                "meta=" + meta +
                ", url='" + url + '\'' +
                '}';
    }
}
