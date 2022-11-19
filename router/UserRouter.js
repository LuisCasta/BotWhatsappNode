const express = require('express');

const UserController = require('../controllers/UserController');

const UserRouter = () => {
    const router = express.Router();
    const controller = UserController();

    router.route('/')
        .get(controller.GetUser)
        .post(controller.CreateUser)
        .put(controller.UpdateUser)
        .delete(controller.DeleteUser)
    return router;
}

module.exports = UserRouter;