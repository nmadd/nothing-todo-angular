'use strict';
let router = require('express').Router();
let Todo = require('mongoose').model('Todo');
let moment = require('moment');

module.exports = router;

router.route('/')
    // .get((req, res, next) => {
    //     Todo.find({completed: false})
    //         // .sort('-date_created')
    //         .then(todos => {
    //             res.json(todos);
    //         })
    //         .then(null, next);
    // })
    .post((req, res, next) => {
        Todo.create(req.body)
            .then(todo => {
                res.status(201).json(todo);
            })
            .then(null, next);
    })

router.route('/:id')
    .get((req, res, next) => {
        //Check if Todo has expired
        let today = moment();
        //Only return Todos that have not been completed and are not expired
        Todo.find({user: req.params.id, completed: false, expiration_date:{$gte: today}})
            .then(todos => {
                res.json(todos);
            })
            .then(null, next);
    })
    .put((req, res, next) => {
        Todo.update({_id: req.params.id}, {
            completed: true
        })
        .then(todo => {
            res.status(201).json(todo);
        })
        .then(null, next);
    })
