import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-alert-transation-finished',
  templateUrl: './alert-transation-finished.component.html',
  styleUrls: ['./alert-transation-finished.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(800)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(800, style({opacity: 0})))
    ])
  ]
})
export class AlertTransationFinishedComponent implements OnInit {
  @Input() show;
  @Output() hideAlert: EventEmitter<any> = new EventEmitter();
  autohide = false;

  constructor() {
  }

  ngOnInit() {
    // automatic hide if close in not clicked
    setTimeout(() => {
      this.autohide = true;
    }, 4500);
  }

  closeAlert() {
    this.autohide = true;
    setTimeout(() => {
      this.hideAlert.emit(true);
    }, 1000);
  }
}
