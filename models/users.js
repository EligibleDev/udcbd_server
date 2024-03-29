module.exports = (sequelize, DataTypes) => {
      const users = sequelize.define('users', {
            name: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            phone: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true,
            },
            email: {
                  type: DataTypes.STRING,
                  allowNull: false,
                  unique: true,
            },
            password: {
                  type: DataTypes.STRING,
                  allowNull: false,
            },
            role: {
                  type: DataTypes.ENUM(
                        'অ্যাডমিন',
                        'সচিব',
                        'উদ্যোক্তা',
                        'হিসাব সহকারী',
                        'গ্রাম-পুলিশ',
                        'নাগরিক'
                  ),
                  allowNull: false,
            },
      });

      return users;
};
