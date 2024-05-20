function generateChart() {
  const form = document.getElementById('philosophyForm');
  const formData = new FormData(form);

  const scores = {
    socrates: 0,
    aristotle: 0,
    descartes: 0,
    nietzsche: 0,
    beauvoir: 0
  };

  const questions = [
    ['q1', 'socrates'], ['q2', 'aristotle'], ['q3', 'descartes'], ['q4', 'nietzsche'], ['q5', 'beauvoir'],
    ['q6', 'socrates'], ['q7', 'aristotle'], ['q8', 'descartes'], ['q9', 'nietzsche'], ['q10', 'beauvoir'],
    ['q11', 'socrates'], ['q12', 'aristotle'], ['q13', 'descartes'], ['q14', 'nietzsche'], ['q15', 'beauvoir'],
    ['q16', 'socrates'], ['q17', 'aristotle'], ['q18', 'descartes'], ['q19', 'nietzsche'], ['q20', 'beauvoir']
  ];

  questions.forEach(([question, philosopher]) => {
    scores[philosopher] += parseInt(formData.get(question)) || 0;
  });

  const normalize = score => ((score - 4) / 24) * 10;

  const normalizedScores = {
    socrates: normalize(scores.socrates),
    aristotle: normalize(scores.aristotle),
    descartes: normalize(scores.descartes),
    nietzsche: normalize(scores.nietzsche),
    beauvoir: normalize(scores.beauvoir)
  };

  const data = {
    labels: ['Sócrates', 'Aristóteles', 'Descartes', 'Nietzsche', 'Simone de Beauvoir'],
    datasets: [{
      label: 'Afinidad Filosófica',
      data: [
        normalizedScores.socrates,
        normalizedScores.aristotle,
        normalizedScores.descartes,
        normalizedScores.nietzsche,
        normalizedScores.beauvoir
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      scales: {
        r: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  };

  const ctx = document.getElementById('spiderChart').getContext('2d');
  new Chart(ctx, config);
}
