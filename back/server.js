//create basic server
import express from 'express';
/* import cors from "cors"; */
/* import router from "./routes/router.js" */
/* import { logRoute } from './src/helpers/helpers.js'; */
/* import { Logger } from 'logger'; */

const app = express();
const port = process.env.PORT || 3000;

//include basic middleware
app.use(express.json());


//manage routes
/* app.use('/', router); */


app.get('/', (req, res) => {
    res.send('Hello Gary!');
    }
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });