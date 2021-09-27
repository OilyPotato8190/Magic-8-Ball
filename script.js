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
    let question = questionInEl.value.toLowerCase()
    if (question.length === 0) {
        answerEl.innerHTML = "Please ask a question..."
    } else if (question === "does a magic 8 ball actually work?" || question === "does a magic 8 ball actually work") {
        answerEl.innerHTML = "How dare you doubt me!"
    } else if (question === "is javascript awesome?" || question === "is javascript awesome") {
        answerEl.innerHTML = "Of course!"
    } else if (question === "will you be my friend?" || question === "will you be my friend") {
        answerEl.innerHTML = "Perhaps"
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