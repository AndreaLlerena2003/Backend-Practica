const { DataTypes } = require("sequelize");
const { DATE } = require("sequelize");
const { UUIDV4 }  = require("sequelize");
const { sequelize } = require('../config');
const { Pedido } = require('./Pedido.js');

const Fechas  = sequelize.define('Fechas',{
    FechaId:{
        type: DataTypes.UUID,
        defaultValue : UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    Fecha:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{
    timestamps : false,
    freezeTableName : true
})

//Fechas.hasMany(Pedido,{foreingKey: 'PedidoId'});


/*Fechas.sync().then((data) => {
    console.log("Se sincronizó de forma óptima");
}).catch((err) => {
    console.log("Error en el modelo Fechas: " + err);
});*/

module.exports = Fechas;