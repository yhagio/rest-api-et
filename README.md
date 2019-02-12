[![Build Status](https://travis-ci.org/yhagio/rest-api-et.svg?branch=master)](https://travis-ci.org/yhagio/rest-api-et)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/yhagio/rest-api-et/blob/master/LICENSE)

# Express, Typescript, Knex, Postgres boilerplate

### Set up (Docker)
```bash
# Build image and run the app (development)
docker-compose up

# Show running containers
docker ps

# Insert an user manually (if you want to)
docker exec -it <postgres container id> psql -h postgres -U postgres
> \c rest_api_dev
> INSERT INTO users (first_name, last_name, username, email, password) VALUES ('Alice', 'Smith', 'asmith', 'asmith@test.com', 'password');

# run lint 
docker ps # Find the container id like b724d5365915
docker exec b724d5365915 npm run lint
```


### Set up (Non Docker)

1. Postgres setup (Create database called `rest_api_dev` with
user: `dev_user` and password: `password`

```
psql
> create database rest_api_dev;
> create user dev_user with password 'password';
> grant all privileges on database rest_api_dev to dev_user;
```

2. Install dependencies

```bash
nvm use
yarn       # or npm i
```

3. Available commands

```bash
npm start       # Start application
npm run lint    # Lint
npm run fixlint # Fix lint
npm run unit    # Run unit tests
npm test        # Unit tests + coverage by Istanbul
```

### Test API endpoint

Add an user to DB

```sql
INSERT INTO users (first_name, last_name, username, email, password) VALUES
 ('Alice', 'Smith', 'asmith', 'asmith@test.com', 'password');
```
Try to get the user via REST API endpoint (`GET /api/users/:uuid`)
```bash
curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/api/users/<uuid>
```

### Production

Setup environmental variables for Postgres in `/app/config/config.ts`
```
PG_HOST
PG_PORT
PG_DATABASE
PG_USER
PG_PASSWORD
```
