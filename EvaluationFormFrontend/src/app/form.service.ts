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
  finalResult: string = "";
  predictedResults: any;

  urlBackend = 'http://localhost:8080/api/v1/form';
  urlMLModel = 'http://localhost:5000/disorderPrediction'

  constructor(private http: HttpClient) {}


  // Method to get the questions from the backend
  async getQuestions() : Promise<string[]> {
    const data = await fetch(`${this.urlBackend}/${'getEvaluationForm'}/${this.formType}`);
    console.log(this.urlBackend + 'getEvaluationForm' + this.formType);
    return await data.json() ?? [];
  }

  // Method to submit answer to the backend
  async submitAnswer() : Promise<string> {
    try {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = this.answerArray;
      this.finalResult =  String(this.http.post<any>(`${this.urlBackend}/${'submitAnswers'}`, body, { headers }));
      console.log("\nThe program reached to submit blok");

    } catch(error) {
      console.error('Error submitting form:', error);
    }
    return this.finalResult;
  }

  // Method to get back the evaluated results from the backend
  async evaluateAnswer() : Promise<string> {
    const response = await fetch(`${this.urlBackend}/evaluateAnswer`);
    const data = await response.json();

    console.log("\nThis is the data received from the backend: ", data);

    return data;
  }

  // Method to submit the user description into the model
  async sendData(userProvidedText: string) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify({ userProvidedText });
    console.log(userProvidedText);
    
    this.http.post('http://localhost:5000/disorderPrediction', body,{'headers':headers}).subscribe(response => {
      console.log(response);  
      return response;
    }, error => {
      console.error('There was an error during the request', error);
    });
  }
}

interface PredictionResults {
  Anxiety: number;
  BPD: number;
  bipolar: number;
  depression: number;
  mentalIllness: number;
  schizophrenia: number;
}
