import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING(80),
        email: Sequelize.STRING(254),
        password: Sequelize.STRING(60),
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default User;
