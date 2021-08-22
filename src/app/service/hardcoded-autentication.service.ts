import { Injectable } from '@angular/core';

//injectable makes it service
@Injectable({
  providedIn: 'root'
})
export class HardcodedAutenticationService {

  constructor() { 

  }
  //this service must be injected to login component like router
  autenticate(username,password){
    console.log("before "+this.isUserLoggedIn())
    if(username==="vijay" && password==="dummy")  {
      sessionStorage.setItem("autenticaterUser",username)
      console.log("After "+ this.isUserLoggedIn())
      return true;

    }
    return false;

  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem("autenticaterUser")
    return !(user==null)
  }
  logout(){
    sessionStorage.removeItem("autenticaterUser")
  }


}
