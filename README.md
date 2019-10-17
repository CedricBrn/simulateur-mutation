# Lignes directrices du simulateur retraites

Le simulateur dont le code est proposé ici est adapté avant tout à l’Éducation nationale.



## Objectifs

L’objectif principal du simulateur est de montrer la différence de pension le système actuel, et le régime proposé par Delevoye.



### Ce que le simulateur fait

Il prend en compte :

- une carrière standard de fonctionnaire en fonction du corps ;
- une carrière de contractuel-le en fonction d’une grille indiciaire déterminée ;
- le minimum contributif dans l’ancien système et celui issu du rapport Delevoye ;
- différents âges de début et de fin de carrière ;
- les évolutions prévisibles de l’âge de départ sans décote ;
- la possibilité de prise en compte de certaines primes répandues chez les personnels.



### Hypothèses tirées du rapport Delevoye

Le simulateur part des hypothèses suivantes :

- le montant total des cotisations patronales et salariales s’élève à 25,31% ;
- 1 € cotisé = 10 points ;
- La valeur de service du point est de 0,55€ / point ;
- certaines primes et indemnités (les plus courantes) peuvent être intégrées.



### Principales limites

Ce que le simulateur ne fait pas :

- faire une projection individuelle prenant en compte les situations individuelles ;
- prendre en compte les heurts de carrière (temps partiels, disponibilités ou congés sans soldes) ;
- prendre compte la transition entre l’ancien et l’hypothétique système Delevoye.
- prendre en compte le handicap.
- prendre en compte les carrières de droit privé ;
- prendre en compte les carrières de polypensionné-e-s (ex : régime général et MSA).

Pour les contractuel-le-s de droit public, le postulat est le suivant : le montant de la pension de retraite dans le régime général + régime complémentaire actuels est jugé correspondre à un taux plafond de 75% du salaire brut moyen des 25 dernières années.



Les éléments qui ont conduit à ces décisions sont les suivants.

En premier lieu, augmenter le nombre de prise en compte de cas particuliers se traduit par une complexification croissante du code et une augmentation en parallèle du risque d’erreurs.  Nous n’avons pas les compétences nécessaires pour assumer le coût en temps de la prise en charge de cette complexité.

En deuxième lieu, les utilisateur-ices doivent être guidé-es par un processus le plus court possible afin que l’outil soit réellement utilisé. Nous avons en conséquence volontairement limité les entrées de l’utilisateur-ice au strict minimum.

En troisième et dernier lieu, l’enjeu est avant tout en terme de propagande : montrer il s’agit de montrer la différence entre l’ancien et le nouveau système pour des carrières types. Il s’agit avant tout de faire apparaître rapidement, de manière personnalisée, les pertes typiques pour les personnels, par mois et par année pour l’ordre de grandeur.



*Les limitations sont donc nombreuses, et le simulateur doit donc être pris pour ce qu’il est : un outil réfléchi et honnête dans les hypothèses formulées, mais dont l’objet est avant tout de produire une propagande — qu’il s’agisse de diriger les personnels vers l’outil pour qu’ils et elles se fassent une idée, ou bien de produire rapidement des exemples pour la propagande écrite, avec une capacité à modifier l’outil sans trop de difficultés si les paramètres venaient à changer.*







# Aspects techniques

## Pré-requis

Le site est généré par [Hugo](https://gohugo.io). Il faut donc l'installer sur la machine locale pour reconstruire le site.

Hugo est un générateur de site statique. Il suffit, à la racine du site, d’invoquer la commande `hugo` pour générer le site entier. Il se trouve alors dans le dossier `public` et peut être copié sur n'importe quel hébergement en ligne.

Si on veut faire tourner le site localement, il suffit d’invoquer Hugo ainsi : `hugo server -D`. Les changements conduiront à un rechargement immédiat des pages. Le site de test sera disponible par défaut à l’URL locale suivante : [http://localhost:1313](http://localhost:1313).

## Prérequis utilisateur

Les utilisateur-ice-s du simulateur devraient pouvoir utiliser la page dans n'importe quel navigateur sur n'importe quel terminal, à la condition de pouvoir exécuter du javascript.

Les navigateurs ie9+, Edge, Safari, Firefox, Chrome, Opera, Vivaldi sont supportés sur Windows / Mac / Linux. Les navigateurs Safari, Chrome, Firefox sont supportés sur mobile.

## Configuration du site

Le thème de base est une modification du thème [Cupper](https://themes.gohugo.io/cupper-hugo-theme/) pour Hugo. Il se trouve dans le répertoire `themes/cupper-sud`.

La configuration de base du site se trouve dans le fichier `config.toml` à la racine du site. Le fichier est assez simple à comprendre : on peut définir des rubriques et des pages.

Le Design se trouve en particulier dans le fichier `themes/cupper-sud/assets/css/template-styles.css`. C’est à cet endroit que la majorité des modifcations doivent être effectuées pour modifier le design du site. De nombreux ajouts et règles ont été produites pour les besoins du simulateur.

L’image en une doit porter le nom `logo.svg` et se trouver dans le dossier `static/images` du site. Les favicons doivent être placées dans le dossier `static`.

## Composition du site

Dans le dossier `content` se trouvent les pages en racine du site. La page spéciale `_index.md` est la page d’accueil. C’est dans cette page que le code permettant de gérer le simulateur est mis en place.

Les fichiers sont écrits en Markdown, un langage à balisage léger bien plus facile à écrire que le HTML. L’extension d’un fichier Markdown est `.md`.

Pour avoir un aperçu efficace de la syntaxe Markdown, il suffit de se rendre ici : [https://wprock.fr/blog/markdown-syntaxe/](https://wprock.fr/blog/markdown-syntaxe/).

Chaque fichier commence par 5 lignes :

```
---
title: "Comparateur de retraites entre le système actuel et le projet du gouvernement"
date: 2019-10-12T08:08:47+02:00
draft: false
---
```

- title: Ce sera le titre de la page. Il ne faut pas l’omettre.

- date: la date de création.  Inutile sauf si on veut classer par ordre chronologique les pages.

- draft: il faut mettre à **false** pour être certain-e que le site sera généré avec la page.

Pour éviter d'avoir à copier/coller ces lignes, on peut créer un post en tapant simplement depuis la racine du site :

```sh
hugo new content/nomdelarticle.md
```

## Simulateur

Le simulateur est composé de code javascript (sans appel à une bibliothèque externe) dans une page html.

Il est intégré grâce à un *shortcode* du thème défini dans le répertoire `themes/cupper-sud/layouts/shortcodes` : `rawhtml.html`.

La syntaxe est la suivante : dans un article rédigé en Markdown, il suffit d’insérer :

```
{{< rawhtml >}}
Le code html
{{< /rawhtml >}}
```

La logique de masquage et affichage des différents menus est implémentée dans le fichier `static/js/esthetique.js`.

## L’algorithme

L’algorithme compare essentiellement la différence de revenu projeté entre le système actuel et le système par points annoncé par Delevoye.

L’implémentation se trouve dans `static/js/retraites.js`. Le code est documenté au maximum pour permettre sa réutilisation.

Les variables utiles sont déclarées en début de script pour permettre au maximum une appropriation de la logique du code.

Si des paramètres devaient changer, il est possible d'ajuster la logique.

