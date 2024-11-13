// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice
// 🐶 Remplace le type `any` de `doSomeThing` qui est trop généraliste
//  pour ques les fonctions `doSomeThing` ci-après fonctionnement
let doSomeThing: any

// ❌ NE PAS MODIFIER
doSomeThing = () => {
  displayText(`Hello développeur`)
}
doSomeThing()

doSomeThing = (name: string) => {
  displayText(`Hello ${name}`)
}
doSomeThing('John')
// ❌ END

// 🐶 Implémente et spécifie les paramètres et types de la fonction `sum`
// n'oublie pas de spécifier le type de retour

//Methode 1
function sum(a: number, b: number): number {
  return a + b
}
displayText('Premiére méthode avec function')
displayText(`La somme de 1 et 2 est égale a ${sum(1, 2)}`)

//Methode 2
let sum2 = (a: number, b: number): number => {
  return a + b
}
displayText('Deuxième méthode avec arrow function')
displayText(`La somme de 3 et 4 est égale a ${sum2(3, 4)}`)

/**
 * Type de la fonction
 */
type CalculExpFunction = {
  (base: number): number
  description: string
}

/**
 * Fonction qui permet de calculer l'exposant d'un nombre
 * @param cb Fonction qui permet de calculer l'exposant
 * @param base  Nombre de base
 * @returns number L'exposant du nombre
 */
function calculExp(cb: CalculExpFunction, base: number): number {
  return cb(base)
}

/**
 * Fonction qui permet de calculer le carré d'un nombre
 * @returns Le carré du nombre
 */
function carre(): number {
  return Math.pow(5, 2)
}
carre.description = "Calcul le carré d'un nombre"

/**
 * Fonction qui permet de calculer le cube d'un nombre
 * @returns Le cube du nombre
 */
function cube(): number {
  return Math.pow(5, 3)
}
cube.description = "Calcul le cube d'un nombre"

displayText(`Le carré de 5 est égale a ${calculExp(carre, 5)}`)
displayText(`Le cube de 5 est égale a ${calculExp(cube, 5)}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
