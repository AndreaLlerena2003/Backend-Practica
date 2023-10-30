const { sequelize,testDatabaseConnection } = require('./config.js');
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
  });

testDatabaseConnection();
const Cliente = require('./modelos/Cliente'); // Reemplaza con la ubicación correcta de tu modelo
const Pedido = require('./modelos/Pedido'); // Reemplaza con la ubicación correcta de tu modelo
const DetallesDePedido = require('./modelos/DetallesDePedido'); // Reemplaza con la ubicación correcta de tu modelo
const Fechas = require('./modelos/Fechas'); // Reemplaza con la ubicación correcta de tu modelo
const ProductoServicios = require('./modelos/ProductosServicios'); // Reemplaza con la ubicación correcta de tu modelo
Cliente.hasMany(Pedido, { foreignKey: 'ClienteID' });
Fechas.hasMany(Pedido, { foreignKey: 'FechaId' });
DetallesDePedido.belongsTo(Pedido, { foreignKey: 'PedidoId' });
Pedido.belongsTo(Cliente, { foreignKey: 'ClienteID' });
Pedido.belongsTo(Fechas, { foreignKey: 'FechaId' });
Pedido.hasMany(ProductoServicios, { foreignKey: 'PedidoId' });
Pedido.hasMany(DetallesDePedido,{foreignKey:'PedidoId'});
ProductoServicios.belongsTo(Pedido, { foreignKey: 'PedidoId' });


sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch((err) => {
    console.error('Error al sincronizar modelos con la base de datos:', err);
  });
//testDatabaseConnection(); 
