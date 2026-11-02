function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function marioPyramid(height) {
    let pyramid = "";

        for(let i = 1; i <= height; i++) {
            let row = "";
        for (let j = 0; j < i; j++) {
            row += "#";
        }   
        pyramid += row + "\n";
        }
        return pyramid;
    }
    setTimeout(function() {
        const pyramid = document.getElementById("pyramid");
        pyramid.textContent = marioPyramid(5);

        pyramid.classList.add("jump");
    }, 10000);

    const mario = document.getElementById("mario");

    let x = 0;
    let y = 40;

    const gridSize = 40;

    document.addEventListener("keydown",function(event) {
      if (event.key === "ArrowLeft") {
        x -= gridSize;
      }
      if (event.key === "ArrowRight") {
        x += gridSize;
      }

      if (event.key === "ArrowDown") {
        y -= gridSize;
    }
     if (event.key === "ArrowUp") {
        mario.classList.add("jump");
     
       setTimeout(function() {
            mario.classList.remove("jump");
        }, 500);
    }
    mario.style.left = x +"px";
    mario.style.top = y + "px";
});
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function() {

    if (music.paused) {
        music.play();
        musicButton.textContent = "Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "Play Music";
    }
});

