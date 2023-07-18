package carlinchoi.visualfinance.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class StockDataNews {
    @JsonProperty("data")
    private List<Response> data;

    public List<Response> getData() {
        return data;
    }

    public void setData(List<Response> data) {
        this.data = data;
    }

    public static class Response {
        @JsonProperty("uuid")
        private String uuid;
        @JsonProperty("title")
        private String title;
        @JsonProperty("description")
        private String description;
        @JsonProperty("snippet")
        private String snippet;
        @JsonProperty("url")
        private String url;
        @JsonProperty("image_url")
        private String imageUrl;
        @JsonProperty("published_at")
        private String publishedAt;
        @JsonProperty("source")
        private String source;
        @JsonProperty("relevance_score")
        private Double relevanceScore;
        @JsonProperty("entities")
        private List<Entity> entities;
        @JsonProperty("similar")
        private List<Similar> similar;

        public String getUuid() {
            return uuid;
        }

        public void setUuid(String uuid) {
            this.uuid = uuid;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getSnippet() {
            return snippet;
        }

        public void setSnippet(String snippet) {
            this.snippet = snippet;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getImageUrl() {
            return imageUrl;
        }

        public void setImageUrl(String imageUrl) {
            this.imageUrl = imageUrl;
        }

        public String getPublishedAt() {
            return publishedAt;
        }

        public void setPublishedAt(String publishedAt) {
            this.publishedAt = publishedAt;
        }

        public String getSource() {
            return source;
        }

        public void setSource(String source) {
            this.source = source;
        }

        public Double getRelevanceScore() {
            return relevanceScore;
        }

        public void setRelevanceScore(Double relevanceScore) {
            this.relevanceScore = relevanceScore;
        }

        public List<Entity> getEntities() {
            return entities;
        }

        public void setEntities(List<Entity> entities) {
            this.entities = entities;
        }

        public List<Similar> getSimilar() {
            return similar;
        }

        public void setSimilar(List<Similar> similar) {
            this.similar = similar;
        }
    }

    public static class Entity {
        @JsonProperty("symbol")
        private String symbol;
        @JsonProperty("name")
        private String name;
        @JsonProperty("exchange")
        private String exchange;
        @JsonProperty("exchange_long")
        private String exchangeLong;
        @JsonProperty("country")
        private String country;
        @JsonProperty("type")
        private String type;
        @JsonProperty("industry")
        private String industry;
        @JsonProperty("match_score")
        private Double matchScore;
        @JsonProperty("sentiment_score")
        private Double sentimentScore;
        @JsonProperty("highlights")
        private List<Highlight> highlights;

        public String getSymbol() {
            return symbol;
        }

        public void setSymbol(String symbol) {
            this.symbol = symbol;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getExchange() {
            return exchange;
        }

        public void setExchange(String exchange) {
            this.exchange = exchange;
        }

        public String getExchangeLong() {
            return exchangeLong;
        }

        public void setExchangeLong(String exchangeLong) {
            this.exchangeLong = exchangeLong;
        }

        public String getCountry() {
            return country;
        }

        public void setCountry(String country) {
            this.country = country;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getIndustry() {
            return industry;
        }

        public void setIndustry(String industry) {
            this.industry = industry;
        }

        public Double getMatchScore() {
            return matchScore;
        }

        public void setMatchScore(Double matchScore) {
            this.matchScore = matchScore;
        }

        public Double getSentimentScore() {
            return sentimentScore;
        }

        public void setSentimentScore(Double sentimentScore) {
            this.sentimentScore = sentimentScore;
        }

        public List<Highlight> getHighlights() {
            return highlights;
        }

        public void setHighlights(List<Highlight> highlights) {
            this.highlights = highlights;
        }
    }

    public static class Highlight {
        @JsonProperty("highlight")
        private String highlight;
        @JsonProperty("sentiment")
        private Double sentiment;
        @JsonProperty("highlighted_in")
        private String highlightedIn;

        public String getHighlight() {
            return highlight;
        }

        public void setHighlight(String highlight) {
            this.highlight = highlight;
        }

        public Double getSentiment() {
            return sentiment;
        }

        public void setSentiment(Double sentiment) {
            this.sentiment = sentiment;
        }

        public String getHighlightedIn() {
            return highlightedIn;
        }

        public void setHighlightedIn(String highlightedIn) {
            this.highlightedIn = highlightedIn;
        }
    }

    public static class Similar {
        @JsonProperty("uuid")
        private String uuid;
        @JsonProperty("title")
        private String title;
        @JsonProperty("description")
        private String description;
        @JsonProperty("keywords")
        private String keywords;
        @JsonProperty("snippet")
        private String snippet;
        @JsonProperty("url")
        private String url;
        @JsonProperty("image_url")
        private String imageUrl;
        @JsonProperty("language")
        private String language;
        @JsonProperty("published_at")
        private String publishedAt;
        @JsonProperty("source")
        private String source;
        @JsonProperty("relevance_score")
        private Double relevanceScore;
        @JsonProperty("entities")
        private List<Entity> entities;

        public String getUuid() {
            return uuid;
        }

        public void setUuid(String uuid) {
            this.uuid = uuid;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getKeywords() {
            return keywords;
        }

        public void setKeywords(String keywords) {
            this.keywords = keywords;
        }

        public String getSnippet() {
            return snippet;
        }

        public void setSnippet(String snippet) {
            this.snippet = snippet;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getImageUrl() {
            return imageUrl;
        }

        public void setImageUrl(String imageUrl) {
            this.imageUrl = imageUrl;
        }

        public String getLanguage() {
            return language;
        }

        public void setLanguage(String language) {
            this.language = language;
        }

        public String getPublishedAt() {
            return publishedAt;
        }

        public void setPublishedAt(String publishedAt) {
            this.publishedAt = publishedAt;
        }

        public String getSource() {
            return source;
        }

        public void setSource(String source) {
            this.source = source;
        }

        public Double getRelevanceScore() {
            return relevanceScore;
        }

        public void setRelevanceScore(Double relevanceScore) {
            this.relevanceScore = relevanceScore;
        }

        public List<Entity> getEntities() {
            return entities;
        }

        public void setEntities(List<Entity> entities) {
            this.entities = entities;
        }
    }
}

