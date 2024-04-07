import express from 'express';

import { loginUser, registerUser, showUser } from "../src/controllers/loginController.js"
import verifyCredentials from "../middlewares/verifyCredentials.js";
import validateToken from '../middlewares/validateToken.js';


const router = express.Router();

//logroute for reporting as requested
/* router.get('/joyas',logRoute, controllers.getAllData);
router.get('/joyas/filtros', controllers.getDataFiltered); */

router.post("/login",verifyCredentials,loginUser)
router.post('/usuarios', registerUser);
router.get('/usuarios',validateToken, showUser);


export default router;