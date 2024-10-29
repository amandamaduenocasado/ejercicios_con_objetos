// Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' },
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA',
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos',
};

console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Soy ${user.occupation} con un ${user.education}. Me gusta ${user.hobbies} y tengo dos mascotas, un ${user.pets[0].type} llamado ${user.pets[0].name} y un ${user.pets[1].type} llamado ${user.pets[1].name}. Vivo en ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}, ${user.address.country}. Si quiere contactar conmigo puede llamarme a mi telefono ${user.phone} o a mi correo ${user.email}`
);

/* Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares. */

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [],
    },
    thirdFloor: {
      numbersDouble: [],
    },
  },
  fourthFloor: {
    numbersDividedBy2: [],
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: [],
  },
};

for (let contador = 0; contador < data.numbers.length; contador++) {
  const arrayNumbers = data.numbers[contador];

  // Rellenar los arrays correspondientes
  data.firstFloor.secondFloor.numbersPlus2.push(arrayNumbers + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(arrayNumbers * 2);
  data.fourthFloor.numbersDividedBy2.push(arrayNumbers / 2);

  // Clasificar números en pares e impares
  if (arrayNumbers % 2 === 0) {
    data.fifthFloor.onlyEven.push(arrayNumbers);
  } else {
    data.fifthFloor.onlyOdd.push(arrayNumbers);
  }
}

console.log(`Números +2 ${data.firstFloor.secondFloor.numbersPlus2}`);
console.log(`Números x2 ${data.firstFloor.thirdFloor.numbersDouble}`);
console.log(`Números %2 ${data.fourthFloor.numbersDividedBy2}`);
console.log(`Números pares ${data.fifthFloor.onlyEven}`);
console.log(`Números impares ${data.fifthFloor.onlyOdd}`);


/* Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String */

const dataStrings = {
  firstFloor: {
    vowels: [], // Vocales
  },
  secondFloor: {
    consonants: [], // Consonantes
  },

  fourthFloor: {
    asciiCode: [], // Ascii code de cada letra
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [], // Palabras de la frase en mayúsculas
    wordsInLowercase: [], // Palabras de la frase en minúsculas
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto, será útil que investigues sobre el método replaceAll de los strings y sobre el uso de expresiones regulares dentro de este método.

    // REGLAS DE CODIFICACIÓN
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: '',
  },
};

const input = 'Si no estudias acabarás como Enrique'
let phrase = '';

for (let counter = 0; counter < input.length; counter++) {
  const letter = input[counter]; 
  
  if (letter === ' ');
 // !!! Procesar la frase acumulada cuando se encuentra un espacio

  const lowerPhrase = phrase.toLowerCase();
  const upperPhrase = phrase.toUpperCase();
  
  if ('aeiou'.includes(phrase)) {
    dataStrings.firstFloor.vowels.push(phrase); 
  } else ('bcdfghjklmnpqrstvwxyz'.includes(phrase)); {
    dataStrings.secondFloor.consonants.push(phrase);
    phrase += letter;
  }

  
  dataStrings.fourthFloor.asciiCode.push(letter.charCodeAt(0));  // Agregar código ASCII de cada letra
  dataStrings.fifthFloor.wordsInLowercase.push(upperPhrase);
  dataStrings.fifthFloor.wordsInUppercase.push(lowerPhrase); 
};

console.log(dataStrings);


