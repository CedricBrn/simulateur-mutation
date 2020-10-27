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

    // Inflation depuis 1995
    const inflation = 1.1982

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

    // Convertir la prime brute en net
    const primeBrutNet = 0.855



    /*
    Données des primes.
    Hash map à 4 dimensions. Pour accéder à la prime des PE au 3e échelon dans le scénario 4,
    il faut accéder à la valeur :
    scenario.scenario4.echelon["e3"]["pe"] -> permet d’utiliser des variables
    ou
    scenario.scenario4.echelon.e3.pe
    */
    let scenario = {
        "scenario1": {
            "echelon": {
                "e2": {
                    pe: 1995,
                    certifie: 1900,
                    agrege: 1805,
                    indifferent: 1900
                },
                "e3": {
                    pe: 1995,
                    certifie: 1900,
                    agrege: 1805,
                    indifferent: 1900
                },
                "e4": {
                    pe: 1765.5,
                    certifie: 1650,
                    agrege: 1534.5,
                    indifferent: 1650
                },
                "e5": {
                    pe: 935,
                    certifie: 850,
                    agrege: 765,
                    indifferent: 850
                }
            }
        },
        "scenario2": {
            "echelon": {
                "e2": {
                    pe: 1700,
                    certifie: 1600,
                    agrege: 1500,
                    indifferent: 1600
                },
                "e3": {
                    pe: 1700,
                    certifie: 1600,
                    agrege: 1500,
                    indifferent: 1600
                },
                "e4": {
                    pe: 1200,
                    certifie: 1100,
                    agrege: 1000,
                    indifferent: 1100
                },
                "e5": {
                    pe: 850,
                    certifie: 750,
                    agrege: 650,
                    indifferent: 750
                },
                "e6": {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                }
            }
        },
        "scenario3": {
            "echelon": {
                "e2": {
                    pe: 1400,
                    certifie: 1300,
                    agrege: 1200,
                    indifferent: 1300
                },
                "e3": {
                    pe: 1300,
                    certifie: 1200,
                    agrege: 1100,
                    indifferent: 1200
                },
                "e4": {
                    pe: 900,
                    certifie: 800,
                    agrege: 700,
                    indifferent: 800
                },
                "e5": {
                    pe: 800,
                    certifie: 700,
                    agrege: 600,
                    indifferent: 700
                },
                "e6": {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                },
                "e7": {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                }
            }
        },
        "scenario4": {
            "echelon": {
                "e2": {
                    pe: 1300,
                    certifie: 1200,
                    agrege: 1100,
                    indifferent: 1200
                },
                "e3": {
                    pe: 1300,
                    certifie: 1200,
                    agrege: 1100,
                    indifferent: 1200
                },
                "e4": {
                    pe: 1000,
                    certifie: 900,
                    agrege: 800,
                    indifferent: 900
                },
                "e5": {
                    pe: 800,
                    certifie: 700,
                    agrege: 600,
                    indifferent: 700
                },
                "e6": {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                },
                "e7": {
                    pe: 400,
                    certifie: 300,
                    agrege: 200,
                    indifferent: 300
                },
                "e8": {
                    pe: 200,
                    certifie: 100,
                    agrege: 0,
                    indifferent: 100
                }
            }
        }

    }

    //Récupération de la valeur du bouton "corps" sélectionné
    let corps = document.getElementById('statut').value

    if (corps == "rien") {
        alert("Vous devez choisir un statut.")
        return
    }

    let indice = null
    let echelon = null
    let salaireBrutEchelon = null

    echelon = parseInt(document.getElementById('echelon').value, 10);


    switch (corps) {
        case "pe":
            indice = indices[1][echelon - 1]
            salaireBrutEchelon = Math.floor( ( (indice * pointIndice) + (isoe / 12)) *100 ) / 100 
            break;
        case "capes":
            indice = indices[0][echelon - 1]
            salaireBrutEchelon = Math.floor( ( (indice * pointIndice) + (isoe / 12)) *100 ) / 100 
            break;
        case "agregation":
            indice = indices[2][echelon - 1]
            salaireBrutEchelon = Math.floor( ( (indice * pointIndice) + (isoe / 12)) *100 ) / 100 
            break;
        default:
            indice = null
    }



    //Affichage du résultat

    document.getElementById('aAfficher').style.display = 'block'
    document.getElementById('resultat').style.display = 'block'

    // Cas des personnels non-enseignants
    if (corps == "autre") {
        document.getElementById('autre').style.display = 'block'
        return
    }

    // Cas des enseignant-es non-titulaires
    if (corps == "contrat") {
        document.getElementById('contractuel').style.display = 'block'
        return
    }

    // Cas des enseignant-es au 1er échelon
    if (echelon == 1) {
        document.getElementById('debutCarriere').style.display = 'block';
        return true;
    }

    // Cas des enseignant-es au 9e échelon CN et plus
    if (echelon == 9) {
        document.getElementById('echelonEleve').style.display = 'block'
        return
    }

    // Cas des personnels enseignants des échelons 2 à 8
    document.getElementById('scenarios').style.display = 'block';

    // scénario 1
    if (echelon <= Object.keys(scenario.scenario1.echelon).length + 1) {

        let primeAnnuelle = scenario.scenario1.echelon["e" + echelon.toString()][corps]
        let primeMensuelle = Math.floor(((primeAnnuelle / 12) * 100)) / 100;
        let primeMensuelleNette = Math.floor((primeMensuelle * primeBrutNet * 100)) / 100

        document.getElementById("sc1").innerHTML = `Ce scénario prévoit une prime brute annuelle de ${primeAnnuelle} euros bruts pour votre échelon dans votre corps.<br />Cela revient à une prime mensuelle de ${primeMensuelle} euros bruts, soit environ ${primeMensuelleNette} euros nets par mois.`
        let augmentationPourCent = Math.floor((primeMensuelle / salaireBrutEchelon) * 100);
        let salaireInflationCompensee = Math.floor(salaireBrutEchelon * inflation * 100) / 100;
        document.getElementById('sc1inflation').innerHTML = `Cette prime représente une augmentation de votre salaire de ${augmentationPourCent}%.
            Depuis 1995, le gel du point d’indice a conduit les salaires à baisser de 19,82% en raison de l’inflation.
            Si le point d'indice était revalorisé, au lieu de ${salaireBrutEchelon} euros bruts mensuels, vous devriez gagner au même échelon au moins ${salaireInflationCompensee} euros.`

    } else {
        document.getElementById("sc1").innerHTML = "Ce scénario ne prévoit pas de prime pour votre échelon."
    }


    // scénario 2
    if (echelon <= Object.keys(scenario.scenario2.echelon).length + 1) {


        let primeAnnuelle = scenario.scenario2.echelon["e" + echelon.toString()][corps]
        let primeMensuelle = Math.floor(((primeAnnuelle / 12) * 100)) / 100;
        let primeMensuelleNette = Math.floor((primeMensuelle * primeBrutNet * 100)) / 100

        document.getElementById("sc2").innerHTML = `Ce scénario prévoit une prime brute annuelle de ${primeAnnuelle} euros bruts pour votre échelon dans votre corps.<br />Cela revient à une prime mensuelle de ${primeMensuelle} euros bruts, soit environ ${primeMensuelleNette} euros nets par mois.`
        let augmentationPourCent = Math.floor((primeMensuelle / salaireBrutEchelon) * 100);
        let salaireInflationCompensee = Math.floor(salaireBrutEchelon * inflation * 100) / 100;
        document.getElementById('sc2inflation').innerHTML = `Cette prime représente une augmentation de votre salaire de ${augmentationPourCent}%.
            Depuis 1995, le gel du point d’indice a conduit les salaires à baisser de 19,82% en raison de l’inflation.
            Si le point d'indice était revalorisé, au lieu de ${salaireBrutEchelon} euros bruts mensuels, vous devriez gagner au même échelon au moins ${salaireInflationCompensee} euros.`

    } else {
        document.getElementById("sc2").innerHTML = "Ce scénario ne prévoit pas de prime pour votre échelon."
    }

    // scénario 3

    if (echelon <= Object.keys(scenario.scenario3.echelon).length + 1) {


        let primeAnnuelle = scenario.scenario3.echelon["e" + echelon.toString()][corps]
        let primeMensuelle = Math.floor(((primeAnnuelle / 12) * 100)) / 100;
        let primeMensuelleNette = Math.floor((primeMensuelle * primeBrutNet * 100)) / 100

        document.getElementById("sc3").innerHTML = `Ce scénario prévoit une prime brute annuelle de ${primeAnnuelle} euros bruts pour votre échelon dans votre corps.<br />Cela revient à une prime mensuelle de ${primeMensuelle} euros bruts, soit environ ${primeMensuelleNette} euros nets par mois.`
        let augmentationPourCent = Math.floor((primeMensuelle / salaireBrutEchelon) * 100);
        let salaireInflationCompensee = Math.floor(salaireBrutEchelon * inflation * 100) / 100;
        document.getElementById('sc3inflation').innerHTML = `Cette prime représente une augmentation de votre salaire de ${augmentationPourCent}%.
            Depuis 1995, le gel du point d’indice a conduit les salaires à baisser de 19,82% en raison de l’inflation.
            Si le point d'indice était revalorisé, au lieu de ${salaireBrutEchelon} euros bruts mensuels, vous devriez gagner au même échelon au moins ${salaireInflationCompensee} euros.`

    } else {
        document.getElementById("sc3").innerHTML = "Ce scénario ne prévoit pas de prime pour votre échelon."
    }

    // scénario 4
    if (echelon <= Object.keys(scenario.scenario4.echelon).length + 1) {

        let primeAnnuelle = scenario.scenario4.echelon["e" + echelon.toString()][corps]
        let primeMensuelle = Math.floor(((primeAnnuelle / 12) * 100)) / 100;
        let primeMensuelleNette = Math.floor((primeMensuelle * primeBrutNet * 100)) / 100

        document.getElementById("sc4").innerHTML = `Ce scénario prévoit une prime brute annuelle de ${primeAnnuelle} euros bruts pour votre échelon dans votre corps.<br />Cela revient à une prime mensuelle de ${primeMensuelle} euros bruts, soit environ ${primeMensuelleNette} euros nets par mois.`
        let augmentationPourCent = Math.floor((primeMensuelle / salaireBrutEchelon) * 100);
        let salaireInflationCompensee = Math.floor(salaireBrutEchelon * inflation * 100) / 100;
        document.getElementById('sc4inflation').innerHTML = `Cette prime représente une augmentation de votre salaire de ${augmentationPourCent}%.
            Depuis 1995, le gel du point d’indice a conduit les salaires à baisser de 19,82% en raison de l’inflation.
            Si le point d'indice était revalorisé, au lieu de ${salaireBrutEchelon} euros bruts mensuels, vous devriez gagner au même échelon au moins ${salaireInflationCompensee} euros.`

    } else {
        document.getElementById("sc4").innerHTML = "Ce scénario ne prévoit pas de prime pour votre échelon."
    }



}

// Afficher les menus  et les div nécessaires
function afficheEchelon() {
    document.getElementById('calcul').style.display = 'block'
    switch (document.getElementById('statut').value) {
        case "certifie" :
            document.getElementById('aAfficher').style.display = 'none'
            document.getElementById('menuEchelon').style.display = 'block'
            break;
        case "pe":
            document.getElementById('aAfficher').style.display = 'none'
            document.getElementById('menuEchelon').style.display = 'block'
            break;
        case "agrege":
            document.getElementById('aAfficher').style.display = 'none'
            document.getElementById('menuEchelon').style.display = 'block'
            break;
        default:
            document.getElementById('aAfficher').style.display = 'none'
            document.getElementById('menuEchelon').style.display = 'none'

    }
}