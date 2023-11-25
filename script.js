//Required DOM elements
let gameArena = document.querySelector('.game-arena')
let spaceShip = document.querySelector('#space-ship')
let selShip = localStorage.getItem('sel')
let nickname = localStorage.getItem('nName')
let commentBox = document.querySelector('.comment')
let counter = document.getElementById('counter')
let timerId;

//Audio for the game
let bgAudio = new Audio("Assets/bg.mp3")
let countAudio = new Audio("Assets/countdown.mp3")
let airHorn = new Audio("Assets/airhorn.mp3")

//Required variables
let count = 4
let searchParams = new URLSearchParams(window.location.search)
sprint = searchParams.get('sprint')

//event listener to start the game
window.onload = () => {
    bgAudio.play()
    bgAudio.loop = true
}
spaceShip.innerHTML =
    `
<img src = "${selShip}" alt = "SpaceShip">
`

//Array holding the types of comments
let comments = [
    {
        case: "Start",
        comment: `
        <p class = 'commentPara'>
        Hey Captain <span>${nickname}</span>, <br> Space is endless <br>and so your abilities!
        `
    },
    {
        case: "Collision",
        comment:
            `
        <p class = 'commentPara'>
        Captain <span>${nickname}</span>, <br> It's an <br> emergency!!
        `
    },
    {
        case: "HalfTheScore",
        comment:
            `
        <p class = 'commentPara'>
        Well Done! Captain <span>${nickname}</span>, <br> You are amazing!
        `
    }
]


//to check the countdown
function updatecount() {
    counter.innerHTML = `<h1 id='count'>${count}</h1>`
}

//to set up the timer
function timer() {
    timerId = setInterval(function () {
        countAudio.play()
        count--
        updatecount()

        if (count == 0) {
            clearInterval(timerId)
            counter.innerHTML = `<h1 id='count'>GO!</h1>`

            //Adds the game2.js file to the game to initiate the sprint
            setTimeout(function () {
                counter.style.display = 'none'
                let script = document.createElement('script')
                script.src = 'game2.js'
                document.body.appendChild(script)
                commentf('Start')
            }, 1000)
        }
    }, 1000)
}

//to display the comment
function commentf(flag) {
    let comment = document.querySelector('.comment')
    comments.forEach(function (item) {
        console.log(flag)
        if (item.case === flag) {
            comment.innerHTML = item.comment;
        }
    })
}


//to start the game
function startPage() {

    bgAudio.pause();
    let alert = document.getElementById('alert')
    alert.innerHTML = `
    <h1 class = 'alertHeading' > Sprint-${sprint} is starting! <h2>`
    alert.style.display = 'block'
    airHorn.play()
    setTimeout(() => {
        alert.style.display = 'none'
    }, 3000)
    setTimeout(timer, 2000)

}
setTimeout(startPage, 500)