import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "vijay"   //default username and password
  password = ""

  constructor() { }

  ngOnInit() {
  }
  handleLogIn(){
    console.log(this.username);  
  }
}
