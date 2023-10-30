const { DataTypes } = require("sequelize");
const { UUIDV4 }  = require("sequelize");
const { sequelize } = require('../config.js');
const { Pedido } = require('./Pedido.js'); 

const DetallesDePedido = sequelize.define('DetallesDePedido',{
    DetallesDePedidoId:{
        type: DataTypes.UUID,
        defaultValue : UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    Cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PrecioUnitario: {
        type:DataTypes.DOUBLE,
        allowNull: false
    },
    TotalArticulo: {
        type:DataTypes.DOUBLE,
        allowNull: false
    },
    PedidoId: {
        type: DataTypes.UUID,
        allowNull: false
    }

},{
    timestamps : false,
    freezeTableName : true
});



/*DetallesDePedido.sync().then((data) => {
    console.log("Se sincronizó de forma óptima");
}).catch((err) => {
    console.log("Error en el modelo DetallesDePedido: " + err);
});*/


module.exports = DetallesDePedido;