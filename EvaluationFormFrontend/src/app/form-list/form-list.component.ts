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
        <!-- <div class="formDiv"> 

            <a id="PHQ9" (click)="getFormNum(1)" routerLink='selectedform'>       
                <div class="formBox">
                    <p>PHQ-9</p>
                </div>
            </a>

            <a id="GAD" (click)="getFormNum(2)" routerLink='selectedform'>
                <div class="formBox">
                    <p>GAD-7</p>
                </div>
            </a>

            <a id="DASS" (click)="getFormNum(3)" routerLink='selectedform'> 
                <div class="formBox">
                    <p>MSI-BPD</p>
                </div>
            </a>

            <a id="Form" (click)="getFormNum(4)" routerLink='selectedform'> 
                <div class="formBox">
                    <p>PANSS</p> 
                </div>
            </a>

            <a id="Form1"> 
                <div class="formBox" (click)="getFormNum(5)" routerLink='selectedform'>
                    <p>Form1</p>
                </div>
            </a>
        </div> -->

        <div class="formDiv">

        <a id="PHQ9" (click)="getFormNum(1)" routerLink='selectedform'> 
            <div class="card">
                <div class="first-content">
                    <p>PHQ-9</p>
                </div>
                <div class="second-content">
                    <p>This contend explains about the phq form
                        and I will also add some extra content for 
                        you to create it.
                    </p>
                </div>
            </div>
        </a>

        <a id="GAD7" (click)="getFormNum(2)" routerLink='selectedform'>
            <div class="card">
                <div class="first-content">
                    <p>GAD-7</p>
                </div>
                <div class="second-content">
                    <p>This contend explains about the phq form</p>
                </div>
            </div>
        </a>

        <a id="MSI-BPD" (click)="getFormNum(3)" routerLink='selectedform'> 
            <div class="card">
                <div class="first-content">
                    <p>MSI-BPD</p>
                </div>
                <div class="second-content">
                    <p>This contend explains about the phq form</p>
                </div>
            </div>
        </a>

        <a id="PANSS" (click)="getFormNum(4)" routerLink='selectedform'>
            <div class="card">
                <div class="first-content">
                    <p>PANSS</p>
                </div>
                <div class="second-content">
                    <p>This contend explains about the phq form</p>
                </div>
            </div>
        </a>

        <a id="Form" (click)="getFormNum(5)" routerLink='selectedform'> 
            <div class="card">
                <div class="first-content">
                    <p>First</p>
                </div>
                <div class="second-content">
                    <p>This contend explains about the phq form</p>
                </div>
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
