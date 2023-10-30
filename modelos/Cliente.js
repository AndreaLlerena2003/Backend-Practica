
const { sequelize } = require('../config.js');
const { DataTypes } = require("sequelize");
const { UUIDV4 }  = require("sequelize");
const { Pedido } = require('./Pedido.js'); 

const Cliente = sequelize.define('Cliente',{
    ClienteID: {
        type: DataTypes.UUID,
        defaultValue : UUIDV4,
        primaryKey: true, // Indicamos llave primaria
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Direccion: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    CorreoElectronico: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombreUsuario: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    timestamps : false,
    freezeTableName : true
});


//Cliente.hasMany(Pedido, { foreignKey: 'ClienteID' });

/*Cliente.sync().then((data) =>{
    console.log("Se sincronizo de forma optima");
}).catch((err) =>{
    console.log("error para modelo cliente: " + err);
})*/


module.exports = Cliente;