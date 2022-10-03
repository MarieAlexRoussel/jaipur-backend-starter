import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  // TODO retourner le status 404 si le nom n'existe pas.
  const newGame = gameService.createGame(req.body.name)

  if(!newGame) return res.status(400).send("missing name parameter")

  res.status(201).json({ id: newGame.id, name: newGame.name })
})

export default router