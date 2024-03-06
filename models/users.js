module.exports = (sequelize, DataTypes) => {
      const users = sequelize.define('users', {
            name: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
            email: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
            phoneNumber: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
            password: {
                  type: DataTypes.STRING,
                  allowNul: false,
            },
      })

      return users;
}