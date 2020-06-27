import { Component } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public export(): void {
    const element = document.getElementById('element-to-export');
    const options = {
      filename:     'myfile.pdf',
      image:        { type: 'jpeg' },
      html2canvas:  { },
      jsPDF:        { orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  }
}
