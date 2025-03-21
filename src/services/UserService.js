import Usuario from "../models/Usuario.js";

export const getUser = async (userAttempting) => {
  const userQuery = "4biz.local" + "\\" + userAttempting;
  try {
    const user = await Usuario.findOne({
      where: { login: userQuery },
      attributes: ["idusuario", "login", "senha"],
    });
    return user;
  } catch (error) {
    console.error("Erro na consulta", error);
  }
};
