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
  {
    id: 'grammar-17',
    title: 'Personal Pronouns',
    level: 'A1',
    description: 'Learn Italian personal subject pronouns and when to use them.',
    sections: [
      {
        title: 'Subject Pronouns',
        explanation: 'Italian subject pronouns are often dropped because the verb ending indicates who is performing the action.',
        examples: [
          { italian: 'io', translation: 'I' },
          { italian: 'tu', translation: 'you (informal)' },
          { italian: 'lui / lei / Lei', translation: 'he / she / you (formal)' },
          { italian: 'noi', translation: 'we' },
          { italian: 'voi', translation: 'you (plural)' },
          { italian: 'loro', translation: 'they' },
        ],
        exercise: {
          question: 'When are Italian subject pronouns usually dropped?',
          options: ['Always', 'Never', 'When the verb form makes the subject clear', 'Only in formal speech'],
          answer: 'When the verb form makes the subject clear',
        },
      },
      {
        title: 'Pronoun Usage',
        explanation: 'Use pronouns for emphasis, clarity, or contrast.',
        examples: [
          { italian: 'Io parlo, tu ascolti', translation: 'I speak, you listen (contrast)' },
          { italian: 'Lui è italiano, lei è francese', translation: 'He is Italian, she is French (clarity)' },
          { italian: 'Io vado! (io stressed)', translation: "I'm going! (emphasis)" },
        ],
        exercise: {
          question: 'Which is NOT a subject pronoun?',
          options: ['io', 'mi', 'tu', 'lui'],
          answer: 'mi',
        },
      },
    ],
  },
  {
    id: 'grammar-18',
    title: 'Prepositions (Di, A, Da, In)',
    level: 'A1',
    description: 'Master basic Italian prepositions and their usage with places and people.',
    sections: [
      {
        title: 'Basic Prepositions',
        explanation: 'Italian has simple and articulated (contracted) prepositions.',
        examples: [
          { italian: 'di', translation: 'of / from' },
          { italian: 'a', translation: 'to / at' },
          { italian: 'da', translation: 'from / by' },
          { italian: 'in', translation: 'in' },
          { italian: 'con', translation: 'with' },
          { italian: 'per', translation: 'for' },
          { italian: 'su', translation: 'on / about' },
        ],
        exercise: {
          question: 'Which preposition means "from" (in the sense of origin)?',
          options: ['a', 'di', 'da', 'in'],
          answer: 'da',
        },
      },
      {
        title: 'Prepositions with Places',
        explanation: 'Prepositions contract with definite articles: di+il=dell\', a+gli=agli, etc.',
        examples: [
          { italian: 'Vado al cinema', translation: "I go to the cinema (a + il = al)" },
          { italian: 'Vengo dall\'Italia', translation: "I come from Italy (da + l' = dall')" },
          { italian: 'Studio a scuola', translation: 'I study at school' },
          { italian: 'Vivo in Italia', translation: 'I live in Italy' },
        ],
        exercise: {
          question: 'What is "a + il" in contracted form?',
          options: ['allo', 'al', 'ai', 'alla'],
          answer: 'al',
        },
      },
      {
        title: 'Prepositions with People',
        explanation: 'Use "da" for origin, "a" for destination, "con" for accompaniment.',
        examples: [
          { italian: 'Vengo da Roma', translation: 'I come from Rome' },
          { italian: 'Vado a Milano', translation: 'I go to Milan' },
          { italian: 'Vado con Marco', translation: 'I go with Marco' },
          { italian: 'Sono di Torino', translation: 'I am from Turin (identity)' },
        ],
        exercise: {
          question: 'How do you say "I come from Rome"?',
          options: ['Vengo a Roma', 'Vengo di Roma', 'Vengo da Roma', 'Vengo in Roma'],
          answer: 'Vengo da Roma',
        },
      },
    ],
  },
  {
    id: 'grammar-19',
    title: 'Adjective Agreement',
    level: 'A2',
    description: 'Learn how Italian adjectives agree in gender and number with nouns.',
    sections: [
      {
        title: 'Regular Agreement',
        explanation: 'Adjectives change endings to match the noun: -o/-a/-i/-e.',
        examples: [
          { italian: 'ragazzo alto / ragazza alta', translation: 'tall boy / tall girl' },
          { italian: 'libri grandi', translation: 'big books (pl.)' },
          { italian: 'case piccole', translation: 'small houses (f.pl.)' },
        ],
        exercise: {
          question: 'What is the feminine form of "bello"?',
          options: ['belli', 'belle', 'bella', 'belli'],
          answer: 'bella',
        },
      },
      {
        title: 'Placement of Adjectives',
        explanation: 'Most adjectives follow the noun. Some (like bello, buono, grande, piccolo) precede it.',
        examples: [
          { italian: 'una macchina rossa', translation: 'a red car (color follows)' },
          { italian: 'un bel giorno', translation: 'a beautiful day (bello precedes)' },
          { italian: 'un buon ristorante', translation: 'a good restaurant (buono precedes)' },
        ],
        exercise: {
          question: 'Where does the color adjective "rosso" go?',
          options: ['Before the noun', 'After the noun', 'Either position', 'Before the article'],
          answer: 'After the noun',
        },
      },
      {
        title: 'Irregular Adjectives',
        explanation: 'Some adjectives have irregular forms.',
        examples: [
          { italian: 'buono/buona/buoni/buone', translation: 'good' },
          { italian: 'bello/bella/belli/belle', translation: 'beautiful' },
          { italian: 'grande/grandi', translation: 'big/great (invariable for gender)' },
          { italian: 'poco/poca/pochi/poque', translation: 'little/few' },
        ],
        exercise: {
          question: 'What is the masculine plural of "bello"?',
          options: ['bellos', 'belli', 'belle', 'bella'],
          answer: 'belli',
        },
      },
    ],
  },
  {
    id: 'grammar-20',
    title: 'Reflexive Verbs',
    level: 'A2',
    description: 'Learn to use reflexive verbs for daily routines and self-directed actions.',
    sections: [
      {
        title: 'Reflexive Pronouns',
        explanation: 'Reflexive pronouns: mi, ti, si, ci, vi, si. They go before the conjugated verb.',
        examples: [
          { italian: 'mi lavo', translation: 'I wash myself' },
          { italian: 'ti alzi', translation: 'you wake up' },
          { italian: 'si vestono', translation: 'they get dressed' },
        ],
        exercise: {
          question: 'What is the reflexive pronoun for "noi"?',
          options: ['mi', 'ti', 'ci', 'vi'],
          answer: 'ci',
        },
      },
      {
        title: 'Common Reflexive Verbs',
        explanation: 'Many daily routine verbs are reflexive.',
        examples: [
          { italian: 'svegliarsi', translation: 'to wake up' },
          { italian: 'alzarsi', translation: 'to get up' },
          { italian: 'lavarsi', translation: 'to wash oneself' },
          { italian: 'vestirsi', translation: 'to get dressed' },
          { italian: 'chiamarsi', translation: 'to call oneself' },
          { italian: 'divertirsi', translation: 'to have fun' },
        ],
        exercise: {
          question: 'What does "chiamarsi" mean?',
          options: ['To call someone', 'To be called / To call oneself', 'To answer the phone', 'To shout'],
          answer: 'To be called / To call oneself',
        },
      },
      {
        title: 'Reflexive Passato Prossimo',
        explanation: 'Reflexive verbs always use "essere" as auxiliary in passato prossimo.',
        examples: [
          { italian: 'Mi sono svegliato/a presto', translation: 'I woke up early' },
          { italian: 'Ci siamo divertiti', translation: 'We had fun' },
          { italian: 'Ti sei vestito/a?', translation: 'Did you get dressed?' },
        ],
        exercise: {
          question: 'Which auxiliary do reflexive verbs use in passato prossimo?',
          options: ['Avere', 'Essere', 'Stare', 'Dovere'],
          answer: 'Essere',
        },
      },
    ],
  },
  {
    id: 'grammar-21',
    title: 'Modal Verbs (Dovere, Potere, Volere)',
    level: 'A2',
    description: 'Master Italian modal verbs and their usage with infinitives.',
    sections: [
      {
        title: 'Conjugation and Meaning',
        explanation: 'Modals express obligation, possibility, and desire. They are followed by infinitive without preposition.',
        examples: [
          { italian: 'devo studiare', translation: 'I must study (obligation)' },
          { italian: 'puoi venire', translation: 'you can come (possibility)' },
          { italian: 'voglio mangiare', translation: 'I want to eat (desire)' },
          { italian: 'dobbiamo partire', translation: 'we must leave' },
          { italian: 'possono aiutare', translation: 'they can help' },
        ],
        exercise: {
          question: 'Which modal verb expresses obligation?',
          options: ['potere', 'volere', 'dovere', 'andare'],
          answer: 'dovere',
        },
      },
      {
        title: 'Modals with Passato Prossimo',
        explanation: 'The choice of auxiliary (avere/essere) depends on the infinitive that follows.',
        examples: [
          { italian: 'ho dovuto partire', translation: 'I had to leave (avere because partire takes essere, but double auxiliary is rare — often essere used)' },
          { italian: 'sono dovuto/a andare', translation: 'I had to go' },
          { italian: 'ho potuto fare', translation: 'I could do' },
        ],
        exercise: {
          question: 'What does "dovere" mean?',
          options: ['To be able to', 'To want', 'To have to / must', 'To like'],
          answer: 'To have to / must',
        },
      },
    ],
  },
  {
    id: 'grammar-22',
    title: 'Relative Pronouns',
    level: 'B2',
    description: 'Use che, cui, il quale, and other relative pronouns to connect clauses.',
    sections: [
      {
        title: 'Che vs Cui',
        explanation: '"Che" is the most common relative pronoun (subject or direct object). "Cui" follows prepositions.',
        examples: [
          { italian: 'Il libro che leggo', translation: 'The book that I read (direct object)' },
          { italian: 'La persona con cui parlo', translation: 'The person with whom I speak (after preposition)' },
          { italian: 'Il ristorante dove mangiamo', translation: 'The restaurant where we eat' },
        ],
        exercise: {
          question: 'Which relative pronoun follows prepositions?',
          options: ['che', 'cui', 'dove', 'quale'],
          answer: 'cui',
        },
      },
      {
        title: 'Il quale, La quale',
        explanation: 'Use "il quale" for more formal or precise reference, especially after prepositions.',
        examples: [
          { italian: 'Il professore con il quale studio', translation: 'The professor with whom I study (formal)' },
          { italian: 'La persona la quale ho incontrato', translation: 'The person whom I met' },
        ],
        exercise: {
          question: 'When is "il quale" preferred over "che"?',
          options: ['In informal speech', 'After prepositions for clarity', 'Never', 'With verbs only'],
          answer: 'After prepositions for clarity',
        },
      },
    ],
  },
  {
    id: 'grammar-23',
    title: 'Future Perfect (Futuro Anteriore)',
    level: 'B2',
    description: 'Express actions that will have been completed by a future point in time.',
    sections: [
      {
        title: 'Formation',
        explanation: 'Future auxiliary (avro/sono stato) + past participle.',
        examples: [
          { italian: 'Avro finito entro mezzogiorno', translation: 'I will have finished by noon' },
          { italian: 'Saro arrivato prima di te', translation: 'I will have arrived before you' },
          { italian: 'Avremo mangiato quando arrivi', translation: 'We will have eaten when you arrive' },
        ],
        exercise: {
          question: 'What is "I will have spoken" (parlare)?',
          options: ['parlero', 'avrò parlato', 'parlavo', 'parlerei'],
          answer: 'avrò parlato',
        },
      },
      {
        title: 'Usage',
        explanation: 'Used to express an action completed before another future action.',
        examples: [
          { italian: 'Quando arrivero, avro già preparato la cena', translation: 'When I arrive, I will have already prepared dinner' },
          { italian: 'Domani avro finito il progetto', translation: 'Tomorrow I will have finished the project' },
        ],
        exercise: {
          question: 'When do we use futuro anteriore?',
          options: ['For past actions', 'For actions completed before another future action', 'For habitual actions', 'For commands'],
          answer: 'For actions completed before another future action',
        },
      },
    ],
  },
  {
    id: 'grammar-24',
    title: 'Conjunctive Mood (Congiuntivo Presente)',
    level: 'B1',
    description: 'Use the present subjunctive to express doubt, desire, opinion, and emotion.',
    sections: [
      {
        title: 'Formation',
        explanation: 'Regular endings: -ARE verbs: -i, -i, -i, -iamo, -iate, -ino. -ERE verbs: -a, -a, -a, -iamo, -iate, -ano. -IRE verbs: -a, -a, -a, -iamo, -iate, -ano.',
        examples: [
          { italian: 'che io parli', translation: 'that I speak' },
          { italian: 'che tu scriva', translation: 'that you write' },
          { italian: 'che lui dorma', translation: 'that he sleeps' },
        ],
        exercise: {
          question: 'What is the present subjunctive of "parlare" for io?',
          options: ['parlo', 'parli', 'parlerei', 'parlavo'],
          answer: 'parli',
        },
      },
      {
        title: 'Irregular Subjunctive',
        explanation: 'Essere, avere, andare, fare, dire, dare, stare, sapere have irregular forms.',
        examples: [
          { italian: 'che io sia', translation: 'that I be' },
          { italian: 'che io abbia', translation: 'that I have' },
          { italian: 'che io vada', translation: 'that I go' },
          { italian: 'che io faccia', translation: 'that I do/make' },
        ],
        exercise: {
          question: 'What is the irregular present subjunctive of "essere" for io?',
          options: ['sono', 'sia', 'ero', 'sarei'],
          answer: 'sia',
        },
      },
      {
        title: 'When to Use Congiuntivo',
        explanation: 'After expressions of opinion, doubt, desire, emotion, and uncertainty.',
        examples: [
          { italian: 'Penso che sia importante', translation: 'I think it is important' },
          { italian: 'Spero che tu venga', translation: 'I hope you come' },
          { italian: 'È possibile che piova', translation: 'It is possible that it rains' },
        ],
        exercise: {
          question: 'Which expression requires the subjunctive?',
          options: ['So che...', 'Penso che...', 'Voglio che...', 'Tutte e due (B e C)'],
          answer: 'Tutte e due (B e C)',
        },
      },
    ],
  },
  {
    id: 'grammar-25',
    title: 'Relative Clauses and Subordination',
    level: 'C1',
    description: 'Build complex sentences with multiple subordinate clauses.',
    sections: [
      {
        title: 'Types of Subordinate Clauses',
        explanation: 'Italian has causal, temporal, consecutive, concessive, and conditional clauses.',
        examples: [
          { italian: 'Poiché piove, restiamo a casa', translation: 'Since it rains, we stay home (causal)' },
          { italian: 'Quando arrivo, ti chiamo', translation: 'When I arrive, I call you (temporal)' },
          { italian: 'Così bello che non riesco a crederci', translation: 'So beautiful that I cannot believe it (consecutive)' },
          { italian: 'Sebbene sia stanco, continuo', translation: 'Although I am tired, I continue (concessive)' },
        ],
        exercise: {
          question: 'Which word introduces a causal clause?',
          options: ['quando', 'poiché', 'sebbene', 'così'],
          answer: 'poiché',
        },
      },
      {
        title: 'Consecutive Clauses',
        explanation: 'Use "così...che" or "tanto...che" to express consequence.',
        examples: [
          { italian: 'E così stanco che non riesco a camminare', translation: 'He is so tired that he cannot walk' },
          { italian: 'Piove tanto che le strade sono allagate', translation: 'It rains so much that the streets are flooded' },
        ],
        exercise: {
          question: 'Which structure expresses consequence?',
          options: ['sebbene...che', 'così...che', 'prima che', 'affinché'],
          answer: 'così...che',
        },
      },
    ],
  },
  {
    id: 'grammar-26',
    title: 'Italian Word Order (SVO and Variations)',
    level: 'B1',
    description: 'Understand standard Italian word order and common variations for emphasis.',
    sections: [
      {
        title: 'Standard SVO Order',
        explanation: 'Italian follows Subject-Verb-Object order like English, but pronouns come before the verb.',
        examples: [
          { italian: 'Io mangio la pizza', translation: 'I eat pizza (SVO)' },
          { italian: 'La pizza la mangio io', translation: 'The pizza, I eat it (OSV — topicalization)' },
          { italian: 'Mangio la pizza', translation: 'I eat pizza (SVO — pronoun dropped)' },
        ],
        exercise: {
          question: 'What is the standard Italian word order?',
          options: ['SOV', 'SVO', 'VSO', 'OSV'],
          answer: 'SVO',
        },
      },
      {
        title: 'Emphatic Word Order',
        explanation: 'Changing word order can add emphasis or focus.',
        examples: [
          { italian: 'Il libro lo leggo domani', translation: 'The book, I\'ll read tomorrow (emphasis on timing)' },
          { italian: 'Domani leggo il libro', translation: 'Tomorrow I\'ll read the book (emphasis on time)' },
          { italian: 'Leggo domani il libro', translation: 'I\'ll read the book tomorrow (neutral variation)' },
        ],
        exercise: {
          question: 'Why might a speaker say "La pizza la mangio io" instead of "Io mangio la pizza"?',
          options: ['It\'s grammatically required', 'To emphasize who eats the pizza', 'To ask a question', 'It\'s more formal'],
          answer: 'To emphasize who eats the pizza',
        },
      },
    ],
  },
  {
    id: 'grammar-27',
    title: 'Days, Months, and Seasons',
    level: 'A1',
    description: 'Learn the Italian names for days of the week, months, and seasons.',
    sections: [
      {
        title: 'Days of the Week',
        explanation: 'Days are masculine and not capitalized. The week starts on Monday (lunedì).',
        examples: [
          { italian: 'lunedì', translation: 'Monday' },
          { italian: 'martedì', translation: 'Tuesday' },
          { italian: 'mercoledì', translation: 'Wednesday' },
          { italian: 'giovedì', translation: 'Thursday' },
          { italian: 'venerdì', translation: 'Friday' },
          { italian: 'sabato', translation: 'Saturday' },
          { italian: 'domenica', translation: 'Sunday' },
        ],
        exercise: {
          question: 'What day comes after venerdì?',
          options: ['domenica', 'sabato', 'lunedì', 'giovedì'],
          answer: 'sabato',
        },
      },
      {
        title: 'Months of the Year',
        explanation: 'Months are masculine and not capitalized.',
        examples: [
          { italian: 'gennaio', translation: 'January' },
          { italian: 'febbraio', translation: 'February' },
          { italian: 'marzo', translation: 'March' },
          { italian: 'aprile', translation: 'April' },
          { italian: 'maggio', translation: 'May' },
          { italian: 'giugno', translation: 'June' },
        ],
        exercise: {
          question: 'What month is "ottobre"?',
          options: ['September', 'October', 'November', 'December'],
          answer: 'October',
        },
      },
      {
        title: 'Seasons',
        explanation: 'Seasons are masculine. Use "in" + article before seasons.',
        examples: [
          { italian: 'la primavera', translation: 'spring' },
          { italian: "l'estate", translation: 'summer' },
          { italian: "l'autunno", translation: 'autumn' },
          { italian: "l'inverno", translation: 'winter' },
        ],
        exercise: {
          question: 'What is "inverno" in English?',
          options: ['spring', 'summer', 'autumn', 'winter'],
          answer: 'winter',
        },
      },
    ],
  },
  {
    id: 'grammar-28',
    title: 'Telling Time',
    level: 'A1',
    description: 'Learn to ask and tell the time in Italian.',
    sections: [
      {
        title: 'Asking the Time',
        explanation: '"Che ore sono?" or "Che ore ha?" to ask the time.',
        examples: [
          { italian: 'Che ore sono?', translation: 'What time is it?' },
          { italian: 'Sono le tre', translation: 'It is three o\'clock' },
          { italian: 'Sono le otto e mezza', translation: 'It is eight thirty' },
          { italian: 'Sono le undici e un quarto', translation: 'It is eleven fifteen' },
        ],
        exercise: {
          question: 'How do you say "It is three o\'clock"?',
          options: ['Sono le tre', 'Sono le tre ore', 'È le tre', 'Sono tre'],
          answer: 'Sono le tre',
        },
      },
      {
        title: 'Half and Quarter Hours',
        explanation: '"Mezza" for half past, "un quarto" for quarter past, "meno un quarto" for quarter to.',
        examples: [
          { italian: 'le due e mezza', translation: 'two thirty' },
          { italian: 'le cinque e un quarto', translation: 'five fifteen' },
          { italian: 'le sette meno un quarto', translation: 'quarter to seven' },
        ],
        exercise: {
          question: 'What does "meno un quarto" mean?',
          options: ['quarter past', 'half past', 'quarter to', 'five minutes to'],
          answer: 'quarter to',
        },
      },
    ],
  },
  {
    id: 'grammar-29',
    title: 'Comparatives and Superlatives (Irregular)',
    level: 'B2',
    description: 'Master irregular comparative and superlative forms in Italian.',
    sections: [
      {
        title: 'Irregular Comparatives',
        explanation: 'Some common adjectives have completely irregular comparatives.',
        examples: [
          { italian: 'buono → migliore', translation: 'good → better' },
          { italian: 'cattivo → peggiore', translation: 'bad → worse' },
          { italian: 'grande → maggiore', translation: 'big → greater' },
          { italian: 'piccolo → minore', translation: 'small → lesser' },
        ],
        exercise: {
          question: 'What is the irregular comparative of "cattivo"?',
          options: ['più cattivo', 'peggiore', 'cattivissimo', 'meno cattivo'],
          answer: 'peggiore',
        },
      },
      {
        title: 'Absolute Superlative (-issimo)',
        explanation: 'Add -issimo/a/i/e to the adjective for "very/extremely".',
        examples: [
          { italian: 'bellissimo', translation: 'very beautiful' },
          { italian: 'grandissimo', translation: 'very big' },
          { italian: 'fortissimo', translation: 'very strong' },
          { italian: 'carissimo', translation: 'very expensive/dear' },
        ],
        exercise: {
          question: 'What does " velocissimo" mean?',
          options: ['the fastest', 'very fast', 'rather fast', 'too fast'],
          answer: 'very fast',
        },
      },
    ],
  },
  {
    id: 'grammar-30',
    title: 'Present Perfect with Essere (Transitive)',
    level: 'A2',
    description: 'Learn when to use essere as auxiliary with passato prossimo and how past participles agree.',
    sections: [
      {
        title: 'Movement and State Verbs',
        explanation: 'Verbs of movement, state, and becoming use essere. Past participle agrees with subject.',
        examples: [
          { italian: 'Sono andato/a', translation: 'I went (m/f)' },
          { italian: 'Sei arrivato/a?', translation: 'Did you arrive? (m/f)' },
          { italian: 'Siamo partiti/partite', translation: 'We left (m.pl/f.pl)' },
          { italian: 'Lui è morto', translation: 'He died' },
        ],
        exercise: {
          question: 'A woman says "I went to Rome." Which is correct?',
          options: ['Sono andato a Roma', 'Sono andata a Roma', 'Ho andato a Roma', 'Ho andata a Roma'],
          answer: 'Sono andata a Roma',
        },
      },
      {
        title: 'List of Essere Verbs',
        explanation: 'Common verbs using essere: andare, venire, arrivare, partire, restare, nascere, morire, diventare, stare, cadere, salire, scendere.',
        examples: [
          { italian: 'Sono arrivato tardi', translation: 'I arrived late' },
          { italian: 'Sei mai stato a Firenze?', translation: 'Have you ever been to Florence?' },
          { italian: 'Siamo cresciuti insieme', translation: 'We grew up together' },
        ],
        exercise: {
          question: 'Which verb uses "essere" in passato prossimo?',
          options: ['mangiare', 'parlare', 'andare', 'scrivere'],
          answer: 'andare',
        },
      },
    ],
  },
  {
    id: 'grammar-31',
    title: 'Imperfect vs. Passato Prossimo',
    level: 'B1',
    description: 'Master the difference between imperfetto and passato prossimo with real examples.',
    sections: [
      {
        title: 'When to Use Each Tense',
        explanation: 'Imperfetto for ongoing/habitual past actions. Passato prossimo for completed actions.',
        examples: [
          { italian: 'Quando ero piccolo giocavo nel parco', translation: 'When I was little I used to play in the park (habit)' },
          { italian: 'Mentre leggevo, è squillato il telefono', translation: 'While I was reading, the phone rang (ongoing vs completed)' },
          { italian: 'Ieri ho mangiato la pizza', translation: 'Yesterday I ate pizza (completed action)' },
        ],
        exercise: {
          question: 'Which sentence correctly uses passato prossimo?',
          options: ['Ieri andavo al mare', 'Ieri sono andato al mare', 'Ieri vado al mare', 'Ieri andrò al mare'],
          answer: 'Ieri sono andato al mare',
        },
      },
      {
        title: 'Mixed Tenses in One Sentence',
        explanation: 'Often both tenses appear together: imperfetto for background, passato prossimo for the main action.',
        examples: [
          { italian: 'Mangiavo una pizza quando ho ricevuto il messaggio', translation: 'I was eating a pizza when I received the message' },
          { italian: 'Pioveva quando sono uscito', translation: 'It was raining when I went out' },
        ],
        exercise: {
          question: 'In "Mangiavo una pizza quando ho ricevuto il messaggio", which action happened first?',
          options: ['Receiving the message', 'Eating the pizza', 'They happened simultaneously', 'Neither happened'],
          answer: 'Eating the pizza',
        },
      },
    ],
  },
  {
    id: 'grammar-32',
    title: 'Ne and Ci Pronouns',
    level: 'B2',
    description: 'Master the Italian pronouns ne (of it/them) and ci (there/us).',
    sections: [
      {
        title: 'Ne (of it/them)',
        explanation: '"Ne" replaces "di + noun" and is used with quantifiers.',
        examples: [
          { italian: 'Quanti libri hai? - Ne ho tre', translation: 'How many books do you have? - I have three (of them)' },
          { italian: 'Ne parlo spesso', translation: 'I often talk about it' },
          { italian: 'Me ne vado', translation: 'I\'m leaving (of here)' },
        ],
        exercise: {
          question: 'What does "ne" replace in "Ne ho tre"?',
          options: ['A noun directly', 'di + noun', 'a + noun', 'per + noun'],
          answer: 'di + noun',
        },
      },
      {
        title: 'Ci (there/us)',
        explanation: '"Ci" replaces "a/in/on + place" or "con noi".',
        examples: [
          { italian: 'Sei mai stato a Roma? - Ci sono stato', translation: 'Have you ever been to Rome? - I have been there' },
          { italian: 'Ci penso sempre', translation: 'I always think about it' },
          { italian: 'Ci vediamo domani', translation: 'We\'ll see each other tomorrow' },
        ],
        exercise: {
          question: 'What does "ci" mean in "Ci sono stato"?',
          options: ['us', 'them', 'there', 'it'],
          answer: 'there',
        },
      },
    ],
  },
  {
    id: 'grammar-33',
    title: 'Double Negation in Italian',
    level: 'B2',
    description: 'Understand Italian double negation patterns and negative expressions.',
    sections: [
      {
        title: 'Double Negation',
        explanation: 'Italian often uses double negation where English uses single negation.',
        examples: [
          { italian: 'Non ho niente', translation: 'I don\'t have anything (lit: I don\'t have nothing)' },
          { italian: 'Non vado mai', translation: 'I never go (lit: I don\'t go never)' },
          { italian: 'Non parla con nessuno', translation: 'He doesn\'t speak with anyone (lit: with no one)' },
        ],
        exercise: {
          question: 'How do you say "I never go" in Italian?',
          options: ['Non vado mai', 'Vado mai non', 'Non mai vado', 'Mai non vado'],
          answer: 'Non vado mai',
        },
      },
      {
        title: 'Negative Words',
        explanation: 'Common negative words: non, mai, niente, nulla, nessuno, neanche, nemmeno.',
        examples: [
          { italian: 'Non c\'è nessuno', translation: 'There is nobody' },
          { italian: 'Non voglio niente', translation: 'I don\'t want anything' },
          { italian: 'Neanche io', translation: 'Me neither' },
        ],
        exercise: {
          question: 'Which word means "nobody" in Italian?',
          options: ['niente', 'mai', 'nessuno', 'neanche'],
          answer: 'nessuno',
        },
      },
    ],
  },
  {
    id: 'grammar-34',
    title: 'Passive Voice with Si Impersonale',
    level: 'C1',
    description: 'Use the impersonal "si" construction as an alternative to passive voice.',
    sections: [
      {
        title: 'Si Impersonale',
        explanation: 'The impersonal "si" is used to express general truths and passive meaning without specifying who performs the action.',
        examples: [
          { italian: 'Si parla italiano qui', translation: 'Italian is spoken here (People speak Italian here)' },
          { italian: 'Si vendono case', translation: 'Houses are for sale (Houses are sold)' },
          { italian: 'Qui si mangia bene', translation: 'Here people eat well / Here food is well eaten' },
          { italian: 'A Roma si visitano i monumenti', translation: 'In Rome people visit monuments / Monuments are visited in Rome' },
        ],
        exercise: {
          question: 'What does "Si parla italiano qui" mean?',
          options: ['One speaks Italian', 'Italian is spoken', 'I speak Italian', 'They speak Italian'],
          answer: 'Italian is spoken',
        },
      },
      {
        title: 'Si + Passive with Transitive Verbs',
        explanation: 'When si impersonale is used with transitive verbs, the past participle agrees with the direct object.',
        examples: [
          { italian: 'Si vendono auto', translation: 'Cars are sold (auto is f.pl., so vendono)' },
          { italian: 'Si è venduta la casa', translation: 'The house was sold (casa is f.sing., so venduta)' },
          { italian: 'Si sono comprati dei libri', translation: 'Books were bought (libri is m.pl., so comprati)' },
        ],
        exercise: {
          question: 'Which is correct: "Si è venduta/venduto la casa"?',
          options: ['venduto', 'venduta', 'venduti', 'vendete'],
          answer: 'venduta',
        },
      },
    ],
  },
  {
    id: 'grammar-35',
    title: 'Discourse Markers and Fillers',
    level: 'B1',
    description: 'Learn Italian discourse markers that make speech sound more natural.',
    sections: [
      {
        title: 'Common Discourse Markers',
        explanation: 'These words help connect ideas and make speech flow naturally.',
        examples: [
          { italian: 'Allora', translation: 'So / Well then' },
          { italian: 'Insomma', translation: 'Well / In short' },
          { italian: 'Comunque', translation: 'Anyway / However' },
          { italian: 'Invece', translation: 'Instead / On the other hand' },
          { italian: 'Però', translation: 'But / However' },
          { italian: 'Dunque', translation: 'So / Therefore' },
          { italian: 'Cioè', translation: 'That is / I mean' },
          { italian: 'Sai', translation: 'You know (filler)' },
        ],
        exercise: {
          question: 'Which word means "So / Well then" at the beginning of a sentence?',
          options: ['Comunque', 'Allora', 'Invece', 'Però'],
          answer: 'Allora',
        },
      },
      {
        title: 'Using Discourse Markers',
        explanation: 'These markers help structure speech and writing.',
        examples: [
          { italian: 'Allora, cosa facciamo stasera?', translation: 'So, what shall we do tonight?' },
          { italian: 'Insomma, alla fine è andato bene', translation: 'Well, in the end it went well' },
          { italian: 'Comunque, torniamo al discorso', translation: 'Anyway, let\'s get back to the topic' },
        ],
        exercise: {
          question: 'What does "cioè" mean when used as a filler?',
          options: ['Therefore', 'Anyway', 'I mean / That is', 'However'],
          answer: 'I mean / That is',
        },
      },
    ],
  },
  {
    id: 'grammar-36',
    title: 'Italian Idioms and Expressions',
    level: 'B2',
    description: 'Learn common Italian idiomatic expressions to sound more native.',
    sections: [
      {
        title: 'Common Idioms',
        explanation: 'Idioms are expressions whose meaning differs from the literal words.',
        examples: [
          { italian: 'In bocca al lupo', translation: 'Good luck (lit: in the mouth of the wolf)' },
          { italian: 'Che palle!', translation: 'What a pain! (lit: what balls!)' },
          { italian: 'Essere alle strette', translation: 'To be in a tight spot' },
          { italian: 'Avere il batticuore', translation: 'To be nervous (lit: to have heart-beat)' },
          { italian: 'Mettere la carrozza davanti ai buoi', translation: 'To put the cart before the oxen' },
          { italian: 'Non avere peli sulla lingua', translation: 'To be outspoken (lit: not to have hairs on the tongue)' },
        ],
        exercise: {
          question: 'What do you reply to "In bocca al lupo"?',
          options: ['Grazie', 'Crepi!', 'Buona fortuna', 'Prego'],
          answer: 'Crepi!',
        },
      },
      {
        title: 'Food Idioms',
        explanation: 'Many Italian idioms relate to food and eating.',
        examples: [
          { italian: 'Essere un pezzo di pane', translation: 'To be a sweetheart (lit: a piece of bread)' },
          { italian: 'Essere fuori come un balcone', translation: 'To be crazy (lit: to be outside like a balcony)' },
          { italian: 'Avere fame da lupo', translation: 'To be very hungry (lit: to be hungry as a wolf)' },
        ],
        exercise: {
          question: 'What does "Avere fame da lupo" mean?',
          options: ['To be slightly hungry', 'To be very hungry', 'To love wolves', 'To eat a lot'],
          answer: 'To be very hungry',
        },
      },
    ],
  },
  {
    id: 'grammar-37',
    title: 'Future Perfect (Futuro Anteriore)',
    level: 'B2',
    unit: 'Advanced Tenses',
    description: 'The futuro anteriore expresses an action that will have been completed before another future action.',
    sections: [
      {
        title: 'Formation of Futuro Anteriore',
        explanation: 'Form with future of avere/essere + past participle: avrò, avrai, avrà... or sarò, sarai, sara... + past participle.',
        examples: [
          { italian: 'Avrò finito prima delle otto.', translation: 'I will have finished before eight.' },
          { italian: 'Saranno partiti domani.', translation: 'They will have left by tomorrow.' },
        ],
        exercise: {
          question: 'How do you form "I will have eaten" in Italian?',
          options: ['Avrò mangiato', 'Ho mangiato', 'Mangerò', 'Avevo mangiato'],
          answer: 'Avrò mangiato',
        },
      },
      {
        title: 'When to Use Futuro Anteriore',
        explanation: 'Used with temporal clauses (quando, appena, dopo che) and to express certainty about future completion.',
        examples: [
          { italian: 'Quando sarai arrivato, chiamami.', translation: 'When you have arrived, call me.' },
          { italian: 'A quest\'ora avranno gia mangiato.', translation: 'By now they will have already eaten.' },
        ],
        exercise: {
          question: 'Which connector triggers futuro anteriore?',
          options: ['quando', 'perche', 'ma', 'anche'],
          answer: 'quando',
        },
      },
    ],
  },
  {
    id: 'grammar-38',
    title: 'Past Perfect (Trapassato Prossimo)',
    level: 'B2',
    unit: 'Advanced Tenses',
    description: 'The trapassato prossimo describes an action completed before another past action.',
    sections: [
      {
        title: 'Formation of Trapassato Prossimo',
        explanation: 'Form with imperfetto of avere/essere + past participle: avevo, avevi, aveva... or ero, eri, era... + past participle.',
        examples: [
          { italian: 'Quando sono arrivato, lui se n\'era gia andato.', translation: 'When I arrived, he had already left.' },
          { italian: 'Non sapevo che tu fossi gia partito.', translation: 'I didn\'t know you had already left.' },
        ],
        exercise: {
          question: 'Which auxiliary is used with "arrivare" in trapassato?',
          options: ['essere', 'avere', 'both', 'neither'],
          answer: 'essere',
        },
      },
      {
        title: 'When to Use Trapassato Prossimo',
        explanation: 'Always used with another past tense. Common with quando, mentre, prima che, dopo che.',
        examples: [
          { italian: 'Mentre studiavo, aveva gia pranzato.', translation: 'While I was studying, he had already had lunch.' },
          { italian: 'Prima che io arrivassi, lei se n\'era andata.', translation: 'Before I arrived, she had already left.' },
        ],
        exercise: {
          question: 'What is the English equivalent of trapassato prossimo?',
          options: ['Past perfect "had done"', 'Simple past "did"', 'Future perfect "will have done"', 'Imperfect "was doing"'],
          answer: 'Past perfect "had done"',
        },
      },
    ],
  },
  {
    id: 'grammar-39',
    title: 'Direct Object Pronouns (Partitiche Dirette)',
    level: 'B1',
    unit: 'Pronouns',
    description: 'Direct object pronouns replace the direct object of a verb.',
    sections: [
      {
        title: 'The Direct Object Pronouns',
        explanation: 'mi (me), ti (you), lo/la (him/her/it), ci (us), vi (you all), li/le (them).',
        examples: [
          { italian: 'Lo vedo ogni giorno.', translation: 'I see him/it every day.' },
          { italian: 'La conosci? (Do you know her?)', translation: 'Do you know her?' },
        ],
        exercise: {
          question: 'Which pronoun replaces "il libro" (the book)?',
          options: ['lo', 'la', 'li', 'le'],
          answer: 'lo',
        },
      },
      {
        title: 'Placement of Direct Object Pronouns',
        explanation: 'Before conjugated verb, or attached to infinitive/gerund. With compound tenses, place before auxiliary.',
        examples: [
          { italian: 'Lo voglio comprare / Voglio comprarlo.', translation: 'I want to buy it.' },
          { italian: 'Non lo ho visto.', translation: 'I didn\'t see it.' },
        ],
        exercise: {
          question: 'Where does the pronoun go with an infinitive?',
          options: ['Attached to the end', 'Before the auxiliary', 'After the verb', 'At the start of sentence'],
          answer: 'Attached to the end',
        },
      },
    ],
  },
  {
    id: 'grammar-40',
    title: 'Indirect Object Pronouns (Partitiche Indirette)',
    level: 'B1',
    unit: 'Pronouns',
    description: 'Indirect object pronouns indicate to whom or for whom an action is done.',
    sections: [
      {
        title: 'The Indirect Object Pronouns',
        explanation: 'mi (to me), ti (to you), gli/le (to him/her), ci (to us), vi (to you all), gli (to them).',
        examples: [
          { italian: 'Gli parlo ogni giorno.', translation: 'I speak to him every day.' },
          { italian: 'Le scrivo una lettera.', translation: 'I write her a letter.' },
        ],
        exercise: {
          question: 'Which pronoun means "to them"?',
          options: ['gli', 'le', 'li', 'lo'],
          answer: 'gli',
        },
      },
      {
        title: 'Combining Direct and Indirect Pronouns',
        explanation: 'When combining: me lo, te la, glielo, ce lo, ve lo, glielo (to them + it).',
        examples: [
          { italian: 'Me lo dai? (Can you give it to me?)', translation: 'Can you give it to me?' },
          { italian: 'Glielo spiegherò domani.', translation: 'I will explain it to him tomorrow.' },
        ],
        exercise: {
          question: 'What does "glielo" combine?',
          options: ['Indirect + Direct', 'Two indirects', 'Two directs', 'Subject + object'],
          answer: 'Indirect + Direct',
        },
      },
    ],
  },
  {
    id: 'grammar-41',
    title: 'Possessive Pronouns',
    level: 'B1',
    unit: 'Pronouns',
    description: 'Possessive pronouns replace a noun modified by a possessive adjective.',
    sections: [
      {
        title: 'Possessive Pronoun Forms',
        explanation: 'il mio (mine), il tuo (yours), il suo (his/hers), il nostro (ours), il vostro (yours), il loro (theirs).',
        examples: [
          { italian: 'Questo libro e il mio.', translation: 'This book is mine.' },
          { italian: 'La tua casa e grande, la mia e piccola.', translation: 'Your house is big, mine is small.' },
        ],
        exercise: {
          question: 'What does "il nostro" mean?',
          options: ['Ours', 'Yours', 'Theirs', 'Mine'],
          answer: 'Ours',
        },
      },
      {
        title: 'Agreement Rules',
        explanation: 'Possessive pronouns agree in gender and number with the thing possessed, not the possessor. Often preceded by definite article.',
        examples: [
          { italian: 'Il tuo e buono, il mio e migliore.', translation: 'Yours is good, mine is better.' },
          { italian: 'Le sue sono le migliori.', translation: 'His/hers are the best (feminine plural things).' },
        ],
        exercise: {
          question: 'Possessive pronouns agree with:',
          options: ['The thing possessed', 'The possessor', 'The verb', 'The article'],
          answer: 'The thing possessed',
        },
      },
    ],
  },
  {
    id: 'grammar-42',
    title: 'Demonstrative Pronouns and Adjectives',
    level: 'A2',
    unit: 'Determiners',
    description: 'Demonstratives point out specific people or things.',
    sections: [
      {
        title: 'Questo and Quello',
        explanation: 'questo (this), questi (these), quello (that), quegli (those). Quello changes like an adjective.',
        examples: [
          { italian: 'Questo libro e interessante.', translation: 'This book is interesting.' },
          { italian: 'Quella casa e grande.', translation: 'That house is big.' },
        ],
        exercise: {
          question: 'Which form of "quello" is used with "ragazzo"?',
          options: ['quel', 'quello', 'quei', 'quelle'],
          answer: 'quel',
        },
      },
      {
        title: 'Plural Forms',
        explanation: 'questi/queste (these), quegli/quelle (those). Quello: quei (masc. pl.), quelle (fem. pl.), quegli (masc. pl. before z, gn, s+cons, ps).',
        examples: [
          { italian: 'Questi ragazzi sono bravi.', translation: 'These boys are good.' },
          { italian: 'Quegli uomini lavorano.', translation: 'Those men work.' },
        ],
        exercise: {
          question: 'Which is the plural of "quello studente"?',
          options: ['quegli studenti', 'quei studenti', 'quelle studenti', 'quegli studentes'],
          answer: 'quegli studenti',
        },
      },
    ],
  },
  {
    id: 'grammar-43',
    title: 'Relative Pronouns (Chi, Cui, Che, Quale)',
    level: 'B1',
    unit: 'Pronouns',
    description: 'Relative pronouns connect clauses and refer back to a noun.',
    sections: [
      {
        title: 'Chi, Che, Cui, Quale',
        explanation: 'chi = who/whoever (subject, replaces noun+che), che = who/which/that (subject), cui = whom/which (after preposition), quale = which.',
        examples: [
          { italian: 'Chi parla bene italiano?', translation: 'Who speaks good Italian?' },
          { italian: 'Il ragazzo che vedo e Marco.', translation: 'The boy I see is Marco.' },
          { italian: 'La persona con cui parlo.', translation: 'The person I speak with.' },
        ],
        exercise: {
          question: 'Which relative pronoun is used after a preposition?',
          options: ['cui', 'che', 'chi', 'quale'],
          answer: 'cui',
        },
      },
      {
        title: 'When to Use Each Pronoun',
        explanation: 'che = subject (no preposition), cui = after prepositions, chi = antecedent+che combined, quale = formal "which".',
        examples: [
          { italian: 'Non so chi sia.', translation: 'I don\'t know who it is.' },
          { italian: 'Il libro di cui parlo.', translation: 'The book I\'m talking about.' },
        ],
        exercise: {
          question: 'Which pronoun combines antecedent and relative?',
          options: ['chi', 'che', 'cui', 'quale'],
          answer: 'chi',
        },
      },
    ],
  },
  {
    id: 'grammar-44',
    title: 'Forming Questions in Italian',
    level: 'A2',
    unit: 'Sentence Structure',
    description: 'Italian has several ways to form questions.',
    sections: [
      {
        title: 'Intonation Questions',
        explanation: 'Simply raise your voice at the end. No word order change needed.',
        examples: [
          { italian: 'Parli italiano?', translation: 'Do you speak Italian?' },
          { italian: 'Sei italiano?', translation: 'Are you Italian?' },
        ],
        exercise: {
          question: 'How do you make a statement into a question in Italian?',
          options: ['Rising intonation', 'Add "do"', 'Change word order', 'Add a question word'],
          answer: 'Rising intonation',
        },
      },
      {
        title: 'Question Words',
        explanation: 'chi (who), cosa/che (what), dove (where), quando (when), come (how), perche (why), quanto (how much).',
        examples: [
          { italian: 'Dove vai?', translation: 'Where are you going?' },
          { italian: 'Perche non vieni?', translation: 'Why aren\'t you coming?' },
        ],
        exercise: {
          question: 'Which word means "why"?',
          options: ['perche', 'dove', 'quando', 'come'],
          answer: 'perche',
        },
      },
    ],
  },
  {
    id: 'grammar-45',
    title: 'Exclamatory Sentences',
    level: 'A2',
    unit: 'Sentence Structure',
    description: 'Exclamations express emotion, surprise, or emphasis.',
    sections: [
      {
        title: 'Che, Quanto, Cosi in Exclamations',
        explanation: 'che + noun/adj (what a...), quanto/quanta (how much/many), cosi + adj (so...).',
        examples: [
          { italian: 'Che bella giornata!', translation: 'What a beautiful day!' },
          { italian: 'Quanta gente!', translation: 'So many people!' },
          { italian: 'Cosi bello!', translation: 'So beautiful!' },
        ],
        exercise: {
          question: 'Which word means "what a" in exclamations?',
          options: ['che', 'quanto', 'come', 'cosi'],
          answer: 'che',
        },
      },
      {
        title: 'Che vs Quanto',
        explanation: 'che = what (exclamatory), quanto = how much/many. Same structure as questions but with exclamation mark.',
        examples: [
          { italian: 'Che fortuna!', translation: 'What luck!' },
          { italian: 'Quanta acqua!', translation: 'How much water!' },
        ],
        exercise: {
          question: 'Which is correct: "Che bello!" or "Quanto bello!"?',
          options: ['Che bello!', 'Quanto bello!', 'Both correct', 'Neither correct'],
          answer: 'Che bello!',
        },
      },
    ],
  },
  {
    id: 'grammar-46',
    title: 'Infinitive Constructions',
    level: 'B2',
    unit: 'Sentence Structure',
    description: 'Italian often uses infinitives where English uses gerunds or that-clauses.',
    sections: [
      {
        title: 'After Prepositions',
        explanation: 'Italian uses infinitive after prepositions: prima di, dopo di, invece di, senza di, per, etc.',
        examples: [
          { italian: 'Prima di uscire, chiudo la porta.', translation: 'Before going out, I close the door.' },
          { italian: 'Senza di te, non posso.', translation: 'Without you, I can\'t.' },
        ],
        exercise: {
          question: 'Which preposition is followed by infinitive?',
          options: ['prima di', 'prima a', 'prima in', 'prima per'],
          answer: 'prima di',
        },
      },
      {
        title: 'After Verbs and Adjectives',
        explanation: 'Many verbs take infinitive directly: pensare di, sperare di, cercare di. Adjectives: facile/difficile/impossibile + infinitive.',
        examples: [
          { italian: 'Cerco di capire.', translation: 'I\'m trying to understand.' },
          { italian: 'E difficile parlare in pubblico.', translation: 'It\'s difficult to speak in public.' },
        ],
        exercise: {
          question: '"Cerco di capire" means:',
          options: ['I\'m trying to understand', 'I\'m looking for understanding', 'I want to understand', 'I need to understand'],
          answer: 'I\'m trying to understand',
        },
      },
    ],
  },
  {
    id: 'grammar-47',
    title: 'Causative (Fare + Infinitive)',
    level: 'B2',
    unit: 'Special Constructions',
    description: 'The causative construction expresses having someone do something.',
    sections: [
      {
        title: 'Fare + Infinitive',
        explanation: 'fare + infinitive = to have/make someone do something. Conjugate fare, keep infinitive.',
        examples: [
          { italian: 'Faccio riparare la macchina.', translation: 'I\'m having the car repaired.' },
          { italian: 'Mi faccio tagliare i capelli.', translation: 'I\'m getting my hair cut.' },
        ],
        exercise: {
          question: 'What does "faccio riparare" mean?',
          options: ['I make repair', 'I\'m having (something) repaired', 'I repair', 'I will repair'],
          answer: 'I\'m having (something) repaired',
        },
      },
      {
        title: 'Farsi Fare',
        explanation: 'farsi fare = to have something done (for oneself). mi faccio fare, ti fai fare, si fa fare...',
        examples: [
          { italian: 'Mi faccio fare un vestito.', translation: 'I\'m having a dress made (for me).' },
          { italian: 'Ti fai fare le unghie?', translation: 'Are you getting your nails done?' },
        ],
        exercise: {
          question: '"Farsi fare" means:',
          options: ['To do it yourself', 'To have something done for oneself', 'To make someone do', 'To refuse to do'],
          answer: 'To have something done for oneself',
        },
      },
    ],
  },
  {
    id: 'grammar-48',
    title: 'Bisogna + Infinitive',
    level: 'B1',
    unit: 'Special Constructions',
    description: 'Various impersonal constructions followed by infinitive.',
    sections: [
      {
        title: 'Bisogna and Impersonal Verbs',
        explanation: 'bisogna = it is necessary, e possibile = it is possible, e difficile = it is difficult, etc. All take infinitive.',
        examples: [
          { italian: 'Bisogna studiare.', translation: 'It is necessary to study.' },
          { italian: 'E possibile guadagnare molto.', translation: 'It is possible to earn a lot.' },
        ],
        exercise: {
          question: 'What does "bisogna" mean?',
          options: ['It is possible', 'It is necessary', 'It is difficult', 'It is easy'],
          answer: 'It is necessary',
        },
      },
      {
        title: 'No Preposition Needed',
        explanation: 'Unlike English "to do", Italian infinitive follows directly: bisogna fare, e facile fare, etc.',
        examples: [
          { italian: 'E difficile parlare in pubblico.', translation: 'It\'s difficult to speak in public.' },
          { italian: 'Sembra piacerti molto.', translation: 'It seems you like it a lot.' },
        ],
        exercise: {
          question: 'After "bisogna", you use:',
          options: ['Infinitive directly', 'di + infinitive', 'a + infinitive', 'che + subjunctive'],
          answer: 'Infinitive directly',
        },
      },
    ],
  },
  {
    id: 'grammar-49',
    title: 'Temporal Clauses',
    level: 'B1',
    unit: 'Connectors',
    description: 'Words and phrases that connect events in time.',
    sections: [
      {
        title: 'Common Temporal Connectors',
        explanation: 'quando (when), prima che (before), dopo che (after), appena (as soon as), fino a quando (until).',
        examples: [
          { italian: 'Prima che tu vada, mangiamo.', translation: 'Before you go, let\'s eat.' },
          { italian: 'Appena arrivo, ti chiamo.', translation: 'As soon as I arrive, I\'ll call you.' },
        ],
        exercise: {
          question: 'Which connector means "as soon as"?',
          options: ['appena', 'quando', 'prima che', 'dopo che'],
          answer: 'appena',
        },
      },
      {
        title: 'Mood After Temporal Connectors',
        explanation: 'quando + present (if main is future), prima che + subjunctive, dopo che + indicative, appena + indicative.',
        examples: [
          { italian: 'Quando arriverai, chiamami.', translation: 'When you arrive, call me.' },
          { italian: 'Dopo che ho mangiato, esco.', translation: 'After I eat, I go out.' },
        ],
        exercise: {
          question: '"Prima che" is followed by:',
          options: ['Subjunctive', 'Indicative', 'Imperative', 'Conditional'],
          answer: 'Subjunctive',
        },
      },
    ],
  },
  {
    id: 'grammar-50',
    title: 'Conditional Clauses (Se + Conditional)',
    level: 'B1',
    unit: 'Connectors',
    description: 'Conditional sentences express hypothetical situations and their results.',
    sections: [
      {
        title: 'Real Conditions (Type 1)',
        explanation: 'se + present tense, future tense in main clause. Expresses a possible, likely condition.',
        examples: [
          { italian: 'Se piove, restero a casa.', translation: 'If it rains, I\'ll stay home.' },
          { italian: 'Se studi, passerai l\'esame.', translation: 'If you study, you\'ll pass the exam.' },
        ],
        exercise: {
          question: 'In a real condition, which tenses are used?',
          options: ['se + present, future', 'se + imperfect, conditional', 'se + subjunctive, conditional', 'se + past, past'],
          answer: 'se + present, future',
        },
      },
      {
        title: 'Unreal Conditions (Types 2 and 3)',
        explanation: 'Type 2 (unreal present): se + imperfetto subjunctive, condizionale. Type 3 (unreal past): se + trapassato subjunctive, condizionale passato.',
        examples: [
          { italian: 'Se avessi tempo, viaggerei di piu.', translation: 'If I had time, I would travel more.' },
          { italian: 'Se avessi studiato, avrei passato l\'esame.', translation: 'If I had studied, I would have passed the exam.' },
        ],
        exercise: {
          question: 'What mood is used after "se" in unreal conditions?',
          options: ['Subjunctive', 'Indicative', 'Imperative', 'Infinitive'],
          answer: 'Subjunctive',
        },
      },
    ],
  },
  {
    id: 'grammar-51',
    title: 'Temporal Conjunctions (prima che, dopo che, non appena)',
    level: 'B2',
    category: 'Conjunctions',
    sections: [
      {
        subtitle: 'Key Temporal Conjunctions',
        content: 'Italian uses specific temporal conjunctions to order events in time. Each requires a particular mood.',
        examples: [
          { italian: 'Prima che parta, devo fare i bagagli.', english: 'Before I leave, I have to pack.' },
          { italian: 'Dopo che avro finito, ti chiamero.', english: 'After I have finished, I will call you.' },
          { italian: 'Non appena ebbi letto la lettera, piansi.', english: 'As soon as I read the letter, I cried.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: '_____ tu parta, chiudi la porta.',
          options: ['Prima che', 'Dopo che', 'Non appena', 'Quando'],
          answer: 'Prima che',
        },
      },
      {
        subtitle: 'Mood Requirements',
        content: 'Prima che always requires the subjunctive. Dopo che typically takes the indicative. Non appena can take indicative or passato remoto.',
        examples: [
          { italian: 'Prima che sia troppo tardi, agiamo.', english: 'Before it is too late, let us act.' },
          { italian: 'Dopo che ho mangiato, esco a passeggiare.', english: 'After I eat, I go for a walk.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which conjunction requires the subjunctive mood?',
          options: ['Dopo che', 'Prima che', 'Non appena', 'Quando'],
          answer: 'Prima che',
        },
      },
    ],
  },
  {
    id: 'grammar-52',
    title: 'Emphatic Structures (come, cosi...che, tanto...che)',
    level: 'B2',
    category: 'Emphasis',
    sections: [
      {
        subtitle: 'Emphatic Comparisons with Come',
        content: 'Come is used in exclamatory sentences to emphasize a quality, similar to "how" in English.',
        examples: [
          { italian: 'Come e bello questo paesaggio!', english: 'How beautiful this landscape is!' },
          { italian: 'Come canta bene!', english: 'How well she sings!' },
        ],
        exercise: {
          type: 'fill_blank',
          question: '_____ e bravo questo studente!',
          options: ['Come', 'Che', 'Quanto', 'Cosi'],
          answer: 'Come',
        },
      },
      {
        subtitle: 'Cosi...che and Tanto...che',
        content: 'Cosi...che means "so...that" and tanto...che means "so much...that". Both express consequence.',
        examples: [
          { italian: 'E cosi stanco che non riesco a camminare.', english: 'I am so tired that I cannot walk.' },
          { italian: 'Tanto ti voglio bene che farei tutto per te.', english: 'I love you so much that I would do anything for you.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Cosi...che translates to:',
          options: ['so...that', 'as...as', 'more...than', 'such...as'],
          answer: 'so...that',
        },
      },
    ],
  },
  {
    id: 'grammar-53',
    title: 'Passive with Venire',
    level: 'B2',
    category: 'Voice',
    sections: [
      {
        subtitle: 'Venire as Passive Auxiliary',
        content: 'Italian forms the passive voice with essere or venire. Venire emphasizes the action rather than the result.',
        examples: [
          { italian: 'Il libro viene letto da tutti.', english: 'The book is read by everyone.' },
          { italian: 'Le finestre vengono aperte ogni mattina.', english: 'The windows are opened every morning.' },
          { italian: 'Il progetto sara completato domani.', english: 'The project will be completed tomorrow. (with essere)' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'La lettera _____ inviata ieri. (send)',
          options: ['e stata', 'viene', 'e', 'sarà'],
          answer: 'e stata',
        },
      },
      {
        subtitle: 'When to Use Venire vs Essere',
        content: 'Venire is preferred in colloquial speech and for ongoing actions. Essere is more formal and common in written Italian.',
        examples: [
          { italian: 'I tiratori vengono arrestati dalla polizia.', english: 'The thieves are being arrested by the police.' },
          { italian: 'Il premio e stato vinto da lei.', english: 'The prize was won by her.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which auxiliary is more common in formal written Italian for the passive?',
          options: ['Essere', 'Venire', 'Avere', 'Stare'],
          answer: 'Essere',
        },
      },
    ],
  },
  {
    id: 'grammar-54',
    title: 'Personal Infinitive (Infinito Personale)',
    level: 'B2',
    category: 'Verb Forms',
    sections: [
      {
        subtitle: 'What is the Personal Infinitive',
        content: 'The personal infinitive conjugates the infinitive to show who performs the action. It is used in subordinate clauses instead of the subjunctive.',
        examples: [
          { italian: 'Bisogna che io parta. -> Bisogna che io parta / Partire.', english: 'It is necessary that I leave.' },
          { italian: 'E meglio che tu studi di piu.', english: 'It is better that you study more.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'E importante che voi _____ a tempo. (arrive)',
          options: ['arriviate', 'arrivare', 'arrivando', 'arrivato'],
          answer: 'arriviate',
        },
      },
      {
        subtitle: 'When to Use the Personal Infinitive',
        content: 'It is used after expressions of necessity, possibility, and desire. It is more common in written and formal Italian.',
        examples: [
          { italian: 'Prima di tornare a casa, devo finire il lavoro.', english: 'Before returning home, I must finish the work.' },
          { italian: 'Senza che nessuno sappia, uscimmo di nascosto.', english: 'Without anyone knowing, we left secretly.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'The personal infinitive is most common in:',
          options: ['Written and formal Italian', 'Spoken and informal Italian', 'Poetry only', 'Legal documents only'],
          answer: 'Written and formal Italian',
        },
      },
    ],
  },
  {
    id: 'grammar-55',
    title: 'Absolute Past (Passato Remoto) Overview',
    level: 'B2',
    category: 'Tenses',
    sections: [
      {
        subtitle: 'Forming the Passato Remoto',
        content: 'The passato remoto is a simple past tense used mainly in written Italian, historical narration, and in southern Italy.',
        examples: [
          { italian: 'Ieri ho mangiato una pizza. (passato prossimo)', english: 'Yesterday I ate a pizza. (northern Italy)' },
          { italian: 'Ieri mangiai una pizza. (passato remoto)', english: 'Yesterday I ate a pizza. (written/southern)' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'L\'anno scorso noi _____ in Italia. (travel)',
          options: ['viaggiammo', 'abbiamo viaggiato', 'viaggiamo', 'viaggeremo'],
          answer: 'viaggiammo',
        },
      },
      {
        subtitle: 'Regular Passato Remoto Endings',
        content: 'For -are: -ai, -asti, -o, -ammo, -aste, -arono. For -ere: -ei, -esti, -e, -emmo, -este, -erono. For -ire: -ii, -isti, -i, -immo, -iste, -irono.',
        examples: [
          { italian: 'Parlai, parlasti, parlo, parlammo, parlaste, parlarono', english: 'I spoke, you spoke, he spoke, we spoke...' },
          { italian: 'Scrissi, scrivesti, scrisse, scrivemmo, scriveste, scrissero', english: 'I wrote, you wrote, he wrote, we wrote...' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'What is the passato remoto ending for "io" with -are verbs?',
          options: ['-ai', '-ei', '-ii', '-o'],
          answer: '-ai',
        },
      },
    ],
  },
  {
    id: 'grammar-56',
    title: 'Historical Present',
    level: 'B2',
    category: 'Tenses',
    sections: [
      {
        subtitle: 'Using Present Tense for Past Events',
        content: 'Italian uses the present tense to narrate past events, making stories more vivid and immediate.',
        examples: [
          { italian: 'Ieri vado al cinema e vedo un film fantastico.', english: 'Yesterday I go to the cinema and see a fantastic film.' },
          { italian: 'Nel 1492 Colombo arriva in America.', english: 'In 1492 Columbus arrives in America.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'Nel 1969, Armstrong _____ sulla Luna. (land)',
          options: ['atterra', 'atterro', 'atterrava', 'atterrera'],
          answer: 'atterra',
        },
      },
      {
        subtitle: 'When to Use the Historical Present',
        content: 'It is common in storytelling, newspaper headlines, sports commentary, and colloquial speech to make narratives more engaging.',
        examples: [
          { italian: 'Allora entra nella stanza e dice: "Non e vero!"', english: 'Then he enters the room and says: "It is not true!"' },
          { italian: 'Il giocatore tira e segna un gol incredibile!', english: 'The player shoots and scores an incredible goal!' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'The historical present is commonly used in:',
          options: ['Storytelling and headlines', 'Formal letters', 'Scientific reports', 'Legal documents'],
          answer: 'Storytelling and headlines',
        },
      },
    ],
  },
  {
    id: 'grammar-57',
    title: 'Progressive Forms (Stare + Gerund)',
    level: 'B2',
    category: 'Verb Forms',
    sections: [
      {
        subtitle: 'Forming the Progressive',
        content: 'The progressive is formed with stare + gerund. It emphasizes an action in progress.',
        examples: [
          { italian: 'Sto studiando per l\'esame.', english: 'I am studying for the exam.' },
          { italian: 'Stavano mangiando quando sono arrivato.', english: 'They were eating when I arrived.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'Che cosa _____ in questo momento? (do)',
          options: ['sto facendo', 'faccio', 'farei', 'facesse'],
          answer: 'sto facendo',
        },
      },
      {
        subtitle: 'Progressive in Different Tenses',
        content: 'Stare can be conjugated in any tense to form the progressive: sto facendo, facevo facendo, faro facendo.',
        examples: [
          { italian: 'A quest\'ora starai dormendo.', english: 'By now you will probably be sleeping.' },
          { italian: 'Mentre stavo camminando, ho trovato un portafoglio.', english: 'While I was walking, I found a wallet.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which construction forms the Italian progressive?',
          options: ['Stare + gerund', 'Essere + past participle', 'Avere + infinitive', 'Dovere + infinitive'],
          answer: 'Stare + gerund',
        },
      },
    ],
  },
  {
    id: 'grammar-58',
    title: 'Double and Triple Pronouns',
    level: 'B2',
    category: 'Pronouns',
    sections: [
      {
        subtitle: 'Combining Two Object Pronouns',
        content: 'When two pronouns appear together, the order is: indirect (mi, ti, gli, le, ci, vi, gli) + direct (lo, la, li, le, ne). With third person, gli becomes glielo.',
        examples: [
          { italian: 'Me lo dai? (me = indirect, lo = direct)', english: 'Will you give it to me?' },
          { italian: 'Gliele ho raccontate.', english: 'I told them (stories) to him/her.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: '_____ puoi prestare? (it to me)',
          options: ['Me lo', 'Lo me', 'Mi lo', 'Lo mi'],
          answer: 'Me lo',
        },
      },
      {
        subtitle: 'Triple Pronoun Combinations',
        content: 'Three pronouns can combine: indirect + direct + ci/ne. The form glielo combines gli + lo/la.',
        examples: [
          { italian: 'Se lo porto io.', english: 'I will bring it to you. (se = te + lo)' },
          { italian: 'Gliene parlero domani.', english: 'I will speak to him about it tomorrow.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'What does "glielo" replace?',
          options: ['gli + lo/la', 'gli + li/le', 'le + lo', 'mi + lo'],
          answer: 'gli + lo/la',
        },
      },
    ],
  },
  {
    id: 'grammar-59',
    title: 'Exclamatory and Interrogative Pronouns',
    level: 'B2',
    category: 'Pronouns',
    sections: [
      {
        subtitle: 'Exclamatory Use',
        content: 'Che, quanto, come, and quanto are used in exclamations to express surprise, admiration, or emotion.',
        examples: [
          { italian: 'Che bel giorno!', english: 'What a beautiful day!' },
          { italian: 'Quanta gente!', english: 'So many people!' },
          { italian: 'Come corre!', english: 'How fast he runs!' },
        ],
        exercise: {
          type: 'fill_blank',
          question: '_____ tempo bellissimo!',
          options: ['Che', 'Come', 'Quanto', 'Quale'],
          answer: 'Che',
        },
      },
      {
        subtitle: 'Interrogative Use',
        content: 'The same words function as interrogatives to ask questions. Quale and chi are used for selection and identity.',
        examples: [
          { italian: 'Chi e quella persona?', english: 'Who is that person?' },
          { italian: 'Quale preferisci?', english: 'Which one do you prefer?' },
          { italian: 'Come si dice in italiano?', english: 'How do you say it in Italian?' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which word asks about identity?',
          options: ['Chi', 'Quale', 'Come', 'Quanto'],
          answer: 'Chi',
        },
      },
    ],
  },
  {
    id: 'grammar-60',
    title: 'Negative Constructions (Nessuno, Nulla, Mai, Neanche)',
    level: 'B2',
    category: 'Negation',
    sections: [
      {
        subtitle: 'Negative Pronouns and Adverbs',
        content: 'Italian uses nessuno (nobody/no one), nulla (nothing), mai (never), and neanche (not even/ neither) to negate.',
        examples: [
          { italian: 'Non ho visto nessuno.', english: 'I did not see anyone.' },
          { italian: 'Non c\'e nulla da fare.', english: 'There is nothing to do.' },
          { italian: 'Non vado mai al cinema.', english: 'I never go to the cinema.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'Non ho _____ tempo per uscire. (no)',
          options: ['nessun', 'non', 'niente', 'neanche'],
          answer: 'nessun',
        },
      },
      {
        subtitle: 'Double Negation in Italian',
        content: 'Italian often uses non + negative word (double negation), which is grammatically correct and standard.',
        examples: [
          { italian: 'Non ho mai parlato con nessuno.', english: 'I have never spoken with anyone.' },
          { italian: 'Non voglio niente.', english: 'I do not want anything.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'In Italian, double negation is:',
          options: ['Grammatically correct', 'An error', 'Only used in formal speech', 'Only used in writing'],
          answer: 'Grammatically correct',
        },
      },
    ],
  },
  {
    id: 'grammar-61',
    title: 'Indefinite Pronouns and Adjectives',
    level: 'B2',
    category: 'Pronouns',
    sections: [
      {
        subtitle: 'Common Indefinite Words',
        content: 'Italian has many indefinite pronouns/adjectives: qualcuno (someone), qualcosa (something), tutti (all), ogni (each), alcuni (some).',
        examples: [
          { italian: 'Qualcuno ti ha chiamato.', english: 'Someone called you.' },
          { italian: 'Ho trovato qualcosa di interessante.', english: 'I found something interesting.' },
          { italian: 'Ogni studente deve studiare.', english: 'Every student must study.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: '_____ vuole andare alla festa. (everyone)',
          options: ['Tutti', 'Qualcuno', 'Nessuno', 'Qualcosa'],
          answer: 'Tutti',
        },
      },
      {
        subtitle: 'Indefinite Adjectives and Agreement',
        content: 'Indefinite adjectives agree in gender and number with the noun they modify. Qualche is always singular.',
        examples: [
          { italian: 'Ho qualche problema da risolvere.', english: 'I have some problems to solve. (qualche + singular)' },
          { italian: 'Alcuni amici vengono alla festa.', english: 'Some friends are coming to the party.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which indefinite adjective is always followed by a singular noun?',
          options: ['Qualche', 'Alcuni', 'Tutti', 'Molti'],
          answer: 'Qualche',
        },
      },
    ],
  },
  {
    id: 'grammar-62',
    title: 'Comparative and Superlative Irregular Forms',
    level: 'B2',
    category: 'Adjectives',
    sections: [
      {
        subtitle: 'Irregular Comparatives',
        content: 'Some common adjectives have irregular comparative forms: buono -> migliore, cattivo -> peggiore, grande -> maggiore, piccolo -> minore.',
        examples: [
          { italian: 'Questo e migliore di quello.', english: 'This is better than that.' },
          { italian: 'Il tempo peggiore e in inverno.', english: 'The worst weather is in winter.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'Questo libro e _____ di quello. (better)',
          options: ['migliore', 'piu buono', 'bonissimo', 'buonissimo'],
          answer: 'migliore',
        },
      },
      {
        subtitle: 'Irregular Superlatives',
        content: 'Irregular superlatives: migliore -> ottimo, peggiore -> pessimo, maggiore -> massimo, minore -> minimo.',
        examples: [
          { italian: 'Il cibo italiano e ottimo.', english: 'Italian food is excellent/best.' },
          { italian: 'La situazione e pessima.', english: 'The situation is terrible/worst.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'What is the superlative of "peggiore"?',
          options: ['Pessimo', 'Peggiore', 'Peggissimo', 'Peggio'],
          answer: 'Pessimo',
        },
      },
    ],
  },
  {
    id: 'grammar-63',
    title: 'Forming Adverbs from Adjectives',
    level: 'B2',
    category: 'Adverbs',
    sections: [
      {
        subtitle: 'Regular Adverb Formation',
        content: 'Most adverbs are formed by adding -mente to the feminine singular form of the adjective.',
        examples: [
          { italian: 'rapido -> rapidamente (quickly)', english: 'rapido -> rapidamente' },
          { italian: 'bello -> bellamente (beautifully)', english: 'bello -> bellamente' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'Parla _____ . (slow)',
          options: ['lentamente', 'lento', 'lenta', 'lentissimo'],
          answer: 'lentamente',
        },
      },
      {
        subtitle: 'Irregular Adverbs',
        content: 'Some adverbs have irregular forms: buono -> bene, cattivo -> male, grande -> granemente.',
        examples: [
          { italian: 'Parla bene italiano.', english: 'She speaks Italian well.' },
          { italian: 'Ha dormito male stanotte.', english: 'He slept badly last night.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'What is the adverb form of "buono"?',
          options: ['Bene', 'Buonamente', 'Bonamente', 'Buenamente'],
          answer: 'Bene',
        },
      },
    ],
  },
  {
    id: 'grammar-64',
    title: 'Word Order Variations for Emphasis',
    level: 'C1',
    category: 'Syntax',
    sections: [
      {
        subtitle: 'Fronting for Emphasis',
        content: 'Italian allows fronting (moving elements to the beginning of the sentence) for emphasis or topicalization.',
        examples: [
          { italian: 'Questo libro l\'ho letto tre volte.', english: 'This book I have read three times.' },
          { italian: 'A Maria gli ho dato il regalo.', english: 'To Maria I gave the gift.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: '_____ non l\'ho mai vista. (That woman)',
          options: ['Quella donna', 'Non ho mai visto quella donna', 'Non quella donna', 'Quella donna mai'],
          answer: 'Quella donna',
        },
      },
      {
        subtitle: 'Cleft Sentences and Focus',
        content: 'Italian uses e...che (it is...that) for cleft sentences to emphasize a particular element.',
        examples: [
          { italian: 'E Maria che ha vinto la gara.', english: 'It is Maria who won the race.' },
          { italian: 'E domani che partiamo.', english: 'It is tomorrow that we leave.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which structure creates a cleft sentence in Italian?',
          options: ['E...che', 'Che...e', 'Cosi...che', 'Tanto...che'],
          answer: 'E...che',
        },
      },
    ],
  },
  {
    id: 'grammar-65',
    title: 'Italian Sentence Connectors and Discourse Markers',
    level: 'C1',
    category: 'Discourse',
    sections: [
      {
        subtitle: 'Additive and Contrastive Connectors',
        content: 'Common connectors: inoltre (furthermore), pero (but), tuttavia (however), dunque (therefore), invece (instead).',
        examples: [
          { italian: 'E bravo. Inoltre, e molto gentile.', english: 'He is good. Furthermore, he is very kind.' },
          { italian: 'Volevo uscire. Pero piove.', english: 'I wanted to go out. However, it is raining.' },
        ],
        exercise: {
          type: 'fill_blank',
          question: 'Non posso venire. _____ sono troppo stanco. (however)',
          options: ['Tuttavia', 'Inoltre', 'Dunque', 'Pero'],
          answer: 'Tuttavia',
        },
      },
      {
        subtitle: 'Discourse Markers in Conversation',
        content: 'Italian uses filler and discourse markers: insomma (in short), comunque (anyway), insomma (well/I mean), allora (so/then).',
        examples: [
          { italian: 'Allora, che facciamo oggi?', english: 'So, what shall we do today?' },
          { italian: 'Insomma, non e stato male.', english: 'Well, it was not bad.' },
        ],
        exercise: {
          type: 'multiple_choice',
          question: 'Which word means "in short" or "I mean"?',
          options: ['Insomma', 'Comunque', 'Dunque', 'Allora'],
          answer: 'Insomma',
        },
      },
    ],
  },
];

export default grammar;
