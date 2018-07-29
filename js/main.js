$(window).resize(function() {
  location.reload();
});

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

$(document).ready(function() {
  $("nav a").mouseenter(function() {
    playSound($("#hover-sound")[0]);
  });

  $("nav a").mousedown(function() {
    playSound($("#click-sound")[0]);
  });
});

function playSound(source) {
  source.volume = 0.2;
  source.pause();
  source.currentTime = 0;
  source.play();
}

console.clear();
console.log("I see you're interested in my work. Thank you! You can check out this websites code on https://github.com/sullrich84/deepsource.de. Enjoy!");
