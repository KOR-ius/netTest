const correctAnswers = {
    q1: ['B'],
    q2: ['A'],
    q3: ['A'],
    q4: ['B'],
    q5: ['C'],
    q6: ['A'],
    q7: ['B'],
    q8: ['C'],
    q9: ['A'],
    q10: ['B'],
    q11: ['C'],
    q12: ['A'],
    q13: ['A'],
    q14: ['A'],
    q15: ['B'],
    q16: ['A'],
    q17: ['A'],
    q18: ['B'],
    q19: ['C'],
    q20: ['C'],
    q21: ['A'],
    q22: ['A'],
    q23: ['B'],
    q24: ['B'],
    q25: ['B'],
    q26: ['A'],
    q27: ['A'],
    q28: ['C'],
    q29: ['B'],
    q30: ['A'],
    q31: ['A'],
    q32: ['C'],
    q33: ['B'],
    q34: ['C'],
    q35: ['C'],
    q36: ['B'],
    q37: ['A'],
    q38: ['A'],
    q39: ['B'],
    q40: ['A']
};

function checkAnswers() {
    let score = 0;
    let resultHTML = '';

    for (let i = 1; i <= 40; i++) {
        const selectedAnswers = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`)).map(input => input.value);
        const correctAnswer = correctAnswers[`q${i}`];

        console.log(`Question ${i}:`);
        console.log('Réponses sélectionnées:', selectedAnswers);
        console.log('Réponse correcte:', correctAnswer);

        const isCorrect = selectedAnswers.every(answer => correctAnswer.includes(answer)) && selectedAnswers.length === correctAnswer.length;

        if (isCorrect) {
            score++;
            resultHTML += `<p>Question ${i}: Correct! (Bonne réponse: ${correctAnswer.join(', ')})</p>`;
        } else {
            resultHTML += `<p>Question ${i}: Incorrect. (Réponse correcte: ${correctAnswer.join(', ')})</p>`;
        }
    }

    resultHTML += `<h3>Votre score total est: ${score}/40</h3>`;
    console.log('Résultat final:', resultHTML);

    const resultContainer = document.getElementById('results');
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = resultHTML;
}
