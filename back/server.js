//create basic server
import express from 'express';
import loginRouter from "./routes/loginRouter.js";
import cors from 'cors';
/* import { logRoute } from './src/helpers/helpers.js'; */
/* import { Logger } from 'logger'; */

import pool from "./db/db.js";

const app = express();
/* const PORT = process.env.PORT || 3000; */

const PORT = 3000;
//include basic middleware
app.use(express.json());
app.use(cors());


//manage routes
app.use('/', loginRouter);

pool.query('SELECT 1', (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
    } else {
      console.log('Database connected successfully');
    }
  });



app.get('/', (req, res) => {
    res.send('Hello Gary!');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });