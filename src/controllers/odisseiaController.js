export const showOdisseiaPage = async (req, res) => {
  res.status(200).json({
    msg: `vc est vendo a tela do jogo ODISSEIAAA. Bem vindo ID ${req.user.id}`,
  });
};
