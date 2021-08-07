import express from "express";
import http from "http";
// import Bundler from "parcel-bundler";
import jwt from "jsonwebtoken";
import path from "path";

import dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../.env' });

const app = express();
const port = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  res.json({
      message:"welcome to social-meadia-app"
  });
});

app.post('/api/posts', (req, res) => {  
  jwt.verify(req.body.token, 'secretkey', (err:any, authData:any) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }
 
  jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err:any, token) => {
    res.json({
      token
    });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
 function verifyToken(req:any, res:any, next:any) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer:any = bearerHeader.split(' ');
    // Get token from array
    const bearerToken:any = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
app.listen(port, () => {
//      if (err) {
//     return console.error(err);
//   }
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});