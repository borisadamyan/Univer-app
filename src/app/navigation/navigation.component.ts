import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isOpen_users = false;
  isOpen_group = false;
  isOpen_course = false;
  isOpen_faculty = false;
  constructor() { }

  ngOnInit() {
  }

  showModal1(){
      this.isOpen_users = !this.isOpen_users;
  }
  showModal2(){
    this.isOpen_group = !this.isOpen_group;
  }
  showModal3(){
    this.isOpen_course = !this.isOpen_course;
  }
  showModal4(){
    this.isOpen_faculty = !this.isOpen_faculty;
  }
  closeModal(){
    this.isOpen_users = false;
    this.isOpen_group = false;
    this.isOpen_course = false;
    this.isOpen_faculty = false;
  }

}
