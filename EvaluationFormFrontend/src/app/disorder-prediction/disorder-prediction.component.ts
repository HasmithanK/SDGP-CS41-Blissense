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
            Discover Blissense, your digital companion for mental health awareness. 
            Our platform is designed to help you gain a deeper understanding of your 
            mental health, empowering you to lead a more enriched life. With the aid of 
            our specialized model, we provide insights within the realm of mental health. 
            <br>
            Please note, Blissense does not draw conclusions, but rather, it illuminates your path to self-understanding.
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
}
