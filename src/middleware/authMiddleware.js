import jwt from "jsonwebtoken";
import "dotenv/config";

export const checkToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Acesso negado. Faça login." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("deu algum problema", error);
    return res.status(403).json({ message: "Token inválido ou expirado." });
  }
};
