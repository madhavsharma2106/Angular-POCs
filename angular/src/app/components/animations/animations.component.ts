import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('2s', style({ opacity: 1 }))
        ]),
    ])]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
