# Backend for Newsmag Version 2

This is the backend application for the Newsmag Version 2 project. It is built using Node.js and Express, and it serves as the API for managing articles.

## Project Structure

- **src/app.ts**: Entry point of the application. Initializes the Express app and sets up middleware and routes.
- **src/controllers/index.ts**: Contains the `IndexController` class for handling article-related routes.
- **src/routes/index.ts**: Defines the routes for the application and connects them to the controller methods.
- **src/models/index.ts**: Defines the `Article` model, representing the structure of an article.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the application, run the following command:
```
npm start
```

The server will start on `http://localhost:3000` by default.

### API Endpoints

- **GET /articles**: Retrieve a list of articles.
- **GET /articles/:id**: Retrieve a specific article by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.