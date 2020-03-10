// reduction réduit un entier en un chiffre par addition de chaque chiffre du nombre
function reduction (entier){
  if (entier < 10 ) return entier;
  var eclate = Array.from(entier.toString());
  var reduit = 0;
  eclate.forEach(function (element){
    reduit += parseInt(element)
  })
  return reduction(reduit)
}

// produire une fonction “carReduction” qui transforme un caractère en un nombre réduit (sur la base), puis une autre fonction “motReduction” qui transforme un mot en un nombre réduit

function carReduction (car) {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //l'index du caractère retourne son nombre qu'il faut réduire par la suite (espace = 0)
  var retour = 0
  // il faut mettre le caractère en majuscule, puis trouver son index (position) dans alphabet, puis réduire ce nombre et le retourner
  let pos = alphabet.indexOf(car.toUpperCase())
  if (pos>0) {
    retour = pos
  }
  return reduction(retour)
}
// "motReduction" transforme un mot en un nombre réduit

function motReduction(mot){
  var retour = 0
  // parcourir tous les caractères du mot et les réduire avec carReduction et en faire la somme, qu'on réduit et qu'on retourne
  var eclate = Array.from(mot)
  eclate.forEach(function (element){
    retour += carReduction(element)
  })
  return reduction(retour)
}
console.log(motReduction('Serge Alexandre'))

// "expression" calcule le nombre d'expression qui est la réduction (en un chiffre) des prénoms et nom de famille

function expression(nom){
  var retour = 0

  return retour
}

// "actif" est la réduction des prénoms

function actif(prenoms){
  var retour = 0

  return retour
}

// "hereditaire" est la réduction du nom de famille

function hereditaire(nom){
  var retour = 0

  return retour
}

// "realisation" est la réduction des consonnes du nom complet (prénoms et nom de famille)

function realisation(nom){
  var retour = 0
  const voyelles = "AEIOUY"
  var eclate = Array.from(nom)
  eclate.forEach(function (element){
    if (!voyelles.indexOf(element)) retour += carReduction(element)
  })
  return reduction(retour)
}
console.log(realisation('Serge Alexandre Renfer'))

// "intime" est la réduction des voyelles du nom complet

function intime(nom){
  var retour = 0
  const voyelles = "AEIOUY"
  var eclate = Array.from(nom)
  eclate.forEach(function (element){
    if (voyelles.indexOf(element)) retour += carReduction(element)
  })
  return reduction(retour)
}
console.log(intime('Serge Alexandre Renfer'))

// "vie" ou chemin de vie est la réduction de la date de naissance

function vie(naissance){
  var retour = 0
  const chiffres = "0123456789"
  var eclate = Array.from(naissance)
  eclate.forEach(function (element){
    let pos = chiffres.indexOf(element)
    if (pos>0) retour += pos
  })
  return reduction(retour)
}
console.log(vie('20/10/1960'))
