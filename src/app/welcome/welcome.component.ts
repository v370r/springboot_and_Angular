
//import org.springframework.boot.springApplication;
import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../app.component';

//@ComponentScan(value = "com.in28minutes.springboot.web")
//JAVA:Annotation :: TypeScript :Decorator
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//public clas SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {
   message : string = "Some Welcome Message"

  //public SpringBootFirstApplication(){
  constructor() { }

  //void init()
  // : void can be used to explicitely specify return type
  ngOnInit() /*:void */ {
    //console.log(this.message)
  }

}
