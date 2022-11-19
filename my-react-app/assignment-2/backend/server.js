const express = require("express")
const employeeRoutes = require("./routes/employees")
const mongoose = require("mongoose")
const app = express()
const SERVER_PORT = process.env.PORT || 4000;
const path = require("path")
app.use(express.json())

//userRouter
const userRoutes = require("./routes/users")


// Connect to MongoDB



// Reaching the static files
app.use(express.static(path.join(__dirname, 'build')))


//home page
app.get('/home',(req, res) => {
    res.json('WELCOME TO COMP3123 ASSIGNMENT 2');
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname , 'build','index.html'))
})

//userAPI
app.use("/api/", userRoutes)

//employeeAPI
app.use("/api/", employeeRoutes)


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
    console.log("Press CTRL + C to stop server")
});

