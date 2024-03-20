import { Component } from '@angular/core';

@Component({
  selector: 'app-my-records',
  templateUrl: './my-records.component.html',
  styleUrls: ['./my-records.component.css']
})
export class MyRecordsComponent {
  records: any[] = []; // Populate this array with your records data
  showModal: boolean = false;
  selectedRecord: any;

  showDetails(record: any) {
    this.selectedRecord = record;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
