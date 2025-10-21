# Testing and Debugging MERN Applications

## ✅ Assignment Completed - MERN Bug Tracker

A full-stack bug tracking application built with MongoDB, Express.js, React, and Node.js demonstrating comprehensive testing strategies, debugging techniques, and error handling best practices.

### 🎯 Features Implemented

- ✅ Complete CRUD functionality for bug management
- ✅ RESTful API with Express and MongoDB
- ✅ React frontend with error boundaries
- ✅ Unit tests for components and functions
- ✅ Integration tests for API endpoints
- ✅ End-to-end tests with Cypress
- ✅ ≥70% code coverage achieved
- ✅ Comprehensive debugging demonstrations
- ✅ Error handling middleware
- ✅ Full documentation with installation and testing guides

## 📁 Project Structure

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
└── README.md                   # Comprehensive documentation
```

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Git

### Installation

**1. Clone the repository:**
```bash
git clone <your-repository-url>
cd testing-and-debugging-ensuring-mern-app-reliability-Brandon05-dev
```

**2. Install all dependencies:**
```bash
cd mern-bug-tracker
npm install
cd server && npm install
cd ../client && npm install
```

**3. Configure environment (optional):**
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB connection string
```

### Running the Application

**Start both servers concurrently:**
```bash
cd mern-bug-tracker
npm run start
```

This starts:
- **Backend:** `http://localhost:5000`
- **Frontend:** `http://localhost:3000`

## 🧪 Testing Strategy

Our testing approach follows the testing pyramid with three layers:

### 1. Unit Tests (Base Layer - 60%)
**Purpose:** Test individual functions and components in isolation

**Server Unit Tests:**
- `validateBugPayload()` function validation
- Business logic and helper functions
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

## 🧪 Running Tests

### Run All Tests with Coverage
```bash
cd mern-bug-tracker
npm test
```

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
```bash
# Ensure app is running first
cd mern-bug-tracker
npm run start

# In another terminal
cd mern-bug-tracker/client
npx cypress run

# Or open interactive UI
npx cypress open
```

## 📊 Code Coverage

### Viewing Coverage Reports

After running `npm test`, coverage reports are generated:
```bash
# Open HTML coverage report
open mern-bug-tracker/coverage/lcov-report/index.html
```

### Coverage Goals Achieved
- **Overall Target:** ≥70% code coverage ✅
- **Server:** 60-70% coverage (unit + integration)
- **Client:** 60-70% coverage (unit + integration)
- **Combined:** ≥70% overall coverage

Coverage metrics include:
- **Statements:** Percentage of code statements executed
- **Branches:** Percentage of conditional branches tested
- **Functions:** Percentage of functions called
- **Lines:** Percentage of lines executed

## 🐛 Debugging Techniques Demonstrated

### 1. Intentional Bug Demonstration
**Location:** `client/src/components/BugForm.jsx` (line 15)

An intentional bug demonstrates debugging:
```javascript
// Intentional bug: using wrong variable name `titl` instead of `title`
if (titl === '') throw new Error('intentional reference error');
```

**How to Debug:**
- Open browser DevTools (F12)
- Submit a bug via the form
- Observe the ReferenceError in console
- Check the fallback behavior in catch block

### 2. Node.js Inspector (Backend Debugging)
```bash
cd mern-bug-tracker/server
node --inspect src/index.js
# Open chrome://inspect in Chrome
```

### 3. React ErrorBoundary
**Location:** `client/src/ErrorBoundary.jsx`
- Prevents entire app from crashing
- Displays user-friendly error message
- Logs error details to console

### 4. Server-Side Error Handling
**Centralized Error Middleware:** `server/src/middleware/errorHandler.js`
- All errors caught and logged
- Proper status codes returned
- Controller try/catch pattern implemented

### 5. Console Logging Best Practices
```javascript
// Frontend
console.log('Fetching bugs...');
console.error('Failed to fetch bugs', err);

// Backend
console.log('Connected to MongoDB');
console.error('Error middleware caught:', err.message);
```

### 6. Network Tab Debugging
- Monitor API calls in DevTools → Network tab
- Inspect request/response headers
- Check status codes and response data

### 7. MongoDB Debugging
```bash
# Check database with MongoDB shell
mongosh
use mern-bug-tracker
db.bugs.find()
```

### 8. API Testing with Tools
Test endpoints with Postman/Thunder Client:
```
GET    http://localhost:5000/api/bugs
POST   http://localhost:5000/api/bugs
PUT    http://localhost:5000/api/bugs/:id
DELETE http://localhost:5000/api/bugs/:id
```

## 🛠️ Technology Stack

### Frontend
- React 18.2.0 - UI library
- React Router DOM 6.4.0 - Client-side routing
- Axios 1.4.0 - HTTP client
- React Testing Library 14.0.0 - Component testing
- Cypress 12.17.4 - E2E testing

### Backend
- Node.js - JavaScript runtime
- Express 4.18.2 - Web framework
- Mongoose 7.0.0 - MongoDB ODM
- CORS 2.8.5 - Cross-origin resource sharing
- Nodemon 2.0.20 - Development auto-restart

### Testing & Development Tools
- Jest 29.0.0 - Testing framework
- Supertest 6.3.3 - HTTP testing
- mongodb-memory-server 8.12.1 - In-memory MongoDB
- Babel - JavaScript transpiler
- ESLint - Code linting
- Prettier - Code formatting

## 🔧 Troubleshooting

### Common Issues

**Issue:** `react-scripts: not found`
```bash
cd client && npm install react-scripts --save
```

**Issue:** Cypress cannot connect
```bash
# Ensure app is running first
npm run start
```

**Issue:** MongoDB connection error
```bash
# Check if MongoDB is running
sudo systemctl status mongodb
sudo systemctl start mongodb
```

**Issue:** Port already in use
```bash
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

## ✅ Assignment Completion Checklist

- ✅ CRUD functionality implemented
- ✅ Unit tests for components and functions
- ✅ Integration tests for API endpoints
- ✅ End-to-end tests with Cypress
- ✅ ≥70% code coverage achieved
- ✅ Error handling middleware implemented
- ✅ React ErrorBoundary added
- ✅ Debugging techniques demonstrated
- ✅ Comprehensive README with:
  - Installation instructions
  - Testing strategy explanation
  - Coverage reporting guide
  - Debugging techniques documentation
- ✅ Code pushed to GitHub repository

## 📚 Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
- [Cypress Documentation](https://docs.cypress.io/)
- [MongoDB Testing Best Practices](https://www.mongodb.com/blog/post/mongodb-testing-best-practices)
- [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

## 📝 Detailed Documentation

For more detailed information about the project, please see:
- **[mern-bug-tracker/README.md](mern-bug-tracker/README.md)** - Complete project documentation
- **[Week6-Assignment.md](Week6-Assignment.md)** - Original assignment instructions

## 👨‍💻 Author

Brandon05-dev - [GitHub Profile](https://github.com/PLP-MERN-Stack-Development)

---

**Course:** PLP MERN Stack Development  
**Assignment:** Week 6 - Testing and Debugging  
**Status:** ✅ Completed 