module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      // 2 decimal places
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    totalQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Product;
};
