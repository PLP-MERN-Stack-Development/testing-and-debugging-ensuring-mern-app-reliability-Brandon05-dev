# MERN Bug Tracker

This is a sample MERN stack bug tracker built to satisfy the assignment requirements: full CRUD, unit/integration/e2e tests, error handling, and debugging demonstrations.

Folders:
- client/: React frontend
- server/: Express + MongoDB backend

Requirements covered:
- CRUD endpoints for /api/bugs
- Unit tests (Jest), integration tests (Supertest + mongodb-memory-server), React Testing Library tests
- Cypress end-to-end test
- Error handling and an intentional UI bug + comments showing debugging steps

Getting started

1. Install root dev deps and subproject deps

```bash
# from the repo root
npm install
cd mern-bug-tracker/server
npm install
cd ../client
npm install
```

2. Run app (starts both server and client concurrently)

```bash
cd mern-bug-tracker
npm run start
```

Server defaults to port 5000. Client assumes API requests proxied or served from same origin during development — set REACT_APP_API_URL if needed.

Tests

- Run all Jest tests and coverage report:

```bash
cd mern-bug-tracker
npm test
```

- Run server tests only:

```bash
cd mern-bug-tracker/server
npm test
```

- Run client tests only:

```bash
cd mern-bug-tracker/client
npm test
```

- Open Cypress e2e:

```bash
cd mern-bug-tracker
npx cypress open --project client
```

Debugging notes

- Intentional UI bug: in `client/src/components/BugForm.jsx` there's a deliberate ReferenceError (`titl`) to demonstrate debugging. Use browser devtools console to inspect the error and see fallback behavior in the component.
- Server-side error handling is centralized in `server/src/middleware/errorHandler.js` and controllers use try/catch. Run the server with inspector:

```bash
node --inspect server/src/index.js
```

Coverage

After running `npm test` at root, open the generated coverage report in `coverage/lcov-report/index.html`.

Screenshots (placeholders)

![Coverage screenshot](./docs/coverage-placeholder.png)

Test results summary

- Unit tests: server + client helpers/components
- Integration tests: API endpoints via mongodb-memory-server
- E2E: Cypress script in `client/cypress/e2e/bugFlow.cy.js` (assumes app running)


# Verification Instructions

## 1. Install all dependencies

```bash
# From the repo root
cd mern-bug-tracker
npm install
cd server && npm install
cd ../client && npm install
```

## 2. Run the app (start both servers)

```bash
cd mern-bug-tracker
npm run start
# This runs both backend (port 5000) and frontend (port 3000)
```

## 3. Run all tests and coverage

```bash
cd mern-bug-tracker
npm test
# Coverage report: open coverage/lcov-report/index.html
```

## 4. Run Cypress end-to-end tests

```bash
# App must be running (see step 2)
cd mern-bug-tracker/client
npx cypress run
# or open interactive UI:
npx cypress open
```

## 5. Debugging

- UI bug: Open browser devtools on the BugForm, submit with empty title to see intentional ReferenceError and fallback.
- Server: Run with Node inspector for step debugging:
	```bash
	cd mern-bug-tracker/server
	node --inspect src/index.js
	```
- React ErrorBoundary: Try breaking a component to see error UI.

## 6. Troubleshooting

- If you see `react-scripts: not found`, ensure `npm install` completed in `client/`.
- If Cypress cannot connect, make sure both servers are running.

---

This completes the full assignment: install, run, test, debug, and verify the MERN Bug Tracker.
