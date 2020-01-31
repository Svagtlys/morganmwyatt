import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { WorldsPageComponent } from './worlds-page/worlds-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  { 
    path: 'about', 
    component: AboutPageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'worlds',
    component: WorldsPageComponent
  },
  {
    path: 'hobbies',
    component: HobbiesPageComponent
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  } //default path (landing page!)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
