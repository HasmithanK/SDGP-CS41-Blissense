import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormService } from '../form.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

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

                <!-- <div id="answer" *ngIf="dataLoaded">
                  <input type="radio" id="zero" name="ze" value="0" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" *ngIf="buttonZero">
                  <label for="zero">0</label>

                  <input type="radio" id="one" name="one" value="1" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" *ngIf="buttonOne">
                  <label for="one">1</label>

                  <input type="radio" id="two" name="two" value="2" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" *ngIf="buttonTwo">
                  <label for="two">2</label>

                  <input type="radio" id="three" name="three" value="3" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" *ngIf="buttonThree">
                  <label for="three">3</label>

                  <input type="radio" id="four" name="four" value="4" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" *ngIf="buttonFour">
                  <label for="four">4</label>

                  <input type="radio" id="five" name="five" value="5" [(ngModel)]="radioAnswer" 
                  (change)="onSelection($event)" *ngIf="buttonFive">
                  <label for="five">5</label>

                  <input type="radio" id="six" name="six" value="6" [(ngModel)]="radioAnswer" (change)="onSelection($event)" *ngIf="buttonSix">
                  <label for="six">6</label><br>
                </div> -->
                
                <!-- <div id="answer">
                  <div *ngFor="let option of options">
                    <input type="radio" [id]="option.name" name="radioAnswers" [value]="option.value" [(ngModel)]="radioAnswer" (change)="onSelection($event)">
                    <label [for]="option.name">{{option.label}}</label>
                  </div>
                </div> -->

                <!-- <div id="answer">
                  <div *ngFor="let option of options; let i = index">
                    <input type="radio" [id]="i" name="radioAnswers" [value]="option.value" [(ngModel)]="radioAnswer" (click)="onSelection($event)">
                    <label [for]="i">{{option.label}}</label>
                  </div>
                </div>  -->

                <div id="answer">
                  <div *ngFor="let option of options; let i = index">
                    <input type="radio" [id]="i" name="radioAnswers" [value]="option.value" (change)="onSelection($event)">
                    <label [for]="i">{{option.label}}</label>
                  </div>
                </div>


                

              <div id="questionNavButtonDiv">
                  <button type="button" id="backButton" *ngIf="backQue" (click)="back()">Back</button>

                  <button type="button" id="nextButton" *ngIf="nextQue" (click)="next()">Next</button>

                  <button type="button" id="submitButton" *ngIf="submitAnswer" (click)="submit()">Submit</button>
              </div>
            </div>

            <div id="answerBox" *ngIf="displayAnswer">
                  {{finalAnswer}}
            </div>
        </div>      

      </form>
    </section>
  `,
  styleUrl: './selected-form.component.css'
})
export class SelectedFormComponent implements OnInit {
  formService: FormService = inject(FormService);
  
  // Setting the default value of the radio buttons
  radioAnswer: string = "";
  options: Option[] = [];

  // buttonZero: boolean = false; buttonOne: boolean = false; buttonTwo: boolean = false; 
  // buttonThree: boolean = false; buttonFour: boolean = false; buttonFive: boolean = false; 
  // buttonSix: boolean = false; 

  question: string = "Questions must appear here";

  // Defining the visibility of the buttons in form
  startQue = true;

  displayQue: boolean = false;
  displayAnswer: boolean = false;

  backQue: boolean = false;
  nextQue: boolean = false;
  submitAnswer: boolean = false;

  questionArray: string[] = ["1. This"]//, "2. is", "3. just", "4. an", "5. array."];

  // To count the questions number with index
  currentQuestion = 0;

  selectedValue: number | undefined;

  finalAnswer: String = "";

  constructor () {
  }

  ngOnInit() {
    console.log("\nThis is the form number inside the constructor" + this.formService.formType);
    // Emptying the error each time a new form is selected
    this.formService.answerArray = [];

    // Fetching the questions from the server
    this.formService.getQuestions().then((questionArray: string[]) => {
      this.questionArray = questionArray}
    );

    // Displaying the radio buttons depending on the form selected
    if (this.formService.formType === 1) {
      this. options = [
        { name: 'zero', label: '0', value: '0'},
        { name: 'one', label: '1', value: '1'},
        { name: 'two', label: '2', value: '2'},
        { name: 'three', label: '3', value: '3'},
        { name: 'four', label: '4', value: '4'}
      ];

    } else if (this.formService.formType === 2) {
      this. options = [
        { name: 'zero', label: '0', value: '0'},
        { name: 'one', label: '1', value: '1'},
        { name: 'two', label: '2', value: '2'},
        { name: 'three', label: '3', value: '3'},
        { name: 'four', label: '4', value: '4'}
      ];
      console.log("Condition 2");

    } else if (this.formService.formType === 3) {
      this. options = [
        { name: 'zero', label: '0', value: '0'},
        { name: 'one', label: '1', value: '1'},
      ];

    } else if (this.formService.formType === 4) {
      this. options = [
        { name: 'zero', label: '0', value: '0'},
        { name: 'one', label: '1', value: '1'},
        { name: 'two', label: '2', value: '2'},
        { name: 'three', label: '3', value: '3'},
        { name: 'four', label: '4', value: '4'},
        { name: 'five', label: '5', value: '5'},
        { name: 'six', label: '6', value: '6'},
        { name: 'seven', label: '7', value: '7'}
      ];

    } else if (this.formService.formType === 5) {
      this. options = [
        { name: 'zero', label: '0', value: '0'},
        { name: 'one', label: '1', value: '1'},
        { name: 'two', label: '2', value: '2'},
        { name: 'three', label: '3', value: '3'},
        { name: 'four', label: '4', value: '4'}
      ];
    } else {
      console.log("There is an error");
    }
  }

  start(): void {
    this.startQue = false;
    this.displayQue = true;

    console.log("\nThis is the selected form number: " + this.formService.formType);

    //Displaying the first question
    this.question = this.questionArray![this.currentQuestion];
  }

  // Listening to the selection of the radio buttons to display the next and back button correctly
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
  }

  // Function to display next question and store the currently selected radio value
  next(): void {
    // Store the current selection in answerArray
    this.formService.answerArray[this.currentQuestion] = Number(this.radioAnswer);

    // Increment currentQuestion and update the question
    this.currentQuestion++;
    this.question = this.questionArray[this.currentQuestion];

    // Update the radio buttons with the answer for the new question
    this.radioAnswer = String(this.formService.answerArray![this.currentQuestion]);

    // if (this.formService.answerArray[this.currentQuestion] == null) {
      //Resetting radio buttons
      this.radioAnswer = "";
    // };

    // Update navigation buttons
    this.backQue = true;

    // To display the next-button or submit-button conditionally
    if (this.radioAnswer !== undefined) {
      this.nextQue = this.radioAnswer !== "" && this.currentQuestion < this.questionArray.length - 1;
      this.submitAnswer = this.radioAnswer !== "" && this.currentQuestion == this.questionArray.length - 1;
    }

    console.log("\nThis is the current answerArray: " + this.formService.answerArray);
  }

  // Method to go to the previous question
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

    console.log("\nThis is the current answerArray: " + this.formService.answerArray);
  }

  // Method to submit the answer collected
  submit(): void {
    // Adding the last selected value and reseting radion button selection
    this.formService.answerArray[this.currentQuestion] = Number(this.radioAnswer);
    console.log("\nThis is the current answerArray: " + this.formService.answerArray);


    // Hiding the question and it's relevant elements to display the final results.
    this.displayQue = false;

    // Submitting the answer to the backend
    this.formService.submitAnswer();

    //Getting back the final results after evaluation

    /* 
      When you try to convert a Promise to a string, it doesn’t give you the resolved value of the Promise. 
      Instead, it gives you the string "[object Promise]", which is the default string representation of a Promise object.

      To get the actual value that the Promise will resolve to, you need to wait for the Promise to resolve using the .
      then() method or async/await. Here’s how you can do it:
    */
    this.formService.evaluateAnswer().then(finalAnswer => {
      this.finalAnswer = String(finalAnswer);
      console.log("This is the final answer: " + this.finalAnswer);
    });

    this.displayAnswer = true;  
  }
}

interface Option {
  name: string;
  label: string;
  value: string;
}