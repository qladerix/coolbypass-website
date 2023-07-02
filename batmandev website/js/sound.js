let playBtn = document.getElementsByClassName("play");
let pauseBtn = document.getElementsByClassName("pause");

let text = document.querySelector("p");

const audio = new Audio("assets/audio/batmansound.mp3");
audio.volume = 0.3; // Set the volume to 70% (0.7)

playBtn[0].addEventListener("click", (e) => {
  audio.play();
  text.innerHTML = "";
});

pauseBtn[0].addEventListener("click", (e) => {
  audio.pause();
  text.innerHTML = "";
});