const express = require('express');
const cors = require('cors');

const rout_er = require('./routes/router')

const app = express();
app.use(cors())
app.use('/',rout_er)


const Port = 9000;

app.listen(9000,()=>{
    console.log(`Server is running at port ${Port}`)
});
