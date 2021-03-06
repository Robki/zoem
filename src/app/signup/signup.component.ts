import { Component, OnInit } from '@angular/core';

import { LoginComponent } from '../login/login.component'
import { User } from "../models/user"
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'zm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(private http:HttpClient){
    this.user = new User();
  }
 //TODO registration
  public user: User;
  sign():void{

    this.user.firstname = (<HTMLInputElement>document.getElementById('firstname')).value;
    this.user.lastname = (<HTMLInputElement>document.getElementById('lastname')).value;
    this.user.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.user.password = (<HTMLInputElement>document.getElementById('psw')).value;



    this.http.post('http://localhost:3000/api/register', this.user)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
    console.log(this.user);
  }
  //close the registration
  
  close():void{
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';
  }
  //show login and hide registration
  gologin():void{
    (<HTMLInputElement>document.getElementById('modal2')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';

  }


 



}
