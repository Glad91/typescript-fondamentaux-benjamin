// Les opérateurs & Cast de types
// http://localhost:3000/alone/exercise/07.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Modifie le type `car` avec toutes les propriétés demandées par 👨‍✈️ Hugo
type car = {
  name: string
  mass?: number
  maxSpeed?: number
}
// 🐶 Complete la fonction `kineticEnergy` avec toutes les propriétés demandée par 👨‍✈️ Hugo
// Fonction prenant en entrée 2 paramètre
// - speed un nombre obligatoire
// - mass un nombre optional
function kineticEnergy(
  maxSpeed: number,
  mass?: number,
): {result: number} | null {
  // Conversion de km/h en m/s
  const vitesseMS = maxSpeed / 3.6

  let energy = 0
  if (mass) {
    energy = 0.5 * mass * Math.pow(vitesseMS, 2)
  }
  // il s'agit d'une ternaire qui permet de retourner soit 'null' si 'mass' est 'null', soit un 'objet' avec la propriété 'result'
  return mass ? {result: Math.round(energy)} : null
}

let tesla: car
tesla = {name: 'tesla', mass: 1850, maxSpeed: 78}

let teslaEnergie
// ⛏️ décommente la ligne ci-dessous et appelle correctement la fonction 'kineticEnergy' avec 'tesla'
teslaEnergie = kineticEnergy(tesla.maxSpeed!, tesla.mass)!
displayText(
  `énergie cinétique de ${tesla.name} est ${teslaEnergie.result} joules`,
)
// ⛏️ décommente sans modifier
//,

// 🐶 le type unknown permet de dire qu'on ne sait pas ce que contiendra la variable
// nous les utiliseront ici pour pouvoir tester cast de type
let unknowCarSpeed: unknown = 150
let unknowCarMass: unknown = 2000

// ⛏️ décommente la ligne ci-dessous et appelle correctement la fonction 'kineticEnergy' avec 'unknowCarSpeed' et 'unknowCarMass'

const unknowCarEnergie = kineticEnergy(
  unknowCarSpeed as number,
  unknowCarMass as number,
)!

// ⛏️ décommente la ligne ci-dessous
displayText(`energie cinétique est ${unknowCarEnergie.result} joules`)

/*eslint
  @typescript-eslint/no-unused-vars: "off"
*/
/*eslint
  @typescript-eslint/consistent-type-assertions : 'off'
*/
