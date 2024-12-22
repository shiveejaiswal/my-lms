# My LMS (Learning Management System)

## Description

**My LMS** is a web-based application designed to manage the learning process efficiently. The system provides a platform for administrators, instructors, and students to interact in a streamlined manner. Administrators can manage user accounts, courses, and content, while instructors can upload materials, and students can access course content and track their progress.

This project utilizes modern technologies such as React for the frontend, Node.js for the backend, and a MySQL database for data storage.

## Features

- **User Authentication**: Admin, Instructor, and Student roles with login and registration functionality.
- **Course Management**: Admins can create and manage courses, including uploading materials, setting deadlines, and assigning instructors.
- **Content Delivery**: Instructors can upload videos, notes, and other learning materials for students to access.
- **Student Dashboard**: Students can view their courses, track their progress, and download materials.
- **Responsive Design**: Fully responsive UI to support various screen sizes.
- **Dark Mode**: Toggle between light and dark modes for improved accessibility.

## Technologies Used

- **Frontend**: React, CSS, Tailwind CSS (for styling)
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Version Control**: Git, GitHub

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MySQL or a compatible database setup

### Clone the repository

```bash
git clone https://github.com/yourusername/my-lms.git
cd my-lms
```

### Install dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd server
npm install
```

### Configuration

1. **Database Configuration**: Set up a MySQL database and update the credentials in the backend configuration file (e.g., `config.js`).
2. **Environment Variables**: Create a `.env` file in the backend folder and set the following variables:
    ```
    DB_HOST=your-database-host
    DB_USER=your-database-user
    DB_PASSWORD=your-database-password
    DB_NAME=your-database-name
    JWT_SECRET=your-jwt-secret-key
    ```

### Run the application

For the backend:

```bash
cd server
npm start
```

For the frontend:

```bash
cd client
npm start
```

Visit `http://localhost:3000` in your browser to access the application.

## Usage

1. **Login/Register**: Users can sign up and log in with their credentials. Admins can manage user roles from the admin panel.
2. **Course Management**: Admins and instructors can manage courses, upload materials, and set deadlines.
3. **Student Dashboard**: Students can view enrolled courses, track progress, and download learning materials.
