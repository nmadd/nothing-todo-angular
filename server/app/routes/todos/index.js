'use strict';
let router = require('express').Router();
let Todo = require('mongoose').model('Todo');
module.exports = router;

router.route('/')
    .get((req, res, next) => {
        Todo.find({})
            // .sort('-date_created')
            .then(todos => {
                res.json(todos);
            })
            .then(null, next);
    })
    .post((req, res, next) => {
        Todo.create(req.body)
            .then(todo => {
                res.status(201).json(todo);
            })
            .then(null, next);
    })

router.route('/:id')
    .get((req, res, next) => {
        Todo.find({user: req.params.id})
            .then(todos => {
                res.json(todos);
            })
            .then(null, next);
    })