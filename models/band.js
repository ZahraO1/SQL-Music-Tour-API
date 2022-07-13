// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class Band extends Model{}

Band.init({
    band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,
    modelName: 'Band',
    tableName:'band',
    timestamps: false
}) 

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('bands', {
          band_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        available_start_time: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end_time: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      })
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('bands')
    }
  }
  
// EXPORT
module.exports = Band
