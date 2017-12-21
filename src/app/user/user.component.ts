import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {
  tableHeadNames = [];
  users = [];
  searchStr = '';
  searchPhone = '';
  courses = [];
  groups = [];
  facultys = [];
  selected;
  selectedGroup;
  selectedData;
  selectedCourse;
  constructor( private userServ: UsersService) {
    this.users = this.userServ.users;
    this.tableHeadNames = this.userServ.tableHeadNames;
    this.courses = this.userServ.courses;
    this.groups = this.userServ.groups;
    this.facultys = this.userServ.facultys;
    this.selectedData = this.users;
  }
  ngOnInit() {
  }
}
