import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.printBetterQuality();
  }

  private print(): void {
    const filename  = 'ThisIsYourPDFFilename.pdf';

    html2canvas(document.querySelector('#nodeToRenderAsPDF')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }

// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
  private printBetterQuality(quality = 1): void {
    const filename  = 'ThisIsYourPDFFilename.pdf';

    html2canvas(document.querySelector('#nodeToRenderAsPDF'),
      {scale: quality}
    ).then(canvas => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }
}
