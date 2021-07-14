
const express = require("express");
const app = express();
const router = require('./route/api/public');
const cors=require("cors")

app.use(cors())
app.use('/api/public/', router);
//const router = require('./route/api/protected');

app.listen(4000, () => console.log("listen port 4000!"))
