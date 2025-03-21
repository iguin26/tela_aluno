import jwt from "jsonwebtoken";
import "dotenv/config";

export const signToken = (user) => {
  const secret = process.env.SECRET;
  const expiration = process.env.EXPIRATION;

  const token = jwt.sign(
    {
      id: user.idusuario,
    },
    secret,
    { expiresIn: expiration }
  );
  return token;
};
