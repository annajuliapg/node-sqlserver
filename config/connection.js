const env = require('./env/env');
const sql = require("mssql");

const connection = async function () {

  if (global.connection) {
      console.log("entrei no IF");
      return global.connection;
  }

  try {

      const connection = await sql.connect(env);

      global.connection = connection;

      console.log("Conectou no SQL Server");
  
      return connection;
  }
  catch (err) {
    console.error(err);
      console.log("\nNão foi possível estabelecer a conexão com o Bando de Dados. Verifique se o serviço está ligado e tente novamente.\n");
      process.exit(1);
  }
}

module.exports = { connection };
