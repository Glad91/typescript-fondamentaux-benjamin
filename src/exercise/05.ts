// Les types alias
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `civility` et un type `Civility` avec comme valeur possible 'Mr' 'Mme' 'Mlle'
// 📝 documentation Literal types https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
// avec displayText affiche 'Bonjour Mr' en utilisant civility
type Civility = 'Mr' | 'Mme' | 'Mlle';
const civility: Civility = "Mr";

displayText(`Bonjour ${civility}`)

// 🐶 Déclare une variable `uploadSize` et un type `maxUploadSize` avec comme valeur possible 2048 ou 4096
// avec displayText affiche 'Upload size 2048' en utilisant uploadSize

type MaxUploadSize = 2048 | 4096;
const uploadSize : MaxUploadSize = 2048;

displayText(`Upload size ${uploadSize}`)

// 🐶 Déclare un Enum `HttpStatusCode` et code toutes les valeurs demandées par 👨‍✈️ Hugo
// 📝 documentation declaration Enum https://www.typescriptlang.org/docs/handbook/enums.html
// Créer une variable `httpResponse` et initialise-la avec la valeur '400' sans utiliser de Magic String
// avec displayText affiche 'Réponse du serveur 400' en utilisant httpResponse

enum HttpStatusCode {
  CONTINUE = 100,
  OK = 200,
  MOVED_PERMANENTLY = 301,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

const httpReponse: HttpStatusCode = HttpStatusCode.BAD_REQUEST;

displayText(`Réponse du serveur ${httpReponse}`);

// 🐶 Déclare un Enum `TransfertMessage` et code toutes les valeurs demandées par 👨‍✈️ Hugo
// Créer une variable `message` et initialise-la avec la valeur 'Transfert avec succès' sans utiliser de Magic String
// avec displayText affiche 'Message : Transfert avec succès' en utilisant `message`

enum TransfertMessage {
 SUCCESS = 'Transfert avec succès',
 ERROR = 'Erreur durant le transfert',
 RETRY = 'Recommencez le transfert'
}

const message : TransfertMessage = TransfertMessage.SUCCESS

displayText(`Message : ${message}`)

enum Note {
  UN = 1,
  DEUX,
  TROIS,
  QUATRE,
  CINQ ,
  NSP = 'Ne se prononce pas'
}

const note : Note = Note.TROIS;

displayText(`Note : ${note}`);
displayText(`Note : ${Note.NSP}`);

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
