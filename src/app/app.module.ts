import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventsListComponent } from './event-list.component';
import { EventDetailsComponent } from './event-details.component';
import { DashboardComponent } from './dashboard.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { ViewPostComponent } from './view-post.component';
import { ShellComponent } from './shell/shell.component';
import { LoginComponent } from './login/login.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'contactus',
        component: ContactComponent
      },
      {
        path: 'events',
        component: EventsListComponent
      },
      {
        path: 'events/:id',
        component: EventDetailsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'view',
        component: ViewPostComponent
      },
      {
        path: '',
        component: PlaceholderComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HelloComponent, EventsListComponent, EventDetailsComponent, DashboardComponent, ContactComponent, HomeComponent, ViewPostComponent, ShellComponent, LoginComponent, PlaceholderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
