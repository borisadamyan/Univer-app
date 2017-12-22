import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  users = [];
  courses = [];
  groups = [];
  facultys = [];
  fullName;
  facultyName;
  groupName;
  courseName;
  phoneNumber;
  fill = false;
  added = false;
    constructor(private userServ: UsersService) {

    }

  ngOnInit() {
    this.courses = this.userServ.courses;
    this.groups = this.userServ.groups;
    this.facultys = this.userServ.facultys;
  }
  addNewUser(){
    const newUser = {
      id: this.userServ.users.length + 1,
      name: this.fullName,
      faculty: this.facultyName,
      group: this.groupName,
      course: this.courseName,
      phone: this.phoneNumber
    };
    console.log(this.users);
    if(this.fullName !== undefined
      && this.facultyName !== undefined
      && this.groupName !== undefined
      && this.courseName !== undefined
      && this.phoneNumber !== undefined) {
      this.users.push(newUser);
      this.userServ.users.push(newUser);
      this.fill = false;
      this.added = true;
      this.fullName = undefined;
      this.facultyName = undefined;
      this.groupName = undefined;
      this.courseName = undefined;
      this.phoneNumber = undefined;
    }else{
      this.fill = true;
    }
  }
}
