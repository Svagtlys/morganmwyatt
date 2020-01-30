import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  { 
    path: 'about', 
    component: AboutPageComponent
  },
  {
    path: 'landingPage',
    component: TodoListComponent
  },
  { 
    path: '',
    redirectTo: '/landingPage',
    pathMatch: 'full'
  } //default path (landing page!)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
