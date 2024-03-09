import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <div id="homePageContent1">

        <div class="introContent">
          <h1><b>Why does your mental health matter?</b></h1>
          
          <p>
          Mental health is important because it affects our overall well-being and 
          quality of life. It includes our emotional, psychological, and social well-being. 
          It affects how we think, feel, and act. Research shows that high levels of mental 
          health are associated with increased learning, creativity and productivity, more 
          pro-social behaviour and positive social relationships, and with improved physical 
          health and life expectancy.
          </p>

        </div>
      </div>

      <div id="blogContentTopic">
        <p>Learn about mental health from out latest blogs</p>
      </div>
    
      <div id="blogContent">
        <div class="contentBox">
          <p>It is a pleasure to meet people like you</p>
        </div>

        <div class="contentBox">
          <p>It is a pleasure to meet people like you</p>
        </div>

        <div class="contentBox">
          <p>It is a pleasure to meet people like you</p>
        </div>

      </div>

      <div class="predictDisoderContent">
        <p>Let us guess what you might be dealing with</p>
      </div>
    </section>
    
  `,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
