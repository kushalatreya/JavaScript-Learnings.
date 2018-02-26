var audio = document.getElementById('mp3');
var volume = document.getElementById('volume');

function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function changeVolume() {
  audio.volume = volume.value;
}

volume.addEventListener("input", changeVolume);
