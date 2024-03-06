module.exports = (sequelize, DataTypes) => {
      const users = sequelize.define('users', {
            name: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
            phone: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
            email: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
            password: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
      }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
      });

      return users;
}