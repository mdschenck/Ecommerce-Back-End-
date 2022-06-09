const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // tag_id: {
    //   type: DataTypes.INTEGER,
    //   // primaryKey: true,
    //   // autoIncrement: true,
    // },
    // product_id: {
    //   type: DataTypes.INTEGER,
    // },
    //  *** OR?? ***
    // tag_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Tag",
    //     key: "tag_id",
    //   },
    // },
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Product",
    //     key: "product_id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
