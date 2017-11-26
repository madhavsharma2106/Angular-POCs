import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {


  state: boolean = false;
  constructor() { }

  authToggle() {
    this.state = (this.state == true ? false : true);
    return this.state;
  }

  getUserAuthorizationStatus() {
    return this.state;
  }

}
