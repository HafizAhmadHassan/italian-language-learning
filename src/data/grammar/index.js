const grammar = [
  {
    id: 'grammar-1',
    title: 'The Italian Alphabet',
    level: 'A1',
    description: 'The Italian alphabet has 21 letters. J, K, W, X, and Y are not part of the native alphabet but are used in foreign words.',
    sections: [
      {
        title: 'The 21 Italian Letters',
        explanation: 'Italian uses the Latin alphabet with 21 letters. Vowels are central to pronunciation.',
        examples: [
          { italian: 'A, B, C, D, E, F, G, H', translation: 'First 8 letters' },
          { italian: 'I, L, M, N, O, P, Q, R', translation: 'Next 8 letters' },
          { italian: 'S, T, U, V, Z', translation: 'Last 5 letters' },
        ],
        exercise: {
          question: 'How many letters are in the Italian alphabet?',
          options: ['26', '21', '24', '28'],
          answer: '21',
        },
      },
      {
        title: 'Italian Vowels',
        explanation: 'Italian has 5 pure vowels: A, E, I, O, U. Each has a consistent, clear sound.',
        examples: [
          { italian: 'A = "ah"', translation: 'as in "father"' },
          { italian: 'E = "eh"', translation: 'as in "bed"' },
          { italian: 'I = "ee"', translation: 'as in "machine"' },
          { italian: 'O = "oh"', translation: 'as in "more"' },
          { italian: 'U = "oo"', translation: 'as in "moon"' },
        ],
        exercise: {
          question: 'Which vowel makes an "oo" sound like in "moon"?',
          options: ['A', 'E', 'I', 'U'],
          answer: 'U',
        },
      },
      {
        title: 'Special Pronunciations',
        explanation: 'Some Italian letter combinations have special pronunciations.',
        examples: [
          { italian: 'CH = "k"', translation: 'as in "che" (what)' },
          { italian: 'GH = "g"', translation: 'as in "ghetto"' },
          { italian: 'GL = "ly"', translation: 'as in "figlia" (daughter)' },
          { italian: 'GN = "ny"', translation: 'as in "gnocchi"' },
          { italian: 'SC = "sh"', translation: 'as in "scena" (scene)' },
        ],
        exercise: {
          question: 'How is "gn" pronounced in Italian?',
          options: ['g-n', 'ny', 'ng', 'gn'],
          answer: 'ny',
        },
      },
    ],
  },
  {
    id: 'grammar-2',
    title: 'Italian Articles',
    level: 'A1',
    description: 'Learn about definite and indefinite articles in Italian and how they change based on gender and number.',
    sections: [
      {
        title: 'Definite Articles (The)',
        explanation: 'Italian has multiple forms of "the" depending on gender, number, and the starting letter of the following word.',
        examples: [
          { italian: 'il (masc. sing.)', translation: 'il ragazzo = the boy' },
          { italian: 'lo (masc. sing.)', translation: 'lo studente = the student' },
          { italian: 'la (fem. sing.)', translation: 'la ragazza = the girl' },
          { italian: 'i (masc. pl.)', translation: 'i ragazzi = the boys' },
          { italian: 'gli (masc. pl.)', translation: 'gli studenti = the students' },
          { italian: 'le (fem. pl.)', translation: 'le ragazze = the girls' },
        ],
        exercise: {
          question: 'Which article is used for "ragazzo" (boy)?',
          options: ['la', 'lo', 'il', 'gli'],
          answer: 'il',
        },
      },
      {
        title: 'Indefinite Articles (A/An)',
        explanation: 'Italian indefinite articles also vary by gender and number.',
        examples: [
          { italian: 'un (masc. sing.)', translation: 'un ragazzo = a boy' },
          { italian: 'una (fem. sing.)', translation: 'una ragazza = a girl' },
          { italian: 'uno (masc. sing.)', translation: 'uno studente = a student' },
          { italian: 'dei (masc. pl.)', translation: 'dei ragazzi = some boys' },
          { italian: 'delle (fem. pl.)', translation: 'delle ragazze = some girls' },
        ],
        exercise: {
          question: 'Which indefinite article is used before "ragazza" (girl)?',
          options: ['un', 'una', 'uno', 'dei'],
          answer: 'una',
        },
      },
    ],
  },
  {
    id: 'grammar-3',
    title: 'Gender in Italian',
    level: 'A1',
    description: 'All Italian nouns have a gender: masculine or feminine. Learn the rules to identify them.',
    sections: [
      {
        title: 'Masculine Nouns',
        explanation: 'Most masculine nouns end in -o (singular) or -i (plural).',
        examples: [
          { italian: 'il libro / i libri', translation: 'the book / the books' },
          { italian: 'il ragazzo / i ragazzi', translation: 'the boy / the boys' },
          { italian: 'il gatto / i gatti', translation: 'the cat / the cats' },
        ],
        exercise: {
          question: 'Which noun is masculine?',
          options: ['la casa', 'la scuola', 'il libro', 'la Macchina'],
          answer: 'il libro',
        },
      },
      {
        title: 'Feminine Nouns',
        explanation: 'Most feminine nouns end in -a (singular) or -e (plural).',
        examples: [
          { italian: 'la casa / le case', translation: 'the house / the houses' },
          { italian: 'la scuola / le scuole', translation: 'the school / the schools' },
          { italian: 'la Macchina / le macchine', translation: 'the car / the cars' },
        ],
        exercise: {
          question: 'What is the plural of "casa" (house)?',
          options: ['case', 'casi', 'casas', 'casa'],
          answer: 'case',
        },
      },
      {
        title: 'Nouns Ending in -e',
        explanation: 'Nouns ending in -e can be masculine or feminine. You must memorize the gender.',
        examples: [
          { italian: 'il fiore (m.)', translation: 'the flower' },
          { italian: 'la notte (f.)', translation: 'the night' },
          { italian: 'il nome (m.)', translation: 'the name' },
          { italian: 'la mente (f.)', translation: 'the mind' },
        ],
        exercise: {
          question: 'Is "fiore" (flower) masculine or feminine?',
          options: ['Masculine', 'Feminine'],
          answer: 'Masculine',
        },
      },
    ],
  },
  {
    id: 'grammar-4',
    title: 'Singular and Plural',
    level: 'A1',
    description: 'Learn how to form plurals in Italian based on noun ending and gender.',
    sections: [
      {
        title: 'Regular Plural Rules',
        explanation: 'Italian plurals follow predictable patterns based on the final vowel of the singular form.',
        examples: [
          { italian: '-o --> -i (masc.)', translation: 'ragazzo --> ragazzi (boys)' },
          { italian: '-a --> -e (fem.)', translation: 'ragazza --> ragazze (girls)' },
          { italian: '-e --> -i (both)', translation: 'studente --> studenti (students)' },
        ],
        exercise: {
          question: 'What is the plural of "gatto" (cat)?',
          options: ['gattos', 'gatti', 'gatte', 'gatto'],
          answer: 'gatti',
        },
      },
      {
        title: 'Irregular Plurals',
        explanation: 'Some nouns have irregular plural forms, especially those ending in -cio, -gio, -ca, -ga.',
        examples: [
          { italian: 'il braccio / le braccia', translation: 'the arm / the arms' },
          { italian: 'il genio / le genia', translation: 'the genius / the geniuses' },
          { italian: 'la amica / le amiche', translation: 'the friend (f.) / the friends (f.)' },
        ],
        exercise: {
          question: 'What is the plural of "braccio" (arm)?',
          options: ['bracci', 'braccia', 'braccio', 'braccos'],
          answer: 'braccia',
        },
      },
      {
        title: 'Plural of Nouns Ending in Consonant',
        explanation: 'Words borrowed from other languages ending in a consonant typically form the plural by adding -i.',
        examples: [
          { italian: 'il film / i film', translation: 'the film / the films' },
          { italian: 'il bar / i bar', translation: 'the bar / the bars' },
          { italian: 'lo sport / gli sport', translation: 'the sport / the sports' },
        ],
        exercise: {
          question: 'What is the plural of "film"?',
          options: ['filmes', 'film', 'films', 'filmi'],
          answer: 'film',
        },
      },
    ],
  },
  {
    id: 'grammar-5',
    title: 'Essere and Avere',
    level: 'A1',
    description: 'The two most important Italian verbs: to be (essere) and to have (avere).',
    sections: [
      {
        title: 'Conjugation of Essere (To Be)',
        explanation: 'Essere is an irregular verb used to describe identity, origin, and characteristics.',
        examples: [
          { italian: 'io sono', translation: 'I am' },
          { italian: 'tu sei', translation: 'you are (informal)' },
          { italian: 'lui/lei e', translation: 'he/she is' },
          { italian: 'noi siamo', translation: 'we are' },
          { italian: 'voi siete', translation: 'you all are' },
          { italian: 'loro sono', translation: 'they are' },
        ],
        exercise: {
          question: 'What is "I am" in Italian?',
          options: ['io ho', 'io sono', 'io sei', 'io e'],
          answer: 'io sono',
        },
      },
      {
        title: 'Conjugation of Avere (To Have)',
        explanation: 'Avere is used for possession, age, and in many expressions.',
        examples: [
          { italian: 'io ho', translation: 'I have' },
          { italian: 'tu hai', translation: 'you have' },
          { italian: 'lui/lei ha', translation: 'he/she has' },
          { italian: 'noi abbiamo', translation: 'we have' },
          { italian: 'voi avete', translation: 'you all have' },
          { italian: 'loro hanno', translation: 'they have' },
        ],
        exercise: {
          question: 'How do you say "She has" in Italian?',
          options: ['Lei e', 'Lei ha', 'Lei ho', 'Lei sono'],
          answer: 'Lei ha',
        },
      },
      {
        title: 'When to Use Essere vs Avere',
        explanation: 'Essere is used with adjectives and identity. Avere is used for age, hunger, thirst, and weather.',
        examples: [
          { italian: 'Sono italiano', translation: 'I am Italian (identity)' },
          { italian: 'Ho vent\'anni', translation: 'I am 20 years old (age)' },
          { italian: 'Ho fame', translation: 'I am hungry (hunger)' },
          { italian: 'Ho sete', translation: 'I am thirsty (thirst)' },
        ],
        exercise: {
          question: 'Which verb is used to express age in Italian?',
          options: ['Essere', 'Avere', 'Stare', 'Fare'],
          answer: 'Avere',
        },
      },
    ],
  },
  {
    id: 'grammar-6',
    title: 'Present Tense',
    level: 'A1',
    description: 'Learn how to conjugate regular verbs in the present tense (presente indicativo).',
    sections: [
      {
        title: '-ARE Verbs (Most Common)',
        explanation: 'Verbs ending in -are are the largest group. Remove -are and add these endings.',
        examples: [
          { italian: 'parlare (to speak)', translation: 'parlo, parli, parla, parliamo, parlate, parlano' },
          { italian: 'Yo parlo italiano', translation: 'I speak Italian' },
          { italian: 'Lui parla francese', translation: 'He speaks French' },
        ],
        exercise: {
          question: 'What is "We speak" using "parlare"?',
          options: ['parliamo', 'parlate', 'parlano', 'parlo'],
          answer: 'parliamo',
        },
      },
      {
        title: '-ERE Verbs',
        explanation: 'Verbs ending in -ere have variable stress patterns.',
        examples: [
          { italian: 'scrivere (to write)', translation: 'scrivo, scrivi, scrive, scriviamo, scrivete, scrivono' },
          { italian: 'Io scrivo una lettera', translation: 'I write a letter' },
          { italian: 'Voi scrivete bene', translation: 'You all write well' },
        ],
        exercise: {
          question: 'What is "You (informal) write" using "scrivere"?',
          options: ['scrivo', 'scrivi', 'scrive', 'scrivono'],
          answer: 'scrivi',
        },
      },
      {
        title: '-IRE Verbs',
        explanation: 'Some -IRE verbs add -isc- in certain forms (like capire, finire).',
        examples: [
          { italian: 'dormire (to sleep)', translation: 'dormo, dormi, dorme, dormiamo, dormite, dormono' },
          { italian: 'capire (to understand)', translation: 'capisco, capisci, capisce, capiamo, capite, capiscono' },
          { italian: 'Io dormo otto ore', translation: 'I sleep eight hours' },
        ],
        exercise: {
          question: 'Which -IRE verb adds -isc- in the io form?',
          options: ['dormire', 'capire', 'partire', 'sentire'],
          answer: 'capire',
        },
      },
    ],
  },
  {
    id: 'grammar-7',
    title: 'Past Tense (Passato Prossimo)',
    level: 'A2',
    description: 'Learn the passato prossimo, the most common past tense in Italian, used for completed actions.',
    sections: [
      {
        title: 'Formation with Avere',
        explanation: 'Most verbs use "avere" as the auxiliary. The past participle does not change.',
        examples: [
          { italian: 'Ho mangiato', translation: 'I ate / I have eaten' },
          { italian: 'Hai parlato', translation: 'You spoke / You have spoken' },
          { italian: 'Abbiamo guardato un film', translation: 'We watched a movie' },
        ],
        exercise: {
          question: 'What is "I ate" in Italian?',
          options: ['Sono mangiato', 'Ho mangiato', 'Ho mangiare', 'Mangiato ho'],
          answer: 'Ho mangiato',
        },
      },
      {
        title: 'Formation with Essere',
        explanation: 'Movement verbs and reflexive verbs use "essere". The past participle agrees with the subject.',
        examples: [
          { italian: 'Sono andato/a', translation: 'I went (m/f)' },
          { italian: 'Sei arrivato/a', translation: 'You arrived (m/f)' },
          { italian: 'Siamo partiti/partite', translation: 'We left (m/f group)' },
        ],
        exercise: {
          question: 'A woman says "I went to Rome." Which form is correct?',
          options: ['Sono andato a Roma', 'Sono andata a Roma', 'Ho andato a Roma', 'Ho andata a Roma'],
          answer: 'Sono andata a Roma',
        },
      },
      {
        title: 'Regular Past Participles',
        explanation: 'Form past participles by replacing the infinitive ending: -ARE -> -ATO, -ERE -> -UTO, -IRE -> -ITO.',
        examples: [
          { italian: 'parlare --> parlato', translation: 'to speak --> spoken' },
          { italian: 'scrivere --> scritto', translation: 'to write --> written (irregular)' },
          { italian: 'dormire --> dormito', translation: 'to sleep --> slept' },
        ],
        exercise: {
          question: 'What is the past participle of "parlare" (to speak)?',
          options: ['parlito', 'parlato', 'parluto', 'parlante'],
          answer: 'parlato',
        },
      },
    ],
  },
  {
    id: 'grammar-8',
    title: 'Future Tense (Futuro Semplice)',
    level: 'A2',
    description: 'Learn how to form and use the simple future tense to talk about plans and predictions.',
    sections: [
      {
        title: 'Regular Future Tense Endings',
        explanation: 'Add these endings to the verb stem (usually the infinitive): -o, -ai, -a, -emo, -ete, -anno.',
        examples: [
          { italian: 'parlare --> parlero', translation: 'I will speak' },
          { italian: 'scrivere --> scrivero', translation: 'I will write' },
          { italian: 'dormire --> dormiro', translation: 'I will sleep' },
        ],
        exercise: {
          question: 'What is "I will speak" (parlare) in Italian?',
          options: ['parlo', 'parlero', 'parlava', 'parlerei'],
          answer: 'parlero',
        },
      },
      {
        title: 'Irregular Stems',
        explanation: 'Some common verbs have irregular future stems. The endings remain the same.',
        examples: [
          { italian: 'essere --> saro', translation: 'I will be' },
          { italian: 'avere --> avro', translation: 'I will have' },
          { italian: 'andare --> andro', translation: 'I will go' },
          { italian: 'fare --> faro', translation: 'I will do/make' },
          { italian: 'venire --> vvero', translation: 'I will come' },
        ],
        exercise: {
          question: 'What is the irregular future stem of "essere"?',
          options: ['essero', 'sero', 'saro', 'estero'],
          answer: 'saro',
        },
      },
      {
        title: 'Using the Future Tense',
        explanation: 'The future tense is used for predictions, promises, and polite requests.',
        examples: [
          { italian: 'Domani andro al mare', translation: 'Tomorrow I will go to the sea' },
          { italian: 'Quando arriverai?', translation: 'When will you arrive?' },
          { italian: 'Vorrei un caffee', translation: 'I would like a coffee (polite future in meaning)' },
        ],
        exercise: {
          question: 'Which sentence correctly uses the future tense?',
          options: ['Io parlo domani', 'Io parlare domani', 'Io parlero domani', 'Io parlato domani'],
          answer: 'Io parlare domani',
        },
      },
    ],
  },
];

export default grammar;
