import express from "express";
import { showLoginPage, handleLogin } from "./controllers/authController.js";
import { showGamesPage } from "./controllers/gamesController.js";
import { showOdisseiaPage } from "./controllers/odisseiaController.js";
import { checkToken } from "./middleware/authMiddleware.js";

export const router = express.Router();

router.get("/", showLoginPage);
router.post("/", handleLogin);

router.get("/jogos", checkToken, showGamesPage);

router.get("/jogos/odisseia", checkToken, showOdisseiaPage);

router.post("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.json({ message: "Logout realizado com sucesso" });
});
