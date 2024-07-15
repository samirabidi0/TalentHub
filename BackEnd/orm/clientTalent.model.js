

module.exports = (sequelize, DataTypes) => {
    const ClientTalent = sequelize.define("ClientTalent", {
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        talentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
            defaultValue: 'pending',
        },
    });

    ClientTalent.associate = (models) => {
        ClientTalent.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
        ClientTalent.belongsTo(models.Talent, { foreignKey: 'talentId', as: 'talent' });
    };

    return ClientTalent;
};
