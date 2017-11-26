import { Component } from '@angular/core';
import {OnChangesChildComponent} from "../on-changes-child/on-changes-child.component"

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent {
  changeDetector: string;
  childData: string;
  constructor() { }


}
