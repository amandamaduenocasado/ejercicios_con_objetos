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

for (const number of dataNumbers.numbers) {
  // Rellenar los arrays correspondientes
  data.firstFloor.secondFloor.numbersPlus2.push(numbers + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(numbers * 2);
  data.fourthFloor.numbersDividedBy2.push(numbers / 2);

  // Clasificar números en pares e impares
  if (number % 2 === 0) {
    dataNumbers.fifthFloor.onlyEven.push(numbers);
  } else {
    dataNumbers.fifthFloor.onlyOdd.push(numbers);
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

const analyzePhrase = phrase => {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnñpqrstvwxyz';
  const abecedary = 'abcdefghijklmnñopqrstuvwxyz';

  let wordsInUppercase = '';
  let wordsInLowercase = '';

  let encryptedPhrase = '';

  for (const letter of phrase.toLowerCase()) {
    if (vowels.includes(letter)) {
      dataStrings.firstFloor.vowels.push(letter);
    } else if (consonants.includes(letter)) {
      dataStrings.secondFloor.consonants.push(letter);
    }

    dataStrings.fourthFloor.asciiCode.push(letter.charCodeAt());

    if (letter !== ' ') {
      wordsInUppercase = wordsInUppercase + letter.toUpperCase();
      wordsInLowercase = wordsInLowercase + letter.toLowerCase();
    } else {
      dataStrings.fifthFloor.wordsInUppercase.push(wordsInUppercase);
      dataStrings.fifthFloor.wordsInLowercase.push(wordsInLowercase);
      wordsInUppercase = '';
      wordsInLowercase = '';
    }

    // CODIFICACIÓN CONSONANTES
    if (consonants.includes(letter)) {
      let currentConsonantIndex = consonants.indexOf(letter);
      if (currentConsonantIndex === 0) {
        currentConsonantIndex = consonants.length - 1;
        encryptedPhrase = encryptedPhrase + consonants.charAt(currentConsonantIndex);
      } else {
        encryptedPhrase = encryptedPhrase + consonants.charAt(currentConsonantIndex - 1);
      }
    } else if (letter === ' ') {
      const randomPosition = Math.floor(Math.random() * abecedary.length);
      encryptedPhrase = encryptedPhrase + abecedary.charAt(randomPosition);
    } else {
      encryptedPhrase = encryptedPhrase + letter;
    }
  } // FIN DEL BUCLE

  encryptedPhrase = encryptedPhrase
    .replaceAll('a', 1)
    .replaceAll('e', 2)
    .replaceAll('e', 2)
    .replaceAll('i', 3)
    .replaceAll('o', 4)
    .replaceAll('u', 5);

  console.log(encryptedPhrase);

  if (wordsInUppercase.length > 0) {
    dataStrings.fifthFloor.wordsInUppercase.push(wordsInUppercase);
    dataStrings.fifthFloor.wordsInLowercase.push(wordsInLowercase);
  }
};

analyzePhrase('Estamos viendo objetos');

console.log(dataStrings);
