## Features

- User registration
- User login
- User logout

## Tech Stack

(TBD - Insert your tech stack here)

## API Endpoints

### Register Endpoint

- **URL:** `/register`
- **Method:** `POST`
- **Request Body:**
  - `username`: string (required)
  - `password`: string (required)
- **Response:**
  - `user`: object (contains the newly created user data)
  - `token`: string (contains the authentication token)

**Example Request:**
```json
{
  "username": "johnDoe",
  "password": "password123"
}

Example Response:

json

{
  "user": {
    "_id": "1234567890",
    "username": "johnDoe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Login Endpoint

    URL: /login
    Method: POST
    Request Body:
        username: string (required)
        password: string (required)
    Response:
        user: object (contains the authenticated user data)
        token: string (contains the authentication token)

Example Request:

json

{
  "username": "johnDoe",
  "password": "password123"
}

Example Response:

json

{
  "user": {
    "_id": "1234567890",
    "username": "johnDoe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Logout Endpoint

    URL: /logout
    Method: GET
    Request Body: empty