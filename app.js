const cardArray = [
    {
        name: "Maradona",
        img: "assets/Maradona.jpg"
    },
    {
        name: "Messi",
        img: "assets/Messi.jpg"
    },
    {
        name: "Neymar",
        img: "assets/Neymar.jpg"
    },
    {
        name: "Ronaldinho",
        img: "assets/Ronaldinho.jpg"
    },
    {
        name: "Ronaldo",
        img: "assets/Ronaldo.jpg"
    },
    {
        name: "Zidane",
        img: "assets/Zidane.jpg"
    },
    {
        name: "Maradona",
        img: "assets/Maradona.jpg"
    },
    {
        name: "Messi",
        img: "assets/Messi.jpg"
    },
    {
        name: "Neymar",
        img: "assets/Neymar.jpg"
    },
    {
        name: "Ronaldinho",
        img: "assets/Ronaldinho.jpg"
    },
    {
        name: "Ronaldo",
        img: "assets/Ronaldo.jpg"
    },
    {
        name: "Zidane",
        img: "assets/Zidane.jpg"
    }
]

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
let score = document.querySelector("#score");
const restart = document.querySelector("#restart");
let cardChosen = [];
let cardChosenID = [];
const cardWon = [];


restart.addEventListener("click", () => {
    cardArray.sort(() => 0.5 - Math.random());
    score.textContent = 0;
    cardWon.length = 0;

    const cards = document.querySelectorAll("#grid img");
    cards.forEach(card => {
        card.setAttribute("src", "assets/Ball.jpg");
        card.addEventListener("click", flipCard);
    });
});


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "assets/Ball.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll("#grid img");
    const optionOneID = cardChosenID[0];
    const optionTwoID = cardChosenID[1];
    if (cardChosen[0] === cardChosen[1]) {
        cards[optionOneID].setAttribute("src", "assets/Confirm.jpg");
        cards[optionTwoID].setAttribute("src", "assets/Confirm.jpg");
        cards[optionOneID].removeEventListener("click", flipCard);
        cards[optionTwoID].removeEventListener("click", flipCard);
        cardWon.push(cardChosen);
    } else {
        cards[optionOneID].setAttribute("src", "assets/Ball.jpg");
        cards[optionTwoID].setAttribute("src", "assets/Ball.jpg");
    }

    score.textContent = cardWon.length;
    cardChosen = [];
    cardChosenID = [];

    if (cardWon.length == cardArray.length / 2) {
        score.textContent = "Won!!!"
    }
}


function flipCard() {
    const cardID = this.getAttribute("data-id");

    if (!cardChosenID.includes(cardID) && cardChosen.length < 2) {
        cardChosen.push(cardArray[cardID].name);
        cardChosenID.push(cardID);
        this.setAttribute("src", cardArray[cardID].img);

        if (cardChosen.length == 2) {
            setTimeout(checkMatch, 500);
        }
    }
}
