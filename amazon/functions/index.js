const functions=require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")
("sk_test_51NXR6TSGdaxPg8QPT12TYmX7oWRL7FWeAZPUQ17bk6BJR5an3Wcb9fNb23qEyLyJ4z1XyZYB99fDmQOekV4Z1QVM00wzs5BKQS");


// API

// - App config
const app = express();
// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - Api routes
app.get("/", (req, res)=>res.status(200).send("HELLO WORLD"));
// -Listen command
exports.api=functions.https.onRequest(app);