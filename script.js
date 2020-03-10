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

// implémentation avec Vuejs

var app = new Vue({
  el: '#app',
  data: {
    nom: '',
    prenoms: '',
    jour: 20,
    mois: 10,
    annee: 1960
  },
  computed: {
    expression : function(){

    },
    actif : function(){

    },
    hereditaire : function(){

    },
    realisation : function(){

    },
    intime : function(){

    },
    vie : function(){
      return reduction(this.jour + this.mois + this.annee)
    }
  }
})
