# metamask-backend

metamask-backend is a Node.js is a App as a Part of Interview task , it manages routes, controller, and services, to handle request, and provides REST APIs for its Frontend part.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Linting and Formatting](#linting-and-formatting)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB and Mongoose**: ODM for MongoDB to manage data and schema.
- **Authentication**: JSON Web Token (JWT) based authentication with Passport.js.
- **Validation**: Request validation with Joi.
- **Security**: Various security improvements using Helmet, rate limiting, and data sanitization.
- **Logging**: Logging with Winston.
- **Testing**: Unit and integration tests using Jest and Supertest.
- **Linting and Formatting**: ESLint with Airbnb style guide and Prettier for code formatting.
- **Docker**: Docker support for development, testing, and production environments.
- **API Documentation**: Swagger for API documentation.
- **Environment Configuration**: dotenv for environment variable management.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=12.0.0)
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd metamask-backend
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start MongoDB if it's not already running:

```bash
mongod
```

2. Run the application in development mode:

```bash
npm run dev
```

3. The application should now be running on `http://localhost:3000`.

## Scripts

- `start`: Start the application using PM2.
- `dev`: Start the application in development mode using nodemon.
- `test`: Run tests.
- `test:watch`: Run tests in watch mode.
- `coverage`: Generate test coverage report.
- `coverage:coveralls`: Generate coverage report and send to Coveralls.
- `lint`: Run ESLint to lint the code.
- `lint:fix`: Run ESLint and fix issues.
- `prettier`: Check code formatting with Prettier.
- `prettier:fix`: Fix code formatting with Prettier.
- `docker:prod`: Start the application using Docker for production.
- `docker:dev`: Start the application using Docker for development.
- `docker:test`: Start the application using Docker for testing.
- `prepare`: Prepare Husky for Git hooks.


## Project Structure

```
.
├── bin
│   └── createNodejsApp.js
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.js
├── tests
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── docker-compose.test.yml
├── Dockerfile
├── ecosystem.config.json
├── jest.config.js
├── package.json
└── README.md
```

## API Documentation

API documentation is generated using Swagger. To view the API documentation, start the application and navigate to `http://localhost:3000/api-docs`.

## Testing

To run tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To generate a test coverage report:

```bash
npm run coverage
```

## Linting and Formatting

To lint the code:

```bash
npm run lint
```

To fix linting issues:

```bash
npm run lint:fix
```

To check code formatting:

```bash
npm run prettier
```

To fix code formatting:

```bash
npm run prettier:fix
```

## Docker

### Development

To start the application in a Docker container for development:

```bash
npm run docker:dev
```

### Production

To start the application in a Docker container for production:

```bash
npm run docker:prod
```

### Testing

To start the application in a Docker container for testing:

```bash
npm run docker:test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```