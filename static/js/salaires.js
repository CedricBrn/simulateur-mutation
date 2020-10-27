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


   /*  let sc = {
        "scenario1": {
            "echelon": [
                {
                    pe: 1995,
                    certifie: 1900,
                    agrege: 1805,
                    indifferent: 1900
                },
                {
                    pe: 1995,
                    certifie: 1900,
                    agrege: 1805,
                    indifferent: 1900
                },
                {
                    pe: 1765.5,
                    certifie: 1650,
                    agrege: 1534.5,
                    indifferent: 1650
                },
                {
                    pe: 935,
                    certifie: 850,
                    agrege: 765,
                    indifferent: 850
                }
            ]
        },
        "scenario2": {
            "echelon": [
                {
                    pe: 1700,
                    certifie: 1600,
                    agrege: 1500,
                    indifferent: 1600
                },
                {
                    pe: 1700,
                    certifie: 1600,
                    agrege: 1500,
                    indifferent: 1600
                },
                {
                    pe: 1200,
                    certifie: 1100,
                    agrege: 1000,
                    indifferent: 1100
                },
                {
                    pe: 850,
                    certifie: 750,
                    agrege: 650,
                    indifferent: 750
                },
                {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                }
            ]
        },
        "scenario3": {
            "echelon": [
                {
                    pe: 1400,
                    certifie: 1300,
                    agrege: 1200,
                    indifferent: 1300
                },
                {
                    pe: 1300,
                    certifie: 1200,
                    agrege: 1100,
                    indifferent: 1200
                },
                {
                    pe: 900,
                    certifie: 800,
                    agrege: 700,
                    indifferent: 800
                },
                {
                    pe: 800,
                    certifie: 700,
                    agrege: 600,
                    indifferent: 700
                },
                {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                },
                {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                }
            ]
        },
        "scenario4": {
            "echelon": [
                {
                    pe: 1300,
                    certifie: 1200,
                    agrege: 1100,
                    indifferent: 1200
                },
                {
                    pe: 1300,
                    certifie: 1200,
                    agrege: 1100,
                    indifferent: 1200
                },
                {
                    pe: 1000,
                    certifie: 900,
                    agrege: 800,
                    indifferent: 900
                },
                {
                    pe: 800,
                    certifie: 700,
                    agrege: 600,
                    indifferent: 700
                },
                {
                    pe: 500,
                    certifie: 400,
                    agrege: 300,
                    indifferent: 400
                },
                {
                    pe: 400,
                    certifie: 300,
                    agrege: 200,
                    indifferent: 300
                },
                {
                    pe: 200,
                    certifie: 100,
                    agrege: 0,
                    indifferent: 100
                }
            ]
        }

    } */

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

    let echelon = null
    let salaireBrutEchelon = null

    switch (corps) {
        case "pe":
            echelon = indices[1][parseInt(document.getElementById('echelon').value, 10) - 1]
            salaireBrutEchelon = (echelon * pointIndice) + (isoe / 12)
            break;
        case "capes":
            echelon = indices[0][parseInt(document.getElementById('echelon').value, 10) - 1]
            salaireBrutEchelon = (echelon * pointIndice) + (isoe / 12)
            break;
        case "agregation":
            echelon = indices[2][parseInt(document.getElementById('echelon').value, 10) - 1]
            salaireBrutEchelon = (echelon * pointIndice) + (isoe / 12)
            break;
        default:
            echelon = null
    }


   

    //Affichage du résultat

    document.getElementById('resultat').style.display = 'block';

    // Cas des personnels non-enseignants
    if (corps == "autre") {
        document.getElementById('autre').style.display = 'block';
        return
    }

    // Cas des enseignant-es non-titulaires
    if (corps == "contrat") {
        document.getElementById('contractuel').style.display = 'block';
        return
    }

    // Cas des enseignant-es au 1er échelon
    if (echelon == 1) {
        document.getElementById('debutCarriere').style.display = 'block';
        return
    }

    // Cas des enseignant-es au 9e échelon CN et plus
    if (echelon == 9) {
        document.getElementById('echelonEleve').style.display = 'block';
        return
    }

}