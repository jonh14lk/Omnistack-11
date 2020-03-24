const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

// metodos HTTP:
// GET - buscar/listar informação
// POST - criar uma informação
// PUT - alterar uma informação
// DELETE - deletar uma informação

// tipos de parametros:
// query params - parametros nomeados enviados na rota
// route params - identificar recursos
// request body - criar ou alterar recursos

// Query Bulider: table('users).select('*').where()
// npm install knex
// npm install sqlite3

// Entidades:
// ONG
// Caso (incident)

// Funcionalidades:
// Login de ONG
// Logout de ONG
// Cadastro de ONG
// Cadastrar novos casos
// Deletar casos
// Listar casos especificos de uma ONG
// Listar todos os casos
// Entrar em contato com a ONG
