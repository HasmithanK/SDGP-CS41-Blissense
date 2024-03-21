import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-disorder-prediction',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

          <button *ngIf="userProvidedText.length > 100"(click)="submit()"> Submit </button>
        </div>
      </div>

      <div>
        
      </div>

      <!-- <div> -->
        <input type="number" [(ngModel)]="value" min="0" max="100">
        <!-- <div class="progress-bar" [style.width.%]="value">
          <div class="loading-animation" *ngIf="loading"></div>
        </div>
      </div> -->

      <div id="disorderResultsContainer" *ngFor = "let disorder of disorderResults">
        <p class="rangeLabel" >{{disorder.name}} : {{disorder.rate}}</p>
        <div class="disorderRange">
          <div class="rangeBar" style="width: {{disorder.rate}}%; transition: 0.5s;"></div>
        </div>
      </div>
      
    </section>
  `,
  styleUrl: './disorder-prediction.component.css'
})
export class DisorderPredictionComponent {
  formService: FormService = inject(FormService);

  userProvidedText: string = "";
  disordervalues: Map<string, number> = new Map();

  disorderResults: PredictionResult[] = [
    {name: 'Depression', rate: 55},
    {name: 'Anxiety', rate: 25},
    {name: 'BPD', rate: 78.25},
    {name: 'Schizophrenia', rate: 96.1},
    {name: 'Bipolar Disorder', rate: 5.12},
    {name: 'Mental Illness', rate: 8.17},
  ]


  predictionResults: any = null;


  constructor() {
  }

  submit(): void {
    this.predictionResults = this.formService.sendData(this.userProvidedText);
  }

  value = 75;
  loading = false;

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}

interface PredictionResult {
  name: string;
  rate: number;
}
