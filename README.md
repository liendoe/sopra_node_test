# Node Express API

- Node version: v12.18.1

## About
Middleware API to manage users, roles, and policies from a third party API.

Using jwt, jest, supertest, nodemon

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
- Authenticate: `POST localhost:3001/v1/authenticate`

Any user could be authenticated with his email and role. 
```bash
# Curl Authenticate Request Example
curl -X POST "localhost:3001/v1/authenticate" -d -H "Content-Type: application/json" '{"email": "britneyblankenship@quotezart.com","role": "admin"}'
# Response Token Example:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5Mzc3NjYyNSwiZXhwIjoxNTkzNzc4NDI1fQ.Iya9KpyX9nY_L6Mv46GyX2fOYFMg5rQ2aS5PskIWauU"
```

### Authorization required
Header `Authorization: Bearer ${token}` with JWT required

- Get all users: `GET localhost:3001/v1/users`
- Get user data filtered by user name: `GET localhost:3001/v1/users?name={username}`
- Get user data filtered by user id: `GET localhost:3001/v1/users?id={userid}`
- Get user by Id: `GET localhost:3001/v1/users/{userid}`
```bash
# Curl Users Request Example
curl -X GET "localhost:3001/v1/users" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU5Mzc3NjYyNSwiZXhwIjoxNTkzNzc4NDI1fQ.Iya9KpyX9nY_L6Mv46GyX2fOYFMg5rQ2aS5PskIWauU"
```
### Only users with `role == 'admin'`
- Get the list of policies linked to a user name: `GET localhost:3001/v1/policies?name={username}`
- Get the user linked to a policy number: `GET localhost:3001/v1/policies/:id/user`


