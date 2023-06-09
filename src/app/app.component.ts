import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('asd', {
    read: ElementRef
  }) asd?: QueryList<ElementRef>
  title = 'observable-homework';

  ngAfterViewInit(): void {
    console.log(this.asd);
    if (this.asd) {
      this.asd.forEach((element, index) => {
        if (index === 4) {
          element.nativeElement.style.color = 'red';
        }
      });
    }
    
  }
}
