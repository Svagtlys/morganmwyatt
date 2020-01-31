import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { WorldsPageComponent } from './worlds-page/worlds-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    TodoListComponent,
    NavbarComponent,
    PortfolioPageComponent,
    WorldsPageComponent,
    HobbiesPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
