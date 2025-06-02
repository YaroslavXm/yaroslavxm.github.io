var text = document.getElementById("question")
var questions = ["Do you like play Roblox?","Do you like play Minecraft?","Do you like watch YouTube?","You wanna cry?","Do you know Monver?"]
var baite = 0

function choose(array) {
    const randomNumber = Math.floor(Math.random() * array.length)
    return array[randomNumber]
}

var randomText = choose(questions)

text.innerHTML = randomText

function yeshover() {
    text.innerHTML = "Sosal?"
    baite = "Sosal?"
}

function nohover() {
    text.innerHTML = "Natural?"
    baite = "Natural?"
}

function leave() {
    text.innerHTML = randomText
    baite = 0
}

function bait(bait) {
    if (baite == 0) {
        alert("It's not escape")
    }
    else {
        alert("You are baited on " + baite)
    }
}