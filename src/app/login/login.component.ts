import { Component, OnInit } from '@angular/core';
import { PartnersServiceService } from '../services/partners-service.service';
import { User } from '../interfaces/user';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import Swal from 'sweetalert2';
import { Logindata } from '../interfaces/logindata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registeredUsers: User[] = [];
  userAuthentication: boolean = false;

  //loginform
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private partnersServiceRef: PartnersServiceService,
    private routerRef: Router
  ) {}
  ngOnInit(): void {
    this.partnersServiceRef.getCredential().subscribe((data:User[]) => {
      this.registeredUsers = data;
      console.log(this.registeredUsers);
    });
  }
     
  //getUserLoginDetails
  getUserLoginDetails() {
    for (let users of this.registeredUsers) {
      if (
        users.username == this.loginForm.value['username'] &&
        users.password == this.loginForm.value['password']
      ) {
        Swal.fire('success');
        this.loginForm.reset();
        this.routerRef.navigate(['/partners']);
        break;
      } else {
        Swal.fire('user', 'Login Failed', 'error');
      }
    }
  }
}
