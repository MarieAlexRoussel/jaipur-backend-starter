import * as db from "../database"
import { shuffle } from "lodash"

// Créer et retourne un deck mélangé avec 3 chameaux en moins.
export function initDeck() {
  // TODO
  // Créer un tableau vide
    const tab = []
  // Ajouter les diamants, l'or, l'argent, les tissus, les épices, le cuir et les chameaux
  for (let i = 0; j < 6; i++)
  {
    tab.push('Argent')
  }  
  for (let i = 0; j < 6; i++)
  {
    tab.push('Diamants')
  } 
  for (let i = 0; j < 6; i++)
  {
    tab.push('Or')
  } 
  for (let i = 0; j < 8; i++)
  {
    tab.push('Epices')
  } 
  for (let i = 0; j < 8; i++)
  {
    tab.push('Tissus')
  } 
  for (let i = 0; j < 10; i++)
  {
    tab.push('Cuir')
  } 
  for (let i = 0; j < 11-3; i++)
  {
    tab.push('Chameau')
  } 
  
  // Retourner le tableau remplis
  return suffle(tab)
}

// Pioche x cartes d'un deck.
export function drawCards(deck, count = 1) {
  // TODO
  // Créer un tableau vide
  const carte = []
  // Pour chaque carte à piocher:
  //  Retirer la carte piochée du deck et la mettre dans le tableau
  for(let i = 0; i < count; i ++)
  {
    carte.push(deck.shift())
  }
  // Retourner le tableau contenant les cartes piochées

  return carte
}

// Déplace les chameaux de la main d'un joueur (_players[i].hand) vers son enclos (_players[i].camelsCount).
export function putCamelsFromHandToHerd(game) {
  // TODO
  // Pour chaque joueur:
  //  Pour chaque chameau dans la main du joueur
  //  Enlever le chameau de la main et le mettre dans l'enclos
}

// Créer un objet game.
export function createGame(name) {
  // TODO
  const game = {
    // identifiant de la partie
    id: 1,
    name: name,
    // pioche
    _deck: initDeck(),
    // marché
    market: ["camel", "camel", "camel", drawCards(game.deck, 1), drawCards(game.deck, 1)],
    _players: [
        {
            // main
            hand: [drawCards(game.deck, 5)],
            // nombre de chameaux
            camelsCount: putCamelsFromHandToHerd(game), 
            // Score actuel
            score: 0,
        },
        {
            hand: [drawCards(game.deck, 5)],
            camelsCount: putCamelsFromHandToHerd(game),
            score: 0,
        }
    ],
    // joueur courant (0 ou 1)
    currentPlayerIndex: 0,
    tokens: {
        diamonds: [7,7,5,5,5],
        gold: [6,6,5,5,5],
        silver: [5,5,5,5,5],
        cloth: [5,3,3,2,2,1,1],
        spice: [5,3,3,2,2,1,1],
        leather: [4,3,2,1,1,1,1,1,1],
    },
    // ne pas oublier de les mélanger au début de la partie
    _bonusTokens: {
        3: [2,1,2,3,1,2,3],
        4: [4,6,6,4,5,5],
        5: [8,10,9,8,10]
    },
    // Identifiant du gagnant si la partie est terminée sinon vaut undefined.
    winnerId: undefined
}
  // Initialiser un nouveau deck avec la fonction précédente
  // Créer le marché avec 3 chameaux et 2 cartes piochés du deck
  
  // Générer un nouvel identifiant pour la partie
  // Pour chaque joueur:
  //  Créer la main en piochant 5 cartes du deck
  //  Initialiser l'enclos à 0
  //  Initialiser le score à 0
  // Créer les objets contenant les jetons
  // Rassembler le tout pour créer la partie
  // Mettre les chameaux des mains des joueurs dans leurs enclos avec la fonction précédente
  // Retourner la partie 
  return {}
}