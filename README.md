# Simple Passport authentication

To use, run the following command `yarn install` or `npm install` in your terminal.

Then run `yarn start:<example>` and navigate to the links below on `localhost:9000`.

For `<example>` there are two options available: `jwt-auth` and `session-auth`

## JWT Authentication
There are four available routes, `GET /`, `GET /login`, `POST /login` and `GET /authenticate`.

The `GET /` route is only accessible if a valid JWT is stored in local storage. A valid JWT is saved to local storage only after properly authenticating through the `GET /login` route.

The `GET /login` returns a page to login to see the index view. The correct username and password is *user* and *password* respectively.

The `POST /login` route accepts a request with `username` and `password` fields in the body. If either of those fields are not present or incorrect, an error will be returned. Otherwise, a valid JWT token will be returned.

The `GET /authenticate` route checks for the `bearer` authorization header for a valid JWT. If the JWT is valid, then a response is returned with a message and the username. Otherwise, an error is returned.

## Session Authentication
There are three available routes, `GET /`, `GET /login` and `POST /login`.

The `GET /` route is only accessible if there is a valid session stored on the server application. Otherwise, it will redirect you to the `GET /login` route.

The `GET /login` route returns a page to login to see the index view. The correct username and password is *user* and *password* respectively.

The `POST /login` route accepts a request with `username` and `password` fields in the body. If either of those fields are not present or incorrect, the server will redirect you to the login view. Otherwise, a session will be established and you will be redirected to the index view.
