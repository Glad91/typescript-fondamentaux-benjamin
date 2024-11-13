// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

/**
 * @interface IName
 * @description Interface définissant une entité nommée avec capacité d'affichage
 * @example
 * class MyClass implements IName {
 *   name: string = "Test"
 *   printName() : string {
 *     return this.name *
 *  }
 * }
 */
interface IName {
  /** Nom de l'entité */
  name: string
  /**
   * Méthode pour afficher et retourner le nom
   * @returns {string} Le nom de l'entité
   */
  printName: () => string
}

/**
 * @interface Runnable
 * @description Interface définissant une entité capable de courir
 */
interface Runnable {
  /**
   * Méthode exécutant l'action de course
   * @throws {Error} Si l'entité n'est pas en état de courir
   */
  run: () => void
}

/**
 * @interface Drinkable
 * @description Interface définissant une entité capable de boire
 */
interface Drinkable {
  /**
   * Méthode exécutant l'action de boire
   * @throws {Error} Si l'entité n'est pas en état de boire
   */
  drink: () => void
}

/**
 * @interface Swimable
 * @description Interface définissant une entité capable de nager
 */
interface Swimable {
  /**
   * Méthode exécutant l'action de nager
   * @throws {Error} Si l'entité n'est pas en état de nager
   */
  swim: () => void
}

/**
 * @type {Mammal}
 * @description Type composé définissant un mammifère comme une entité pouvant courir et boire
 */
type Mammal = Runnable & Drinkable

/**
 * @class Animal
 * @abstract
 * @implements {IName}
 * @description Classe de base abstraite représentant un animal
 */
abstract class Animal implements IName {
  /**
   * @constructor
   * @param {string} name - Nom de l'animal
   * @param {number} nbLeg - Nombre de pattes
   * @param {boolean} underwater - Indique si l'animal vit sous l'eau
   * @throws {Error} Si le nom est vide ou si le nombre de pattes est négatif
   */
  protected constructor(
    public readonly name: string,
    protected readonly nbLeg: number,
    protected readonly underwater: boolean,
  ) {
    if (!name.trim()) {
      throw new Error("Le nom de l'animal ne peut pas être vide")
    }
    if (nbLeg < 0) {
      throw new Error('Le nombre de pattes ne peut pas être négatif')
    }
  }

  /**
   * @method getName
   * @description Récupère le nom de l'animal
   * @returns {string} Le nom de l'animal
   */
  public getName(): string {
    return this.name
  }

  /**
   * @method printName
   * @description Affiche et retourne le nom de l'animal
   * @returns {string} Le nom de l'animal
   */
  public printName(): string {
    console.log(`Mon nom est ${this.getName()}`)
    return this.getName()
  }
}

/**
 * @class Cat
 * @extends Animal
 * @implements {Mammal}
 * @description Classe représentant un chat
 */
class Cat extends Animal implements Mammal {
  /**
   * @constructor
   * @param {string} name - Nom du chat
   */
  constructor(name: string) {
    super(name, 4, false)
  }

  /**
   * @method run
   * @description Fait courir le chat
   * @returns {void}
   */
  public run(): void {
    console.log('Je cours')
  }

  /**
   * @method drink
   * @description Fait boire le chat
   * @returns {void}
   */
  public drink(): void {
    console.log('Je bois')
  }
}

/**
 * @class Dog
 * @extends Animal
 * @implements {Mammal}
 * @description Classe représentant un chien
 */
class Dog extends Animal implements Mammal {
  /**
   * @constructor
   * @param {string} name - Nom du chien
   */
  constructor(name: string) {
    super(name, 4, false)
  }

  /**
   * @method drink
   * @description Fait boire le chien
   * @returns {void}
   */
  public drink(): void {
    console.log('Je bois')
  }

  /**
   * @method run
   * @description Fait courir le chien
   * @returns {void}
   */
  public run(): void {
    console.log('Je cours')
  }
}

/**
 * @class Fish
 * @extends Animal
 * @implements {Swimable}
 * @description Classe représentant un poisson
 */
class Fish extends Animal implements Swimable {
  /**
   * @constructor
   * @param {string} name - Nom du poisson
   */
  constructor(name: string) {
    super(name, 0, true)
  }

  /**
   * @method swim
   * @description Fait nager le poisson
   * @returns {void}
   */
  public swim(): void {
    console.log('Je nage')
  }
}

/**
 * @function doSomeThingWithDrinkers
 * @description Fait boire une entité capable de boire
 * @param {Drinkable} drinker - L'entité qui va boire
 * @returns {void}
 */
function doSomeThingWithDrinkers(drinker: Drinkable): void {
  displayText('Je bois')
  drinker.drink()
}

/**
 * @function sayHelloAndRun
 * @description Salue et fait courir une entité capable de courir
 * @param {Runnable} runnable - L'entité qui va courir
 * @returns {void}
 */
function sayHelloAndRun(runnable: Runnable): void {
  displayText('Hello')
  runnable.run()
}

// Tests et démonstration
try {
  // Test avec un chat
  const tigrou = new Cat('Tigrou')
  tigrou.run()
  tigrou.drink()
  displayText(`Nom du chat ${tigrou.printName()}`)
  sayHelloAndRun(tigrou)
  doSomeThingWithDrinkers(tigrou)

  // Test avec un chien
  const milou = new Dog('Milou')
  milou.run()
  milou.drink()
  displayText(`Nom du chien ${milou.printName()}`)
  sayHelloAndRun(milou)
  doSomeThingWithDrinkers(milou)

  // Test avec un poisson
  const nemo = new Fish('Nemo')
  nemo.swim()
  displayText(`Nom du poisson ${nemo.printName()}`)

  const dory = new Fish('Dory')
  dory.swim()
  displayText(`Nom du poisson ${dory.printName()}`)

  // Test avec un nom invalide (pour démontrer la gestion des erreurs)
  // const invalidAnimal = new Cat('')  // Lèvera une erreur
} catch (error) {
  if (error instanceof Error) {
    console.error(`Une erreur est survenue : ${error.message}`)
  }
}
