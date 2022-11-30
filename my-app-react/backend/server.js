const express = require("express")
const employeeRoutes = require("./routes/employees")
const mongoose = require("mongoose")
const app = express()
const SERVER_PORT = process.env.PORT || 8000;
var cors = require("cors")

app.use(express.json())

app.use(cors(
    // {
    //     origin: "http://localhost:8000",
    //     credentials: true,
    //     optionSuccessStatus:200
    // }
))


mongoose.connect("mongodb+srv://fall2022_comp3123:SAFA.aru1993@cluster0.lclqo7i.mongodb.net/comp3123_assignment2?retryWrites=true&w=majority", {

useNewUrlParser:true,
useUnifiedTopology:true
})

app.route("/hello")
    .get((req, res) => {
    res.send("Hello World from Safa Aru")
})


//employeeAPI
app.use("/api/", employeeRoutes)

//userRouter
const userRoutes = require("./routes/users")
//userAPI
app.use("/api/", userRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
    console.log("Press CTRL + C to stop server")
});





