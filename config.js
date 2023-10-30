const { Sequelize, DataTypes, DATE, UUID,UUIDV4 } = require("sequelize");

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'localhost',
  port: 1433,  
  username: 'andrea', 
  password: 'bella12345',  
  database: 'AppLlerena',  
  dialectOptions: {
    options: {
      trustServerCertificate: true,
    },
  },
});

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error en la conexión a la base de datos:', error);
  }
}

//config.listen(3000, () => {
//  console.log('Servidor en ejecución en el puerto 3000');
//});

//testDatabaseConnection();



module.exports = { sequelize, testDatabaseConnection };
