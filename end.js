let score = document.getElementById('score')
let scored = localStorage.getItem('score')

score.innerText = `${scored}!`
localStorage.setItem('score',0)