import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formType: number | null = null;
  answerArray: number[] = [];
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  async getQuestions() : Promise<string[]> {
    const data = await fetch(`${this.url}/${'getEvaluationForm'}/${this.formType}`);

    return await data.json() ?? [];
  }

  
  // Transferring answerArray array to backend
  async evaluateAnswer() : Promise<Observable<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.answerArray);

    return this.http.post<any>(`${this.url}/${'getEvaluationForm'}/${this.formType}`, body, { headers });
  }

}
