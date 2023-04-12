"use strict"

const User = require("../models/user");

exports.createUser = async (req, res) => {
    try {
        console.log("User Register");
        const body = req.body;
        const data = new User({
            name: body.name,
            email: body.email,
            password: body.password
        });
        const saveStatus = await data.save();
        if (saveStatus) {
            res.send(saveStatus)
        }
        // res.send({ status: 200, message: "User Added!" })
    } catch (err) {
        console.log(err);
    }
}

exports.getData = async (req, res) => {
    try {
        const id = req.body.id;
        const data = await User.find({ _id: id });
        res.send({ data: data })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

exports.updateData = async (req, res) => {
    try {
        const id = req.body.id;
        const update = await User.findOneAndUpdate({ _id: id }, req.body);
        if (update) {
            res.send({ message: "Data Updated!" })
        }
    } catch (err) {
        console.log(err);
    }
}