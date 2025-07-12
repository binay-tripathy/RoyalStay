# RoyalStay Hotel Management System

A full-stack hotel management application built with React frontend and Spring Boot backend.

## Features

- User authentication and authorization
- Room booking and management
- Admin panel for hotel management
- Room search and filtering
- Booking management
- JWT-based security
- Swagger API documentation

## Tech Stack

### Frontend
- React.js 18
- React Router v6
- Axios for API calls
- CSS for styling

### Backend
- Spring Boot 3.3.0
- Spring Security 6
- Spring Data JPA
- MySQL Database 8.0+
- JWT Authentication
- Swagger/OpenAPI 3
- AWS S3 (for image storage)

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- Java 21
- MySQL 8.0+
- Maven 3.6+

### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Configure database in `application.properties`
3. Create `.env` file with environment variables
4. Run: `mvn spring-boot:run`
5. Access Swagger UI at: `http://localhost:4040/swagger-ui.html`

### Frontend Setup
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Access application at: `http://localhost:3000`

## Environment Variables

Create `.env` file in backend directory:
```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=royalstay
DB_USERNAME=your_username
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key_here
```

## API Documentation

Once the backend is running, access the API documentation at:
- Swagger UI: `http://localhost:4040/swagger-ui.html`
- API Docs: `http://localhost:4040/api-docs`

## Default Admin Access

After first run, create an admin user through the registration endpoint or database directly.

## License

This project is licensed under the MIT License.
