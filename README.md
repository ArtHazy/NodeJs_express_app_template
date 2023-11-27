# NodeJs_express_app_template


## Setup:
#### - ensure that node.js is installed on the server device and open the project
#### - run "npm install" in project's console
#### - run server app with "node app.mjs"
#### - ! requested with "get" html files must be located near (app.mjs) file

## When using prisma ensure that:
#### - database provider is online
#### - .env file exists and contains DATABASE_URL="postgresql://johndoe:password@localhost:5432/databaseName?schema=public" with the correct data ("password" can be empty)
#### - prisma packages and database provider are updated after changing schema.prisma file ("npx prisma generate", "npx prisma db push")
