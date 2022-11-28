const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const qs = require('querystring');
const admin = require("firebase-admin");
admin.initializeApp();

const app = express();


app.get('/', (res, req)=>{

});

app.post('/', async (req, res)=>{
    const users = req.body;
    // const userObj = JSON.stringify(users);
    const email = users["email"];
    delete users["email"];
    const year = users["year"];
    delete users["year"];
    const day = users["day"];
    delete users["day"];
    const month = users["month"];
    delete users["month"];
    const regNo = users["regNo"];
    delete users["regNo"];
    const idTimeSet = users["idTimeSet"];
    delete users["idTimeSet"];
    const time = new Date();
    var tm = time.getMilliseconds()

    var obj = {
        'code': 201
    }
    await admin.firestore().collection('users').doc(email).collection('vDetails').doc(regNo).collection(year).doc(month).collection(day).doc(idTimeSet).set(users,{merge: true});

    res.status(201).send(obj);
});

exports.users = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});
