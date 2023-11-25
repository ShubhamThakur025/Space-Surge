//Array containing the data regarding the space-craft
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

//Required DOM elements
let selectedCase = document.querySelector('.selectedRocket')
let optionCase = document.querySelector('.options')
let ship = localStorage.getItem('sel')
localStorage.setItem('sel', "Assets/Rocket-1.png")

//to fill the available space-craft options    
function fillOptions(item) {
    optionCase.innerHTML = ''
    data.forEach(function (i) {
        if (item.id != i.id) {
            optionCase.innerHTML +=
                `
            <div class="option">
                <img src="${i.src}" alt="" class="RocketImg" id="${i.id}" class = "Rocket">
                <p style="color: ${i.color}">${i.desc}</p>
            </div>
            `
        }
    })
}

//event listener to select the desired space-craft
optionCase.addEventListener('click', function (event) {
    if (event.target.id) {
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

