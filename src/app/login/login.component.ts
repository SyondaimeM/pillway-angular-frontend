import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
import { Constant } from '../../conststnt';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logiObj: any = {
    "email": "",
    "password": ""
  };

  http= inject(HttpClient);
  router = inject(Router);

  encriptData(data: any) {
    return CryptoJS.AES.encrypt(data,Constant.EN_KEY).toString();
  }

  onLogin() {
    debugger;
    console.log("Login initiated with", this.logiObj); // Log the login object
  
    // Perform the login API call
    this.http.post("http://127.0.0.1:8000/api/login", this.logiObj).subscribe(
      (res: any) => {
        console.log("Response received:", res); // Log the response to inspect it
  
        if (res.token) {
          // Successful login, process the response
          alert("Login Success");
  
          const enrUserName = this.encriptData(this.logiObj.email);
          localStorage.setItem("uName", enrUserName);
          localStorage.setItem('angular18Token', res.token);
  
          this.router.navigateByUrl('/dashboard');
        } else {
          // Login failed, show error message
          alert(res.message || 'Login failed, please try again.');
        }
      },
      (error) => {
        // Error handling during HTTP request
        console.error("Error during login request:", error); // Log the error
        alert("An error occurred during login. Please check the console for details.");
      }
    );
  }
  
}
