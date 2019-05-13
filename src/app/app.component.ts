import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "demo"
  dateString: any;

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }

  increamentDate = () => {
    let dateObj = new Date(this.dateString);
    this.dateString = dateObj.setDate(dateObj.getDate() + 1);
  }

  decreamentDate = () => {
    let dateObj = new Date(this.dateString);
    this.dateString = dateObj.setDate(dateObj.getDate() - 1);
  }
}
