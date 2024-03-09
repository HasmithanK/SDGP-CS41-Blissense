package com.blissense.evaluationform.service;

public interface EvaluationForm {

    //Creating method to start the program
    String[] getQuestions();
    //Creating method to display the question
//    void submitAnswers(int[] answerArray);

    //Creating method to evaluate the answers
//    String evaluateAnswers(int[] answerArray);

    String evaluateAnswers();

    int[] getAnswers();

    void submitAnswer(int[] answerArray);
}
