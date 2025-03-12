import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logiObj: any = {
    "email": "",
    "password": ""
  };
  errorMessage: string = ''; // Store error messages

  http = inject(HttpClient);
  router = inject(Router);

  encriptData(data: any) {
    return CryptoJS.AES.encrypt(data, '123Wer').toString();
  }

  onLogin() {
    this.errorMessage = ''; // Reset error message

    this.http.post("http://127.0.0.1:8000/api/login", this.logiObj).subscribe(
      (res: any) => {
        if (res.token) {
          const enrUserName = this.encriptData(this.logiObj.email);
          localStorage.setItem("uName", enrUserName);
          localStorage.setItem('angular18Token', res.token);

          this.router.navigateByUrl('/dashboard');
        } else {
          this.errorMessage = res.message || 'Login failed, please try again.';
        }
      },
      (error) => {
        console.error("Error during login request:", error);
        this.errorMessage = "Invalid credentials. Please try again.";
      }
    );
  }
}
