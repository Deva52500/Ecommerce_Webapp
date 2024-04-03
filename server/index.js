const express = require('express');
const mongoose = require ('mongoose')
const cors = require("cors")
const UserModel = require('./models/User')

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://Akshay:525000@express.bxjccra.mongodb.net/Customer")

app.post('/', (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) =>{
    const {email, password} = req.body
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Invalid Password")
            }
        }else{
            res.json("No record Existed")
        }
    })

})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
