const { Sequelize, DataTypes } = require("sequelize");
const AgencementsModel = require("../models/agencement");
const MeubleModel = require("../models/meuble");
const PetitObjetModel = require("../models/petitObjet");
const CommentModel = require("../models/comment");

//Création de la db via sequelize
const sequelize = new Sequelize("Atelier_NourEdde", "root", "", {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
        timezone: "Etc/GMT-2",
    },
    logging: false,
});

//const User = UserModel(sequelize, DataTypes);
const Agencement = AgencementsModel(sequelize, DataTypes);
const Meuble = MeubleModel(sequelize, DataTypes);
const PetitObjet = PetitObjetModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync().then(() => {
        console.log("La base de donnée a bien été initialisée !");
    });
};

//
module.exports = {
    initDb,
    Agencement,
    Meuble,
    PetitObjet,
    Comment,
};
