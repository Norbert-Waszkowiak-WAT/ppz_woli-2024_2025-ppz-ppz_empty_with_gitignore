
## Features

* User registration
* User login

## Tech Stack


## API Endpoints

### Register Endpoint

* **URL:** `/register`
* **Method:** `POST`
* **Request Body:**
	+ `username`: string (required)
	+ `password`: string (required)
* **Response:**
	+ `user`: object (contains the newly created user data)
	+ `token`: string (contains the authentication token)

Example Request:
{
  "username": "johnDoe",
  "password": "password123"
}
Example Response:
{
  "user": {
    "_id": "1234567890",
    "username": "johnDoe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
### Register Endpoint

URL: /login
Method: POST
Request Body:
username: string (required)
password: string (required)
Response:
user: object (contains the authenticated user data)
token: string (contains the authentication token)
Example Request:
{
  "username": "johnDoe",
  "password": "password123"
}
Example Response:
{
  "user": {
    "_id": "1234567890",
    "username": "johnDoe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
 ### logout
 URL /logout
 Method: Get
 Body:
 empty

 
