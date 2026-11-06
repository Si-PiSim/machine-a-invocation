// 1. Récupération des éléments du DOM dont nous avons besoin
const form = document.getElementById('invocation');
const prenomInput = document.getElementById('prenom');
const creatureSelect = document.getElementById('creature');
const invocationSection = document.getElementById('invocation-section');
const resultatSection = document.getElementById('resultat');
const messageP = document.getElementById('message');
const recommencerBtn = document.getElementById('recommencer');

// 2. Écouter la soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher le rechargement par défaut de la page
    event.preventDefault();

    // 3. Récupérer les valeurs saisies par l'utilisateur
    const prenom = prenomInput.value.trim();
    const creature = creatureSelect.value;

    // Petite vérification de sécurité (optionnelle mais propre)
    if (!prenom || !creature) {
        alert("Veuillez entrer un prénom et choisir une créature !");
        return;
    }

    // 4. Construire le message personnalisé avec un template literal
    const message = `✨ Incantation réussie ! ${prenom}, tu es désormais lié(e) à ${creature} ! Prépare-toi à coder avec une puissance légendaire. 🚀`;

    // 5. Afficher le message dans le paragraphe dédié
    messageP.textContent = message;

    // 6. Basculer l'affichage (cacher le formulaire, afficher le résultat)
    invocationSection.classList.add('cache');
    resultatSection.classList.remove('cache');
});

// 7. Bonus : Gérer le bouton pour recommencer
recommencerBtn.addEventListener('click', function() {
    // Réinitialiser les champs du formulaire
    form.reset();

    // Faire l'action inverse : réafficher le formulaire et cacher le résultat
    invocationSection.classList.remove('cache');
    resultatSection.classList.add('cache');
});