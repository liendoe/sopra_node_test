# Node API Test

- Node version: v12.18.1

## About
Middleware API to manage users, roles, and policies from a third party API.

## Getting Started
- Download or clone the repository in your computer and run
```
npm install
```
- Once installed it can be used and tested
## Develop
nodemon installed globally is required
```
npm run dev
```

## Run Tests
```
npm test
```
## Entry Points
### Without authorization
- Root: `GET localhost:3001/v1`
- Authenticate: `POST localhost:3001/v1/authenticate` with body params:
```
{
    "email":"britneyblankenship@quotezart.com",
    "role":"admin"
}
```

### Authorization required
Header `x-api-token` with JWT required
- Get all users: `GET localhost:3001/v1/users`
- Get user data filtered by user name: `GET localhost:3001/v1/users?name={username}`
- Get user data filtered by user id: `GET localhost:3001/v1/users?id={userid}`
- Get user by Id: `GET localhost:3001/v1/users/{userid}`
### Only users with `role == 'admin'`
- Get the list of policies linked to a user name: `GET localhost:3001/v1/policies?username={username}`
- Get the user linked to a policy number: `GET localhost:3001/v1/policies/:id/user`


