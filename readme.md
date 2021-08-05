* Set up Application Express & Database

- Initialize Express JS
1. mkdir folder-name // make a directory
2. cd folder-name // change to dorectory
3. git init // git initialize
4. npm init -y // npm initialize with yes answer to all question
5. npm install express 
6. npm install nodemon -G // to hot reload with Global
7. touch server.js // create a file
8. code . // to open VS Code
9. npm run dev // run as dev with nodemon


- Set up PostgreSql Database Using Docker and Initialize Sequelize
1. sudo docker --version // to check docker
2. mkdir folder-database // make a database directory
3. sudo docker run -d --name container-name -p 5430:5432 -e POSTGRES_PASSWORD=password -v ${pwd}/database:/var/lib/postgresql/ata postgres:12 // create container, volume & image postgres
4. sudo docker ps // to check container in running
5. npm i sequelize sequelize-cli pg pg-hstore dotenv --save // sequelize-cli (ORM), pg-hstore (driver), dotenv (parsing env variable)
6. create a file .env
# sequelize migration -> project bootstraping
7. create a file .sequelizerc
8. npx sequelize-cli init // inisialize .sequelizerc
9. npm sequelize-cli db:create // create db


- Set up Instance User
1. npx sequelize-cli model:generate --name User --attributes \ username:string,email:string,passwod:string \ --underscored // generate db with attibutes
2. add tableName in user.js
3. add constraint Unique attributes in create-user.js
4. npx sequelize-cli db:migrate // to migrate db
# sudo docker exec -it container-name bash // to check db in docker
# psql -h localhost -U postgres -W // to enter db
# \l -> \c db-name -> \d -> \d table-name
note: npx sequlize-cli db:migrate:undo // to change data type


* Make Authentication

- Create Route Auth
1. make directory routes then create files index.js & auth.js
2. make directory controllers then create file auth-controller.js
3. create function register

- Create Register
1. create file user.js in routes directory
2. npm i bcrypt --save // labrary to hashing password
3. trial REST API using postman

- Create Error Handler App Express
1. make directory helpers and create file api-error.js
2. make dorectory middlewares and create file error-handler.js

- Create Login
1. create function login in auth-controller.js

- Create Validation Request Body using Joi
1. npm install joi 
2. create file validation-schema.js in helpers directory
3. create file validation.js in middlewares directory

- Create Middleware Authentication JWT
1. create file auth-jwt.js in helpers directory
2. create payload and token in login function
3. create file auth.js in middlewares directory
4. create function authentication in auth.js
5. create file user-controller.js in controllers directory
6. create function profile in user-controller.js

- Create Migrations to add Role attribute in User Table
1. npx sequelize-cli migration:generate --name add-role-users
2. npx sequelize-cli db:migrate
# sudo docker exec -it container-name bash // to check db in docker
# psql -h localhost -U postgres -W // to enter db
# \l -> \c db-name -> \d -> \d table-name

- Create Middelware Authorization
1. create function authorization in middlewares/auth.js
2. create function list in controllers/user-controller.js