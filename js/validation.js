// Objet regex dont le pattern est de permettre seulement des chiffres
const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;

// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da
const zoneMessage = document.getElementById("message_numero_da");
const autre = document.getElementById("message_declaration");

inputNoDA.addEventListener("input", Validation);
sliderNote.addEventListener("input", ModifierIconeNote);

// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

/**
 * Modifie les classes d'un élément icone selon la valeur d'une note
 * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
 */
function ModifierIconeNote(note) {
    // l'élément icone qui sera modifié
    const iconeNote = document.getElementById('icone_note');
    // On initialise les classes de l'élément à "vide"
    if (sliderNote.value < 20) {
        iconeNote.setAttribute("class", "far fa-sad-cry");
    }
    else if (sliderNote.value < 40) {
        iconeNote.setAttribute("class", "far fa-sad-tear");
    }
    else if (sliderNote.value < 60) {
        iconeNote.setAttribute("class", "far fa-frown");
    }
    else if (sliderNote.value < 80) {
        iconeNote.setAttribute("class", "far fa-smile");
    }
    else {
        iconeNote.setAttribute("class", "far fa-grin-squint-tears");
    }

    titreNote.innerText = "Ma note estimée = " + sliderNote.value + " %"

    // Ajout des bonnes classes selon la valeur de la note
    // À COMPLÉTER
}

/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage() {
    if (!Validation()) {
        
    }
    
    if (declaration.checked == false) {
        
    }
}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function Validation() {
    zoneMessage.innerHTML = "";
    let a = ContientChiffre();
    let b = NbCaracteres();
    let c = PremierCaractere();

    if (a && b && c) {
        daIconeErreur.style.display = "none"
        daIconeSucces.style.display = "block"
        return true;
    }
    else {
        daIconeErreur.style.display = "block"
        daIconeSucces.style.display = "none"
        return false;
    }
}

function ContientChiffre() {
    if (REGEX_SEULEMENT_CHIFFRE.test(inputNoDA.value)) {
        return true;
    }
    else {
        
        zoneMessage.innerHTML += "Le numéro de DA n'est pas uniquement composé de chiffre <br>";
        return false;
    }
}

function NbCaracteres() {
    if (inputNoDA.value.length == 7) {
        return true;
    }
    else {
        zoneMessage.innerHTML += "Le numéro de DA n'a pas une longeur de 7 chiffres <br>";
        return false;
    }
}

function PremierCaractere() {
    if (inputNoDA.value[0] == 1 || inputNoDA.value[0] == 2) {
        return true;
    }
    else {
        
        zoneMessage.innerHTML += "Le numéro de DA doit commencer par un 1 ou un 2 <br>";
        return false;
    }
}

function Soumettre() {
    zoneMessage.innerHTML = "";
    if (Validation() && declaration.checked == true) {
        return true;
    }

    if (declaration.checked == true) {
        autre.innerHTML = "";
    }

    if (declaration.checked == false) {
        autre.innerHTML = "La case n'est pas coché <br>";
        return false;
    }
    
    else {
        return false;
        
    } 
}