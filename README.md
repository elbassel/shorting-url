# Appetito
Coding challenge
## The problem:
Task: Shortening URL:
- High level design for a URL Shortening system such as goo.gl or bit.ly the idea is to design a service that would generate a shorter URl for the 		long URLS


## The solution:
Focuses on Backend only

## Functionalities through API:
- Generate a short url
- Redirect to the origin url if you tried to open the shorten link in browser

## Technologies
Nodejs, Expressjs, MongoDB, Mongoose, Mocha, Sinon, Docker, Docker Compose

## Technical descisions:
- Most of the classes depends on the Single responsibility concept.
- Generated unique key based bcrypt package.
- Express, is a very lightweight web framework.
- MongoDB one of the most famous document database.
- Mocha, Sinon for unit testing.
- Express generator, to generate a simple boiler plate

## Linked:
https://www.linkedin.com/in/ahmed-elbassel/


## API Documentation
localhost:3000/docs

## Run App
- Clone the repo, and go inside it then the below command, if the commands don't run, try it with sudo:
```
git@github.com:elbassel/shorting-url.git
cd shorting-url
docker-compose build
docker-compose up
```
- Check localhost:3000/docs for API documentation

## Run tests
```
npm run test
```
##Run Code coverage:
Yoy can find the result under coverage folder
```
npm run coverage
```

