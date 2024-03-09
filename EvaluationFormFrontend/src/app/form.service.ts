import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formType: number | null = null;
  answerArray: number[] = [];
  finalResult : string = "";
  url = 'http://localhost:8080/api/v1/form';

  constructor(private http: HttpClient) {}

  async getQuestions() : Promise<string[]> {
    const data = await fetch(`${this.url}/${'getEvaluationForm'}/${this.formType}`);
    console.log(this.url + 'getEvaluationForm' + this.formType);
    return await data.json() ?? [];
  }

  async submitAnswer() : Promise<string> {
    try {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = JSON.stringify(this.answerArray);
      console.log(this.url + 'submitAnswer');
      this.finalResult =  String(this.http.post<any>(`${this.url}/${'submitAnswers'}`, body, { headers }));
    } catch(error) {
      console.error('Error submitting form:', error);
    }
    return this.finalResult;
  }

  async evaluateAnswer() : Promise<string> {
    const data = await fetch(`${this.url}/${'evaluateAnswer'}`);
    console.log(this.url + 'evaluateform');
    return await data.json() ?? "";
  }



  // async evaluateAnswers() : Promise<string> {
  //   const data = await fetch(`${this.url}/storeAnswers/${JSON.stringify(this.answerArray)}`);
  //   return await data.json() ?? ""; 
  // }

  // async submitAnswer() : Promise<string> {
  //   try {
  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     const body = JSON.stringify(this.answerArray);
  //     console.log(this.url + 'submitAnswer');
  //     this.finalResult =  String(this.http.post<any>(`${this.url}/${'storeAnswers'}`, body, { headers }));
  //   } catch(error) {
  //     console.error('Error submitting form:', error);
  //   }
  //   return this.finalResult;
  // }

  // async evaluateAnswer() : Promise<string> {
  //   const data = await fetch(`${this.url}/${'evaluateAnswer'}`);
  //   console.log(this.url + 'evaluateAnswer');
  //   return await data.json() ?? "";
  // }

  
  /*
  // Transferring answerArray array to backend
  async evaluateAnswer() : Promise<Observable<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.answerArray);

    return this.http.post<any>(`${this.url}/${'getEvaluationForm'}/${this.formType}`, body, { headers });
  } */

}
