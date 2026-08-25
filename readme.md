# 🐰 Alimentation des Lapins - LapinHeureux

## Présentation

**Alimentation des Lapins** est un site web / PWA consacré à l'alimentation et au bien-être du lapin domestique. Il regroupe des informations pratiques sur les aliments adaptés, les aliments à limiter et ceux à éviter, avec une navigation pensée pour ordinateur, tablette et mobile.

> ⚠️ Le contenu du site est informatif et ne remplace pas l'avis d'un vétérinaire, notamment en cas de problème digestif, de baisse d'appétit ou de régime particulier.

## Fonctionnalités

- Catalogue d'aliments classés par catégories : légumes-feuilles, légumes racines, légumes-fruits, herbes aromatiques, fruits, foin et graminées, fleurs séchées, branches et feuilles.
- Détails pratiques sur certains aliments : fréquence, précautions, parties à retirer, quantité modérée, etc.
- Repères visuels par aliment : **🟢 régulièrement**, **🟠 à modérer**, **🍓 friandise**, **🔴 à ne pas donner**.
- Remplacement automatique d’une image absente ou introuvable par un emoji adapté à la catégorie afin de garder la page légère et lisible.
- Liste des aliments à éviter.
- Rappels sur les bases de l'alimentation : foin à volonté, verdure variée, eau fraîche et granulés en petite quantité.
- Images associées aux aliments lorsque l'illustration est disponible dans `assets/img/`.
- Navigation responsive avec Bootstrap.
- Bouton de retour en haut de page.
- Installation possible en tant que **PWA** sur les appareils compatibles.
- Fonctionnement partiel hors connexion via un **Service Worker**.
- **Export PDF visuel de la page Nourriture** via la fenêtre d'impression du navigateur.

## Génération du PDF

La page `nourriture.html` propose maintenant un export **visuel** : au clic sur le bouton PDF, le navigateur ouvre la fenêtre d'impression avec une **mise en page spéciale impression**. Il suffit alors de choisir **Enregistrer au format PDF**.

Cette méthode a été retenue car elle donne un rendu beaucoup plus proche de la page :

- couleurs conservées ;
- badges 🟢 / 🟠 / 🍓 / 🔴 visibles ;
- cartes colorées des listes ;
- images locales conservées lorsqu'elles sont disponibles ;
- mise en page A4 avec sauts de page propres ;
- fonctionnement fiable même si le fichier est ouvert directement en `file://`.

> Astuce : si le navigateur propose l'option **Arrière-plans graphiques** ou **Background graphics**, laissez-la activée pour conserver pleinement les couleurs du PDF.

## Technologies utilisées

- **HTML5** : structure des pages.
- **CSS3** : mise en forme et responsive design.
- **Bootstrap 4** : navigation et composants responsive.
- **JavaScript** : interactions, installation PWA et déclenchement de l'impression PDF.
- **Web App Manifest** : configuration de l'installation PWA.
- **Service Worker** : mise en cache de ressources pour le fonctionnement hors ligne.

## Structure conseillée du projet

```text
nourriture-lapin/
├── index.html
├── nourriture.html
├── eau.html
├── soins.html
├── race-lapin.html
├── manifest.json
├── sw.js
├── README.md
└── assets/
    ├── css/
    │   ├── style.css
    │   └── bootstrap.min.css
    ├── js/
    │   ├── script.js
    │   ├── scroll-up.js
    │   └── theme-switch.js
    └── img/
        └── ...
```

## Installation locale

Aucune installation `npm` n'est nécessaire dans la version actuelle du projet.

1. Cloner le dépôt :

```bash
git clone https://github.com/leven-anju-yuki/nourriture-lapin.git
```

2. Entrer dans le dossier :

```bash
cd nourriture-lapin
```

3. Lancer le projet avec un petit serveur local. Par exemple avec VS Code et l'extension **Live Server**, ou avec Python :

```bash
python -m http.server 8000
```

4. Ouvrir ensuite :

```text
http://localhost:8000/
```

> Il est préférable d'utiliser un serveur local plutôt que d'ouvrir directement `index.html` avec `file://`, car les Service Workers et certaines fonctions PWA nécessitent un contexte HTTP/HTTPS.

## PWA

Le fichier `manifest.json` contient le nom de l'application, la couleur du thème et les icônes utilisées lors de l'installation.

Le fichier `sw.js` met en cache les ressources principales du site. Lorsque de nouvelles ressources importantes sont ajoutées, pensez à :

1. les ajouter à la liste `ASSETS` du Service Worker si elles doivent être disponibles hors ligne ;
2. changer le nom du cache, par exemple `lapinheureux-v3`, afin que les anciennes ressources soient supprimées.

## Mise à jour des aliments

Pour ajouter un aliment :

1. choisir la bonne catégorie dans `nourriture.html` ;
2. ajouter un nouvel élément `<li>` ;
3. ajouter si besoin une précision avec `<span class="food-note">...</span>` ;
4. ajouter l'image dans `assets/img/` si une illustration est disponible ; si aucune image n'est fournie, le site affiche automatiquement un emoji selon la catégorie ;
5. vérifier le repère de fréquence affiché (🟢, 🟠, 🍓 ou 🔴) et, si nécessaire, compléter les listes `treatFoods` ou `moderationFoods` dans `nourriture.html` ;
6. vérifier que l'aliment est bien repris dans le PDF en utilisant le bouton de téléchargement.

## Sources et prudence

Les informations alimentaires doivent être vérifiées à partir de sources vétérinaires ou d'organismes spécialisés dans le bien-être du lapin. Les besoins peuvent varier selon l'âge, le poids et l'état de santé de l'animal.

Quelques références utiles :

- Rabbit Welfare Association & Fund (RWAF)
- RSPCA - Rabbit diet
- VCA Animal Hospitals - Feeding Your Rabbit

## Améliorations possibles

- Ajouter une recherche par nom d'aliment.
- Ajouter des filtres cliquables « régulièrement », « modération », « friandise » et « interdit » (les repères visuels sont déjà présents).
- Ajouter une fiche détaillée par aliment.
- Ajouter une version du générateur PDF utilisable entièrement hors ligne.
- Ajouter un mode sombre réellement activable.
- Ajouter un système de favoris pour mémoriser les aliments préférés du lapin.

## Auteur

Projet réalisé par **Florie** 💚

## Licence

Ajouter ici la licence choisie pour le projet si vous souhaitez autoriser explicitement sa réutilisation ou sa contribution.

## Export PDF

La page `nourriture.html` propose deux accès au même export :

- un bouton **🖨️ PDF** directement dans la barre de navigation secondaire ;
- un bouton **🖨️ Télécharger / imprimer la fiche en PDF** en bas de page.

Le bouton n'essaie plus de reconstruire le document avec une bibliothèque externe : il ouvre la **fenêtre d'impression du navigateur** avec une feuille de style dédiée à l'A4.

Concrètement, pour obtenir le fichier :

1. cliquer sur le bouton PDF ;
2. choisir **Enregistrer au format PDF** ;
3. vérifier que l'option **Arrière-plans graphiques** est activée si elle est proposée ;
4. enregistrer le fichier.

Cette solution donne un PDF beaucoup plus fidèle à l'apparence de la page, avec les couleurs, les blocs et les repères visuels.

> Pour profiter pleinement de la PWA (manifest et Service Worker), il est recommandé de lancer le site via un petit serveur local ou GitHub Pages. En ouverture directe `file://`, ces fonctions PWA sont volontairement désactivées afin d'éviter les erreurs CORS dans la console.
