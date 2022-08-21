const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


// router.get("/",(req,res)=>{
//     console.log("connection");
// });

// register user

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { name, email, password, confirm_password, dob, contact, add } = req.body;

    if (!name || !email || !password || !confirm_password || !dob || !contact || !add) {
        res.status(404).json("please fill the data");

    }

    try {

        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
            res.status(404).json("this user is already present.");

        }
        else {
            const adduser = new users({
                name, email, password, confirm_password, dob, contact, add
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    }
    catch (error) {
        res.status(404).json(error);
    }
})

// get userdata

router.get("/getdata", async (req, res) => {       // router.get method ka use kiya aur

    try {

        const userdata = await users.find();     // then user ke data ko find kya aur find karke send karadiya frontend par
        res.status(201).json(userdata);
        console.log(userdata);

    } catch (error) {
        res.status(404).json(error);
    }
})


// get individual user

router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await users.findById({ _id: id });
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// update user data

router.patch("/updateuser/:id", async (req, res) => {           // ak API create kiya  
    try {
        const { id } = req.params;

        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

// delete user

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
}) 

module.exports = router; 