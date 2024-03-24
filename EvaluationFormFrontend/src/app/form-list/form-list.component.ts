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
        
        // {name: 'PANSS', img: './assets/DAD-7.jpg', formDescription: 'The content must appear here', formNum: 4 },
        // {name: 'PHQ-9', img: './assets/DAD-7.jpg', formDescription: 'The content must appear here', formNum: 5 }
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
