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

  if (retour) {

  }
  return retour
}

// "motReduction" transforme un mot en un nombre réduit

function motReduction(mot){
  var retour = 0
  // parcourir tous les caractères du mot et les réduire avec carReduction et en faire la somme, qu'on réduit et qu'on retourne

  return retour
}

// implémentation objet de Numerologie sous forme d'une classe

class Numerologie {
  constructor (prenoms,nom,jour,mois,annee) {
    this.prenoms = prenoms
    this.nom = nom
    this.jour = jour
    this.mois = mois
    this.annee = annee
  }
  // "expression" calcule le nombre d'expression qui est la réduction (en un chiffre) des prénoms et nom de famille

  expression(){
    var retour = 0

    return retour
  }

  // "actif" est la réduction des prénoms

  actif(){
    var retour = 0

    return retour
  }

  // "hereditaire" est la réduction du nom de famille

  hereditaire(){
    var retour = 0

    return retour
  }

  // "realisation" est la réduction des consonnes du nom complet (prénoms et nom de famille)

  realisation(){
    var retour = 0

    return retour
  }

  // "intime" est la réduction des voyelles du nom complet

  intime(){
    var retour = 0

    return retour
  }

  // "vie" ou chemin de vie est la réduction de la date de naissance

  vie(){
    var retour = 0

    return retour
  }

}

var personne = new Numerologie('Serge Alexandre','Renfer','20','10','1960')
console.log(`personne : 
Prénom : ${personne.prenoms}
Nom : ${personne.nom}
Nombre d'expression : ${personne.expression()}
Nombre actif : ${personne.actif()}
Nombre héréditaire : ${personne.hereditaire()}
Nombre de réalisation : ${personne.realisation()}
Nombre intime : ${personne.intime()}
Nombre de vie : ${personne.vie()}
` )