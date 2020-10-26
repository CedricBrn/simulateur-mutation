function calcul() {
    /*Tableau de tableaux des indices pour chaque corps
    indices[0] : indices des certifié-es
    indices[1] : indices des PE
    indices[2] : indices des agrégé-es
    etc.*/


    // indices pour les échelons de la classe normale. Les indices PE et certifié-es sont les mêmes.
    let indices = [
        [390, 441, 448, 461, 476, 492, 519, 557, 590, 629, 673], // indices certifié-es et assimilé-es
        [390, 441, 448, 461, 476, 492, 519, 557, 590, 629, 673], // indices PE
        [450, 498, 513, 542, 579, 618, 659, 710, 757, 800, 830], // indices agrégé-es
    ];



    /* Primes et indemnités */
    const pointIndice = 4.686 //Valeur du point d'indice
    const isoe = 1213.56 // Indemnité de suivi et d'orientation 2d degré
    const isae = 1213.56 //Indemnité de suivi premier degré
    const rep = 1734 // Prime Rep
    const repPlus = 3479 // Prime Rep+
    const hsaAgrege1 = 1974.53 // 1re HSA Agrégé
    const hsaAgrege = 1645.44 // HSA Agrégé en plus
    const hsaCertifie1 = 1358.66 // 1re HSA certifié
    const hsaCertifie = 1132.22 // HSA certifié en plus

    //Récupération de la valeur du bouton "corps" sélectionné
    let corps = parseInt(document.getElementById('statut').value, 10);
    let echelon = indices[corps][parseInt(document.getElementById('echelon').value, 10) - 1]

    if (corps < 3) {
        salaireBrutEchelon = (echelon * pointIndice) + (isoe / 12)
    }

    console.log(salaireBrutEchelon)

    //Affichage du résultat

    document.getElementById('resultat').style.display = 'block';


}