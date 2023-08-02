const express = require("express");
const morgan = require("morgan");
import { AppDataSource } from "./data-source"

const app = express();
app.use(express.json);
app.use(morgan('dev'));

AppDataSource
    .initialize()
    .then(() => {
        console.log('성공')
    })
    .catch((err) =>{
        console.log(err)
    })

app.get("/", (req, res) => {
    res.send('running')
})

const port = 4000;
app.listen(port, ()=>{
    console.log(`Server Running at http://localhost:${port}`)
})

