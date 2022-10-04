'use strict'

const audioData = {
    k65: `./sounds/button-1.wav`,
    k68: `./sounds/button-3.wav`,
    k70: `./sounds/button-4.wav`,
    k71: `./sounds/button-5.wav`,
    k72: `./sounds/button-6.wav`,
    k74: `./sounds/button-7.wav`,
    k75: `./sounds/button-8.wav`,
    k76: `./sounds/button-09a.wav`,
    k83: `./sounds/button-2.wav`,
}

window.onload = function () {
    window.addEventListener('keydown', addTransition);

    function addTransition(e) {
        try {
            if (audioData[`k${e.keyCode}`]) {
                let audio = document.querySelector('audio');  //fetches the corressponding audio element
                audio.pause();
                audio.src = audioData[`k${e.keyCode}`];
                audio.currentTime = 0; //rewind to the start
                audio.play();
            }
            else {
                return;
            }
        }
        catch (err) {
            console.log(err);
        }

        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

        key.classList.add('playing');

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    }

    function removeTransition(e) {

        if (e.propertyName !== "transform") {
            return;
        }

        this.classList.remove('playing')
    }
}