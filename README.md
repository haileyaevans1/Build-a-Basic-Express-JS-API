# Building a Basic Express.js API

## Description
This project is a basic RESTful API built with **Express.js** and **TypeScript**.  
It includes:
- A health check endpoint (`/health`)  
- A protected route with token authentication (`/protected`)  
- CRUD operations for a simple to-do list (`/api/todos`)  
- Logging middleware for incoming requests  

---

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-link>
cd <your-repo-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The server will run at: http://localhost:3000

---

## API Endpoints
Method	    Endpoint	        Description	                            Auth
GET	        /health	Check       server health	                        X
GET	        /protected	        Protected route (requires token)	    good
GET	        /api/todos	        Retrieve all todos	                    X
POST	    /api/todos	        Add a new todo	                        X

---

## Authentication
To access the /protected endpoint, include this header in your request:
    Authorization: Bearer secret_token_123

Requests without this token will return:
    { "error": "Unauthorized. Invalid or missing token." }

Requests with the correct token will return:
    { "message": "Access granted to protected route" }

---

## Testing Instructions
1. Open Postman or your browser.
2. Test each endpoint:

### Health Check
    GET http://localhost:3000/health

Response:
    { "status": "OK", "message": "Server is running" }


Protected Endpoint
    GET http://localhost:3000/protected
    Headers: Authorization: Bearer secret_token_123

To-Do List
-GET /api/todos → retrieves all todos
-POST /api/todos → adds a new todo
    Body (JSON):
        { "task": "Finish assignment" }
