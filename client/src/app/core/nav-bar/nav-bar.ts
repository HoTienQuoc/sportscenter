import { Component } from '@angular/core';
import { CoreModule } from '../core-module';

@Component({
  selector: 'app-nav-bar',
  imports: [CoreModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {

}
