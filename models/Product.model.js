const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index'); 
const ProductMedia = require("./ProductMedia")
const ProductCollection = require("./ProductCollection.model");
const Product_Price = require('./ProductPrice.model');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag_line: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listing_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slider_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slider_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  popup_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  popup_content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  popup_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('popup_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  popup_image_alt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // media: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
  menu_image: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
    get:
    function() {
      const rawValue = this.getDataValue('menu_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  menu_image_alt: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  collection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('size_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  product_sizes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active, 2: deleted
    defaultValue: 1,
    allowNull: false,
  },
deleted_on: {
  type: DataTypes.DATE,
  allowNull: true,
  defaultValue: null,
},

}, {
  tableName: 'products',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: { [Op.in]: [0, 1] }, // Only fetch active or inactive records by default
    },
  },
  scopes: {
    unscoped: {}, // Empty scope to disable all other scopes
  },
});

// // Define associations
Product.hasMany(ProductMedia, {
  foreignKey: 'product_id',
  as: 'productMedia'
});

ProductMedia.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product'
});

// Many-to-many relationship with ProductSize
// Product.belongsToMany(require('./ProductSize.model'), {
//   through: 'product_size_mappings',
//   foreignKey: 'product_id',
//   otherKey: 'size_id',
//   as: 'sizes'
// });

ProductCollection.hasMany(Product, {
  foreignKey: 'collection_id',
  as: 'products'
})

Product.belongsTo(ProductCollection, {
  foreignKey: 'collection_id',
  as: 'collection'
})

Product.hasMany(Product_Price, {
  foreignKey: 'product_id',
  as: 'prices'
})

Product_Price.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product'
})

const ProductFinishes = require("./ProductFinishes.model")

Product.belongsToMany(ProductFinishes, 
  {
    through: 'product_finish_mappings',
    foreignKey: 'product_id',
    as: 'finishes'
  }
)

ProductFinishes.belongsToMany(Product,
  {
    through: 'product_finish_mappings',
    foreignKey: 'product_id',
    as: 'product'
  }
)

module.exports = Product;