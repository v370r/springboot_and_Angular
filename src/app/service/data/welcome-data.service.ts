import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldBean{
  constructor(public message:string){
  }
}


export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
    //console.log("Execute Hello World Bean Service")
  }
  
  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`)
    //console.log("Execute Hello World Bean Service")
  }
}

