// // src/app/app.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { loginSuccess } from './auth/auth.actions';
// import { selectAuthToken } from './auth/auth.selectors';
// import { RouterOutlet } from '@angular/router';

// // @Component({
// //   selector: 'app-root',
// //   imports: [RouterOutlet],
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss'],
// // })

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent implements OnInit {
//   token: string | undefined;
//   title = 'pillway-angular-frontend';
 
// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_login_with_jwt_token';
}
