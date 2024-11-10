// Les tableaux
// http://localhost:3000/alone/exercise/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Créer une variable `names` mais sans initialiser de valeurs
//  ajoute ensuite 'John' et 'doe' à `names` sans utiliser la méthode `push()`
let names = []
names = ['John', 'doe']

// 🤖 affiche 'Il y a 2 noms' dans le navigateur grace à `displayText` et `.length`
displayText(`Il y a ${names.length} noms`)

// 🐶 Créer une constante `games` et initialise avec un tableau vide
// avec la méthode `push()` ajoute 3 jeux
// ⛏️ const games
// 🤖 affiche le nombre d'élément à l'ecran
const games = []
games.push('Mario Kart','Call Of Duty','Zelda');

displayText(`Il y a ${games.length} jeux dans le tableau`)

// 🐶 Créer une constante `things` : un tableau qui peut prendre n'importe quel type de donnée
// ⛏️ const things
const things : any[] = [35, true, '21:44 coucou','hello world', false, {nom:'Ben', prenom:'Jamin'}]
// 🤖 affiche le nombre d'élément à l'ecran

displayText(`Il y a ${things.length} éléments dans le tableau`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
