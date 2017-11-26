import { Injectable } from '@angular/core';

@Injectable()
export class DataTransferService {

  data: string = "";
  constructor() { }

  enterData( data: string ){
    this.data = data;
  }

  retrieveData(){
    return this.data;
  }


}
