const express = require('express');

const PrescController = require('../controllers/PrescController');

const PrescRouter = () => {
    const router = express.Router();
    const controller = PrescController();

    router.route('/')
        .get(controller.GetPrescription)
        .post(controller.CreatePrescription)
        .put(controller.UpdatePrescription)
        .delete(controller.DeletePrescription)
    return router;
}

module.exports = PrescRouter;