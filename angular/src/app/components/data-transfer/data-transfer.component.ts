import { DataTransferService } from '../../services/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.css']
})
export class DataTransferComponent implements OnInit {
  transferredData: string;
  constructor( private dataTransferService: DataTransferService ) { }

  ngOnInit() {
    this.transferredData  = this.dataTransferService.retrieveData();
  }

}
