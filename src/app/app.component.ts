import { Component } from '@angular/core';
import './styles/_styles.scss';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  func() {
    console.log('Click');
  }
}
