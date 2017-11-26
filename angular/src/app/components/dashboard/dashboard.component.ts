import { DataTransferService } from '../../services/data-transfer.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userForm: FormGroup;

  dataTransfer: string;
  state: boolean;
  amount: number;
  constructor(
    private authService: AuthService,
    private dataTransferService: DataTransferService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.state = this.authService.getUserAuthorizationStatus();

    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      phoneNumber: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]+')  // validates input is digit
    ]]
    });

  }

  authToggle() {
    this.state = this.authService.authToggle();
  }

  enterData(data: string) {
    this.dataTransferService.enterData(data);
  }

  onFormSubmit() {
    alert("Form Successfully Submitted");
  }

}
