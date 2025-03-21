export const showGamesPage = async (req, res) => {
  return res
    .status(200)
    .json({ msg: "tela dos jogos: odisseia, jornada do saber e etc" });
};
