import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // Variables to get the right set of questions and to store the answers for the questions
  formType: number | null = null;
  answerArray: number[] = [];
  evaluationfinalResult: string = "";

  // urlBackend = 'http://localhost:8080/api/v1/form';
  urlBackend = 'https://blissense.onrender.com/api/v1/form';
  
  urlMLModel = 'http://localhost:5000/disorderPrediction';

  predictedHealthScores: MentalHealthScores | undefined = undefined;

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
      this.evaluationfinalResult =  String(this.http.post<any>(`${this.urlBackend}/${'submitAnswers'}`, body, { headers }));
      console.log("\nThe program reached to submit blok" + this.answerArray);

    } catch(error) {
      console.error('Error submitting form:', error);
    }

    return this.evaluationfinalResult;
  }

  // Method to get back the evaluated results from the backend
  async evaluateAnswer() : Promise<string> {
    const response = await fetch(`${this.urlBackend}/evaluateAnswer`);
    const data = await response.json();

    console.log("\nThis is the data received from the backend: ", data);

    return data;
  }


  // Method to submit the user description into the model
  async submitUserText(userProvidedText: string): Promise<MentalHealthScores | undefined> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify({ text: userProvidedText });

    console.log(userProvidedText);
    
    try {
      this.predictedHealthScores = await this.http.post<MentalHealthScores>('https://32b3-2402-4000-124d-79a-6501-410b-811a-5ef6.ngrok-free.app/disorderPrediction', body,{'headers':headers}).toPromise();
      console.log(this.predictedHealthScores);
      return this.predictedHealthScores;
    } catch (error) {
      console.error('There was an error during the request', error);
    }

    return this.predictedHealthScores;
  }
}

export interface MentalHealthScores {
    Anxiety: number;
    BPD: number;
    bipolar: number;
    depression: number;
    mentalillness: number;
    schizophrenia: number;
}
