const { DataTypes } = require("sequelize");
const { UUIDV4 }  = require("sequelize");
const { sequelize } = require('../config.js');
const { Cliente } = require('./Cliente.js');
const { Fechas } = require('./Fechas.js'); // Asegúrate de importar el modelo de Fechas
const {ProductoServicios} = require('./ProductosServicios.js');
const {DetallesDePedido} = require('./DetallesDePedido.js');

const Pedido = sequelize.define('Pedido', {
    PedidoId: {
        type: DataTypes.UUID,
        defaultValue : UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    EstadoPedido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ClienteID: {
        type: DataTypes.UUID,
        allowNull:false
    },
    FechaId: {
        type: DataTypes.UUID,
        allowNull: false
    }
},{
    timestamps : false,
    freezeTableName : true
});



/*Pedido.sync().then((data) => {
    console.log('Se sincronizó de forma óptima');
}).catch((err) => {
    console.error('Se encontró un error en Pedido: ' + err);
});*/

module.exports = Pedido;

