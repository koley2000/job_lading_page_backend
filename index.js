const express = require('express')
const app = express()
var cors = require('cors');
const connectToMongo = require('./db');

app.use(cors());
connectToMongo();
const port =  process.env.PORT|| 5000;


app.use(express.json());

app.use('/api/jobs', require('./routes/jobsRoutes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})