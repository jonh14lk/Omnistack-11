const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

// login
routes.post("/sessions", SessionController.create);

// listagem de ongs
routes.get("/ongs", OngController.index);

// cadastro de ongs
routes.post("/ongs", OngController.create);

// listar uma ong especifica
routes.get("/profile", ProfileController.index);

// listagem de incidents
routes.get("/incidents", IncidentController.index);

// cadastro de incidents
routes.post("/incidents", IncidentController.create);

// delear incident
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
