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
                    <input type="radio" id="zero" name="questions" value="0" [(ngModel)]="radioAnswer" (change)="onSelection($event)">
                    <label for="zero">0</label>

                    <input type="radio" id="one" name="questions" value="1" [(ngModel)]="radioAnswer" (change)="onSelection($event)">
                    <label for="one">1</label>

                    <input type="radio" id="two" name="questions" value="2" [(ngModel)]="radioAnswer" (change)="onSelection($event)">
                    <label for="two">2</label>

                    <input type="radio" id="three" name="questions" value="3" [(ngModel)]="radioAnswer" (change)="onSelection($event)">
                    <label for="three">3</label>

                    <input type="radio" id="four" name="questions" value="4" [(ngModel)]="radioAnswer" (change)="onSelection($event)">
                    <label for="four">4</label><br>
                </div>
                   
                <div id="questionNavButtonDiv">
                    <button type="button" id="backButton" *ngIf="backQue" (click)="back()">Back</button>

                    <button type="button" id="nextButton" *ngIf="nextQue" (click)="next()">Next</button>

                    <button type="button" id="submitButton" *ngIf="submitAnswer" (click)="submit()">Submit</button>
                </div>
                
            </div>
                    
        </div>      

      </form>
    </section>
  `,
  styleUrl: './selected-form.component.css'
})
export class SelectedFormComponent {
  formService: FormService = inject(FormService);

  question: string = "Questions must appear here";

  // Defining the visibility of the buttons in form
  startQue = true;

  displayQue: boolean = false;

  backQue: boolean = false;
  nextQue: boolean = false;
  submitAnswer: boolean = false;

  // Setting the default value of the radio buttons
  radioAnswer: string = "";

  questionArray: string[] = ["1. hello", "2. hi", "3. helloAgain", "4. hellothere"];

  // To count the questions number with index
  currentQuestion = 0;

  selectedValue: number | undefined;

  constructor () {
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
    }
}



  /*onChange(event: Event): void {
    this.selectedValue = Number((event.target as HTMLInputElement).value);
    console.log(`Selected value: ${this.selectedValue}`);
    console.log(this.formService.answerArray);
    console.log(this.formService.formType);

    // Check if a radio button is selected
    if (this.selectedValue !== undefined) {
        // If it's not the last question
        if (this.currentQuestion < this.questionArray.length - 1) {
            this.nextQue = true;
            this.submitAnswer = false;
        }
        // If it's the last question
        else if (this.currentQuestion == this.questionArray.length - 1) {
            this.nextQue = false;
            this.submitAnswer = true;
        }
    } else {
        // If no radio button is selected, do not display "Next" or "Submit" button
        this.nextQue = false;
        this.submitAnswer = false;
    }
  }

  next(): void {
      // Store the current selection in answerArray
      this.formService.answerArray[this.currentQuestion] = this.radioAnswer!;

      // Increment currentQuestion and update the question
      this.currentQuestion++;
      this.question = this.questionArray[this.currentQuestion];

      // Update the radio buttons with the answer for the new question
      this.radioAnswer = this.formService.answerArray![this.currentQuestion];

      // Update navigation buttons
      this.backQue = true;
      this.nextQue = this.radioAnswer !== undefined && this.currentQuestion < this.questionArray.length - 1;
      this.submitAnswer = this.radioAnswer !== undefined && this.currentQuestion == this.questionArray.length - 1;

      console.log(this.formService.answerArray);
  }

  back(): void {
      // Decrement currentQuestion and update the question
      this.currentQuestion--;
      this.question = this.questionArray[this.currentQuestion];

      // Update the radio buttons with the answer for the new question
      this.radioAnswer = this.formService.answerArray[this.currentQuestion];

      // Update navigation buttons
      this.backQue = this.currentQuestion > 0;
      this.nextQue = this.radioAnswer !== undefined && this.currentQuestion < this.questionArray.length - 1;

      console.log(this.formService.answerArray);
  }

  submit(): void {
      // Adding the last selected value and reseting radion button selection
      this.formService.answerArray[this.currentQuestion] = this.radioAnswer!;
      console.log(this.formService.answerArray);
  }


  // onChange(event: Event): void {
  //   this.selectedValue = Number((event.target as HTMLInputElement).value);
  //   console.log(`Selected value: ${this.selectedValue}`);
  //   console.log(this.formService.answerArray);
  //   console.log(this.formService.formType);
    
    
  //   if (this.selectedValue !== undefined) {
  //     if (this.currentQuestion < this.questionArray.length - 1) {
  //         this.nextQue = true;
  //         this.submitAnswer = false;   
  //     }
  //     else if (this.currentQuestion == this.questionArray.length - 1) {
  //         this.nextQue = false;
  //         this.submitAnswer = true;
  //     }
  //   } else {
  //     // If no radio button is selected, do not display "Next" or "Submit" button
  //     this.nextQue = false;
  //     this.submitAnswer = false;   
  //   }
  // }

  // next(): void {

  //   // Store the current selection in answerArray
  //   this.formService.answerArray[this.currentQuestion] = this.radioAnswer!;
    
  //   // Increment currentQuestion and update the question
  //   this.currentQuestion++;
  //   this.question = this.questionArray[this.currentQuestion];

  //   // Update the radio buttons with the answer for the new question
  //   this.radioAnswer = this.formService.answerArray![this.currentQuestion];

  //   // Update navigation buttons
  //   this.backQue = true;

  //   if (this.formService.answerArray[this.currentQuestion] == null) {
  //       //Resetting radio buttons
  //       // this.radioAnswer = null;
  //       this.selectedValue = undefined;
  //   }
  //   console.log(this.formService.answerArray);
  // }

  // back(): void {

  //   // Decrement currentQuestion and update the question
  //   this.currentQuestion--;
  //   this.question = this.questionArray[this.currentQuestion];

  //   // Update the radio buttons with the answer for the new question
  //   this.radioAnswer = this.formService.answerArray[this.currentQuestion];

  //   // Update navigation buttons
  //   this.backQue = this.currentQuestion > 0;

  //   console.log(this.formService.answerArray);
  // }

  // submit(): void {
  //   // Adding the last selected value and reseting radion button selection
  //   this.formService.answerArray[this.currentQuestion] = this.radioAnswer!;
  //   console.log(this.formService.answerArray);
  // }
} */
