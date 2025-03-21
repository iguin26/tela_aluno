import { connection, closeConnection } from "../config/db.js";
import { getUser } from "../services/UserService.js";
import bcrypt from "bcrypt";
import { signToken } from "../config/jwt.js";
import cookieParser from "cookie-parser";

export const showLoginPage = async (req, res) => {
  res.status(200).send({ msg: "auth controller working" });
};

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "O login não foi informado!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha não foi informada!" });
  }

  connection();

  const user = await getUser(email);

  if (!user) {
    return res.status(422).json({ msg: "Email e/ou senha incorreto(s)!" });
  }

  const checkPassword = await bcrypt.compare(password, user.senha);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Email e/ou senha incorreto(s)!" });
  }

  try {
    const token = signToken(user);

    res.cookie("jwt", token, {
      maxAge: 3600000,
    });

    res.status(200).json({ msg: "autenticacao realizada com sucesso", token });
  } catch (error) {
    console.error("Aconteceu um erro!", error);
    res.status(500).json({
      msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
    });
  }

  // return res.status(200).json({ msg: "deu bom o login!" });
};
