# Express, Typescript, Knex, Postgres boilerplate

### Set up

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
Try to get the user via REST API endpoint (`GET /api/users/0`)
```bash
curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/api/users/0
```
