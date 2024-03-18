import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormService } from '../form.service';
import { Url } from 'url';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>

        <div id="formContainer">
            <div class="formBox" *ngFor="let form of formDetailsList">
                <p>{{form.name}}</p>
                <img [src]="form.img" alt="add an image">
                <p>
                    {{form.formDescription}}
                </p>
                <button type="button" routerLink='selectedform' (click)="getFormNum(form.formNum)">
                    Try it
                </button>
            </div>
        </div>

            <!-- <div class="formBox">
                <p>name.here</p>
                <img src="" alt="add an image">
                <p>
                    Add a descript for ten words so that i can have
                    something to tell you right.
                </p>
                <a href="" (click)="getFormNum(5)"></a>
            </div>
        </div>

        <div class="formDiv">

            <a id="PHQ9" (click)="getFormNum(1)" routerLink='selectedform'> 
                <div class="card">
                    <div class="first-content">
                        <p>PHQ-9</p>
                    </div>
                    <div class="second-content">
                        <p>PHQ-9</p>
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
                        <p>GAD-7</p>
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
                        <p>MSI-BPD</p>
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
                        <p>PANSS</p>
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

        </div> -->

    </section>
  `,
  styleUrl: './form-list.component.css'
})

export class FormListComponent {

    formDetailsList: Form[] = [
        {name: 'PHQ-9', img: './assets/PHQ-9.jpg', 
        formDescription: 'The content must appear here', 
        formNum: 1 },

        {name: 'GAD-7', img: './assets/GAD-7.jpg', 
        formDescription: 'The content must appear here ' + 
        'The content must appear here', 
        formNum: 2 },

        {name: 'MSI-BPD', img: './assets/MSI-BPD.jpg', 
        formDescription: 'The content must appear here' +
        'The content must appear here', 
        formNum: 3 },
        
        {name: 'PANSS', img: './assets/DAD-7.jpg', formDescription: 'The content must appear here', formNum: 4 },
        {name: 'PHQ-9', img: './assets/DAD-7.jpg', formDescription: 'The content must appear here', formNum: 5 }
    ]
    

    //Injecting dependancy
    constructor(private formService: FormService) {
    }

    getFormNum(formType: number): void {
        console.log("This is working");
        this.formService.formType = formType;
        console.log(this.formService.formType);
    };
}

interface Form{
    name: string;
    img: string;
    formDescription: string;
    formNum: number;
}
