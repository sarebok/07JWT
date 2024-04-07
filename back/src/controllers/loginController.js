import { byEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findError } from "../utils/utils.js";

const loginUser = async (req, res) => {
  const { user } = req.body;
  console.log("probando el log");
  try {
    const findUser = await byEmail(user);
    console.log(findUser);
    
    if (!findUser) {
      console.log("no encontro al usuario");
      const errorFound = findError("auth_01");
      return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
    } else {
      console.log("encontro al usuario");
      const isPasswordValid = bcrypt.compareSync(
        user.password,
        findUser.password
      );
      if (!isPasswordValid) {
        const errorFound = findError("auth_02");
        return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
      } else {
        const { email, nombre, apellido } = findUser;
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          message: `Bienvenido, ${nombre} ${apellido} has iniciado sesion`,
          code: 200,
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { loginUser };