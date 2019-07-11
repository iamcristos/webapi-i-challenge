// implement your API here
const express = require('express');
const db = require('./data/db');
const PORT = 3000;
const server = express();
const cors = require('cors');

server.use(express.json())
server.use(cors());

server.get('/',(req,res)=>{
    res.status(200).json('welcome to user api')
});

server.get('/api/users', (req,res)=>{
    db.find()
        .then(user=> (
            res.status(200).json({
                status: 200,
                user
            })
        ))
        .catch(err=> res.status(500).json("user information could not be retrieved"))
});

server.post('/api/users', (req,res)=>{
    const { name, bio} = req.body;
    const user = {name,bio};
    db.insert(user)
        .then(user=> (
            res.status(201).json({
                status: 201,
                message: "user created succesfully",
                user
            }))
            )
        .catch(err => res.status(500).json('user information could not be added'))
});

server.get('/api/users/:id', (req,res)=>{
    const { id } = req.params;
    db.findById(id)
        .then(user=> {
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: 'User does not exist'
                })
            }
            res.status(200).json({
                status: 200,
                user
            })
        })
        .catch(err=> res.status(500).json({
            status: 500,
            message:"The user information could not be retrieved."
        }))
});

server.delete('/api/users/:id', (req,res)=>{
    const { id } = req.params;
    db.remove(id)
        .then(user=> {
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: 'User does not exist'
                })
            }
            res.status(200).json({
                status: 200,
                message: "user deleted succesfully"
            })
        })
        .catch(err=> res.status(500).json({
            status: 500,
            message: "the user information could not be deleted"
        }))
});

server.put('/api/users/:id', (req,res)=>{
    const { id } = req.params;
    const {name, bio} = req.body;
    const user = {name,bio}
    db.update(id, user)
        .then(user=> {
            if (!user) {
                return res.status(404).json('User does not exist')
            }
            res.status(201).json({
                status: 201,
                message: 'user updated succesfully',
                user
            })
        })
        .catch(err=> res.status(500).json({
            status: 500,
            message: "user infomation could not be updated"
        }))
});

server.listen(PORT, ()=>{
    console.log(`server has started at ${PORT}`)
})
