import { Component } from '@angular/core';

@Component({
  selector: 'app-disorder-prediction',
  standalone: true,
  imports: [],
  template:`
    <section>
      <div id="userInputContainer">

        <div id="notice">
          <p>
            this where a description mentioning that this not real
          </p>
        </div>

        <div id="userInput">
          <label for="userText"> Tell us how you feel </label>
          
          <textarea id="userText" cols="50" rows="10"></textarea>

          <button> Submit </button>
        </div>

      </div>
    
    </section>
      

  `,
  styleUrl: './disorder-prediction.component.css'
})
export class DisorderPredictionComponent {
}
