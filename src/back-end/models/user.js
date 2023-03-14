module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pseudo: {
            type: DataTypes.STRING,
            unique: {
                msg: "Ce pseudo est déja utilisé, veuillez en choisir un nouveau",
            },
        },
        eMail: {
            type: DataTypes.STRING,
            unique: {
                msg: "cette adresse eMail est déja utilisée",
            },
        },
        password: {
            type: DataTypes.STRING,
            required: true,
        },
    });
};
