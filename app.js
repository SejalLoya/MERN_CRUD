const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const userRouter = require("./routers/userRouter.js");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/user",userRouter);