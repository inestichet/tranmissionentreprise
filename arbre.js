
const questions = [
  {
    id: 1,
    text: "Souhaitez-vous transmettre votre entreprise ?",
    options: [
      { text: "Oui, de votre vivant", next: 2 },
      { text: "Non, après votre décès", next: 5 }
    ]
  },
  {
    id: 2,
    text: "Souhaitez-vous conserver le contrôle ou les revenus ?",
    options: [
      { text: "Oui", next: 3 },
      { text: "Non", next: 4 }
    ]
  },
  {
    id: 3,
    text: "Transmission avec conservation de revenus/contrôle :<br><ul><li>Donation-partage avec démembrement</li><li>Création d’une société holding</li><li>Société civile</li></ul>",
    options: []
  },
  {
    id: 4,
    text: "Transmission sans volonté de conserver le contrôle :<br><ul><li>Pacte Dutreil</li></ul>",
    options: []
  },
  {
    id: 5,
    text: "Avez-vous identifié un héritier repreneur ?",
    options: [
      { text: "Oui", next: 6 },
      { text: "Non", next: 7 }
    ]
  },
  {
    id: 6,
    text: "Préparer la transmission ciblée :<br><ul><li>Testament avec clauses spécifiques</li></ul>",
    options: []
  },
  {
    id: 7,
    text: "En cas d’incertitude ou de mineurs :<br><ul><li>Mandat à effet posthume</li></ul>",
    options: []
  }
];

const container = document.getElementById("decision-tree");
let currentStep = 1;

function renderStep(stepId) {
  const step = questions.find(q => q.id === stepId);
  container.innerHTML = `<p>${step.text}</p>`;

  step.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.onclick = () => renderStep(option.next);
    container.appendChild(btn);
  });
}

renderStep(currentStep);
