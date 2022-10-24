import * as gameService from "./gameService"

describe("Game service", () => {

    test("should put camels from hand to herd", () => {
        let game = {
            _players: [
              { hand: ["camel", "diamond", "camel", "spice", "spice"], camelsCount: 0, score: 0 },
              { hand: ["diamond", "cloth", "camel", "spice", "diamond"], camelsCount: 0, score: 0 },
            ],
          }
        //TODO
        gameService.putCamelsFromHandToHerd(game)
    })

    test("should draw cards", () => {
        // TODO
        let deck = ["gold", "gold", "gold"]
        let drawnCard = gameService.drawCards((deck), 1)
        expect(drawnCard).toEqual(["gold"])
        expect(deck).toEqual(["gold", "gold"])
    })

    test("should init a deck", () => {
        // TODO
    })
})