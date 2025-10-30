// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
//importing all of our Node Modules
import express from "express";

//Creating an instance of express so we can use all of the methods, functions, properties of express
const app = express();

//defining our promptnumber
const port = 3000;

//Declaring that this server will be recieveing and responding to requests in JSON
app.use(express.json());

//Turn on our server so that it can listen for requests and respond to them at the port number
app.listen(port, () => {
  console.log(`The server is listening on port: ${port}`);
});

// ------------------------------
// Helper Functions
// ---------------------------------

// ---------------------------------
// Our very first API Endpoints
// ---------------------------------

//app.get() takes in 2 parameters:
// 1. The endpoint
//2.  Th callback funstion -what we do when we recieve a request at this endpoint, which takse in 2 parameters: the request (req) and reposnse (res) objects

app.get("/", (req, res) => {
  //the res.send() method sends back a string as a response

  res.send("Hello World!");
});

app.get("/say-good-morning", (req, res) => {
  //the res.send() method sends back a string as a response

  res.send("Good Morning!");
});

app.get("/get-user", (req, res) => {
  //the res.send() method sends back a string as a response
  res.send("Hello Wednesday!");
});

//lets add a dynamic parameter
// http://localhost:3000/get-user/Xavier -> Hello, Xavier!
// http://localhost:3000/get-user/Nicole -> Hello, Nicole!

app.get("/get-user/:username", (req, res) => {
  const userName = req.params.username;
  //the res.send() method sends back a string as a response
  res.send(`Hello, ${userName}!`);
});

app.get("/order-tacos/:protein/:numTacos", (req, res) => {
  const protein = req.params.protein;
  const numTacos = req.params.numTacos;

  res.send(`Thanks for your order! You ordered ${numTacos} ${protein} tacos.`);
});
// --------------------------------
// 🚀 LEVEL 1 CHALLENGES
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"

app.get("/goodbye", (req, res) => {
  //the res.send() method sends back a string as a response
  res.send("Goodbye, See You Later!");
});

// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"

app.get("/happy-birthday", (req, res) => {
  //the res.send() method sends back a string as a response
  res.send("Happy birthday!");
});

// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"

app.get("/happy-birthday/:name", (req, res) => {
  const name = "jj";
  //the res.send() method sends back a string as a response
  res.send(`Happy birthday, ${name}!`);
});

// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want!
//      - Otherwise, respond with "Language not supported.""

app.get("/say-hello/:name/:language", (req, res) => {
  const name = req.params.name;
  const language = req.params.language;
  //   const name = "CC";
  //   const language = "Spanish";

  if (language === "english") {
    res.send(`Hello, ${name}!`);
  } else if (language === "spanish") {
    res.send(`Hola, ${name}`);
  } else if (language === "vietnamese") {
    res.send(`Xin chao, ${name}`);
  } else if (language === "turkish") {
    res.send(`Merhaba, ${name}`);
  } else {
    res.send("Language not supported.");
  }
});

// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file.

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file.

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order.

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.
