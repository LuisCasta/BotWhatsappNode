const express = require('express')
const UserRouter = require('./UserRouter');
const PrescRouter = require('./PrescRouter');
const DataRouter = require('./DataRoutes');

const apiRouter = () => {
    const routes = express.Router();

    const userRouter = UserRouter();
    const prescRouter = PrescRouter();
    const dataRouter = DataRouter();

    routes.use("/user",userRouter);
    routes.use("/prescription",prescRouter);
    routes.use("/data",dataRouter);

    return routes;
};

module.exports = apiRouter;