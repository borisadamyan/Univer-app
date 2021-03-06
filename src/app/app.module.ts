import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FilterCourse, FilterFaculty, FilterGroup, SearchPipes} from './search.pipes';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import {OrderPipe} from './order.pipe';
import {SearchPhonePipes} from './phone-search-pipe';
import { MainComponent } from './main/main.component';
import {RouterModule} from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LoginformComponent } from './loginform/loginform.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes = [
  { path: '', component: WelcomeComponent },
  {path: 'login', component: LoginformComponent},
  { path: 'main', component: MainComponent },
  { path: 'main/newUser', component: AddUserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavigationComponent,
    SearchPipes,
    OrderPipe,
    SearchPhonePipes,
    FilterFaculty,
    FilterGroup,
    FilterCourse,
    MainComponent,
    TopNavComponent,
    LoginformComponent,
    WelcomeComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
