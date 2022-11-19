const express = require("express");

const DataController = require("../controllers/DataController");

const DataRouter = () => {
    const router = express.Router();
    const controller = DataController();

    router.route("/estados")
        .get(controller.GetStates)
    router.route("/municipios")
        .get(controller.GetTown)

    return router;
}

module.exports = DataRouter;