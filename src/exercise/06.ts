// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Déclare un type `Connexion` un tuple contenant toutes les informations utiles a la connexion
// - le nom de la connexion (ex : Connexion à Google) `string`
// - le protocole (ex : ftp, http) `string`
// - le hostname (ex : google.com) `string`
// - le port (ex : 423) `number`
// - username : (ex : admin) `string`
// - le password (ex : admin) `string`
// 📝 documentation tuples https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

enum Protocol {
  HTTP = 'http',
  HTTPS = 'https',
  FTP = 'ftp',
  SSL = 'ssl'
}

type Connexion = [string,Protocol,string,number,string,string];

const google: Connexion = ['Google',Protocol.HTTPS,'google.fr',443,'','']
const ovh: Connexion = ['OVH Smtp',Protocol.SSL,'ovh0.fr',587,'','']
const api: Connexion = ['API .gouv',Protocol.HTTP,'geo.api.gouv.fr',80,'','']


// 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
// https google.com 443
// Affiche le resultat à l'ecran avec le code
displayText(`Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `)
displayText(`Connexion ${ovh[0]} : ${ovh[1]}.${ovh[2]} port : ${ovh[3]} `)
displayText(`Connexion ${api[0]} : ${api[1]}://${api[2]}:${api[3]} `)

// 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran

// 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
// Ajoute des connexion via l'initialisation et via la méthode `push`

const connexions : Connexion[] = [api];
connexions.push(google,ovh)

displayText(`${connexions.length} connexions`)

const [, gmailProtocol, gmailHostname] = google

displayText(
  `Le protocole de gmail est ${gmailProtocol} hostname ${gmailHostname}  `,
)
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
