/*==================================================
    Compilation du fichier : ts-node typeScript.ts
====================================================*/ 

//Les types primitifs: boolean, number et string
let termine : boolean = false;
console.log(termine);
let age : number = 25;
console.log(`J'ai ${age} ans`);

//Deux façons de définir un type array
let liste1: number [] = [1,2,3]; //Sans spécifier le type dans l'array
console.log(`Liste1: `,liste1);
let liste2 : Array<number> = [1,2,3]; //En spécifiant le type dans l'array
console.log(`Liste2: `,liste2);
//tuple : il permet de définir les types d’un nombre défini d’éléments dans un array
let x : [string, number]; //Déclaration
x = [`Bonjour Maïmouna`, 4]; //Initialisation
console.log(x);
//Les énumérations
enum Couleur  {Bleu, Blanc=3, Rouge};
let c : Couleur = Couleur.Bleu;
console.log(`La couleur de c : `, c);
let b : Couleur = Couleur.Blanc;
console.log(`La couleur de b : `,b);
//Any : Désactivation du type
let pasSur : any = 4;
console.log(`type non connu : `,pasSur);
pasSur = `pasSur en fait une string`;
console.log(pasSur);
let listAvecAny : any[] = [1.3, `Bonjour`, `c`, true, 2+3];
console.log(`Tableau de type any : `,listAvecAny);
//Void, Undefined et Null
function direBonjour():void { //Absence de tout type
    console.log(`Bonjour !`);
}
//Appel de la fonction
 direBonjour();
let n : null = null;
console.log(`Affiche:`,n);
let m : undefined = undefined;
console.log(`Affiche:`,m);
//null et undefined peuvent être assigné aux autres types. Exemple: number
let nm : number = null;
console.log(`Number initialisé à null affiche : `,nm);
let mn : number = undefined;
console.log(`Number initialisé à underfined affiche : `,mn);
//Le type never représente le type de valeurs qui ne se produisent jamais
function error(message : string) : never{
    throw new Error(message);
}
function echec() : never {
    return error('Problème');
}
function infinie(): never {
    while(true){

    }
}
//Typer les fonctions
function  multiplier(nombre1 : number, nombre2 : number) : number{
  let resultat : number ;
  return resultat = nombre1 * nombre2;
}
//Appel de la fonction 
let test = multiplier(5,7);
console.log("Le resultat de la multiplication vaut : ",test); //première méthode
console.log("Le resultat de la multiplication vaut : ",multiplier(3,5)); //deuxième méthode
//Typer les objets
let monObjet : {//Cet objet a une propriété data prenant un tableau de nombres et a une méthode multiplier prenant deux nombres et retrounant un nombre
    data : number [],
    multiplier : (nombre1 : number, nombre2 : number) => number 
}
//NB : Il est ensuite possible d’assigner des propriétés à mon objet respectant les types déclarés 
let monObjet1 = {
    data : [1,2,3,6,9],
    multiplier : function (nb1 : number, nb2 : number){
        return nb1 * nb2;
    }
}
//Appel de mon objet
  console.log(monObjet1);
//Les alias : Il est possible d’assigner des types à des alias grâce au mot clé type
//Par exemple nous pouvons stocker le type de monObjet dans un alias 
type MonAlis={
    data : number[],
    multiplier:(nombre1:number, nombre2:number)=>number
};
//Il est ensuite possible d’utiliser cet alias pour typer un autre objet :
let monObjet2 : MonAlis;
monObjet2 = {
    data : [1,3,4],
    multiplier : function (n1 : number , n2: number){
        return n1 * n2;
    }
}
console.log("Le resultat de la multiplication de monObjet2 issus de monAlias est : " , multiplier(5,9));
//L'union de types : Lorsque nous savons qu’une variable peut être de plusieurs types mais ne doit pas être 
//de tous les types, et que l’utilisation d’any serait donc inappropriée, il est possible d’utiliser l’union
// de types 
let unionDeType : number | boolean | string; //cette variable peut prendre un entier ,un booléen ou une chaîne
unionDeType = 3;
console.log("C'est un entier : ", unionDeType);
unionDeType = true;
console.log("C'est un booléen : ", unionDeType);
unionDeType = "Hello World";
console.log("C'est une chaîne : ", unionDeType);
// La déclaration de propriétés avec TypeScript : Avec TypeScript, contrairement à ES6, il est possible de 
//déclarer des propriétés à l'extérieur du constructor
class Personne {
    nom : string;
}
//Il est également possible d’utiliser un raccourci pour déclarer une propriété :
class Femme {
    constructor(public nom : string){
        this.nom = nom;
    }
}
let femme = new Femme("Cathérine").nom;
console.log(femme.toString(), "est une femme"); //Pour accéder au nom ici "c'est une femme".Possible car c'est public
//La classe Femme est identique à
 class Homme {
    public nom : string;
    constructor(nom : string){
        this.nom = nom;
    }
}
let homme = new Homme("Pierre").nom;
console.log(homme.toString(), "est un homme"); //Pour accéder au nom ici "c'est un homme". Possible car c'est public
//NB : si la propiété "nom" était private , on n'allait pas pouvoir y accéder en dehors de la classe 
//Lorsqu'une propriété d’une classe est marquée comme protected elle peut uniquement y être accédée depuis
// sa classe ou depuis les classes dérivées de celle-ci.
class Personne2 {
    protected nom : string;
    constructor (nom : string){
        this.nom = nom;
    }
}

