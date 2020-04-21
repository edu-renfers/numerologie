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

  return retour
}

// implémentation avec Vuejs

var app = new Vue({
  el: '#app',
  data: {
    nom: '',
    prenoms: '',
    jour: 20,
    mois: 10,
    annee: 1960,
    inter_actif : {
      1: "Actif 1",
      2: "Actif 2",
      3: "Actif 3",
      4: "Actif 4",
      5: "Actif 5",
      6: "Actif 6",
      7: "Actif 7",
      8: "Actif 8",
      9: "Actif 9",
    }
  },
  computed: {
    expression : function(){
      // "expression" calcule le nombre d'expression qui est la réduction (en un chiffre) des prénoms et nom de famille
      var retour = 0
      var eclate = Array.from(this.nom + this.prenoms)
      eclate.forEach(function (element){
        retour += carReduction(element)
      })
      return reduction(retour)
    },
    actif : function(){
      // "actif" est la réduction des prénoms
      var retour = 0
      var eclate = Array.from(this.prenoms)
      eclate.forEach(function (element){
        retour += carReduction(element)
      })
      return reduction(retour)

    },
    hereditaire : function(){
      // "hereditaire" est la réduction du nom de famille
      var retour = 0
      var eclate = Array.from(this.nom)
      eclate.forEach(function (element){
        retour += carReduction(element)
      })
      return reduction(retour)

    },
    realisation : function(){
      // "realisation" est la réduction des consonnes du nom complet (prénoms et nom de famille)
      var retour = 0
      const voyelles = 'AEIOUY'
      var eclate = Array.from(this.nom + this.prenoms)
      eclate.forEach(function (element){
        if (voyelles.indexOf(element.toUpperCase())==-1) {
          retour += carReduction(element)
        } 
      })
      return reduction(retour)


    },
    intime : function(){
      // "intime" est la réduction des voyelles du nom complet
      var retour = 0
      const voyelles = 'AEIOUY'
      var eclate = Array.from(this.nom + this.prenoms)
      eclate.forEach(function (element){
        if (voyelles.indexOf(element.toUpperCase())>-1) {
          retour += carReduction(element)
        } 
      })
      return reduction(retour)

    },
    vie : function(){
      // "vie" ou chemin de vie est la réduction de la date de naissance
      return reduction(this.jour + this.mois + this.annee)
    }
  }
})
