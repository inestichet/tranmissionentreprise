<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Arbre décisionnel – Transmission d’entreprise</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f7f7f7;
      padding: 20px;
    }
    .step {
      display: none;
      background: #e6fff0;
      border-left: 5px solid #3ba776;
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 8px;
    }
    .step.active {
      display: block;
    }
    button {
      margin: 5px 10px 5px 0;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      background-color: #3ba776;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #2e805e;
    }
    ul {
      margin-top: 10px;
    }
    .note {
      color: #e67300;
      font-style: italic;
    }
  </style>
</head>
<body>
  <h1>Arbre décisionnel – Transmission d’entreprise</h1>

  <div id="step1" class="step active">
    <p><strong>1. Souhaitez-vous transmettre votre entreprise ?</strong></p>
    <button onclick="showStep('step2')">Oui, de votre vivant</button>
    <button onclick="showStep('step5')">Non, après votre décès</button>
  </div>

  <div id="step2" class="step">
    <p><strong>2. Transmission anticipée (de votre vivant)</strong><br>Souhaitez-vous conserver le contrôle ou les revenus ?</p>
    <button onclick="showStep('step3')">Oui</button>
    <button onclick="showStep('step4')">Non</button>
  </div>

  <div id="step3" class="step">
    <p><strong>3. Transmission avec conservation de revenus / contrôle</strong></p>
    <ul>
      <li><strong>🔹 Donation-partage avec démembrement</strong><br>
        → Transmet la nue-propriété aux héritiers<br>
        → Conserve l’usufruit pour le dirigeant<br>
        <span class="note">⚠️ Gestion partagée entre usufruitier et nus-propriétaires</span>
      </li>
      <li><strong>🔹 Création d’une société holding</strong><br>
        → Structuration de la gouvernance<br>
        → Transmission indirecte par parts sociales<br>
        → Peut bénéficier du Pacte Dutreil
      </li>
      <li><strong>🔹 Société civile (SCI, SC…)</strong><br>
        → Détention d’un patrimoine immobilier ou financier<br>
        → Facilite la gestion familiale<br>
        <span class="note">⚠️ Conflits possibles si statuts mal rédigés</span>
      </li>
    </ul>
  </div>

  <div id="step4" class="step">
    <p><strong>4. Transmission sans volonté de conserver le contrôle</strong></p>
    <ul>
      <li><strong>🔹 Pacte Dutreil</strong><br>
        → Exonération de 75 % des droits de mutation<br>
        → Engagement collectif + individuel de conservation<br>
        → Nécessite une activité opérationnelle
      </li>
    </ul>
  </div>

  <div id="step5" class="step">
    <p><strong>5. Transmission au décès</strong><br>Avez-vous identifié un héritier repreneur ?</p>
    <button onclick="showStep('step6')">Oui</button>
    <button onclick="showStep('step7')">Non</button>
  </div>

  <div id="step6" class="step">
    <p><strong>6. Préparer la transmission ciblée</strong></p>
    <ul>
      <li><strong>🔹 Testament avec clauses spécifiques</strong><br>
        → Répartition des biens selon les volontés<br>
        → Possibilité d’attribuer une part de l’entreprise au repreneur<br>
        <span class="note">⚠️ Attention aux règles de réserve héréditaire</span>
      </li>
    </ul>
  </div>

  <div id="step7" class="step">
    <p><strong>7. En cas d’incertitude ou de mineurs</strong></p>
    <ul>
      <li><strong>🔹 Mandat à effet posthume</strong><br>
        → Mandataire gère l’entreprise après le décès<br>
        → Utile si héritiers jeunes ou non préparés<br>
        → Durée max : 2 ans (ou plus si enfant mineur)
      </li>
    </ul>
  </div>

  <script>
    function showStep(stepId) {
      document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
      });
      document.getElementById(stepId).classList.add('active');
    }
  </script>
</body>
</html>
