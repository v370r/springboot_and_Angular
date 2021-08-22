import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';

//welcome
const routes: Routes = [
  {path:'' ,component: LoginComponent},
  {path:'login' ,component: LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'todos',component:ListTodosComponent},
  {path:'logout',component:LogoutComponent},


  {path:'**' ,component: ErrorComponent},
  //order is important so dont keep it above any routers

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
