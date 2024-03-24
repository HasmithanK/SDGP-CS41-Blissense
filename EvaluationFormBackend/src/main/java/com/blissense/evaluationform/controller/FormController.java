package com.blissense.evaluationform.controller;

import com.blissense.evaluationform.service.EvaluationForm;
import com.blissense.evaluationform.service.implementations.GAD_7;
import com.blissense.evaluationform.service.implementations.MSI_BPD;
import com.blissense.evaluationform.service.implementations.PANSS;
import com.blissense.evaluationform.service.implementations.PHQ_9;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping(value = "api/v1/form")
public class FormController {

    private EvaluationForm evaluationForm;

    @GetMapping(value="/getEvaluationForm/{formType}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String[] getQuestions(@PathVariable int formType) {
        if (formType == 1) {
            evaluationForm = new PHQ_9();
            System.out.println("New PHQ9 created");
        } else if (formType == 2) {
            evaluationForm = new GAD_7();
            System.out.println("New GAD7 created");
        } else if (formType == 3) {
            evaluationForm = new MSI_BPD();
            System.out.println("New MSI_BPD created");
        } else if (formType == 4) {
            evaluationForm = new PANSS();
            System.out.println("New PANSS created");
        } else {
            return null;
        }

        return evaluationForm.getQuestions();
    }

    @PostMapping(value="/submitAnswers", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String submitAnswer(@RequestBody int[] answerArray){
        System.out.println("This is the answer array from the frontend " + Arrays.toString(answerArray));
        this.evaluationForm.submitAnswer(answerArray);
        return "Success fully submitted";
    }

    @GetMapping(value="/evaluateAnswer")
    public String evaluateAnswer() {
        String finalResults;

        System.out.println("This method to evaluate has opened");

        finalResults = this.evaluationForm.evaluateAnswers();

        System.out.println("This is the result: " + finalResults);

        return "\"" + finalResults + "\"";
    }

    @GetMapping(value="/hello")
    public String hello() {
        return "Hello World";
    }
}
