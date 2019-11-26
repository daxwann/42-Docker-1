# YelpCamp

App that allows registered user to create camping site reviews and to comment on them.

## Learning Goals

- Create RESTful API for users to interact with the application
- Responsive web design with Bootstrap and Sass
- Authentication using Passport.js
- Data persistence and modeling with MongoDB and Mongoose ORM
- Version control with Git and Github
- Deploying app using Heroku and MongoDB Atlas

## Website

[YelpCamp](https://yelp-clone-camping.herokuapp.com/)

## Intructions to edit and run app locally

### Install Brew

`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### Install Node.js runtime environment

`$ brew update`

`$ brew install node`

### Install MongoDB

`$ brew tap mongodb/brew`

`$ brew install mongodb-community`

### Clone YelpCamp Github repository and install dependencies

`$ git clone https://github.com/daxwann/Yelp-camp.git`

`$ cd Yelp-camp`

`$ npm install`
 
### Start local MongoDB service or create MongoDB Atlas cluster

#### Local MongoDB service

`$ brew services start mongodb-community`

#### MongoDB Atlas cluster

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and follow instructions to create a free cluster

2. Connect the Atlas cluster to YelpCamp app by copying the given cluster connection URL

3. Either create an environmental variable in your shell with `$ export DATABASEURL="<Connection URL>"` or replace `process.env.DATABASEURL` on line 19 of `/app.js` with the connection URL in string quotation.

### Start application

`$ npm run start`

