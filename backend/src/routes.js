const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const routes = express.Router();

// listagem de ongs
routes.get("/ongs", OngController.index);

// cadastro de ongs
routes.post("/ongs", OngController.create);

// listagem de incidents
routes.get("/incidents", IncidentController.index);

// cadastro de incidents
routes.post("/incidents", IncidentController.create);

// delear incident
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
