'use strict';
// Exercice 1 : Déclaration et affectation de variables:
let prenom ="oussama";
console.log(`le prenom est  : ${prenom} .`);
// Exercice 2 : Manipulation de variables numériques:
let  a = 8;
// a=Number(a);
let b = 4 ;
// b=Number(b);
console.log(`la somme est : ${a+b} .
la difference  est : ${a-b} .
le produit  est : ${a*b} .
le quotient  est : ${a/b} .
    `);
    //Exercice 3 : Concaténation de chaînes de caractères :
let Nom="edderkaoui";
let Prenom="oussama";
let nomComplet=Nom+" "+Prenom;
console.log(`le nom Complet est : ${nomComplet} .`);
//Exercice 4 : Utilisation des variables booléennes :
let age = 24 ;
let majeur = age >=18;

console.log(majeur);
//Exercice 5 : Échange de valeurs entre deux variables :
let x = 12 , y = 6;
console.log(`l'ancienne valeur de x : ${x} et de y est : ${y}`);

x = x+y;// 18 6
y = x-y;// 18 12 
x = x-y;// 6 12

console.log(`la nouvelle valeur de x : ${x} et de y est : ${y}`);
//Exercice 6 : Calcul de la circonférence d'un cercle :
let rayon = 8 ;
let circonfrence=(2*Math.PI*rayon).toFixed(2) ;

console.log(`La circonférence de cercle ${circonfrence}`);
//Exercice 7 : Conversion de température :
let celsius = 28 ;
let F = celsius * (9/5) + 32 ;
console.log(`La valeur en Fahrenheit est : ${F} .`);
// Exercice 8 : Calcul de l'âge :
let anneeNaissance = 2002 ;
let anneeActuelle = new Date().getFullYear();
let Age = anneeActuelle - anneeNaissance ;
console.log(`L'age de personne est : ${Age} .`);
//Exercice 9 : Calcul du périmètre d'un rectangle :
let longueur = 12 ;
let largeur = 8 ;
let P = 2 * (largeur + longueur);
console.log( `le périmètre du rectangle est :  ${P} .`);
//Exercice 10 : Moyenne de trois nombres :
let note1 = 18 ;
let note2 = 17 ;
let note3 = 16 ;
let Moyenne = (note1 + note2 + note3) / 3 ; 
console.log(`La moyenne des trois notes ${Moyenne}`);


