import {Injectable} from '@angular/core';

@Injectable()
export class UsersService{
  tableHeadNames = [
    'Full Name',
    'Faculty',
    'Group',
    'Course',
    'Phone Number'
  ];
  users = [
    {
      id: 1,
      name: 'Jon Sfith',
      faculty: 'Mathematics',
      group: 'A',
      course: '2',
      phone: '+37497889900'
    },
    {
      id: 2,
      name: 'Hary Bengon',
      faculty: 'Bathematics',
      group: 'A',
      course: '3',
      phone: '+37495788944'
    },
    {
      id: 3,
      name: 'Ann Smith',
      faculty: 'Cibernetic',
      group: 'B',
      course: '4',
      phone: '+37477889219'
    },
    {
      id: 4,
      name: 'Lusy Sifth',
      faculty: 'Mathematics',
      group: 'A',
      course: '2',
      phone: '+37444889339'
    },
    {
      id: 5,
      name: 'Karen Erithon',
      faculty: 'Gathematics',
      group: 'B',
      course: '5',
      phone: '+37476589947'
    },
    {
      id: 6,
      name: 'Stiqfn Vioth',
      faculty: 'Cibernetic',
      group: 'A',
      course: '3',
      phone: '+37455889965'
    },
    {
      id: 7,
      name: 'Ydsy Smith',
      faculty: 'Mathematics',
      group: 'A',
      course: '4',
      phone: '+37477889987'
    },
    {
      id: 8,
      name: 'Nora Wlite',
      faculty: 'Mathematics',
      group: 'A',
      course: '3',
      phone: '+37477889910'
    },
    {
      id: 9,
      name: 'Budy Smith',
      faculty: 'Mathematics',
      group: 'A',
      course: '2',
      phone: '+37477889932'
    },
    {
      id: 10,
      name: 'Jjry Skizhx',
      faculty: 'Cibernetic',
      group: 'A',
      course: '1',
      phone: '+37477889953'
    },
    {
      id: 11,
      name: 'Busy Smcth',
      faculty: 'Gathematics',
      group: 'B',
      course: '2',
      phone: '+37477889906'
    },
    {
      id: 12,
      name: 'Funy Scith',
      faculty: 'Mathematics',
      group: 'A',
      course: '1',
      phone: '+37477384976'
    },
  ];
  courses = ['', '1', '2', '3', '4', '5'];
  groups = ['', 'A', 'B'];
  facultys= ['', 'Mathematics', 'Cibernetic', 'Gathematics'];
}
