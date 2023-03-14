module.exports = (sequelize, DataTypes) => {
    return sequelize.define("meuble", {
        idM: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowEmpty: false,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        prix: {
            type: DataTypes.INTEGER,
            allowEmpty: true,
            allowNull: true,
        },
        category: {
            type: DataTypes.ENUM,
            values: ["Neuf", "Réemplois", "Mixte"],
        },
    });
};
