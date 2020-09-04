module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: false,
      },
      username: {
        type: Sequelize.STRING(80),
        unique: true,
        notNull: false,
      },
      email: {
        type: Sequelize.STRING(254),
        unique: true,
        notNull: false,
      },
      password: {
        type: Sequelize.STRING(60),
        notNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
