const express = require('express');
const user = require('../models/user');

const Router = express.Router();

Router.post("/register", async (req, res) => {
    if ((req.body.pseudo && req.body.pseudo != "") && (req.body.password && req.body.password != "")) {
        user.create({
            pseudo: req.body.pseudo,
            password: req.body.password
        })
            .then(async user => { res.status(200).json({ 'message': "L'utilisateur a bien été créé ;-) " }) })
            .catch(err => { res.status(500).json({ 'erreur': err }); })
    } else {
        res.status(500).json({ 'erreur': 'il manque des paramètres !' })
    }
})

Router.post("/login", async (req, res) => {
    if ((req.body.pseudo && req.body.pseudo != "") && (req.body.password && req.body.password != "")) {
        user.findOne({
            where: {
                pseudo: req.body.pseudo,
                password: req.body.password
            }
        })
            .then(async user => {
                if (user != null) {
                    res.status(200).json({ 'message': "Vous êtes bien connecté ! " })
                } else {
                    res.status(500).json({ 'erreur': 'Mauvais login ou mot de passe' })
                }
            })
            .catch(err => { res.status(500).json({ 'erreur': err }); })
    } else {
        res.status(500).json({ 'erreur': 'il manque des paramètres !' })
    }
})

module.exports = Router;