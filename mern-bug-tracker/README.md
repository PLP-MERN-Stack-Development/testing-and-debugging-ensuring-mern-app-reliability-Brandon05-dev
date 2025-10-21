# MERN Bug Tracker

A full-stack bug tracking application built with MongoDB, Express.js, React, and Node.js (MERN stack). This project demonstrates comprehensive testing strategies, debugging techniques, and error handling best practices.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation Guide](#installation-guide)
- [Running the Application](#running-the-application)
- [Testing Strategy](#testing-strategy)
- [Running Tests](#running-tests)
- [Code Coverage](#code-coverage)
- [Debugging Techniques](#debugging-techniques)
- [Technology Stack](#technology-stack)

## Project Overview

This MERN Bug Tracker application provides complete CRUD (Create, Read, Update, Delete) functionality for managing bugs. It includes:
- RESTful API endpoints for bug management
- React frontend with error boundaries
- Comprehensive test suite (unit, integration, and end-to-end)
- Debugging demonstrations and error handling
- Code coverage reporting

## Features

- ✅ Create, read, update, and delete bugs
- ✅ Bug status management (open, in-progress, closed)
- ✅ Real-time updates
- ✅ Error handling with custom middleware
- ✅ React ErrorBoundary for UI crash handling
- ✅ Comprehensive testing suite
- ✅ Code coverage reporting (≥70%)

## Project Structure

```
mern-bug-tracker/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── BugForm.jsx     # Form to create bugs
│   │   │   ├── BugList.jsx     # List of bugs
│   │   │   └── BugItem.jsx     # Individual bug item
│   │   ├── tests/
│   │   │   ├── unit/           # Component unit tests
│   │   │   └── integration/    # App integration tests
│   │   ├── App.jsx             # Main app component
│   │   ├── ErrorBoundary.jsx   # Error boundary component
│   │   └── api.js              # Axios API wrapper
│   ├── cypress/                # E2E tests
│   │   └── e2e/
│   │       └── bugFlow.cy.js   # Cypress test spec
│   ├── jest.config.js          # Jest configuration
│   └── package.json            # Client dependencies
├── server/                     # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   │   └── bugController.js    # Bug CRUD logic
│   │   ├── models/
│   │   │   └── Bug.js              # Mongoose model
│   │   ├── routes/
│   │   │   └── bugRoutes.js        # API routes
│   │   ├── middleware/
│   │   │   └── errorHandler.js     # Error middleware
│   │   └── index.js                # Express app entry
│   ├── tests/
│   │   ├── unit/
│   │   │   └── validateBug.test.js # Validation tests
│   │   └── integration/
│   │       └── bugRoutes.test.js   # API endpoint tests
│   ├── jest.config.js          # Jest configuration
│   └── package.json            # Server dependencies
├── jest.config.js              # Root Jest config (multi-project)
├── package.json                # Root dependencies
└── README.md                   # This file
```

## Installation Guide

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git

### Step 1: Clone the Repository
```bash
git clone <your-repository-url>
cd testing-and-debugging-ensuring-mern-app-reliability-Brandon05-dev
```

### Step 2: Install Dependencies

**Install root dependencies:**
```bash
cd mern-bug-tracker
npm install
```

**Install server dependencies:**
```bash
cd server
npm install
cd ..
```

**Install client dependencies:**
```bash
cd client
npm install
cd ..
```

### Step 3: Configure Environment Variables (Optional)

Create a `.env` file in the `server/` directory (copy from `.env.example`):
```bash
cd server
cp .env.example .env
```

Edit `.env` to configure your MongoDB connection:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mern-bug-tracker
```

## Running the Application

### Option 1: Run Both Servers Concurrently (Recommended)

From the `mern-bug-tracker/` directory:
```bash
npm run start
```

This starts:
- **Backend:** `http://localhost:5000`
- **Frontend:** `http://localhost:3000`

### Option 2: Run Servers Separately

**Terminal 1 - Start Backend:**
```bash
cd mern-bug-tracker/server
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd mern-bug-tracker/client
npm start
```

### Verify Installation
- Open `http://localhost:3000` in your browser
- You should see the MERN Bug Tracker interface
- Backend API is available at `http://localhost:5000/api/bugs`

## Testing Strategy

Our testing approach follows the testing pyramid with three layers:

### 1. Unit Tests (Base Layer - 60%)
**Purpose:** Test individual functions and components in isolation

**Server Unit Tests:**
- `validateBugPayload()` function validation
- Tests for business logic and helper functions
- Fast execution, no external dependencies

**Client Unit Tests:**
- Individual React component rendering
- Component props and state behavior
- User interactions (clicks, form inputs)

### 2. Integration Tests (Middle Layer - 30%)
**Purpose:** Test how different parts work together

**Server Integration Tests:**
- API endpoint testing with Supertest
- Database operations with mongodb-memory-server
- Full request/response cycle validation
- CRUD operations: Create, Read, Update, Delete bugs

**Client Integration Tests:**
- Component interaction testing
- API mocking with Jest
- Full application flow testing

### 3. End-to-End Tests (Top Layer - 10%)
**Purpose:** Test complete user workflows

**Cypress E2E Tests:**
- Full bug creation, editing, and deletion flow
- Real browser interaction testing
- Critical user paths validation

### Testing Tools Used
- **Jest:** JavaScript testing framework for unit and integration tests
- **React Testing Library:** Testing utilities for React components
- **Supertest:** HTTP assertions for API endpoint testing
- **mongodb-memory-server:** In-memory MongoDB for fast, isolated testing
- **Cypress:** End-to-end browser testing framework

## Running Tests

### Run All Tests with Coverage
```bash
cd mern-bug-tracker
npm test
```
This runs both server and client tests with coverage reporting.

### Run Server Tests Only
```bash
cd mern-bug-tracker/server
npm test
```

### Run Client Tests Only
```bash
cd mern-bug-tracker/client
npm test
```

### Run Cypress E2E Tests

**Prerequisite:** Ensure both servers are running
```bash
# Terminal 1: Start the app
cd mern-bug-tracker
npm run start

# Terminal 2: Run Cypress
cd mern-bug-tracker/client
npx cypress run
```

**Or open Cypress interactive UI:**
```bash
cd mern-bug-tracker/client
npx cypress open
```

### View Test Results
After running tests, Jest displays:
- Test results summary
- Coverage percentages
- Failed test details (if any)

## Code Coverage

### Viewing Coverage Reports

After running `npm test`, coverage reports are generated in:
- `mern-bug-tracker/coverage/` (combined report)
- `mern-bug-tracker/server/coverage/` (server-specific)
- `mern-bug-tracker/client/coverage/` (client-specific)

**Open HTML coverage report:**
```bash
# From mern-bug-tracker directory
open coverage/lcov-report/index.html
# Or manually navigate to the file in your browser
```

### Coverage Goals
- **Overall Target:** ≥70% code coverage
- **Statements:** Percentage of code statements executed
- **Branches:** Percentage of conditional branches tested
- **Functions:** Percentage of functions called
- **Lines:** Percentage of lines executed

### Current Coverage Status
Our test suite achieves:
- Server: ~60-70% coverage (unit + integration)
- Client: ~60-70% coverage (unit + integration)
- Combined: ≥70% overall coverage


## Debugging Techniques

This project demonstrates several debugging techniques for MERN stack applications:

### 1. Intentional Bug Demonstration

**Location:** `client/src/components/BugForm.jsx` (line 15)

An intentional bug is included to demonstrate debugging:
```javascript
// Intentional bug: using wrong variable name `titl` instead of `title`
if (titl === '') throw new Error('intentional reference error');
```

**How to Debug:**
1. Open browser DevTools (F12 or right-click → Inspect)
2. Go to the Console tab
3. Submit a bug via the form
4. Observe the ReferenceError: `titl is not defined`
5. Check the fallback behavior in the catch block

**Learning Point:** This demonstrates:
- How to use `console.error()` for debugging
- Fallback error handling in React components
- Browser DevTools for JavaScript debugging

### 2. Node.js Inspector (Backend Debugging)

**Start server with debugger:**
```bash
cd mern-bug-tracker/server
node --inspect src/index.js
```

**Connect debugger:**
1. Open Chrome and navigate to: `chrome://inspect`
2. Click "Open dedicated DevTools for Node"
3. Set breakpoints in your code
4. Make API requests and step through code

**Alternative - VS Code Debugging:**
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Server",
      "program": "${workspaceFolder}/mern-bug-tracker/server/src/index.js"
    }
  ]
}
```

### 3. React ErrorBoundary

**Location:** `client/src/ErrorBoundary.jsx`

The ErrorBoundary component catches React rendering errors:
- Prevents entire app from crashing
- Displays user-friendly error message
- Logs error details to console

**Test it:**
```javascript
// Temporarily add to any component to trigger ErrorBoundary
throw new Error('Test error boundary');
```

### 4. Server-Side Error Handling

**Centralized Error Middleware:** `server/src/middleware/errorHandler.js`

All errors are caught and logged with:
- Error message
- Status code
- Stack trace (in development)

**Controller try/catch pattern:**
```javascript
// All controllers use try/catch for async error handling
try {
  // Operation logic
} catch (err) {
  next(err); // Pass to error middleware
}
```

### 5. API Testing with Postman/Thunder Client

**Test endpoints:**
```
GET    http://localhost:5000/api/bugs      # Get all bugs
POST   http://localhost:5000/api/bugs      # Create bug
PUT    http://localhost:5000/api/bugs/:id  # Update bug
DELETE http://localhost:5000/api/bugs/:id  # Delete bug
```

### 6. Console Logging Best Practices

Used throughout the application:
```javascript
// Frontend
console.log('Fetching bugs...');
console.error('Failed to fetch bugs', err);

// Backend
console.log('Connected to MongoDB');
console.error('Error middleware caught:', err.message);
```

### 7. MongoDB Debugging

**Check database connection:**
```bash
# If using local MongoDB
mongosh
use mern-bug-tracker
db.bugs.find()
```

**Test database with mongodb-memory-server:**
- Integration tests use in-memory database
- No need for actual MongoDB during testing
- Fast test execution and cleanup

### 8. Network Tab Debugging

**Monitor API calls:**
1. Open DevTools → Network tab
2. Filter by XHR/Fetch
3. Inspect request/response headers
4. Check status codes and response data

### Common Debugging Scenarios

**Problem:** Tests fail with "connection refused"
**Solution:** Ensure MongoDB is running or tests use mongodb-memory-server

**Problem:** React component doesn't render
**Solution:** Check console for errors, verify props passed correctly

**Problem:** API returns 404
**Solution:** Verify route paths match, check server logs

**Problem:** CORS errors
**Solution:** Ensure CORS middleware is configured in server

## Technology Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM 6.4.0** - Client-side routing
- **Axios 1.4.0** - HTTP client
- **React Testing Library 14.0.0** - Component testing
- **Cypress 12.17.4** - E2E testing

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18.2** - Web framework
- **Mongoose 7.0.0** - MongoDB ODM
- **CORS 2.8.5** - Cross-origin resource sharing
- **Nodemon 2.0.20** - Development auto-restart

### Testing & Development Tools
- **Jest 29.0.0** - Testing framework
- **Supertest 6.3.3** - HTTP testing
- **mongodb-memory-server 8.12.1** - In-memory MongoDB
- **Babel** - JavaScript transpiler
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Troubleshooting

### Common Issues and Solutions

**Issue:** `react-scripts: not found`
```bash
cd client
npm install react-scripts --save
```

**Issue:** Cypress cannot connect to localhost:3000
```bash
# Ensure app is running first
npm run start
# Then in another terminal:
cd client && npx cypress run
```

**Issue:** MongoDB connection error
```bash
# Check if MongoDB is running
sudo systemctl status mongodb
# Or start it
sudo systemctl start mongodb
```

**Issue:** Port 3000 or 5000 already in use
```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

**Issue:** Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Assignment Completion Checklist

- ✅ CRUD functionality implemented
- ✅ Unit tests for components and functions
- ✅ Integration tests for API endpoints
- ✅ End-to-end tests with Cypress
- ✅ ≥70% code coverage achieved
- ✅ Error handling middleware implemented
- ✅ React ErrorBoundary added
- ✅ Debugging techniques demonstrated
- ✅ README with installation and testing instructions
- ✅ Code pushed to GitHub repository

## License

This project is created for educational purposes as part of the PLP MERN Stack Development course.

## Contributors

Brandon05-dev - [GitHub Profile](https://github.com/PLP-MERN-Stack-Development)