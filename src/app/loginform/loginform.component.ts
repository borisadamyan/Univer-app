import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginUser(e){
    console.log(e);
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if(userName == 'admin' &&  password == 'admin'){
      this.router.navigate(['main']);
    }
  }

}
