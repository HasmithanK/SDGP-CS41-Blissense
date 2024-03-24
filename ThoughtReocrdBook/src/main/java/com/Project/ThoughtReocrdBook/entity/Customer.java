package com.Project.ThoughtReocrdBook.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customerId;

    @Column(name = "situation", length = 50)
    private String situation;

    @Column(name = "thoughts", length = 50)
    private String thoughts;

    @Column(name = "feelings", length = 50)
    private String feelings;

    @Column(name = "actions", length = 50)
    private String actions;

    public Customer(int customerId, String situation, String thoughts, String feelings, String actions)
    {
        this.customerId = customerId;
        this.situation = situation;
        this.thoughts = thoughts;
        this.feelings = feelings;
        this.actions = actions;
    }

    public Customer() {
    }

    public Customer(String situation, String thoughts, String feelings, String actions) {
        this.situation = situation;
        this.thoughts = thoughts;
        this.feelings = feelings;
        this.actions = actions;
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
        return "Customer{" +
                "customerId=" + customerId +
                ", situation='" + situation + '\'' +
                ", thoughts='" + thoughts + '\'' +
                ", feelings='" + feelings + '\'' +
                ", actions='" + actions + '\'' +
                '}';
    }
}
