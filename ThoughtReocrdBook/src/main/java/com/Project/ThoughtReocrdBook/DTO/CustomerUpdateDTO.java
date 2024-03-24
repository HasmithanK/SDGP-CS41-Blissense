package com.Project.ThoughtReocrdBook.DTO;

public class CustomerUpdateDTO {
    private int customerId;
    private String situation;
    private String thoughts;
    private String feelings;
    private String actions;

    public CustomerUpdateDTO(int customerId, String situation, String thoughts, String feelings, String actions) {
        this.customerId = customerId;
        this.situation = situation;
        this.thoughts = thoughts;
        this.feelings = feelings;
        this.actions = actions;
    }

    public CustomerUpdateDTO() {
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

    public String getThoughts() {
        return thoughts;
    }

    public void setThoughts(String thoughts) {
        this.thoughts = thoughts;
    }

    public String getFeelings() {
        return feelings;
    }

    public void setFeelings(String feelings) {
        this.feelings = feelings;
    }

    public String getActions() {
        return actions;
    }

    public void setActions(String actions) {
        this.actions = actions;
    }

    @Override
    public String toString() {
        return "CustomerUpdateDTO{" +
                "customerId=" + customerId +
                ", situation='" + situation + '\'' +
                ", thoughts='" + thoughts + '\'' +
                ", feelings='" + feelings + '\'' +
                ", actions='" + actions + '\'' +
                '}';
    }
}
