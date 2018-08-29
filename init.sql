create database rest_api_dev;
create user dev_user with password 'password';
grant all privileges on database rest_api_dev to dev_user;
ALTER USER dev_user with superuser;
