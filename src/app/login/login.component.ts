import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAutenticationService } from '../service/hardcoded-autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "vijay"   //default username and password
  password = "dummy"
  errorMessage = "Invalid Credentials"
  invalidLogIn =false

  //Router
  //Angular.giveMeRouter => Old/earlier versions
  //Dependency  injection => later versions



  constructor(private router: Router,public hardCodedAutentication:HardcodedAutenticationService) { }

  ngOnInit() {
  }
  handleLogIn(){
    //console.log(this.username);
    //if(this.username==="vijay" && this.password==="dummy")  {
    if(this.hardCodedAutentication.autenticate(this.username,this.password)){
      //redirect to welcome page
      this.router.navigate(["welcome",this.username])
      this.invalidLogIn = false

    }
    else{
      this.invalidLogIn =true

    }
  }

}

