import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FilterCourse, FilterFaculty, FilterGroup, SearchPipes} from './search.pipes';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import {OrderPipe} from './order.pipe';
import {SearchPhonePipes} from './phone-search-pipe';


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
    FilterCourse
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
