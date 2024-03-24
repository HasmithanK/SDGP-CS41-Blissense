package com.Project.ThoughtReocrdBook.DTO;

public class CustomerSaveDTO {
    private String situation;
    private String thoughts;
    private String feelings;
    private String actions;

    public CustomerSaveDTO() {
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
        return "CustomerDTO{" +
                ", situation='" + situation + '\'' +
                ", thoughts='" + thoughts + '\'' +
                ", feelings='" + feelings + '\'' +
                ", actions='" + actions + '\'' +
                '}';
    }
}
