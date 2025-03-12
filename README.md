
# Pillway - Angular Frontend

## Overview

This repository contains the Angular frontend for the Pillway project, a dynamic dashboard application with user authentication, a data table integrated with an API, and several interactive features like search/filtering, pagination, sorting, and a dark mode toggle.

### Features

- **User Authentication**: Implements JWT-based authentication for secure user login.
- **Dynamic Data Table**: Displays data fetched from an API (`https://jsonplaceholder.typicode.com/posts`) in a table with features like pagination, sorting, and filtering.
- **State Management**: Uses Angular Signals to manage state reactively.
- **Performance Optimizations**: Lazy loading and other performance enhancements for better scalability.
- **Dark Mode Toggle**: Allows users to toggle between light and dark themes.

### Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SyondaimeM/pillway-angular-frontend.git
   cd pillway-angular-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Serve the application:
   ```bash
   ng serve
   ```

   The frontend should now be available at `http://localhost:4200`.

### Dependencies

- **Angular Material**: For UI components like tables, inputs, paginator, etc.
- **NgRx or Angular Signals**: For state management.

### File Structure

- **app/post/post.component.ts**: Manages the logic for the post table, including pagination, filtering, sorting, and dark mode.
- **app/app.module.ts**: Contains the main module for the Angular app.
- **assets/styles.css**: Global styles for the frontend, including dark mode styling.

### Testing

Unit tests have been added to ensure the frontend features, including table sorting and pagination, work as expected.

To run the tests:
```bash
ng test
```
### 🛠️ Project Setup

To get the application running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SyondaimeM/pillway-angular-frontend.git
   cd pillway-angular-frontend
   
![Dashboard Screenshot]