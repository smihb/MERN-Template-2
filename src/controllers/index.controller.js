const connection = require('../dbconnection/connection');

const User = require('../models/model');

const controller = {}

controller.read = async (req, res)=>{
    const users = await User.find();
    res.json(users);
}
controller.create = async (req, res)=>{
    const {name, password} = req.body;
    const user = new User({name, password});
    await user.save();
    res.json({status: "created"})
}
controller.update = async (req, res)=>{
    const {name, password} = req.body;
    const updateUser = {name, password};
    await User.findByIdAndUpdate(req.params.id, updateUser); 
    res.json({status: "updated"})
}
controller.delete = async (req, res)=>{
    await User.findByIdAndDelete(req.params.id); 
    res.json({status: "deleted"})
}

module.exports = controller; 