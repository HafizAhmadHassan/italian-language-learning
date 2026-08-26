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
  {
    id: 'grammar-9',
    title: 'Imperfect Tense (Imperfetto)',
    level: 'B1',
    description: 'Learn the imperfect tense to describe ongoing past actions, habits, and background information.',
    sections: [
      {
        title: 'Formation of the Imperfect',
        explanation: 'Regular endings: -ARE verbs use -avo, -avi, -ava, -avamo, -avate, -avano. -ERE verbs use -evo, -evi, -eva, -evamo, -evate, -evano. -IRE verbs use -ivo, -ivi, -iva, -ivamo, -ivate, -ivano.',
        examples: [
          { italian: 'parlare --> parlavo', translation: 'I was speaking / I used to speak' },
          { italian: 'scrivere --> scrivevo', translation: 'I was writing / I used to write' },
          { italian: 'dormire --> dormivo', translation: 'I was sleeping / I used to sleep' },
        ],
        exercise: {
          question: 'What is "We used to eat" (mangiare)?',
          options: ['mangiavamo', 'mangiavano', 'mangiato', 'mangeremo'],
          answer: 'mangiavamo',
        },
      },
      {
        title: 'Imperfetto of Essere',
        explanation: 'Essere has irregular imperfect forms: ero, eri, era, eravamo, eravate, erano.',
        examples: [
          { italian: 'Io ero felice', translation: 'I was happy' },
          { italian: 'Tu eri stanco', translation: 'You were tired' },
          { italian: 'Loro erano a casa', translation: 'They were at home' },
        ],
        exercise: {
          question: 'What is "She was" in Italian?',
          options: ['era', 'ero', 'erano', 'eravamo'],
          answer: 'era',
        },
      },
      {
        title: 'When to Use Imperfetto vs Passato Prossimo',
        explanation: 'Use imperfetto for ongoing past actions, habits, descriptions, and background. Use passato prossimo for completed actions.',
        examples: [
          { italian: 'Quando ero piccolo, giocavo nel parco', translation: 'When I was little, I used to play in the park (habit)' },
          { italian: 'Mentre mangiavo, il telefono ha squillato', translation: 'While I was eating, the phone rang (background vs. completed)' },
          { italian: 'Il cielo era blu', translation: 'The sky was blue (description)' },
        ],
        exercise: {
          question: 'Which tense is used for: "When I was young, I played in the park"?',
          options: ['Passato prossimo', 'Imperfetto', 'Futuro', 'Presente'],
          answer: 'Imperfetto',
        },
      },
    ],
  },
  {
    id: 'grammar-10',
    title: 'Conditional Mood (Condizionale)',
    level: 'B1',
    description: 'Express wishes, hypothetical situations, and polite requests using the conditional.',
    sections: [
      {
        title: 'Conditional Endings',
        explanation: 'Add these endings to the full infinitive: -ei, -esti, -ebbe, -emmo, -este, -ebbero.',
        examples: [
          { italian: 'parlare --> parlerei', translation: 'I would speak' },
          { italian: 'scrivere --> scriverei', translation: 'I would write' },
          { italian: 'dormire --> dormirei', translation: 'I would sleep' },
        ],
        exercise: {
          question: 'What is "I would eat" (mangiare)?',
          options: ['mangerei', 'mangiavo', 'mangerò', 'mangiato'],
          answer: 'mangerei',
        },
      },
      {
        title: 'Irregular Conditional Stems',
        explanation: 'Some verbs have irregular stems: essere (sar-), avere (avr-), fare (far-), dare (dar-), stare (star-).',
        examples: [
          { italian: 'essere --> sarei', translation: 'I would be' },
          { italian: 'avere --> avrei', translation: 'I would have' },
          { italian: 'fare --> farei', translation: 'I would do/make' },
          { italian: 'dare --> darei', translation: 'I would give' },
        ],
        exercise: {
          question: 'What is the irregular conditional stem of "avere"?',
          options: ['averesti', 'avrei', 'averei', 'avro'],
          answer: 'avrei',
        },
      },
      {
        title: 'Using the Conditional',
        explanation: 'The conditional is used for polite requests, wishes, hypothetical situations, and reporting speech.',
        examples: [
          { italian: 'Vorrei un caffè, per favore', translation: 'I would like a coffee, please (polite request)' },
          { italian: 'Potresti aiutarmi?', translation: 'Could you help me? (polite request)' },
          { italian: 'Vivrei in Italia se potessi', translation: 'I would live in Italy if I could (hypothetical)' },
        ],
        exercise: {
          question: 'How do you make a polite request in Italian?',
          options: ['Use presente', 'Use condizionale', 'Use imperativo', 'Use futuro'],
          answer: 'Use condizionale',
        },
      },
    ],
  },
  {
    id: 'grammar-11',
    title: 'Possessive Adjectives',
    level: 'B2',
    description: 'Master Italian possessives and their agreement patterns with nouns.',
    sections: [
      {
        title: 'Possessive Forms',
        explanation: 'Italian possessives agree with the gender of the noun possessed. Singular family nouns take definite articles.',
        examples: [
          { italian: 'il mio / la mia', translation: 'my (m/f)' },
          { italian: 'il tuo / la tua', translation: 'your (m/f)' },
          { italian: 'il suo / la sua', translation: 'his/her (m/f)' },
          { italian: 'il nostro / la nostra', translation: 'our (m/f)' },
          { italian: 'i nostri / le nostre', translation: 'our (m.pl/f.pl)' },
        ],
        exercise: {
          question: 'Which is correct for "my book"?',
          options: ['Mio libro', 'Il mio libro', 'Il libro mio', 'Libro mio'],
          answer: 'Il mio libro',
        },
      },
      {
        title: 'Possessives with Family',
        explanation: 'With singular family members, always use the definite article. With plural family members, the article is optional.',
        examples: [
          { italian: 'la mia madre', translation: 'my mother (article required)' },
          { italian: 'il fratello', translation: 'the brother / my brother' },
          { italian: 'i miei fratelli', translation: 'my brothers (article optional with plural)' },
        ],
        exercise: {
          question: 'Do you use an article with "mia sorella" (my sister)?',
          options: ['Yes, always', 'Only in formal speech', 'Only with plural', 'No article needed'],
          answer: 'Yes, always',
        },
      },
    ],
  },
  {
    id: 'grammar-12',
    title: 'Comparatives and Superlatives',
    level: 'B2',
    description: 'Express comparisons and the highest degree using Italian comparative structures.',
    sections: [
      {
        title: 'Comparative Forms',
        explanation: 'Use "più...di" for more, "meno...di" for less, and "così...come" for as...as.',
        examples: [
          { italian: 'più alto di', translation: 'taller than' },
          { italian: 'meno caro di', translation: 'less expensive than' },
          { italian: 'così alto come', translation: 'as tall as' },
        ],
        exercise: {
          question: 'How do you say "more beautiful than"?',
          options: ['meno bella di', 'più bella di', 'bellissima di', 'bella come'],
          answer: 'più bella di',
        },
      },
      {
        title: 'Superlative Forms',
        explanation: 'Use "il/la più" for the most, "il/la meno" for the least, and the suffix "-issimo" for very/extremely.',
        examples: [
          { italian: 'il più bello', translation: 'the most beautiful' },
          { italian: 'la meno cara', translation: 'the least expensive' },
          { italian: 'bellissimo', translation: 'very beautiful' },
          { italian: 'altissimo', translation: 'very tall' },
        ],
        exercise: {
          question: 'What does the suffix "-issimo" mean?',
          options: ['Very/Extremely', 'The most', 'The least', 'Somewhat'],
          answer: 'Very/Extremely',
        },
      },
      {
        title: 'Irregular Comparatives',
        explanation: 'Some adjectives have irregular comparative forms.',
        examples: [
          { italian: 'buono --> migliore', translation: 'good --> better' },
          { italian: 'cattivo --> peggiore', translation: 'bad --> worse' },
          { italian: 'grande --> maggiore', translation: 'big --> greater' },
          { italian: 'piccolo --> minore', translation: 'small --> lesser' },
        ],
        exercise: {
          question: 'What is the irregular comparative of "buono" (good)?',
          options: ['buonissimo', 'migliore', 'più buono', 'meglio'],
          answer: 'migliore',
        },
      },
    ],
  },
  {
    id: 'grammar-13',
    title: 'Imperative Mood',
    level: 'B2',
    description: 'Give commands, instructions, and make suggestions in Italian.',
    sections: [
      {
        title: 'Imperative Forms by Person',
        explanation: 'Tu: -a/-e (most verbs). Lei: -i. Noi: -iamo. Voi: -ate/-ite.',
        examples: [
          { italian: 'parla! (tu)', translation: 'Speak! (informal)' },
          { italian: 'parli! (Lei)', translation: 'Speak! (formal)' },
          { italian: 'parliamo! (noi)', translation: "Let's speak!" },
          { italian: 'parlate! (voi)', translation: 'Speak! (you all)' },
        ],
        exercise: {
          question: 'What is the imperative of "mangiare" for "tu"?',
          options: ['mangia', 'mangi', 'mangiamo', 'mangiate'],
          answer: 'mangia',
        },
      },
      {
        title: 'Negative Imperative',
        explanation: 'For negative commands, use "non" + subjunctive form (for tu and voi).',
        examples: [
          { italian: 'Non parlare!', translation: "Don't speak! (tu)" },
          { italian: 'Non parli! (Lei)', translation: "Don't speak! (formal)" },
          { italian: 'Non parliamo!', translation: "Let's not speak!" },
          { italian: 'Non parlate! (voi)', translation: "Don't speak! (you all)" },
        ],
        exercise: {
          question: 'What is the negative imperative "Don\'t eat!" for tu?',
          options: ['Non mangia', 'Non mangi', 'Non mangiamo', 'Non mangiate'],
          answer: 'Non mangi',
        },
      },
      {
        title: 'Irregular Imperatives',
        explanation: 'Essere, dare, stare, andare, fare have irregular imperatives.',
        examples: [
          { italian: 'sii! (essere)', translation: 'Be!' },
          { italian: 'da! (dare)', translation: 'Give!' },
          { italian: 'sta! (stare)', translation: 'Stay!' },
          { italian: 'va! (andare)', translation: 'Go!' },
          { italian: 'fa! (fare)', translation: 'Do/Make!' },
        ],
        exercise: {
          question: 'What is the imperative of "essere" for "tu"?',
          options: ['sia', 'sii', 'sei', 'stato'],
          answer: 'sii',
        },
      },
    ],
  },
  {
    id: 'grammar-14',
    title: 'Object Pronouns',
    level: 'B2',
    description: 'Master direct, indirect, and combined object pronouns in Italian.',
    sections: [
      {
        title: 'Direct Object Pronouns',
        explanation: 'Direct pronouns replace the direct object (answers "what?" or "whom?").',
        examples: [
          { italian: 'mi', translation: 'me' },
          { italian: 'ti', translation: 'you (informal)' },
          { italian: 'lo', translation: 'him/it (masc.)' },
          { italian: 'la', translation: 'her/it (fem.)' },
          { italian: 'ci', translation: 'us' },
          { italian: 'vi', translation: 'you all' },
          { italian: 'li', translation: 'them (masc.)' },
          { italian: 'le', translation: 'them (fem.)' },
        ],
        exercise: {
          question: 'What does "lo" mean as a direct pronoun?',
          options: ['her', 'him/it', 'them', 'us'],
          answer: 'him/it',
        },
      },
      {
        title: 'Indirect Object Pronouns',
        explanation: 'Indirect pronouns replace the indirect object (answers "to whom?" or "for whom?").',
        examples: [
          { italian: 'mi', translation: 'to me' },
          { italian: 'ti', translation: 'to you' },
          { italian: 'gli', translation: 'to him' },
          { italian: 'le', translation: 'to her' },
          { italian: 'ci', translation: 'to us' },
          { italian: 'vi', translation: 'to you all' },
          { italian: 'gli', translation: 'to them' },
        ],
        exercise: {
          question: 'What is the indirect pronoun for "to him"?',
          options: ['lo', 'gli', 'li', 'le'],
          answer: 'gli',
        },
      },
      {
        title: 'Combined Pronouns',
        explanation: 'When using two pronouns together, the indirect comes first. Use combined forms: me lo, te la, glielo, etc.',
        examples: [
          { italian: 'me lo', translation: 'it to me' },
          { italian: 'te la', translation: 'it to you' },
          { italian: 'glielo', translation: 'it to him/her' },
          { italian: 'ce li', translation: 'them to us' },
        ],
        exercise: {
          question: 'What does "me lo dai?" mean?',
          options: ['Do you see it?', 'Will you give it to me?', 'Can I have it?', 'Where is it?'],
          answer: 'Will you give it to me?',
        },
      },
    ],
  },
  {
    id: 'grammar-15',
    title: 'Imperfect Subjunctive',
    level: 'C1',
    description: 'Use the imperfect subjunctive for hypothetical and unreal situations in the past.',
    sections: [
      {
        title: 'Formation of Imperfetto Congiuntivo',
        explanation: 'Regular endings: -ARE verbs: -assi, -assi, -asse, -assimo, -aste, -assero. -ERE verbs: -essi, -essi, -esse, -essimo, -este, -essero. -IRE verbs: -issi, -issi, -isse, -issimo, -iste, -issero.',
        examples: [
          { italian: 'parlare --> che io parlassi', translation: 'that I spoke' },
          { italian: 'scrivere --> che io scrivessi', translation: 'that I wrote' },
          { italian: 'dormire --> che io dormissi', translation: 'that I slept' },
        ],
        exercise: {
          question: 'What is the imperfect subjunctive of "parlare" for io?',
          options: ['parlavo', 'parlassi', 'parlerei', 'parlai'],
          answer: 'parlassi',
        },
      },
      {
        title: 'Imperfetto Congiuntivo of Essere and Avere',
        explanation: 'Both essere and avere are irregular in the imperfect subjunctive.',
        examples: [
          { italian: 'essere: fossi, fossi, fosse, fossimo, foste, fossero', translation: 'that I/he/she/we/you/they were' },
          { italian: 'avere: avessi, avessi, avesse, avessimo, aveste, avessero', translation: 'that I/he/she/we/you/they had' },
        ],
        exercise: {
          question: 'What is "if I were" in Italian?',
          options: ['se io ero', 'se io fossi', 'se io sono', 'se io sarò'],
          answer: 'se io fossi',
        },
      },
      {
        title: 'Uses of the Imperfect Subjunctive',
        explanation: 'Used in hypothetical "if" clauses, after "volevo che", "pensavo che", "era come se", and other expressions of doubt, desire, or unreality.',
        examples: [
          { italian: 'Se fossi ricco, viaggerei', translation: 'If I were rich, I would travel' },
          { italian: 'Volevo che tu venissi', translation: 'I wanted you to come' },
          { italian: 'Era come se fossimo a casa', translation: 'It was as if we were at home' },
        ],
        exercise: {
          question: 'Which expression requires the imperfect subjunctive?',
          options: ['So che...', 'Penso che...', 'Spero che...', 'Vado che...'],
          answer: 'Penso che...',
        },
      },
    ],
  },
  {
    id: 'grammar-16',
    title: 'Passive Voice',
    level: 'C1',
    description: 'Form and use the passive voice in Italian to emphasize the action over the doer.',
    sections: [
      {
        title: 'Formation with Essere',
        explanation: 'The passive voice is formed with "essere" + past participle. The past participle agrees with the subject.',
        examples: [
          { italian: 'Il libro è scritto da Calvino', translation: 'The book is written by Calvino' },
          { italian: 'La pizza è mangiata ovunque', translation: 'Pizza is eaten everywhere' },
          { italian: 'La città è stata fondata dai Romani', translation: 'The city was founded by the Romans' },
        ],
        exercise: {
          question: 'How is the passive voice formed in Italian?',
          options: ['Avere + past participle', 'Essere + past participle', 'Fare + infinitive', 'Stare + gerund'],
          answer: 'Essere + past participle',
        },
      },
      {
        title: 'Passive with "venire"',
        explanation: 'Instead of "essere", you can use "venire" to express an ongoing or repeated passive action.',
        examples: [
          { italian: 'Il libro viene letto da milioni', translation: 'The book is (being) read by millions' },
          { italian: 'La pizza viene mangiata ovunque', translation: 'Pizza is (being) eaten everywhere' },
        ],
        exercise: {
          question: 'What auxiliary is used in place of "essere" for ongoing passive?',
          options: ['avere', 'venire', 'stare', 'dovere'],
          answer: 'venire',
        },
      },
      {
        title: 'Passive with "si"',
        explanation: 'Italian often uses the impersonal "si" construction as an alternative to the passive voice.',
        examples: [
          { italian: 'Si parla italiano', translation: 'Italian is spoken (people speak Italian)' },
          { italian: 'Si vendono case', translation: 'Houses are for sale (houses are sold)' },
          { italian: 'Qui si mangia bene', translation: 'Here people eat well / Here food is well eaten' },
        ],
        exercise: {
          question: 'What does "Si parla italiano" mean?',
          options: ['One speaks Italian', 'Italian is spoken', 'I speak Italian', 'They speak Italian'],
          answer: 'Italian is spoken',
        },
      },
    ],
  },
];

export default grammar;
