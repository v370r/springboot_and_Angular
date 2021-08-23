import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id :number,
    public description: string,
    public done:boolean,
    public targetDate:Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  // todo = {
  //   id          : 1,
  //   description : "Learn to Dance"

  // }

  // todos = [this.todo,{
  //   id      : 2,
  //   description : "Become an Expert in Angular"},
  //   {
  //     id   :  3,
  //   description :" Visit India"}]

  // todos =[
  //   new Todo(1,"Learn to dance",false,new Date()),
  //   new Todo(2,"Become an expert at angular",false,new Date()),
  //   new Todo(3,"Visit India",false,new Date())
  // ]
  todos :Todo[]
  message: string

  constructor(private todoService:TodoDataService,private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
 
  }

  //must refresh to relfect

  refreshTodos(){
      this.todoService.retrieveAllTodos('in28minutes').subscribe(
         response =>{
        console.log(response);
        this.todos=response;
      }

    )

  }
  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo("in28minutes",id).subscribe(
      Response=>{
        console.log(Response);
        this.message=`Delete of Todo ${id}  Successful`
        this.refreshTodos();
      }
    )
  }
  UpdateTodo(id){

    console.log(`Update todo ${id}`)
    this.router.navigate(['todos',id])
  }
  addTodo(){
    this.router.navigate(["todos",-1])
  }

}

