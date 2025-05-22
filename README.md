# Simple User CRUD API

A basic Node.js Express application providing CRUD (Create, Read, Update, Delete) operations for users. It uses MongoDB as its database.

## Setup and Running

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Ensure MongoDB is running:**
    This application connects to a MongoDB instance using the connection string found in `app/config/db.config.js` (default: `mongodb://localhost:27017/myapi`). Make sure your MongoDB server is running and accessible.

3.  **Start the Server:**
    ```bash
    node server.js
    ```
    The server will typically start on `http://localhost:8080`.

## Development Notes

During a recent attempt to update the project, the following issues were encountered:

### Dependency Update Issues

-   Updating core dependencies (such as Express, Mongoose, body-parser) to their latest stable versions led to a persistent runtime error: `Error: Cannot find module '../encodings'` originating from the `iconv-lite` package (a sub-dependency).
-   Attempts to resolve this by explicitly adding `iconv-lite` as a direct dependency or performing clean reinstalls of `node_modules` were unsuccessful.
-   The project was reverted to its original dependency versions to maintain stability.

### Test Suite Setup Issues

-   Attempts to set up a test suite using Jest and Supertest were hindered by module resolution errors.
-   Specifically, errors like `Cannot find module 'supertest'` and `Cannot find module '../app/Model/UserModel.js'` (or variations of the model path) occurred when running `npm test`.
-   These issues persisted despite confirming module installations, trying different path syntaxes, and ensuring `npm install` completed successfully.
-   Due to these persistent environment/resolution issues, the test suite was not added.

These notes are for future developers who may attempt to update dependencies or implement a testing framework. Further investigation into the environment or specific dependency conflicts would be needed.
