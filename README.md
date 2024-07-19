# Task Manager Application

This is a full-stack task management application similar to Trello, built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to create, update, and manage tasks within different columns, with drag-and-drop functionality for moving tasks between columns.

## Repository Structure

The project is divided into two main folders:
- `client`: Contains the React frontend application
- `server`: Contains the Node.js/Express backend application

## Features

- User authentication (signup, login) via jwt
- Create, read, update, and delete tasks
- Drag-and-drop functionality for moving tasks between columns
- Responsive design based on provided mock designs
- RESTful API for task and user management
- Server-side validation for task and user data
- Basic security measures to protect against common vulnerabilities
- used emojis also 

## Technologies Used

- Frontend:
  - React (Create React App)
  - React Beautiful DnD for drag-and-drop functionality
  - Material-UI for UI components
- Backend:
  - Node.js
  - Express.js
- Database:
  - MongoDB

## Setup and Installation

1. Clone the repository:
   - git clone https://github.com/himanshuParashar0101/FullStack-Task-Manager-Application.git
     
2. cd 'FullStack-Task-Manager-Application'
   
3. Install dependencies:
   - Install backend dependencies(open new terminal)
   - cd server
   - npm install
   - npm start

4. Install Frontend Dependencies(again open new terminal)
   - cd ../client
   - npm install
   - npm install --legacy-peer-deps
   - npm start
     

## Project ScreenShots
   -SignUp Page with testing screenshot

![Screenshot](https://github.com/himanshuParashar0101/FullStack-Task-Manager-Application/blob/main/client/public/password%20testing.jpg)
 
  -Frontend ui-1

![Screenshot](https://github.com/himanshuParashar0101/FullStack-Task-Manager-Application/blob/main/client/public/Blank.jpg)

  -frontend ui-2
  ![Screenshot](https://github.com/himanshuParashar0101/FullStack-Task-Manager-Application/blob/main/client/public/Frontend.jpg)

  -Mongodb user auth data saving 
  ![ScreenShot](https://github.com/himanshuParashar0101/FullStack-Task-Manager-Application/blob/main/client/public/login.jpg)

  -MongoDB table data saving
  ![ScreenShot](https://github.com/himanshuParashar0101/FullStack-Task-Manager-Application/blob/main/client/public/section.jpg)

## Testing

This project includes unit tests for critical components of the application, particularly focusing on API endpoints and data validation.

### Backend Tests

To run the backend tests:

1. Navigate to the server directory:
   -cd server
2. Run the test command:
   -npm test
   -This will execute the test suite for the backend, which includes:
  - API endpoint tests
  - Data validation tests
  - Authentication middleware tests

### Frontend Tests

To run the frontend tests:

1. Navigate to the client directory: cd client
2. Run the test command:npm test:
   -This will start the test runner in interactive watch mode. 
Press `a` to run all tests.

The frontend tests include:
- Component rendering tests
- State management tests
- User interaction tests

### Test Coverage

To generate a test coverage report:

1. For backend:
 -cd server 
-npm run test:coverage
2. For frontend:cd client
npm run test:coverage
3.These commands will generate detailed reports on test coverage, helping identify areas of the code that may need additional testing.
