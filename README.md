Development postgres setup

```
psql
> create database rest_api_dev;
> create user dev_user with password 'password';
> grant all privileges on database rest_api_dev to dev_user;
```

curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:3000/api/users/3

```sql
INSERT INTO users (first_name, last_name, username, email, password) VALUES
 ('Alice', 'Smith', 'asmith', 'asmith@test.com', 'password');
```