class Femme2 extends Personne2 {
    private service : string;
    constructor(nom:string, service:string){
        super(nom); //accès à la propriété nom depuis la classe mère
        this.service = service;
    }
    public jeMePresente(){
        return "Bonjour ! Je m'appelle " + this.nom + " et je travaille dans le service " + this.service;
    }
}
let moi = new Femme2 ("Cathérine","Informatique");
console.log(moi.jeMePresente());
//Les accesseurs : getters et setters
class Personne3 {
     _prenom: string = 'Default'; //Valeur par défaut
    get lePrenom() : string {
        return this._prenom;
    }
    set lePrenom(nouveauPrenom :  string) {
        if(nouveauPrenom.length >2){
            this._prenom = nouveauPrenom;
        }else{
            console.log("Erreur : Le prénom est trop court");
        }
    }
}
let personne = new Personne3();
  personne.lePrenom = 'jd';
  personne.lePrenom = "Cathérine";
  console.log(personne._prenom);
  //Les interfaces : Créer une interface
  //Pour un objet par exemple 
  interface User { //contrairement à java, elle peut contenir des propriétés
      prenom : string; 
  }
  //utilisation de l'interface User
  function printUser(user : User){
      console.log("Mon prénom c'est : ",user.prenom); //affichage de la propriète de l'interface User
  }
  let monPrenom = {prenom : 'Cathérine'};
  printUser(monPrenom); //Appel de la fonction qui utilise l'interface
//Pour un objet contenant une méthode
interface  User1{
    prenom : string;
    direBonjour(nom : string) : void;
}
//utilisation de cette nouvelle interface
const user1 : User1 ={
    prenom : "Cathérine",
    direBonjour(nom : string){
        console.log(`Bonjour! Je m'appelle ` + this.prenom + ' ' + nom);
    }
}
user1.direBonjour('Renaut');
//Propriétés optionnelles  : On les définit en utilisant "?"
interface User3{
    prenom : string;
    nom? : string; //le nom est optionnel
}
//Propiété en lecture seule : readOnly. A la différence de "const" qui s'utilise sur les variables
interface User4{
    readonly  nom : string; //s'utilise uniquement sur les propriétés
}
//Les interfaces et les classes
interface User5{
    prenom : string;
    direBonjour():void;
}

class NamedUser implements User5{
    direBonjour() {
        console.log(`Bonjour! Je proviens de la classe qui implémente l'interface User5 et je m'appelle ` + this.prenom + ` ` + this.nom);
    }
    constructor(public prenom : string, public nom : string){
            this.nom = nom;
            this.prenom = prenom;
    }
}
let testNamedUser = new NamedUser("PC", "Portable");
testNamedUser.direBonjour();
// L’extension d’interface : Suivant le même principe que pour les classes, il est également possible d’étendre une interface qui en héritera.
interface User6 {
    prenom : string;
    direBonjour() : void;
}
interface RegistredInterface extends User6{
    nom : string;
    adresse : string;
    mail : string;
    contact : string;
}

let cristiano : RegistredInterface = {
    nom : "Ronaldo",
    prenom : "Cristiano",
    adresse : "25 Rue du Portugal",
    mail : "cristianoronaldo@hotmail.com",
    contact : "+249-3456-587-098-230",
    direBonjour(){
        console.log(`${`Hey! My name's ` + this.prenom + ` ` + this.nom + `. I'm living at ` + this.adresse}, my email address is ${this.mail}${`\n and my phone number is `}${this.contact}` );
    }
}
cristiano.direBonjour();
//Les génériques : Utilisation des composants qui puissent fonctionner avec une diversité de types tout en 
//conservant l’utilité de TypeScript
function identique( arg : any) : any{ // nous n’avons aucune garantie sur le type de la valeur de retour
    return arg;
}
//Pour palier à ça, on fait recours aux génériques c'est-à-dire, capturer ce type dans une variable pour
// pouvoir l’utiliser et indiquer le type de la valeur de retour
function identiqueGenerique<T>(arg : T): T { //T prend tout type et par convension on utilise la lettre T. 
    return arg;
}
//Appel de cette fonction : On a deux manière de le faire
//a) Préciser explicitement le type
    let nombre =  identiqueGenerique<number>(2);
    console.log("On aura avec la première méthode : ",nombre);
//b) Soit utiliser l'inférence de type gérée par typeScript
    let nbr = identiqueGenerique(2); //le compilateur de TypeScript va reconnaître le type de la valeur passée
    // en argument et le passer automatiquement à T
    console.log ("On aura avec la seconde méthode : ", nbr);
//exemple indiquant que l’argument doit être un tableau contenant des éléments du même type
function ecrire<T>(tab : T[]) : void{
    tab.forEach(elts => console.log(elts)); //forEach car l’argument est un tableau. 
}
ecrire<number>([1,2,3]); //Il faut que les éléments du tableau soit du même type.Affiche donc 1 2 3
//Angular et les décorateurs : Un décorateur est une déclaration un peu spéciale qui peut être attachée à une 
//déclaration de classe, de méthode, d’accesseur, de propriété ou de paramètre.
//Syntaxe : @Expression où l’expression est une fonction qui va être appelée lors de l’initialisation avec des 
// informations -des méta données-, relatives à la déclaration décorée
//Exemple : @Component et @NgModule Ils permettent de dire à Angular qu’une classe particulière est un 
//composant ou un module.