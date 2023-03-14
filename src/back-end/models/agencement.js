module.exports = (sequelize, DataTypes) => {
    return sequelize.define("agencementProject", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // name: {
        //     type: DataTypes.STRING,
        //     allowEmpty: false,
        //     allowNull: false,
        //     validate: {
        //         notNull: {
        //             msg: `Un nom est nécéssaire pour cet agencement`,
        //         },
        //     },
        // },
        location: {
            type: DataTypes.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowEmpty: true,
            allowNull: true,
        },
        categorie: {
            type: DataTypes.ENUM,
            values: ["Neuf", "Réemplois", "Mixte"],
        },
    });
};
