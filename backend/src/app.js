const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errors } = require("celebrate");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/*
 * Rotas / Recurso:
 */

/*
 * Métodos HTPP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/*
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rotas apos "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requiisição, utilizado para criar ou alterar recursos
 */

/*
 * SQL: MySQl, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDb, Couch, etc
 */

/*
 * Driver: SELECT * FORM users
 * Query Builder: table('users').select('*').where()
 */
