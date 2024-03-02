import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
        <div class="formDiv"> 

            <a id="PHQ9" (click)="getFormNum(1)" routerLink='selectedform'>       
                <div class="formBox">
                    <p>PHQ-9</p> 
                </div>
            </a>

            <a id="DASS" (click)="getFormNum(2)" routerLink='selectedform'> 
                <div class="formBox">
                    <p>DASS</p>
                </div>
            </a>

            <a id="GAD" (click)="getFormNum(3)" routerLink='selectedform'>
                <div class="formBox">
                    <p>GAD</p>
                </div>
            </a>

            <a id="Form" (click)="getFormNum(4)" routerLink='selectedform'> 
                <div class="formBox">
                    <p>Form</p> 
                </div>
            </a>

            <a id="Form1"> 
                <div class="formBox" (click)="getFormNum(5)" routerLink='selectedform'>
                    <p>Form1</p>
                </div>
            </a>

        </div>
    </section>
  `,
  styleUrl: './form-list.component.css'
})

export class FormListComponent {
    

    //Injecting dependancy
    constructor(private formService: FormService) {
    }

    getFormNum(formType: number): void {
        console.log("This is working");
        this.formService.formType = formType;
        console.log(this.formService.formType);
    };
}
