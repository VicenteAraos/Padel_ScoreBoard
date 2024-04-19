
//ScoreDisplay Elements
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeSetEl = document.getElementById("home-set")
let guestSetEl = document.getElementById("guest-set")
let homeGameEl = document.getElementById("home-game")
let guestGameEl = document.getElementById("guest-game")

let homeSets = 0;
let homeGames = 0;
let guestSets = 0;
let guestGames = 0;


//Home buttons
let homeCeroBtn = document.getElementById("home-0-btn")
homeCeroBtn.addEventListener('click', homeScoreChanger)

let homeFifteenBtn = document.getElementById("home-15-btn")
homeFifteenBtn.addEventListener('click', homeScoreChanger)

let homeThirtyBtn = document.getElementById("home-30-btn")
homeThirtyBtn.addEventListener('click', homeScoreChanger)

let homeFourtyBtn = document.getElementById("home-40-btn")
homeFourtyBtn.addEventListener('click', homeScoreChanger)

let homeAdvBtn = document.getElementById("home-adv-btn")
homeAdvBtn.addEventListener('click', homeScoreChanger)

let homeAddGameBtn = document.getElementById("home-game-add")
homeAddGameBtn.addEventListener('click', homeGameChanger)

let homeSubGameBtn = document.getElementById("home-game-sub")
homeSubGameBtn.addEventListener('click', homeGameChanger)

let homeAddSetBtn = document.getElementById("home-set-add")
homeAddSetBtn.addEventListener('click', homeSetChanger)

let homeSubSetBtn = document.getElementById("home-set-sub")
homeSubSetBtn.addEventListener('click', homeSetChanger)


//Guest buttons
let guestCeroBtn = document.getElementById("guest-0-btn")
guestCeroBtn.addEventListener('click', guestScoreChanger)

let guestFifteenBtn = document.getElementById("guest-15-btn")
guestFifteenBtn.addEventListener('click', guestScoreChanger)

let guestThirtyBtn = document.getElementById("guest-30-btn")
guestThirtyBtn.addEventListener('click', guestScoreChanger)

let guestFourtyBtn = document.getElementById("guest-40-btn")
guestFourtyBtn.addEventListener('click', guestScoreChanger)

let guestAdvBtn = document.getElementById("guest-adv-btn")
guestAdvBtn.addEventListener('click', guestScoreChanger)

let guestAddGameBtn = document.getElementById("guest-game-add")
guestAddGameBtn.addEventListener('click', guestGameChanger)

let guestSubGameBtn = document.getElementById("guest-game-sub")
guestSubGameBtn.addEventListener('click', guestGameChanger)

let guestAddSetBtn = document.getElementById("guest-set-add")
guestAddSetBtn.addEventListener('click', guestSetChanger)

let guestSubSetBtn = document.getElementById("guest-set-sub")
guestSubSetBtn.addEventListener('click', guestSetChanger)


//Score changer functions
function homeGameChanger(e){
    homeGames+= parseInt(e.target.value)
    homeGameEl.innerHTML = homeGames
}

function guestGameChanger(e){
    guestGames+= parseInt(e.target.value)
    guestGameEl.innerHTML = guestGames
}

function homeSetChanger(e){
    homeSets+= parseInt(e.target.value)
    homeSetEl.innerHTML = homeSets
}

function guestSetChanger(e){
    guestSets+= parseInt(e.target.value)
    guestSetEl.innerHTML = guestSets
}


function homeScoreChanger(e){
    homeScoreEl.innerText = e.target.value
    resetHomeBtns()
    e.target.style.color = "#c6ed2c"
    e.target.style.border = "2px solid #c6ed2c"
}

function guestScoreChanger(e){
    guestScoreEl.innerText = e.target.value
    resetGuestBtns()
    e.target.style.color = "#c6ed2c"
    e.target.style.border = "2px solid #c6ed2c"
}

function resetHomeBtns(){
    homeCeroBtn.style.color = "#fefff3"
    homeCeroBtn.style.border = "1px solid #fefff3"

    homeFifteenBtn.style.color = "#fefff3"
    homeFifteenBtn.style.border = "1px solid #fefff3"

    homeThirtyBtn.style.color = "#fefff3"
    homeThirtyBtn.style.border = "1px solid #fefff3"

    homeFourtyBtn.style.color = "#fefff3"
    homeFourtyBtn.style.border = "1px solid #fefff3"

    homeAdvBtn.style.color = "#fefff3"
    homeAdvBtn.style.border = "1px solid #fefff3" 
}

function resetGuestBtns(){
    guestCeroBtn.style.color = "#fefff3"
    guestCeroBtn.style.border = "1px solid #fefff3"

    guestFifteenBtn.style.color = "#fefff3"
    guestFifteenBtn.style.border = "1px solid #fefff3"

    guestThirtyBtn.style.color = "#fefff3"
    guestThirtyBtn.style.border = "1px solid #fefff3"

    guestFourtyBtn.style.color = "#fefff3"
    guestFourtyBtn.style.border = "1px solid #fefff3"

    guestAdvBtn.style.color = "#fefff3"
    guestAdvBtn.style.border = "1px solid #fefff3" 

}
