import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { routes } from './app.routes'; // Import the routes from app.routes file

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe],
  standalone: true // Add standalone: true flag here
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentDate: string = '';
  currentDateStyle = {
    color: 'black', // Change color as desired
    fontSize: '20px', // Change font size as desired
    fontWeight: 'bold', // Set font weight to bold
    textShadow: '2px 2px 5px rgba(0,0,0,0.5)' // Apply text shadow for popped out effect
  };

  constructor(private datePipe: DatePipe) {
    const currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.currentDate = currentDate ? currentDate : '';
  }
}
