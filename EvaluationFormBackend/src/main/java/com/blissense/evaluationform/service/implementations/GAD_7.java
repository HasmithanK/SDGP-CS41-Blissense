package com.blissense.evaluationform.service.implementations;

/* A screening tool and severity measure for generalized anxiety disorder (GAD) */

import com.blissense.evaluationform.service.EvaluationForm;

public class GAD_7 implements EvaluationForm {
    private final String[] questions= {
            "1. Feeling nervous, anxious or on edge",
            "2. Not being able to stop or control worrying",
            "3. Worrying too much about different things",
            "4. Trouble relaxing",
            "5. Being so restless that it is hard to sit still",
            "6. Becoming easily annoyed or irritable",
            "7. Feeling afraid as if something awful might happen"
    };

    private int[] answers = new int[questions.length];

    @Override
    public String[] getQuestions() {
        return questions;
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
        if (totalScore < 5) {
            severityLevel = "Your anxiety level is minimal.";
        } else if (totalScore < 10) {
            severityLevel = "Your anxiety level is mild.";
        } else if (totalScore < 15) {
            severityLevel = "Your anxiety level is moderate.";
        } else {
            severityLevel = "Your anxiety level is severe.";
        }
        return severityLevel;
    }
}