function calculateScore()  {
    const form = document.getElementById('quizForm');
    const resultContainer = document.getElementById('result-quiz');
    const correctAnswers = ['b', 'a', 'c', 'd', 'b', 'c', 'a', 'd', 'b', 'a'];

    let score = 0;
    const userAnswers = [];

    let allQuestionsAnswered = true; // Variable pour suivre si toutes les questions ont été répondues

    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            userAnswers.push(selectedAnswer.value);
            if (selectedAnswer.value === correctAnswers[i - 1]) {
                score++;
            }
        } else {
            allQuestionsAnswered = false; // Une question n'a pas été répondu
        }
    }

    if (!allQuestionsAnswered) {
        alert("Veuillez répondre à toutes les questions avant de soumettre le quiz.");
        return; // Ne pas calculer le score si une question n'est pas répondue
    }

    resultContainer.innerHTML = `<p>Votre note: ${score} / 10</p>`;
    resultContainer.innerHTML += '<p>Réponses correctes:</p>';
    
    for (let i = 0; i < correctAnswers.length; i++) {
        resultContainer.innerHTML += `<p>Question ${i + 1}: ${correctAnswers[i]}</p>`;
    }
}
