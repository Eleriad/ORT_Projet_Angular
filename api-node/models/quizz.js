const db = require('../config/database');
const Sequelize = require('sequelize');

const Quizz = db.define('generals', {
    theme: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prop1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prop2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prop3: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prop4: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    difficulte: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    anecdote: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
    // On ajoute la ligne ci-dessous pour éviter les erreurs de "created_at" et "update_at" qui sont intégrées automatiquement
    { timestamps: false });

module.exports = Quizz;