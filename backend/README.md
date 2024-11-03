## Features

- User registration
- User login
- User logout

## Tech Stack

(TBD - Insert your tech stack here)

## API Endpoints
The program does not check if emails are valid!!!
### Register Endpoint

- **URL:** `/users/register`
- **Method:** `POST`
- **Request Body:**
  - `username`: string (required)
  - `email`: string (required,unique)
  - `password`: string (required)
- **Response:**
  - `user`: object (contains the newly created user data)
  - `token`: string (contains the authentication token)

**Example Request:**
```json
{
	"username":"negro",
	"email": "alexanderdawi1@hotmail.com",
	"password": "negromancer"
	
}

Example Response:

json

{
	"msg": "Now please verify your email",
	"userId": "672797f0c2acec05a02dc4ab",
	"userName": "negro",
	"userEmail": "alexanderdawi1@hotmail.com"
}
will return this json if the email is already in use
```json
{
	"message": "Email already used",
	"error": "Unauthorized",
	"statusCode": 401
}
Login Endpoint

    URL: /users/login
    Method: POST
    Request Body:
        email: string (required)
        password: string (required)
    Response:
        user: object (contains the authenticated user data)
        token: string (contains the authentication token)

Example Request:

json

{
  "email": "johnDoe@negro300.com",
  "password": "password123"
}

Example Response:

json

{
	"User": {
		"userId": "672797f0c2acec05a02dc4ab",
		"userName": "negro"
	},
	"msg": "User logged in"
}
will return this json if the email is not verfied
json
{
	"message": "Please verify your email address",
	"error": "Unauthorized",
	"statusCode": 401
}
and this json if email is not found
json
{
	"message": "email incorrect",
	"error": "Unauthorized",
	"statusCode": 401
}
and this json if password incorrect
{
	"message": "Password Incorrect",
	"error": "Unauthorized",
	"statusCode": 401
}
verify-sentcode Endpiont

    URL: /users/verify-sentcode
    Method: POST
    Request Body:
        email: string (required)
        code: string (required)
        password : string (required)
    Response:
        message: string (contains the success message)

Example Request:

json

{
  "email": "johnDoe@negro300.com",
  "password": "password123",
  "code": "123456"
}
response
json 
{
  "message": "Email verified successfully"
}
resend-verification-code Endpiont

    URL: /users/resend-verification-code  
    Method: POST  
    Request Body: email
    Response:
        message: string (contains the success message)

Example Request:

json

{
  "email": "johnDoe@negro300.com"
}
response
json {
  "message": "Verification code sent successfully"
}
reset-password Endpiont

    URL: /users/reset-password
    Method: POST
    Request Body:email
    Response:
        message: string (contains the success message)

Example Request:

json

{
  "email": "johnDoe@negro300.com"
}
response
{
  "message": "Password reset email sent"
}
or if incorrect email
{
  "message": "Email not found"
}
reset-password/:token Endpoint
Part 2 of reseting a password

    URL: /users/reset-password/:token
    Method: POST
    Request Body: password
    Response:
        message: string (contains the success message)

Example Request:

json

{
  "password": "password123"
}
response
{
  "message": "Password reset successful"
}
if token invalid or expired
{
  "message": "Invalid or expired token"
}
delete-user Endpiont

    URL: /users/delete-user
    Method: post
    Request Body: email,password (required)
    Response:
        message: string (contains the success message)

Example Request:

json

{
  "email": "johnDoe@negro300.com",
  "password": "password123"
}
response 
{
  "message": "User deleted successfully"
}
if password is incorrect
{
  "message": "Invalid password"
}
Logout Endpoint

    URL: /logout
    Method: GET
    Request Body: empty