import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-selected-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section>
      <form>
        <div id="questionBoxDiv">                

            <div id="startButtonDiv">
                <button type="button" id="startButton" *ngIf="startQue" (click)="start()">Start</button>
            </div>

            <div id="questionsDivContent" *ngIf="displayQue">
                
                <!-- <div id="questionLabelDiv"> -->
                    <label id="question"><b>{{question}}</b></label><br> 
                <!-- </div> -->

                <div id="answer">
                  <input type="radio" id="zero" name="questions" value="0" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonZero">
                  <label for="zero">0</label>

                  <input type="radio" id="one" name="questions" value="1" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonOne">
                  <label for="one">1</label>

                  <input type="radio" id="two" name="questions" value="2" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonTwo">
                  <label for="two">2</label>

                  <input type="radio" id="three" name="questions" value="3" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonThree">
                  <label for="three">3</label>

                  <input type="radio" id="four" name="questions" value="4" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonFour">
                  <label for="four">4</label>

                  <input type="radio" id="five" name="questions" value="5" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonFive">
                  <label for="five">5</label>

                  <input type="radio" id="six" name="questions" value="6" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" [disabled]="buttonSix">
                  <label for="six">6</label><br>
                </div>

                <div id="questionNavButtonDiv">
                    <button type="button" id="backButton" *ngIf="backQue" (click)="back()">Back</button>

                    <button type="button" id="nextButton" *ngIf="nextQue" (click)="next()">Next</button>

                    <button type="button" id="submitButton" *ngIf="submitAnswer" (click)="submit()">Submit</button>
                </div>
            </div>

            <div id="answerBox" *ngIf="displayAnswer">
                  This is an answer slot {{finalAnswer}}
            </div>
        </div>      

      </form>
    </section>
  `,
  styleUrl: './selected-form.component.css'
})
export class SelectedFormComponent {
  formService: FormService = inject(FormService);
  
  buttonZero: boolean = false; buttonOne: boolean = false; buttonTwo: boolean = false; 
  buttonThree: boolean = false; buttonFour: boolean = false; buttonFive: boolean = false; 
  buttonSix: boolean = false; 

  question: string = "Questions must appear here";

  // Defining the visibility of the buttons in form
  startQue = true;

  displayQue: boolean = false;
  displayAnswer: boolean = false;

  backQue: boolean = false;
  nextQue: boolean = false;
  submitAnswer: boolean = false;

  // Setting the default value of the radio buttons
  radioAnswer: string = "";

  questionArray: string[] = ["1. This"]//, "2. is", "3. just", "4. an", "5. array."];

  // To count the questions number with index
  currentQuestion = 0;

  selectedValue: number | undefined;

  finalAnswer: String = "";

  constructor () {
    console.log("Entered constructor");

    if (this.formService.formType == 1) {
      this.buttonZero = true; this.buttonOne = true; this.buttonTwo = true; 
      this.buttonThree = true; this.buttonFour = true; this.buttonFive = false; 
      this.buttonSix = false;

    } else if (this.formService.formType == 2) {
      this.buttonZero = false; this.buttonOne = true; this.buttonTwo = true; 
      this.buttonThree = true; this.buttonFour = true; this.buttonFive = false; 
      this.buttonSix = false;

    } else if (this.formService.formType == 3) {
      this.buttonZero = true; this.buttonOne = true; this.buttonTwo = false; 
      this.buttonThree = false; this.buttonFour = false; this.buttonFive = false; 
      this.buttonSix = false;

    } else if (this.formService.formType == 4) {
      this.buttonZero = true; this.buttonOne = true; this.buttonTwo = true; 
      this.buttonThree = true; this.buttonFour = true; this.buttonFive = false; 
      this.buttonSix = false;

    } else if (this.formService.formType == 5) {
      this.buttonZero = true; this.buttonOne = true; this.buttonTwo = true; 
      this.buttonThree = true; this.buttonFour = true; this.buttonFive = false; 
      this.buttonSix = false;
    }

    // Fetching the questions from the server
    this.formService.getQuestions().then((questionArray: string[]) => {
    this.questionArray = questionArray}
    )
  }

  start(): void {
    this.startQue = false;
    this.displayQue = true;

    console.log(this.formService.formType);

    //Displaying the first question
    this.question = this.questionArray![this.currentQuestion];
  }

  onSelection(event: any): void {
	  this.radioAnswer = event.target.value;
    if (this.radioAnswer !== "") {
      console.log(this.radioAnswer);
      
      if (this.currentQuestion < this.questionArray.length - 1) {
          this.nextQue = true;
          this.submitAnswer = false;   
      }
      else if (this.currentQuestion === this.questionArray.length - 1) {
          this.nextQue = false;
          this.submitAnswer = true;
          // Adding the last selected value and reseting radion button selection
          this.formService.answerArray[this.currentQuestion] = Number(this.radioAnswer);
      }
    } else {
      // If no radio button is selected, do not display "Next" or "Submit" button
      this.nextQue = false;
      this.submitAnswer = false;   
    }
    console.log("This block is reached");
  }

  next(): void {
    // Store the current selection in answerArray
    this.formService.answerArray[this.currentQuestion] = Number(this.radioAnswer);

    // Increment currentQuestion and update the question
    this.currentQuestion++;
    this.question = this.questionArray[this.currentQuestion];

    // Update the radio buttons with the answer for the new question
    this.radioAnswer = String(this.formService.answerArray![this.currentQuestion]);

    if (this.formService.answerArray[this.currentQuestion] == null) {
      //Resetting radio buttons
      this.radioAnswer = "";
    };

    // Update navigation buttons
    this.backQue = true;

    if (this.radioAnswer !== undefined) {
      this.nextQue = this.radioAnswer !== "" && this.currentQuestion < this.questionArray.length - 1;
      this.submitAnswer = this.radioAnswer !== "" && this.currentQuestion == this.questionArray.length - 1;
    }

    console.log(this.formService.answerArray);
  }

  back(): void {
    // Store the current selection in answerArray
    this.formService.answerArray[this.currentQuestion] = Number(this.radioAnswer);

    // Decrement currentQuestion and update the question
    this.currentQuestion--;
    this.question = this.questionArray[this.currentQuestion];

    // Update the radio buttons with the answer for the new question
    this.radioAnswer = String(this.formService.answerArray[this.currentQuestion]);

    // Update navigation buttons
    this.backQue = this.currentQuestion > 0;
    this.nextQue = this.radioAnswer !== "" && this.currentQuestion < this.questionArray.length - 1;
    this.submitAnswer = this.radioAnswer !== "" && this.currentQuestion == this.questionArray.length - 1;

    console.log(this.formService.answerArray);
  }

  submit(): void {
    // Adding the last selected value and reseting radion button selection
    this.formService.answerArray[this.currentQuestion] = Number(this.radioAnswer);
    console.log(this.formService.answerArray);

    this.displayQue = false;

    this.finalAnswer = String(this.formService.evaluateAnswers());

    this.displayAnswer = true;
    
    console.log("This is the submit block " + this.displayAnswer);   
  }
}