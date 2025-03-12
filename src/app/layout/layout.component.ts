import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) {}

  logout() {
    try {
      // Remove the token from local storage
      const tokenKey = 'angular18Token';
      console.log('Before removal:', JSON.stringify(localStorage));
      localStorage.removeItem(tokenKey);
      console.log('After removal:', JSON.stringify(localStorage));
      console.log(`${tokenKey} removed from local storage.`);
      alert('done');
    } catch (error) {
      console.error('Error removing token from localStorage:', error);
    }

    // Redirect to the login page
    this.router.navigate(['/login']).then(() => {
      console.log('Navigation to login page completed');
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
}
