
const { DataTypes } = require("sequelize");
const { UUIDV4 }  = require("sequelize");
const { sequelize } = require('../config.js');
const { Pedido } = require('./Pedido.js');

const ProductoServicios = sequelize.define('ProductoServicios',{
    ProductoServicioID:{
        type: DataTypes.UUID,
        defaultValue : UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Descripcion:{
        type: DataTypes.DECIMAL,
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


/*ProductoServicios.sync().then((data) =>{
    console.log("Se sincronizo de forma optima");
}).catch((err) =>{
    console.log("error para modelo producot: " + err);
})*/


module.exports = ProductoServicios;