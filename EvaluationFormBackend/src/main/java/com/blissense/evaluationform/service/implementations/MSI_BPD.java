package com.blissense.evaluationform.service.implementations;

import com.blissense.evaluationform.service.EvaluationForm;

public class MSI_BPD implements EvaluationForm {

    private final String[] questions = {
            "1. Have any of your closest relationships been trouble by a lot of arguments or repeated breakups?",
            "2. Have you deliberately hurt yourself physically (e.g. punched yourself," +
                    " cut yourself, burned yourself)? How about made a suicide attempt?",
            "3. Have you had at least two other problems with impulsivity (e.g. eating binges and spending sprees," +
                    " drinking too much and verbal outbursts)?",
            "4. Have you been extremely moody?",
            "5. Have you felt very angry a lot of the time? How about often acted in an angry or sarcastic manner?",
            "6. Have you often been distrustful of other people?",
            "7. Have you frequently felt unreal or as if things around you were unreal?",
            "8. Have you chronically felt empty?",
            "9. Have you often felt that you had no idea of who you are or that you have no identity?",
            "10. Have you made desperate efforts to avoid feeling abandoned or being abandoned" +
                    " (e.g., repeatedly  called someone to reassure yourself that he or she still cared," +
                    " begged them not to leave you,  clung to them physically)"
    };

    private int[] answers = new int[questions.length];

    @Override
    public String[] getQuestions() {
        return questions;
    }

    @Override
    public int[] getAnswers() {
        return this.answers;
    }

    @Override
    public void submitAnswer(int[] answerArray) {
        this.answers = answerArray;
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
        if (totalScore >= 0 && totalScore <= 4) {
            severityLevel = "No BPD";
        } else if (totalScore >= 5 && totalScore <= 6) {
            severityLevel = "Possible BPD";
        } else if (totalScore >= 7 && totalScore <= 10) {
            severityLevel = "Likely BPD";
        } else {
            severityLevel = "Invalid score";
        }
        return severityLevel;
    }
}
