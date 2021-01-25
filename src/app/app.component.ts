import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef
  name = 'Basketball Shop';

  ngAfterViewInit() {
    console.log(this.appTitle.nativeElement)
    this.appTitle.nativeElement.textContent = this.name
  }


}
