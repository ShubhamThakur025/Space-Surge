let livebar = document.getElementById('lives')
let clock = document.querySelector('.clock')
let time = 30;
let rocksArray = [
    "Assets/Rock-1.png",
    "Assets/Rock-2.png",
    "Assets/Rock-3.png",
    "Assets/Rock-4.png",
    "Assets/Rock-5.png",
]
let rockSpeed;
let lives;
let rockId = 0
let rocks = []
let timerID;
let sprint;
let turn = 0;
let score = 0;

let pastscore = localStorage.getItem('score') || 0
score += pastscore

//Initial position of the spaceShip
spaceShip.style.left = `${window.innerWidth / 2}px`


//to create rocks in the direction of the spaceship
function createRock() {
    let rock = document.createElement('div')
    rock.className = 'rock'
    rock.id = rockId
    rock.style.left = `${randomNum(10, 70)}vw`
    rock.style.top = '-200px'
    let index = rocksArray[randomNum(0, rocksArray.length)];
    let rockImage = document.createElement('img');
    rockImage.src = index;
    rock.appendChild(rockImage);
    gameArena.appendChild(rock);
    rockId++;
    rocks.push(rock)
}

//to move the rock towards the ship
function moveRocks() {
    for (let i = 0; i < rocks.length; i++) {
        let rock = rocks[i];
        let topDist = parseInt(rock.style.top) || 0;
        rock.style.top = topDist + rockSpeed + 'px';
        if (checkCollision(rock)) {
            warnScreen()
            lives--
            if (lives == 0) { endGame() }
            addLives()
            rock.style.display = 'none'
        }
        else {
            if (topDist > window.innerHeight) {
                rock.style.display = 'none'
            }
        }
    }
}

//to check collision
function checkCollision(rock) {
    let spaceShipPos = spaceShip.getBoundingClientRect();
    let rockPos = rock.getBoundingClientRect();

    return (
        spaceShipPos.top < rockPos.bottom &&
        spaceShipPos.bottom > rockPos.top &&
        spaceShipPos.left < rockPos.right &&
        spaceShipPos.right > rockPos.left &&
        rockPos.top < window.innerHeight
    );
}

//to warn the player about collision
function warnScreen() {
    let warning = document.getElementById('warnScreen')
    warning.style.display = 'block'
    setTimeout(() => {
        warning.style.display = 'none'
    }, 500)
}
//to add hearts as lives
function addLives() {
    livebar.innerHTML = ''
    for (let i = 0; i < lives; i++) {
        livebar.innerHTML +=
        `
        <img src = "Assets/heart.png" alt="heart">
        `
    }
}

//to end the game
function endGame() {
    if (lives == 0) {
        location.href = 'gameOver.html'
    }
    else {
        let target = 'game.html'
        sprint++
        if (sprint == 1) {
            let query = 'sprint=1'
            location.href = `${target}?${query}`
        } else if (sprint == 2) {
            let query = 'sprint=2'
            location.href = `${target}?${query}`            
        }        
        else if (sprint == 3) {            
            let query = 'sprint=3'
            location.href = `${target}?${query}`            
        }
        else{
            location.href = 'gameOver.html'
        }
    }
}
//to start the rock
function rockSurge() {
    createRock()
}

//keydown eventListener
document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowLeft") {
        spaceShip.style.left = parseInt(spaceShip.style.left) - 50 + 'px'
    }
    else if (e.key == "ArrowRight") {
        spaceShip.style.left = parseInt(spaceShip.style.left) + 50 + 'px'
    }
})

document.addEventListener('touchstart', function(event){
    let screenWidth = window.innerWidth/2;
    let clientX = event.touches[0].clientX
    if(clientX < screenWidth){
        spaceShip.style.left = parseInt(spaceShip.style.left) - 40 + 'px'
    }
    else{
        spaceShip.style.left = parseInt(spaceShip.style.left) + 40 + 'px'
    }
})

//Helper function
function randomNum(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

time = 30
timerID = setInterval(() => {
    time--
    score++
    localStorage.setItem('score',score)
    clock.textContent = time
    if (time == 0) {
        clearInterval(timerID)
        if(sprint == 3){
            sprint = 4
        }
        endGame()
    }
}, 1000);


function startSprint(sprint) {
    switch (true) {
        case sprint == 1: {
            rockSpeed = 1;
            lives = 3;
            gap = 1000;
            break;
        }
        case sprint == 2: {
            rockSpeed = 2;
            lives = 4;
            gap = 500;
            break;
        }
        case sprint == 3: {
            rockSpeed = 3;
            lives = 5;
            gap = 500;
            break;
        }
    }
    addLives()
    //Time-gaps to move the rock
    setInterval(() => {
        moveRocks();
    }, 0)

    //Interval for rock creation
    setInterval(rockSurge, gap)
}

//URL
sprint = searchParams.get('sprint')
console.log(sprint)
startSprint(sprint)