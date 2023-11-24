let score = document.getElementById('score')
let scored = localStorage.getItem('score')
let remark = document.getElementById('remark')
let winAudio = new Audio('Assets/win.mp3')

winAudio.play()
switch(true){
    case(scored <= 30):{
        remark.innerText = "You did good, Captain!"
        break;
    }
    case(scored > 30 && score < 60):{
        remark.innerText = "You were amazing, Captain!"
        break
    }
    case(scored >= 60 && score <= 120):{
        remark.innerText = "Mission Successful, Captain!!!"
        break
    }
}
score.innerText = `${scored}!`
localStorage.setItem('score',0)
