import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  user;
  error;

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }

  signup() {
    const {username, password} = this.formInfo;
    this.auth.signup(username, password)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }



}
