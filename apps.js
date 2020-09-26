// modal instruction
var modal = document.getElementById("pop-up-instruction");
var btn = document.getElementById("show-instruction");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal play
var modal2 = document.getElementById("starting-game");
var btn2 = document.getElementById("play-game");
var closebtn = document.getElementsByClassName("close")[1];
btn2.onclick = function () {
  modal2.style.display = "block";
}

closebtn.onclick = function () {
  modal2.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// get username
var playBtn = document.getElementById("play-me");
console.log(playBtn)
playBtn.addEventListener("click", function (e) {
  var username = document.getElementById("username").value;
  localStorage.setItem("usernameInput", username);
})

// show username
var showUsername = document.getElementById("myName");
console.log(showUsername);
var getUsername = localStorage.getItem("usernameInput");
showUsername.innerText = getUsername;