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
                <li> <a id="exercises" (click)="redirectToUrl(1)" routerLink="#" routerLinkActive="active">Exercise</a> </li>
                <li> <a id="videoChat" (click)="redirectToUrl(2)" routerLink="#" routerLinkActive="active">Chat</a> </li>
                <li> <a id="about" (click)="redirectToUrl(3)" routerLink="#" routerLinkActive="active">About us</a> </li>
                <li> <a id="logIn" (click)="redirectToUrl(4)">Log in</a> </li>
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

  redirectToUrl(num :number) {
    if (num == 1) {
      window.open('https://www.example.com', '_self');

    } else if(num == 2) {
      window.open('http://40.121.158.182:3005/', '_self');

    } else if(num == 3) {
      window.open('https://www.example.com', '_self');

    } else if(num == 4) {
      window.open('https://www.example.com', '_self');

    }
  }
}
