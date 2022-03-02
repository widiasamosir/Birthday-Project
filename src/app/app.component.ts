import { Component } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  who : string = 'Andi Haryanto';

  colorSelected : string = 'red';

  source : Observable<number> = timer(1000, 500);

  constructor(private activatedRoute : ActivatedRoute) {


  }

}
