document.addEventListener("DOMContentLoaded", () => {
  let cardOptions = [
    {
      name: "candi-borobudur",
      img: "../images/candi-borobudur.png",
      imgOpen: "../images/borobudur-open.png",
      messageOpen: "You've found Borobudur Temple!",
    },
    {
      name: "candi-borobudur",
      img: "../images/candi-borobudur.png",
      imgOpen: "../images/borobudur-open.png",
      messageOpen: "You've found Borobudur Temple!",
    },
    {
      name: "danau-toba",
      img: "../images/danau-toba.png",
      imgOpen: "../images/toba-open.png",
      messageOpen: "You've found Lake Toba!",
    },
    {
      name: "danau-toba",
      img: "../images/danau-toba.png",
      imgOpen: "../images/toba-open.png",
      messageOpen: "You've found Lake Toba!",
    },
    {
      name: "gunung-bromo",
      img: "../images/gunung-bromo.png",
      imgOpen: "../images/bromo-open.png",
      messageOpen: "You've found Mount Bromo!",
    },
    {
      name: "gunung-bromo",
      img: "../images/gunung-bromo.png",
      imgOpen: "../images/bromo-open.png",
      messageOpen: "You've found Mount Bromo!",
    },
    {
      name: "labuan-bajo",
      img: "../images/labuan-bajo.png",
      imgOpen: "../images/bajo-open.png",
      messageOpen: "You've found Labuan Bajo!",
    },
    {
      name: "labuan-bajo",
      img: "../images/labuan-bajo.png",
      imgOpen: "../images/bajo-open.png",
      messageOpen: "You've found Labuan Bajo!",
    },
    {
      name: "morotai",
      img: "../images/morotai.png",
      imgOpen: "../images/morotai-open.png",
      messageOpen: "You've found Morotai Island!",
    },
    {
      name: "morotai",
      img: "../images/morotai.png",
      imgOpen: "../images/morotai-open.png",
      messageOpen: "You've found Morotai Island!",
    },
    {
      name: "wakatobi",
      img: "../images/wakatobi.png",
      imgOpen: "../images/wakatobi-open.png",
      messageOpen: "You've found Wakatobi!",
    },
    {
      name: "wakatobi",
      img: "../images/wakatobi.png",
      imgOpen: "../images/wakatobi-open.png",
      messageOpen: "You've found Wakatobi!",
    },
    {
      name: "mandalika",
      img: "../images/mandalika.png",
      imgOpen: "../images/mandalika-open.png",
      messageOpen: "You've found Mandalika!",
    },
    {
      name: "mandalika",
      img: "../images/mandalika.png",
      imgOpen: "../images/mandalika-open.png",
      messageOpen: "You've found Mandalika!",
    },
    {
      name: "tanjung-kelayang",
      img: "../images/tanjung-kelayang.png",
      imgOpen: "../images/tanjung-kelayang-open.png",
      messageOpen: "You've found Tanjung Kelayang!",
    },
    {
      name: "tanjung-kelayang",
      img: "../images/tanjung-kelayang.png",
      imgOpen: "../images/tanjung-kelayang-open.png",
      messageOpen: "You've found Tanjung Kelayang!",
    },
    {
      name: "tanjung-lesung",
      img: "../images/tanjung-lesung.png",
      imgOpen: "../images/tanjung-lesung-open.png",
      messageOpen: "You've found Tanjung Lesung!",
    },
    {
      name: "tanjung-lesung",
      img: "../images/tanjung-lesung.png",
      imgOpen: "../images/tanjung-lesung-open.png",
      messageOpen: "You've found Tanjung Lesung!",
    },
    {
      name: "kepulauan-seribu",
      img: "../images/kepulauan-seribu.png",
      imgOpen: "../images/kepulauan-seribu-open.png",
      messageOpen: "You've found Kepulauan Seribu!",
    },
    {
      name: "kepulauan-seribu",
      img: "../images/kepulauan-seribu.png",
      imgOpen: "../images/kepulauan-seribu-open.png",
      messageOpen: "You've found Kepulauan Seribu!",
    }
  ]
  var cardArray = [];

  // get cardarray
  var active = JSON.parse(localStorage.getItem("activeList"));
  for (var i = 0; i < active.length; i++) {
    var index = active[i];
    console.log(index);
    switch (index) {
      case "opt-0":
        cardArray.push(cardOptions[0]);
        cardArray.push(cardOptions[1]);
        break;
      case "opt-1":
        cardArray.push(cardOptions[2]);
        cardArray.push(cardOptions[3]);
        break;
      case "opt-2":
        cardArray.push(cardOptions[4]);
        cardArray.push(cardOptions[5]);
        break;
      case "opt-3":
        cardArray.push(cardOptions[6]);
        cardArray.push(cardOptions[7]);
        break;
      case "opt-4":
        cardArray.push(cardOptions[8]);
        cardArray.push(cardOptions[9]);
        break;
      case "opt-5":
        cardArray.push(cardOptions[10]);
        cardArray.push(cardOptions[11]);
        break;
      case "opt-6":
        cardArray.push(cardOptions[12]);
        cardArray.push(cardOptions[13]);
        break;
      case "opt-7":
        cardArray.push(cardOptions[14]);
        cardArray.push(cardOptions[15]);
        break;
      case "opt-8":
        cardArray.push(cardOptions[16]);
        cardArray.push(cardOptions[17]);
        break;
      case "opt-9":
        cardArray.push(cardOptions[18]);
        cardArray.push(cardOptions[19]);
        break;
    }
  }

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const messageText = document.querySelector("#message");
  var myTime = 30;
  var timeLeft = myTime;
  var level = 1;
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsChosenImage = [];
  var cardsMessage = [];
  var cardsWon = [];

  var mylevel = document.getElementById("level");
  mylevel.innerText = level;

  // create board
  var mySound = new sound('../audio/cublak-suweng.mp3');
  function createBoard() {
    for (let j = 0; j < cardArray.length; j++) {
      var card = document.createElement("img");
      card.setAttribute("src", "../images/wonderful-indonesia.png");
      card.setAttribute("data-id", j);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
    mySound.play();
    timer(myTime);
  }

  // Check for match
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    const imageOpen = cardsChosenImage[0];
    const message = cardsMessage[0];
    if (optionOneId === optionTwoId) {
      alert("Can't choose same card");
      cards[optionOneId].setAttribute("src", "../images/wonderful-indonesia.png");
      var mySound = new sound('../audio/error.mp3');
      mySound.play();
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", imageOpen);
      cards[optionTwoId].setAttribute("src", imageOpen);
      cardsWon.push(cardsChosen);
      messageText.textContent = message;
      var mySound = new sound('../audio/match.mp3');
      mySound.play();
    } else {
      cards[optionOneId].setAttribute("src", "../images/wonderful-indonesia.png");
      cards[optionTwoId].setAttribute("src", "../images/wonderful-indonesia.png");
      var mySound = new sound('../audio/error.mp3');
      mySound.play();
    }
    cardsChosen = [];
    cardsChosenId = [];
    cardsChosenImage = [];
    resultDisplay.textContent = cardsWon.length * 20;
    if (cardsWon.length === cardArray.length / 2) {
      messageText.textContent = "Congratulations! You've found them all!";
      var winDialog = document.getElementById("win");
      var next = document.getElementById("next-level");
      winDialog.style.display = "block";
      next.addEventListener("click", function (e) {
        winDialog.style.display = "none";
        document.location.href = "../option.html";
      })
    }
  }

  // flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    cardsChosenImage.push(cardArray[cardId].imgOpen);
    cardsMessage.push(cardArray[cardId].messageOpen);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // sound
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    }
    this.stop = function () {
      this.sound.pause();
    }
  }

  // timer
  var timeDisplay = document.getElementById("time-left");
  function timer(time) {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
      }
      timeDisplay.innerText = timeLeft;
      timeLeft -= 1;
      if (timeLeft === 0 && cardsWon < cardArray.length / 2) {
        clearInterval(timeLeft = 0);
        var loseDialog = document.getElementById("lose");
        var closebtn = document.getElementById("closeGame");
        loseDialog.style.display = "block";
        closebtn.onclick = function () {
          loseDialog.style.display = "none";
        }
      }
    }, 1000)
  }

  createBoard();
});
