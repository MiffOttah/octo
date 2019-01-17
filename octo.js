"use strict";

var audio = null;

function beep(freq){
    var oscillator = audio.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(freq, audio.currentTime);
    oscillator.connect(audio.destination);
    oscillator.start();
    window.setTimeout(function(){ oscillator.stop(); }, 100);
}

function shuffle(){
    var divs = document.querySelectorAll('.color');
    for (var i = divs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var t = divs[i].style.backgroundColor;
        divs[i].style.backgroundColor = divs[j].style.backgroundColor;
        divs[j].style.backgroundColor = t;
    }

    if (audio && document.getElementById("soundcheck").checked){
        beep(Math.random() * 1963 + 130);
    }
}

window.onload = function(){
    if (window.AudioContext){
        audio = new AudioContext();
        document.getElementById("sound").style.display = "block";
    }
    setInterval(shuffle, 250);
};
