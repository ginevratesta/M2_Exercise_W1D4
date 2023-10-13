/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino:\n");

let numberDefinition = "Uno dei principali datatype in JS è Number, rappresenta un numero che può essere molto superiore o molto inferiore a 0.\n";
let stringDefinition = "String non è altro che un componente testuale, una sequenza di caratteri.\n";
let booleanDefinition = "Boolean è un'entità logica, un valore che rappresenta se una condizione sia vera o falsa.\n";
let undefinedDefinition = "Undefined è la risposta che da il terminale, quando si lancia un comando, se la variabile è vuota o compilata in modo scorretto.\n";
let nullDefinition = "Null è un valore che si da volontariamente alla variabile per renderla vuota.";

console.log(numberDefinition + stringDefinition + booleanDefinition + undefinedDefinition + nullDefinition + "\n"); 

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Descrivi cos'è un oggetto in Javascript:\n");

let objectDefinition = "Un oggetto è un contenitore di proprietà ed ognuna di esse ha un nome e un valore.\n";
 console.log(objectDefinition + "\n");


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20:\n");

let numberOne = 12;
let numberTwo = 20;

console.log(numberOne+numberTwo + "\n");

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea una variable di nome 'x' e assegna ad essa il numero 12:\n");

let x = 12;

console.log(x + "\n");

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea una variable chiamata 'name' e assegna ad essa il tuo nome, sotto forma di stringa\n");

let userName = "mi chiamo Ginevra, per gli amici Jin";

console.log(userName + "\nNon ho potuto utilizzare 'name' come variabile perché veniva tagliato, controllando il codice dava DEPRECATED e perciò l'ho cambiata\n");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esegui una sottrazione tra i numeri 4 e la variable 'x' appena dichiarata (che contiene il numero 12):\n");

let numberThree = 4;
console.log(numberThree - x + "\n");

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Crea due variabili: 'name1' e 'name2'. Assegna a name1 la stringa 'john', e assegna a name2 la stringa 'John', con la J maiuscola.\nVerifica che name1 sia diversa da name2\n"); 

let name1 = "john"
let name2 = "John"

console.log(name1 === name2);
console.log(name1 === name2.toLowerCase());

console.log("Quest'ultimo quesito l'ho risolto informandomi tramite una ricerca su Google e confrontandomi con i colleghi");