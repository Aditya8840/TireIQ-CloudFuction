const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();


app.get('/', (res, req)=>{

});

app.post('/', async (req, res)=>{
    const users = req.body;
    const userObj = JSON.parse(users);
    const email = userObj["email"];

    await admin.firestore().collection('test').doc(email).set(user);

    res.status(201).send();
});

exports.users = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});
