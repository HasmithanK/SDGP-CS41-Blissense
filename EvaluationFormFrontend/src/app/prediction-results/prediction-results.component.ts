import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService, MentalHealthScores } from '../form.service';

@Component({
  selector: 'app-prediction-results',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <section>
      <div id="disorderResultsContainer" *ngFor="let disorder of disorderResults">
        <p class="rangeLabel" >{{disorder.name}} : {{disorder.rate}}</p>

        <div class="disorderRange">
          <div class="rangeBar" style="width: {{disorder.rate}}%; transition: 0.5s;"></div>
        </div>
      </div>

      <!-- <div id="disorderResultsContainer" *ngFor="let disorder of predictedResults">
        <p class="rangeLabel" >{{disorder}}</p>

        <div class="disorderRange">
          <div class="rangeBar" style="width: {{25}}%; transition: 0.5s;"></div>
        </div>
      </div> -->

    </section>
  `,
  styleUrl: './prediction-results.component.css'
})
export class PredictionResultsComponent {

  formService: FormService = inject(FormService);
  
  disorderResults: PredictionResult[] = [
    {name: 'Depression', rate: 55},
    {name: 'Anxiety', rate: 25},
    {name: 'BPD', rate: 78.25},
    {name: 'Schizophrenia', rate: 96.1},
    {name: 'Bipolar Disorder', rate: 5.12},
    {name: 'Mental Illness', rate: 8.17},
  ]


  
  constructor() {
    // Convert the object into an array of key-value pairs
    const entries = Object.entries(this.formService.predictedHealthScores!);
    console.log(this.formService.predictedHealthScores!);
    

    // Initialize an empty array to hold the formatted scores
    const formattedScores = [];

    // Iterate over each key-value pair
    for (let i = 0; i < entries.length; i++) {
        // Get the key and value from the current pair
        const name = entries[i][0];
        const rate = entries[i][1];

        // Create a new object with the properties 'name' and 'rate'
        const score = { name, rate };

        // Add the new object to the 'formattedScores' array
        formattedScores.push(score);
    }

    // Now 'formattedScores' is an array of objects in the desired format
    console.log(formattedScores);
  }

}

interface PredictionResult {
  name: string;
  rate: number;
}
