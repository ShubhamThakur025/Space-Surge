//Needed DOM Elements
let homeText = document.querySelector('.home-text')
let nameScreen = document.querySelector('.name-nickname')
let instructionScreen = document.querySelector('.instructions-section')
let enter = document.getElementById("enter")
let click = document.getElementById('click')

//Required Variables
let turn = 0
let flag = false

//Keydown event listener
document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        runGame()
    }
})

//On-click event
click.onclick = () => {
    //Commencing the game
    runGame()
}

//to start the dynamic home-page
function runGame() {
    if (turn == 0) {
        
        //Welcome-Text
        homeText.style.display = 'none'
        nameScreen.style.display = 'block'
        turn = 1
        enter.style.color = 'pink'
    }
    else if (turn == 1) {

        //Name and nickname
        let name = document.getElementById('name')
        let nName = document.getElementById('nick-name')
        if (name.value && nName.value) {
            flag = true
        }

        if (flag == false) {
            alert("Enter name and nickname")
        } else {

            //Instructions screen
            nameScreen.style.display = 'none'
            instructionScreen.style.display = 'block'

            localStorage.setItem('name', name.value)
            localStorage.setItem('nName', nName.value)
            enter.style.color = 'green'
            turn = 2;
        }
    }
    else {
        location.href = './game.html?sprint=1'
    }
}