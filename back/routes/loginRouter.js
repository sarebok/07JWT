import express from 'express';
/* import controllers from "../src/controllers/controllers.js" */
/* import { logRoute } from '../src/helpers/helpers.js'; */
import { loginUser, registerUser, showUser } from "../src/controllers/loginController.js"


const router = express.Router();

//logroute for reporting as requested
/* router.get('/joyas',logRoute, controllers.getAllData);
router.get('/joyas/filtros', controllers.getDataFiltered); */

router.post("/login",loginUser)
router.post('/usuarios', registerUser);
router.get('/usuarios', showUser);


export default router;