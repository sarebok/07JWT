import express from 'express';
/* import controllers from "../src/controllers/controllers.js" */
/* import { logRoute } from '../src/helpers/helpers.js'; */
import { loginUser } from "../src/controllers/loginController.js"


const router = express.Router();

//logroute for reporting as requested
/* router.get('/joyas',logRoute, controllers.getAllData);
router.get('/joyas/filtros', controllers.getDataFiltered); */

router.post("/auth_user",loginUser)

export default router;