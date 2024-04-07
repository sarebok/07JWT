import pool from "../../db/db.js";
import bcrypt from "bcryptjs";

const createUser = async ({ email, password, rol, lenguage }) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
  
    const SQLquery = {
      text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [email, hashedPassword, rol, lenguage],
    };
  
    const response = await pool.query(SQLquery);
    return response.rows[0];
  };


const byEmail = async ({email}) => {

  const SQLquery = {
    text: "SELECT * FROM usuarios WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  pool.query('SELECT 1', (err, res) => {
    if (err) {
      console.error('Error executing query', err.stack);
    } else {
      console.log('Database connected successfully');
    }
  });
  return response.rows[0];
}


export { createUser, byEmail };