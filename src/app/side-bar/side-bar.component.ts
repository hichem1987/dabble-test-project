import {Component, OnInit} from '@angular/core';
import {faAngleRight, faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  faChevronDown = faChevronDown;
  faAngleRight = faAngleRight;

  constructor() {
  }

  ngOnInit() {
  }

}
