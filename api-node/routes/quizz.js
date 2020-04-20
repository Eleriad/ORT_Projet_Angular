const express = require('express');
const Quizz = require('../models/quizz');

const Router = express.Router();

Router.get("/", async (req, res) => {
    Quizz.findAll()
        .then(async quiz => { res.status(200).json(quiz) })
        .catch(err => { res.status(500).json({ 'erreur': err }); });
})

module.exports = Router;