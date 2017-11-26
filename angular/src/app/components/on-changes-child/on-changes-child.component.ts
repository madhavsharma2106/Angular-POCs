import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-on-changes-child',
  templateUrl: './on-changes-child.component.html',
  styleUrls: ['./on-changes-child.component.css'],
  inputs: ['changeDetector'],
  outputs: ['childData']
})
export class OnChangesChildComponent implements OnChanges {
  changeDetector: string;
  changesDiscovered;

  childData = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.changesDiscovered = changes;
  }

  onChange(value: string) {
    this.childData.emit(value);
  }

}
