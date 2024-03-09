package com.blissense.evaluationform.service.implementations;

import com.blissense.evaluationform.service.EvaluationForm;

public class PANSS implements EvaluationForm {

    private final String[] questions = {

    };

    private int[] answers = new int[questions.length];
    @Override
    public String[] getQuestions() {
        return new String[0];
    }

    @Override
    public void submitAnswer(int[] answerArray) {
        this.answers = answerArray;
    }

    @Override
    public int[] getAnswers() {
        return this.answers;
    }

    @Override
    public String evaluateAnswers() {
//        this.answers = answersArray;

        int totalScore = 0;
        for (int answer : this.answers) {
            totalScore += answer;
        }

        // Determine the severity level
        String severityLevel;

        // Check the score against different thresholds and assign a corresponding severity level
        if (totalScore >= 30 && totalScore <= 59) {
            severityLevel = "Mild";
        } else if (totalScore >= 60 && totalScore <= 89) {
            severityLevel = "Moderate";
        } else if (totalScore >= 90 && totalScore <= 119) {
            severityLevel = "Severe";
        } else if (totalScore >= 120 && totalScore <= 210) {
            severityLevel = "Extreme";
        } else {
            severityLevel = "Invalid score";
        }

        return severityLevel;
    }
}
