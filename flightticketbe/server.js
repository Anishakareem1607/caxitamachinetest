
require('dotenv').config()
const express=require('express')
require('./DB/connection')
const cors=require('cors')
const flightRoutes = require('./Router/flightRoutes')

const flightServer=express()
flightServer.use(cors())
flightServer.use(express.json())
flightServer.use('/api/flights',flightRoutes)
const PORT=5000;
flightServer.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`); 
})