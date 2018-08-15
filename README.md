# Simple JWT Passport authentication

To use, run the following command `yarn install` or `npm install` in your terminal.

There are two available routes, `/login` and `/authenticated`.

The `login` route accepts a `POST` request with `username` and `password` fields in the body. If neither of those fields are present, an error will be thrown. The correct username and password is _user_ and _password_ respectively.

When the correct username and password are supplied to the `login` route, the server will return a JWT.

The `authenticated` route accepts a 'GET' request with the parameter `secretToken`. To access the route, please specify the value of `secretToken` to be the JWT returned from the `login` route.
Example:
`localhost:9000/authenticated?secretToken=<INSERT JWT TOKEN HERE>`
