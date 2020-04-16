const db = require('../config/database');
const Sequelize = require('sequelize');

const User = db.define('users', {
    pseudo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // On lui indique qu'on fonctionne avec des underscores
    underscored: true,
    // On peut ajouter les lignes ci-dessous au cas où la table s'appelle 'user' car il arrive qu'un "s" soit ajouté parfois, on fixe ainsi le nom de la table pour ne pas avoir de problèmes
    freezeTableName: true,
    tableName: 'users'
});

module.exports = User;