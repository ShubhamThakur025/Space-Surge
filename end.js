//Required DOM elements
let score = document.getElementById('score')
let scored = localStorage.getItem('score')
let remark = document.getElementById('remark')
let winAudio = new Audio('Assets/win.mp3')

//Win Audio 
winAudio.play()

//Updating the score
score.innerText = `${scored}!`
localStorage.setItem('score',0)

//to show random remarks
function showRemark(){
    let remarkArr = ["You did good, Captain!", "You were amazing, Captain!", "Mission Successful, Captain!!!" ]
    let index = randomNum(0,remarkArr.length)
    remark.innerText = `${remarkArr[index]}`
}

//helper function
function randomNum(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
showRemark()
