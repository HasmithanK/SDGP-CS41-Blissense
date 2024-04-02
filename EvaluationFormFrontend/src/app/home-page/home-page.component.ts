import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      
      <div id="introImageContainer">
        <img id="introImage" src="./assets/Leaf-Vase.png" alt="Picture of vase">
      </div>

      <!-- Division for introduction of the site -->
      <div id="introContainer" >

        <div id="introHeading">Blissense</div>
        
        <div id="introBody">
          Welcome to Blissense, your personal gateway to mental wellness. 
          Our mission is to empower you with a deeper understanding of your 
          mental health. Leveraging our specialized model, we provide insights 
          tailored to your unique mental health context, guiding you towards a 
          more fulfilling life.
        </div>

        <a href="#predictContainer"> <button type="button">Learn More</button> </a>

      </div>


      <div id="predictContainer" [ngClass]="{'visible': isVisible}" class="animate">
        <div id="predictHeading">
          Discover Your Inner Strength with <br>
          Our AI-Powered Mental Health Companion
        </div>

        <div id="predictBody">
          Unveiling our AI solution for mental health. Understand 
          your mental state better, make informed decisions, and manage 
          mental health proactively. Our platform offers personalized 
          insights and recommendations. Join us, and take steps towards 
          understanding your mental health, leading to a healthier, happier you.
        </div>

        <button type="button" routerLink="predictdisorder">Try it out!</button>
      </div>


      <div id="evaluationFormContainer" [ngClass]="{'visible': isVisible}" class="animate">

        <div id="evaluationFormHeading">
          Screening Tools
        </div>

        <div id="evaluationFormBody">
          Embark on a journey of self-discovery with our mental health screening 
          tools - PHQ-9, GAD-7, MSI-BPD, etc. These tools provide valuable insights 
          into your emotional well-being, helping you understand your feelings and 
          guiding you towards the right support and care. They serve as  stepping stones 
          towards a healthier, brighter future.  Remember, understanding is the first step 
          towards healing.
        </div>

        <div id="screeningTool">
          Available Screening Tools
        </div>

        <div id="screeningToolButtons">
          <button type="button">PHQ-9</button>
          <button type="button">GAD-7</button>
          <button type="button">MSI-BPD</button>
          <button type="button">PANSS</button>
          <!-- <button type="button">Form</button> -->
        </div>

        <button type="button" id="formTryButton" routerLink='forms'>Learn More & Try it out!</button>
      
      </div>

      <div id="exerciseContainer" [ngClass]="{'visible': isVisible}" class="animate">
        <div id="exerciseHeading">
          Just Relax!
        </div>

        <div id="exerciseBody">
          In the grand tapestry of life, breathing exercises and meditation emerge as potent threads, 
          weaving a pattern of profound mental well-being. They are the silent warriors, battling stress, 
          honing focus, and cultivating an oasis of tranquility in our often chaotic existence.
        </div>

        <div id="exerciseContent" [ngClass]="{'visible': isVisible}" class="animate">

          <div class="exercise">
            <img src="./assets/Yoga.png" alt="Yoga">
            <h1 class="exerciseTitle">Yoga</h1>
            <div class="exerciseDescription">
              Embrace Yoga! A journey to tranquility, 
              enhancing your well-being, and bringing 
              balance in this fast-paced world.
            </div>
          </div>

          <div class="exercise">
            <img src="./assets/BreathingExercise.png" alt=" Breathing exercise">
            <h1 class="exerciseTitle">Breathing Exercise</h1>
            <div class="exerciseDescription">
              Discover Breathing Exercises! A path to
              serenity, enhancing your vitality, and 
              instilling balance in your daily life.
            </div>
          </div>

        </div>
      </div>

    <div id="chatContainer" [ngClass]="{'visible': isVisible}" class="animate">
      <div id="chatHeading">
        Connect and Unwind: <br>
        Introducing Our Relaxation Chat Platform
      </div>

      <div id="chatBody">
        Looking for a space to unwind, share thoughts, and connect 
        with others? Look no further! Our platform pairs you with 
        random users for genuine conversations. Whether you want to 
        vent, discuss hobbies, or simply open up, our platform provides 
        a safe and welcoming environment.
      </div>

      <img src="./assets/VideoChat.jpg" alt="Video Chat image">

      <button type="button" (click)="redirectToUrl(3)">Start Now</button>
    </div>







    <!-- <footer id="footer">
      <div class="column">
          <h4>About</h4>
          <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Our story</li>
              <li>Blogs</li>
          </ul>
      </div>

      <div class="column">
          <h4>Help</h4>
          <ul>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
              <li>FAQs</li>
          </ul>
        </div>

        <div class="column">
            <h4>Contact</h4>
            <ul>
                <li>Phone: (1)123 456 7893</li>
                <li>Email: name&#64;email.com</li>
            </ul>
        </div>

        <div class="right-section">
            <h4>Receive new promotions</h4>
            <input type="email" placeholder="Input your email">
            <button>Subscribe</button>
      </div>
    </footer> -->
    </section>
    
  `,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    const element = this.el.nativeElement;
    const positionFromTop = element.getBoundingClientRect().top;
    if (scrollPosition + window.innerHeight >= positionFromTop) {
      this.isVisible = true;
    }
  }

  redirectToUrl(num :number) {
    if (num == 1) {
      window.open('https://www.example.com', '_self');

    } else if(num == 2) {
      window.open('http://40.121.158.182:3005/', '_self');

    } else if(num == 3) {
      window.open('http://52.177.134.209:3005/', '_self');

    } else if(num == 4) {
      window.open('https://www.example.com', '_self');

    }
  }
}
