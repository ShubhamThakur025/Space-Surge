let data = [
    {
        src: "Assets/Rocket-1.png",
        id: 1,
        desc: "Yellow Thunder",
        color: "rgb(246, 250, 41)"
    },
    {
        src: "Assets/Rocket-2.png",
        id: 2,
        desc: "Dark Phoenix",
        color: "rgb(131, 131, 153)"
    },
    {
        src: "Assets/Rocket-3.png",
        id: 3,
        desc: "Neon Nova",
        color: "rgb(91, 91, 219)"
    },
    {
        src: "Assets/Rocket-4.png",
        id: 4,
        desc: "Diamond Dash",
        color: "rgb(91, 91, 219)"
    }
]

let selectedCase = document.querySelector('.selectedRocket')
let optionCase = document.querySelector('.options')

let ship = localStorage.getItem('sel')
localStorage.setItem('sel', "Assets/Rocket-1.png")

    
function fillOptions(item) {
    optionCase.innerHTML = ''
    data.forEach(function (i) {
        if (item.id != i.id) {
            optionCase.innerHTML +=
                `
            <div class="option">
                <img src="${i.src}" alt="" class="RocketImg" id="${i.id}">
                <p style="color: ${i.color}">${i.desc}</p>
            </div>
            `
        }
    })
}
optionCase.addEventListener('click', function (event) {
    if (event.target) {
        let id = event.target.id
        let search = data.find(function (e) {
            return e.id == id;
        })
        if (search) {
            localStorage.setItem('sel', search.src)
            selectedCase.innerHTML = `
        <img src = ${search.src} alt = '' id = ${search.id} class="selRocketImg" >
        <p style = "color: ${search.color}">${search.desc}</p>
        `
        }
        fillOptions(search)
    }

})
fillOptions(ship)
selectedCase.onclick = () =>{
    location.href = 'game.html?sprint=1'
}