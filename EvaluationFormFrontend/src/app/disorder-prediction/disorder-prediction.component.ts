import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disorder-prediction',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  template:`
    <section>
      <div id="userInputContainer">

        <div id="notice">
          <p>
            Blissense is a website developed to help people 
            understand their mental health better to  lead  a 
            better life with the help  of our  model  specified 
            to function in the context of mental health.
          </p>
        </div>

        <div id="userInput">
          <label for="userText"> Tell us how you feel </label>
          
          <textarea [(ngModel)]="userProvidedText" id="userText" cols="50" rows="10"></textarea>

          <button *ngIf="userProvidedText.length > 100" (click)="submit()">Submit</button>
        
        </div>

      </div>
    </section>
  `,
  styleUrl: './disorder-prediction.component.css'
})
export class DisorderPredictionComponent {
  formService: FormService = inject(FormService);
  router: Router = inject(Router)

  userProvidedText: string = "";
  disordervalues: Map<string, number> = new Map();

  predictionResults: any = null;

  constructor() {
  }

  async submit() {
    await this.formService.submitUserText(this.userProvidedText);
    this.userProvidedText= "";
    this.router.navigate(['predictedresults']);
  }

  loading = false;

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
