// Magic 8 Ball

// Variable to Store HTML Elements
let answerEl = document.getElementById("answer");
let questionInEl = document.getElementById("question-in");

// Add Event Listener
document.getElementById("8-ball-img").addEventListener("click", answer);

function answer() {
    // Pick Random Answer
    let randNum = Math.random()
    // To Lower Case
    questionInEl.value.toUpperCase()
    console.log(questionInEl.value)
    if (questionInEl.value.length === 0) {
        answerEl.innerHTML = "Please ask a question..."
    } else if (questionInEl.value === "does a magic 8 ball actually work?") {
        answerEl.innerHTML = "How dare you doubt me!"
    } else if (questionInEl.value === "is javascript awesome?") {
        answerEl.innerHTML = "Of course!"
    } else if (randNum < 0.2) {
            answerEl.innerHTML = "Without a Doubt."
    } else if (randNum < 0.4) {
            answerEl.innerHTML = "As I see it, yes."
    } else if (randNum < 0.6) {
            answerEl.innerHTML = "Concentrate and ask again."
    } else if (randNum < 0.8) {
            answerEl.innerHTML = "Don't count on it."
    } else {
            answerEl.innerHTML = "Outlook not so good."
    }
}