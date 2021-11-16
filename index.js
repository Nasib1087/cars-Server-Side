const express = require('express')
const app=express()
const port = process.env.PORT||5000
const { MongoClient } = require('mongodb');
const cors = require('cors')
app.use(cors())
app.use(express.json())
const ObjectId=require('mongodb').ObjectId

require('dotenv').config()

//vHDSLn7MoFvuJDyB
//cars-buSell

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bo1xe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
