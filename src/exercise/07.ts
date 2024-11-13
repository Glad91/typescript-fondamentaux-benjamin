// Les opérateurs & Cast de types
// http://localhost:3000/alone/exercise/07.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

/**
 * Représente une voiture avec ses principales caractéristiques.
 *
 * @property name - Le nom de la voiture. C'est une propriété obligatoire de type chaîne de caractères.
 * @property mass - La masse de la voiture en kilogrammes (kg). C'est une propriété optionnelle.
 * @property maxSpeed - La vitesse maximale de la voiture en kilomètres par heure (km/h). C'est une propriété optionnelle.
 */
type Car = {
  /** Le nom de la voiture (obligatoire). */
  name: string
  /** La masse de la voiture en kilogrammes (optionnel). */
  mass?: number
  /** La vitesse maximale de la voiture en kilomètres par heure (optionnel). */
  maxSpeed?: number
}

/**
 * Calcule l'énergie cinétique d'un objet en mouvement.
 * @param maxSpeed - La vitesse maximale de l'objet en kilomètres par heure (km/h).
 * @param mass - La masse de l'objet en kilogrammes (kg). C'est une propriété optionnelle.
 * @returns Un objet contenant la propriété 'result' qui est l'énergie cinétique en joules (J).
 */
function kineticEnergy(
  maxSpeed: number,
  mass?: number,
): {result: number} | null {
  const speedMS = maxSpeed / 3.6
  return mass ? {result: Math.round(0.5 * mass * speedMS ** 2)} : null
}

const tesla: Car = {name: 'tesla', mass: 1850, maxSpeed: 78}
const teslaEnergy = kineticEnergy(tesla.maxSpeed!, tesla.mass)!
displayText(
  `énergie cinétique de ${tesla.name} est ${teslaEnergy.result} joules`,
)

let unknownCarSpeed: unknown = 150
let unknownCarMass: unknown = 2000

const unknownCarEnergy = kineticEnergy(
  unknownCarSpeed as number,
  unknownCarMass as number,
)!
displayText(`énergie cinétique est ${unknownCarEnergy.result} joules`)
