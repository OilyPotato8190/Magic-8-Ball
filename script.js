// Magic 8 Ball

// Variable to Store HTML Elements
let answerEl = document.getElementById('answer');
let questionInEl = document.getElementById('question-in');

// Add Event Listener
document.getElementById('8-ball-img').addEventListener('click', answer);

function answer() {
  let question = questionInEl.value.toLowerCase();

  let response = checkQuestion(question);
  if (!response) response = randomResponse();

  answerEl.innerHTML = response;
}

function checkQuestion(question) {
  if (question === '') {
    return 'Please ask a question...';
  } else if (question === 'does a magic 8 ball actually work?') {
    return 'How dare you doubt me!';
  } else if (question === 'is javascript awesome?') {
    return 'Of Course!';
  } else {
    return '';
  }
}

function randomResponse() {
  const randNum = Math.floor(Math.random() * 5);

  if (randNum === 0) return 'Without a Doubt.';
  else if (randNum === 1) return 'As I see it, yes.';
  else if (randNum === 2) return 'Concentrate and ask again.';
  else if (randNum === 3) return "Don't count on it.";
  else return 'Outlook not so good.';
}
