const express = require('express')
const UserRouter = require('./UserRouter');
const PrescRouter = require('./PrescRouter');
const DataRouter = require('./DataRoutes');

const apiRouter = () => {
    const routes = express.Router();

    const userRouter = UserRouter();
    const prescRouter = PrescRouter();
    const dataRouter = DataRouter();
    /**
     * @openapi
     * /api/v1/user:
     *   get:
     *     description: User
     *     
     *     responses:
     *       200:
     *         description: ok
     */
    routes.use("/user",userRouter);
    /**
     * @openapi
     * /api/v1/prescription:
     *   get:
     *     description: User
     *     
     *     responses:
     *       200:
     *         description: ok
     */
    routes.use("/prescription",prescRouter);
    /**
     * @openapi
     * /api/v1/data:
     *   get:
     *     description: data
     *     
     *     responses:
     *       200:
     *         description: ok
     */
    routes.use("/data",dataRouter);

    return routes;
};

module.exports = apiRouter;