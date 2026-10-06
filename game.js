const CATEGORIES = [
    { id: "maantieto", name: "Maantieto" },
    { id: "yleistieto", name: "Yleistieto" },
    { id: "historia", name: "Historia" },
    { id: "taide ja kulttuuri", name: "Taide ja Kulttuuri" },
    { id: "tiede", name: "Tiede" },
    { id: "urheilu", name: "Urheilu" }
];

const gameState = {
    player: {
        name: "Player",
        position: 0,
        collectedCategories: new Set()
    },
    computer: {
        name: "Opponent",
        position: 0,
        collectedCategories: new Set()
    },
    currentTurn: "player"
};

const BOARD_SIZE = 18;
const boardElement = document.querySelector("#board");
const rollButtonElement = document.querySelector("#roll-button");
const diceBoxElement = document.querySelector("#dice-box");

rollButtonElement.addEventListener("click", RollDice);
CreateBoard();

function CreateBoardCoodrinates() {
    const coordinates = [];

    for (let column = 1; column <= 7; column += 1) {
        coordinates.push( { row: 1, column } ) 
    }
    for (let row = 2; row <= 4; row += 1) {
        coordinates.push( { row, column: 7} )
    }
    for (let column = 6; column >= 1; column -= 1) {
        coordinates.push( { row: 4, column } )
    }
    for (let row = 3; row >= 2; row -= 1) { 
        coordinates.push( { row, column: 1 } )
    }
    return coordinates;
}

function CreateBoard() {
    const coordinates = CreateBoardCoodrinates();

    boardElement.innerHTML = "";

    for (let index = 0; index < BOARD_SIZE; index += 1)
    {
        const category = CATEGORIES[index % CATEGORIES.length]
        const coordinate = coordinates[index]

        const newSpace = document.createElement("div");

        newSpace.className = "space";

        newSpace.style.gridColumn = coordinate.column;
        newSpace.style.gridRow = coordinate.row;

        newSpace.dataset.category = category.id;

        newSpace.textContent = category.name;

        boardElement.append(newSpace);
    }
}

function RollDice() {
    var diceResult = Math.floor(Math.random() * 6) + 1; // Väli: 1-6

    diceBoxElement.textContent = diceResult;
}
