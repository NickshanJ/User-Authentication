User Authentication API

This project is a RESTful API for managing user authentication, including registration, login, and accessing protected routes. The API is built using Node.jsand Express, and it uses MongoDB Atlas as the database.

Features:

User Registration: Add a new user to the application.

User Login: Authenticate a user and provide a JWT token.

Protected Routes: Access user-specific information using the JWT token.

Technologies Used:

Node.js

Express

MongoDB Atlas

Mongoose

bcryptjs (for password hashing)

jsonwebtoken (for JWT)

dotenv (for environment variables)

cors (for Cross-Origin Resource Sharing)

Postman (for testing the API)

Installation:

Clone the Repository:

git clone https://github.com/NickshanJ/User-Authentication.git

cd user-authentication

Install Dependencies:

npm install


Project Structure:

index.js:

index.js is the central file of your application, responsible for connecting to the database, setting up the Express server, and defining the main routes for the API.

Database Connection: Connects to the MongoDB Atlas database.

Middleware: Sets up middleware to parse JSON requests and enable CORS.

Routes: Imports and uses the routes defined for the API endpoints.

config/db.js:

db.js is responsible for connecting to MongoDB Atlas.

Connection Function: Defines and exports the function to connect to the MongoDB Atlas database using Mongoose.

Error Handling: Logs any connection errors.

controllers/userController.js:

Contains the logic for handling requests and interacting with the database.

registerUser: Creates a new user.

loginUser: Authenticates a user and provides a JWT token.

getUserInfo: Retrieves user information for a logged-in user.

models/user.js:

Defines the Mongoose schema for the User model.

UserSchema: Defines the schema for a user, including username, email, and password fields.

Password Hashing: Uses bcrypt to hash passwords before saving them to the database.

middleware/authMiddleware.js:

Defines the middleware for JWT verification.

JWT Verification: Verifies the JWT token and attaches the user information to the request object.

routes/userRoutes.js:

Defines the API routes for the user authentication application.

POST /api/users/register: Create a new user.

POST /api/users/login: Login a user.

GET /api/users/me: Get user information (protected route).

Usage:

Register a User:

To create a new user, send a POST request to /api/users/register with the user data in the request body.

Example Request:

json
{
  "username": "nick",
  "email": "nick@gmail.com",
  "password": "1234"
}

Login User:

To authenticate a user, send a POST request to /api/users/login with the user credentials in the request body.

Example Request:

json
{
  "email": "nick@gmail.com",
  "password": "1234"
}

Example Response:

json
{
  "token": "your_jwt_token"
}

Get User Info:

To retrieve user information, send a GET request to /api/users/me with the JWT token in the request headers.

Example Request Header:

json
{
  "x-auth-token": "your_jwt_token"
}

Example Response:

json
{
  "username": "nick",
  "email": "nick@gmail.com",
  "_id": "user_id"
}

Error Handling:

The API provides standardized error responses for various scenarios, including invalid credentials, missing tokens, and server errors.

Security:

Password Hashing: Passwords are hashed using bcryptjs before being stored in the database.

JWT Authentication: JWTs are used for authentication and are securely signed with a secret key.
