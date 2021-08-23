import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }
  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`, username)


  }
  deleteTodo(username,id){
      return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  
  RetrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
}
 UpdateTodo(username,id,todo){
  return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,todo)
}

createTodo(username,todo){
  return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`,todo)
}


}

