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
    if(username==="vijay" && password==="dummy")  {
      return true;

    }
    return false;

  }
}
