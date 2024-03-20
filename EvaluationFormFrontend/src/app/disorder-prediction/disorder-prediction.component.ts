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
            Blissense is a website developed to help people 
            understand their mental health better to  lead  a 
            better life with the help  of our  model  specified 
            to function in the context of mental health.
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
