// Les objets
// http://localhost:3000/alone/exercise/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `person` (sans initialiser de valeur)
// définie les propriétés / types suivants
//
// - name de type string
// - age de type number
// - isActive de type boolean
// - roles un tableau de string
// - params un object non défini
// - payload peut avoir n'importe quel type

let person: {
  name: string
  age: number
  isActive: boolean
  roles: string[]
  params: {}
  payload: any
  friend: {
    name: string
    age: number
    isActive: boolean
    roles: string[]
    params: {}
    payload: any
  }
}

// 🐶 affecte des valeurs à person
// laisse payload undefined
person = {
  payload: undefined,
  params: {},
  roles: ['ADMIN'],
  name:'John',
  age:30,
  isActive: true,
  friend: { isActive: false, name: 'Mike', params: {}, payload: undefined, roles: ['USER'],
    age:45}

}

// 🤖 Affiche dans le navigateur grace à `displayText` le libellé suivant
// 'John à 30 ans et a le role ADMIN'

displayText(`${person.name} à ${person.age} ans et à le rôle ${person.roles.at(0)}`)

displayText(`${person.name} est l'ami de ${person.friend.name}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
