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

        <div id="introContent">
          <h1><b>Why does your mental health matter?</b></h1>
          
          <p>
          Mental health is important because 
          it affects our overall well-being and 
          quality of life. It includes our emotional, 
          psychological, and social well-being. 
          It affects how we think, feel, and act.
          </p>
          <button type="button">Read more</button>

        </div>

        <div id="introContent">
          <h1><b>Why does your mental health matter?</b></h1>
          
          <p>
          Mental health is important because 
          it affects our overall well-being and 
          quality of life. It includes our emotional, 
          psychological, and social well-being. 
          It affects how we think, feel, and act.
          </p>
          <button type="button">Read more</button>

        </div>

        <div id="introContent">
          <h1><b>Why does your mental health matter?</b></h1>
          
          <p>
          Mental health is important because 
          it affects our overall well-being and 
          quality of life. It includes our emotional, 
          psychological, and social well-being. 
          It affects how we think, feel, and act.
          </p>
          <button type="button">Read more</button>

        </div>

        <div id="introContent">
          <h1><b>Why does your mental health matter?</b></h1>
          
          <p>
          Mental health is important because 
          it affects our overall well-being and 
          quality of life. It includes our emotional, 
          psychological, and social well-being. 
          It affects how we think, feel, and act.
          </p>
          <button type="button">Read more</button>

        </div>

        <div id="introContent">
          <h1><b>Why does your mental health matter?</b></h1>
          
          <p>
          Mental health is important because 
          it affects our overall well-being and 
          quality of life. It includes our emotional, 
          psychological, and social well-being. 
          It affects how we think, feel, and act.
          </p>
          <button type="button">Read more</button>

        </div>
      </div>

      <div id="predictDisoderContent">
        <p>Let us guess what you might be dealing with</p>
      </div>
    </section>
    
  `,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
