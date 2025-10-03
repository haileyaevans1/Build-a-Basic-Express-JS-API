# Assignment: Building Basic Express.js API

## Introduction

In this assignment, we will build a basic RESTful API using Express.js and TypeScript. The API will include endpoints for health checks, simulated authentication, and CRUD operations for managing a simple to-do list. We'll also implement middleware for logging and authentication, document the API endpoints, and test the functionality using Postman. By the end of this assignment, you'll have hands-on experience building and testing a fully functional API.

---

## **Working with Dev Container**

To complete this assignment in a reliable and fully configured environment, please refer to the instructions in the file: **`README-devcontainer.md`**. This guide walks you through opening the assignment in **Visual Studio Code** using a **Dev Container**, which automatically installs all necessary Python libraries and tools. Following that setup ensures that the notebook runs smoothly without manual configuration or missing dependencies. Make sure to open the **main assignment folder** in VS Code and follow the steps outlined in the Dev Container guide before starting the notebook.

---

## Starter Files

The initial codebase required to complete this assignment is provided in the `start` folder located within the `code` directory. This folder contains all necessary boilerplate code, configurations, and file structure to help you begin implementation efficiently. Make sure to review the contents before starting, as they include essential setup for the task.

---

## Requirements

We'll be working with Express.js and TypeScript to develop our API. Here's what we need to accomplish:

### Set Up the Development Environment

We need to:

- Initialize a Node.js project and install necessary dependencies.
- Configure TypeScript for the project.
- Use `nodemon` for development and `ts-node` for running TypeScript files directly.

### Build the Core Features

We need to implement the following functionalities:

**Health Check Endpoint:**

- Create a `/health` endpoint that returns a JSON response indicating the server is running.

**Simulated Authentication:**

- Create a `/protected` endpoint that requires a valid `Authorization` header with a Bearer token (`secret_token_123`) to grant access.

**CRUD Operations for To-Do List:**

- Implement endpoints for managing a simple to-do list:
  - **GET** `/api/todos`: Retrieve all tasks.
  - **POST** `/api/todos`: Add a new task.

**Middleware:**

- Implement logging middleware to log incoming requests.
- Implement authentication middleware to validate the `Authorization` header for protected routes.

**Type Safety:**

- Leverage TypeScript to enforce type checks throughout the API.
- Define interfaces for request/response objects where applicable.

### Test the API

We need to verify:

- The `/health` endpoint returns the expected response.
- The `/protected` endpoint grants access only with a valid token.
- Tasks can be added and retrieved via the `/api/todos` endpoints.
- Middleware functions correctly log requests and handle authentication.

---

## Deliverables

The deliverable of this assignment is a working Express.js API that meets all the requirements above. We need to submit:

- The public GitHub repository containing the source code.
- Screenshots showing:
  - The API running locally.
  - Responses from Postman for each endpoint.
- A brief README file explaining how to set up and run the API locally.
- Creat a simple API documentation for the used API.

---

## Conclusion

Building a basic Express.js API with TypeScript is an excellent way to practice creating RESTful services, implementing middleware, and leveraging TypeScript for type safety. By completing this activity, you've learned how to create a functional API with CRUD operations, authentication, and logging. These skills form the foundation for developing more complex and scalable APIs in the future.