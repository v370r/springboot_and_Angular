
//import org.springframework.boot.springApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
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
   welcomeMessageFromService:string
   name = ''


  //ActivateRoute
  //public SpringBootFirstApplication(){
  constructor(private route: ActivatedRoute,
    private service : WelcomeDataService) { 

   }

  //void init()
  // : void can be used to explicitely specify return type
  ngOnInit() /*:void */ {
    //console.log(this.message)
    //console.log(this.route.snapshot.params["name"])
    this.name= this.route.snapshot.params["name"]
  }
  getWelcomeMessageWithParametrer(){
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe( // if subscibe is successful then call the specified method its an asynchronous 
      response => this.handleSuccessfulResponse(response))
      error => this.handleErrorResponse(error)

  }
  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe( // if subscibe is successful then call the specified method its an asynchronous 
      response => this.handleSuccessfulResponse(response))
      error => this.handleErrorResponse(error)

  }


  handleSuccessfulResponse(response){
    // console.log(response)
    // console.log(response.message)
    this.welcomeMessageFromService =response.message

    
  }
  handleErrorResponse(error){
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.welcomeMessageFromService = error.error.messgae
  }

}
