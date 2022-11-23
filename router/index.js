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
     *     summary: Obtenet usuario
     *     tags: 
     *      - user
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_user:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *                 data:
     *                    type: object
     *       400:
     *         description: error query
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *                 data:
     *                    type: object
     *       500:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *                 data:
     *                    type: object
     * 
     *   post:
     *     summary: Crear usuario
     *     tags: 
     *      - user
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                lada: 
     *                  type: integer
     *                telefono:
     *                  type: integer
     *                estado:
     *                  type: string
     *                ciudad:
     *                  type: string
     *                edad:
     *                  type: integer
     *                peso: 
     *                  type: number
     *                nombre_medico:
     *                  type: string
     *                apellido_medico:
     *                  type: string
     *                pass: 
     *                  type: string
     *                hash:
     *                  type: string
     *                recordatorio:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     * 
     *   put:
     *     summary: Actualizar usuario
     *     tags: 
     *      - user
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_user:
     *                  type: integer
     *                lada: 
     *                  type: integer
     *                telefono:
     *                  type: integer
     *                estado:
     *                  type: string
     *                ciudad:
     *                  type: string
     *                edad:
     *                  type: integer
     *                peso: 
     *                  type: number
     *                nombre_medico:
     *                  type: string
     *                apellido_medico:
     *                  type: string
     *                pass: 
     *                  type: string
     *                hash:
     *                  type: string
     *                recordatorio:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     * 
     *   delete:
     *     summary: Elininar usuario
     *     tags: 
     *      - user
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_user:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     */
    routes.use("/user",userRouter);
    /**
     * @openapi
     * /api/v1/prescription:
     *   get:
     *     summary: Obtenet Prescripcion
     *     tags: 
     *      - prescription
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_presc:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     *
     *   post:
     *     summary: Crear Prescripcion
     *     tags: 
     *      - prescription
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_user:
     *                  type: integer
     *                fecha_estudio:
     *                  type: string
     *                hora_estudio:
     *                  type: string
     *                fecha_prim_toma:
     *                  type: string
     *                hora_prim_toma:
     *                  type: string
     *                fecha_seg_toma:
     *                  type: string
     *                hora_seg_toma:
     *                  type: string
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     * 
     *   put:
     *     summary: Actualizar Prescripcion
     *     tags: 
     *      - prescription
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_presc:
     *                  type: integer
     *                fecha_estudio:
     *                  type: string
     *                hora_estudio:
     *                  type: string
     *                fecha_prim_toma:
     *                  type: string
     *                hora_prim_toma:
     *                  type: string
     *                fecha_seg_toma:
     *                  type: string
     *                hora_seg_toma:
     *                  type: string
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     * 
     *   delete:
     *     summary: Obtenet Prescripcion
     *     tags: 
     *      - prescription
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_presc:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *       400:
     *         description: error query
     *       500:
     *         description: error
     */
    routes.use("/prescription",prescRouter);
    /**
     * @openapi
     * /api/v1/data/estados:
     *   get:
     *     summary: Obtiene la lista de estados
     *     tags: 
     *      - data     
     *     responses:
     *       200:
     *         description: ok
     *       500:
     *         description: error
     * 
     * /api/v1/data/municipios:
     *   get:
     *     summary: Obtiene la lista de municipios
     *     tags: 
     *      - data 
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                estado:
     *                  type: string    
     *     responses:
     *       200:
     *         description: ok
     *       500:
     *         description: error
     */
    routes.use("/data",dataRouter);

    return routes;
};

module.exports = apiRouter;