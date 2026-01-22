// Referencias al HTML
let homeEl = document.getElementById("score")
let guestEl = document.getElementById("guest")
let homeBg = document.getElementById("score").parentElement // Truquito: agarramos el padre del texto
let guestBg = document.getElementById("guest").parentElement

// Variables de puntaje
let homeScore = 0
let guestScore = 0

function addPoints(team, points) {
    if (team === 'home') {
        homeScore += points
        homeEl.textContent = homeScore
    } else if (team === 'guest') {
        guestScore += points
        guestEl.textContent = guestScore
    }
    
    highlightLeader()
}

function highlightLeader() {
    // 1. Limpiamos: Sacamos la clase a los dos por las dudas
    homeBg.classList.remove("leader")
    guestBg.classList.remove("leader")

    // 2. Comparamos y asignamos al ganador
    if (homeScore > guestScore) {
        homeBg.classList.add("leader")
    } else if (guestScore > homeScore) {
        guestBg.classList.add("leader")
    }
}
let faultsHome = document.getElementById("fault-1")
let faultsGuest = document.getElementById("fault-2")
let faultsHomeCount = 0
let faultsGuestCount = 0

function homeFaults(){
    faultsHomeCount +=1
    faultsHome.textContent = faultsHomeCount
}
function guestFaults(){
    faultsGuestCount +=1
    faultsGuest.textContent = faultsGuestCount
}

function reset(){
    homeScore = 0
    guestScore = 0
    faultsHomeCount = 0
    faultsGuestCount = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
    faultsHome.textContent = faultsHomeCount
    faultsGuest.textContent = faultsGuestCount
    highlightLeader()
}


