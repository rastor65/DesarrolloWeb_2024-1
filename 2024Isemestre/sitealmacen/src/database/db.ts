const Sequelize = require('sequelize');

const DB_NAME = 'almacen2024_Isemestre_mysql_nodejs';

const DB_USER = 'admin2';

const DB_PASS = '159753864lL-';



export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }

);


async function generateDb() {
    await database.sync({ force: true })
    console.log('Base de datos y tablas creada');
}

generateDb();
