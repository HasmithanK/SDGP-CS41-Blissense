package com.blissense.evaluationform.service.implementations;

/* The Patient Health Questionnaire-9 (PHQ-9) is a multipurpose instrument for screening, diagnosing,
monitoring, and measuring the severity of depression */

import com.blissense.evaluationform.service.EvaluationForm;
import org.springframework.stereotype.Component;

@Component
public class PHQ_9 implements EvaluationForm {

    private final String[] questions = {
            "1. Little interest or pleasure in doing things",
            "2. Feeling down, depressed, or hopeless",
            "3. Trouble falling or staying asleep, or sleeping too much",
            "4. Feeling tired or having little energy",
            "5. Poor appetite or overeating",
            "6. Feeling bad about yourself or that you are a failure or have let yourself or your family down",
            "7. Trouble concentrating on things, such as reading the newspaper or watching television",
            "8. Moving or speaking so slowly that other people could have noticed. Or the opposite being so" +
                    " fidgety or restless that you have been moving around a lot more than usual",
            "9. Thoughts that you would be better off dead, or of hurting yourself"
    };
    private int[] answers = new int[questions.length];

    @Override
    public String[] getQuestions() {
        return questions;
    }

    @Override
    public int[] getAnswers() {
        return answers;
    }


    @Override
    public void submitAnswer(int[] answerArray) {
        this.answers = answerArray;
    }

    @Override
    public String evaluateAnswers() {
//        this.answers = answersArray;

        // Calculate the total score
        int totalScore = 0;
        for (int answer : this.answers) {
            totalScore += answer;
        }

        // Determine the severity level
        String severityLevel;

        if (totalScore >= 20) {
            severityLevel = "Severe depression";
        } else if (totalScore >= 15) {
            severityLevel = "Moderate depression";
        } else if (totalScore >= 10) {
            severityLevel = "Minor depression or dysthymia (mild depression)";
        } else {
            severityLevel = "Minimal symptoms";
        }

        return severityLevel;
    }
}
