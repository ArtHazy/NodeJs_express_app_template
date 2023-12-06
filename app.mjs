/////////////////////////
// ESSENTIALS

import express from 'express'; 
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/////////////////////////
// USEFULL

function logJsonSeachResult(jsonResult){
  if (Array.isArray(jsonResult)) {
    console.log("search result:");
    console.log('[');
    jsonResult.forEach((element) => {
      console.log(`${JSON.stringify(element)},`);
    });
    console.log(']');
  } else {
    console.log(`search result: ${JSON.stringify(jsonResult)}`);
  }  
}
function requestNotifier(req) {
  console.log(`${req.method} request received for: ${req.originalUrl}`);
  console.log(`request body: ${JSON.stringify(req.body)}`);
}
function respondJsonResult(res,jsonResult) {
  logJsonSeachResult(jsonResult)
  res.json(jsonResult)
  console.log(`json responded\n`); 
}


async function sendJson(res,data){  // example: sendJson(res,{id:2,name:"mom"})
  res.set('Content-Type', 'application/json');
  res.json(data);
}

function checkReqBodyToContain(req, res, ...requiredProperties) { // example: if (checkReqBodyToContain(req, res, 'name', 'email', 'password'))
  const missingProperties = [];
  for (const prop of requiredProperties) {
    if (!(prop in req.body)) {
      missingProperties.push(prop);
    }
  }
  if (missingProperties.length > 0) {
    //console.error(`Missing required properties in req.body: ${missingProperties.join(', ')}`);
    sendJson(res,{errorMessage: `Missing required properties in req.body: ${missingProperties.join(', ')}`})
    return false;
  }
  return true;
}


// useful (old)

// const sendJson = async (req, res, data) => { // ! old ! don't use JSON.stringify on "data"  // example: app.get('/json', (req, res) => sendJson(res,{id:2,name:"mom"}))
//     res.set('Content-Type', 'application/json');
//     res.json(data);
// };

// test

app.get('/getTest.html', (req, res) => {
  console.log(`GET request received for: ${req.originalUrl}`);
  res.sendFile(path.join(__dirname, 'getTest.html'));
});

sendJson

/////////////////////////
// OPTIONAL

// import {
// ...
// } from "../prisma/prismaFunctions.js";

