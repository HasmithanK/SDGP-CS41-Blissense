import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService } from '../form.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-prediction-results',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `

    <section>
<!-- isConstructorExecuted -->
      <div id="resultContainer" *ngIf=""> 
        <div id="disorderResultsContainer" *ngFor="let disorder of predictionResults">
          
          <p class="rangeLabel" >{{disorder.name}} : {{disorder.rate}}%</p>

          <div class="disorderRange">
            <div class="rangeBar" style="width: {{disorder.rate}}%; transition: 0.5s;"></div>
          </div>

        </div>
      

        <div id="resultsInfo">
          <div>
            Try out the following forms in the Evaluation form section based on the results order
          </div>
          <div>
            <p>PHQ-9 for Depression</p>
            <p>GAD-7 for Anxiety</p>
            <p>MSI-BPD for BPD</p>
          </div>
        </div>

      </div>
  
    </section>
  `,
  styleUrl: './prediction-results.component.css'
})
export class PredictionResultsComponent {
  router: Router = inject(Router)

  isConstructorExecuted: boolean = false;

  formService: FormService = inject(FormService);

  // Initialize an empty array to hold the formatted scores
  predictionResults: PredictionResult[] = [];
  
  constructor() {
    // Convert the object into an array of key-value pairs
    const entries = Object.entries(this.formService.predictedHealthScores!);
    console.log(this.formService.predictedHealthScores!);

    // Iterate over each key-value pair
    for (let i = 0; i < entries.length; i++) {

        // Get the key and value from the current pair
        const name = entries[i][0].charAt(0).toUpperCase() + entries[i][0].slice(1);
        const rate = entries[i][1];

        // Create a new object with the properties 'name' and 'rate'
        const score = { name, rate };

        // Add the new object to the 'formattedScores' array
        this.predictionResults.push(score);
    }
    
    // Sort the 'formattedScores' array in descending order based on 'rate'
    this.predictionResults.sort((a, b) => b.rate - a.rate);

    this.isConstructorExecuted = true;

    // Now 'formattedScores' is an array of objects in the desired format
    console.log(this.predictionResults);
  }

  @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
      if (!confirm('Are you sure you want to refresh?')) {
        $event.preventDefault();
      } else {
        this.router.navigate(['predictdisorder']);
      }
}

}

interface PredictionResult {
  name: string;
  rate: number;
}

