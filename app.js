document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'candi-borobudur',
            img: 'images/candi-borobudur.png',
            imgOpen: 'images/borobudur-open.png',
            messageOpen: "You've found Borobudur Temple!"
        },
        {
            name: 'candi-borobudur',
            img: 'images/candi-borobudur.png',
            imgOpen: 'images/borobudur-open.png',
            messageOpen: "You've found Borobudur Temple!"
        },
        {
            name: 'danau-toba',
            img: 'images/danau-toba.png',
            imgOpen: 'images/toba-open.png',
            messageOpen: "You've found Lake Toba!"
        },
        {
            name: 'danau-toba',
            img: 'images/danau-toba.png',
            imgOpen: 'images/toba-open.png',
            messageOpen: "You've found Lake Toba!"
        },
        {
            name: 'gunung-bromo',
            img: 'images/gunung-bromo.png',
            imgOpen: 'images/bromo-open.png',
            messageOpen: "You've found Mount Bromo!"
        },
        {
            name: 'gunung-bromo',
            img: 'images/gunung-bromo.png',
            imgOpen: 'images/bromo-open.png',
            messageOpen: "You've found Mount Bromo!"
        },
        {
            name: 'labuan-bajo',
            img: 'images/labuan-bajo.png',
            imgOpen: 'images/bajo-open.png',
            messageOpen: "You've found Labuan Bajo!"
        },
        {
            name: 'labuan-bajo',
            img: 'images/labuan-bajo.png',
            imgOpen: 'images/bajo-open.png',
            messageOpen: "You've found Labuan Bajo!"
        },
        {
            name: 'morotai',
            img: 'images/morotai.png',
            imgOpen: 'images/morotai-open.png',
            messageOpen: "You've found Morotai Island!"
        },
        {
            name: 'morotai',
            img: 'images/morotai.png',
            imgOpen: 'images/morotai-open.png',
            messageOpen: "You've found Morotai Island!"
        },
        {
            name: 'wakatobi',
            img: 'images/wakatobi.png',
            imgOpen: 'images/wakatobi-open.png',
            messageOpen: "You've found Wakatobi!"
        },
        {
            name: 'wakatobi',
            img: 'images/wakatobi.png',
            imgOpen: 'images/wakatobi-open.png',
            messageOpen: "You've found Wakatobi!"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const messageText = document.querySelector('#message')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsChosenImage = [];
    var cardsMessage = [];
    var cardsWon = [];

    // create board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/wonderful-indonesia.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }
    
    // Check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        const imageOpen = cardsChosenImage[0];
        const message = cardsMessage[0];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', imageOpen);
            cards[optionTwoId].setAttribute('src', imageOpen);
            cardsWon.push(cardsChosen);
            messageText.textContent = message;
        } else{
            cards[optionOneId].setAttribute('src', 'images/wonderful-indonesia.png');
            cards[optionTwoId].setAttribute('src', 'images/wonderful-indonesia.png');
            alert('Sorry, try again')
        }
        cardsChosen = [];
        cardsChosenId = [];
        cardsChosenImage = [];
        resultDisplay.textContent = cardsWon.length * 20;
        if(cardsWon.length === cardArray.length/2){
            messageText.textContent = "Congratulations! You've found them all!";
        }
        cardsMessage = [];
    }

    // flip card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        cardsChosenImage.push(cardArray[cardId].imgOpen);
        cardsMessage.push(cardArray[cardId].messageOpen);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})