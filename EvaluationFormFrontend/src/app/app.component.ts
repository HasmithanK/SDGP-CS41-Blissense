import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <section>
      <header id="navBar">

        <img src="./assets/Logo.jpg" alt="Logo" id="logo" ng-click="goToHomePage()">
        <nav>
            
            <ul>
                <li> <a id="home" routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a> </li>
                <li> <a id="predictDisorder" routerLink="predictdisorder" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Predict Disorder</a> </li>
                <li> <a id="evaluationForm" routerLink='forms' routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Evaluation Form</a> </li>
                <li> <a id="exercises" routerLink="#" routerLinkActive="active">Exercise</a> </li>
                <li> <a id="videoChat" routerLink="#" routerLinkActive="active">Video Chat</a> </li>
                <li> <a id="about" routerLink="#" routerLinkActive="active">About us</a> </li>
                <li> <a id="logIn">Log in</a> </li>
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
