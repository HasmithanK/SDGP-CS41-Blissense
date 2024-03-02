import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { SelectedFormComponent } from './selected-form/selected-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormListComponent, SelectedFormComponent],
  template: `
    <section>
      <header id="navBar">

        <img src="./assets/Logo.jpg" alt="Logo" id="logo" ng-click="goToHomePage()">
        <nav>
            
            <ul>
                <li> <a id="home" routerLink="">Home</a> </li>
                <li> <a id="predictDisorder" routerLink="#">Predict Disorder</a> </li>
                <li> <a id="evaluationForm" routerLink='forms'>Evaluation Form</a> </li>
                <li> <a id="exercises" routerLink="#">Exercise</a> </li>
                <li> <a id="videoChat" routerLink="#">Video Chat</a> </li>
                <li> <a id="about" routerLink="#">About us</a> </li>
            </ul>
            
        </nav>
      </header>

      <router-outlet> </router-outlet>
    </section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EvaluationFormFrontend';
}
