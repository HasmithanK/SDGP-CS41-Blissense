import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // Variables to get the right set of questions and to store the answers for the questions
  formType: number | null = null;
  answerArray: number[] = [];
  finalResult : string = "";

  url = 'http://localhost:8080/api/v1/form';

  constructor(private http: HttpClient) {}


  // Method to get the questions from the backend
  async getQuestions() : Promise<string[]> {
    const data = await fetch(`${this.url}/${'getEvaluationForm'}/${this.formType}`);
    console.log(this.url + 'getEvaluationForm' + this.formType);
    return await data.json() ?? [];
  }

  // Method to submit answer to the backend
  async submitAnswer() : Promise<string> {
    try {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = this.answerArray;
      this.finalResult =  String(this.http.post<any>(`${this.url}/${'submitAnswers'}`, body, { headers }));
      console.log("\nThe program reached to submit blok");

    } catch(error) {
      console.error('Error submitting form:', error);
    }
    return this.finalResult;
  }

  // Method to get back the evaluated results from the backend

  /*
  async evaluateAnswer() : Promise<string> {

    const data = await fetch(`${this.url}/${'evaluateAnswer'}`);

    console.log("\nThis is the data received from the backend: " + await data.json() ?? "");
    
    return await data.json() ?? "";
  } */

  async evaluateAnswer() : Promise<string> {
    const response = await fetch(`${this.url}/evaluateAnswer`);
    const data = await response.json();

    console.log("\nThis is the data received from the backend: ", data);

    return data;
}

}
