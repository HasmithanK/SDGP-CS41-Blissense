package com.blissense.evaluationform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class EvaluationFormApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvaluationFormApplication.class, args);

		System.out.println("Server started");
	}
}
