export const presenteStages = [
  {
    id: 'concept',
    title: 'Learn the Concept',
    subtitle: 'What is the present tense?',
    icon: 'book',
    sections: [
      {
        heading: 'The Italian Present Tense',
        explanation:
          'In Italian, the present tense (presente) is used much more often than in English. It covers four situations:',
        bullets: [
          { text: 'Actions happening right now', example: 'Io lavoro. — I work / I am working.' },
          { text: 'Regular or habitual actions', example: 'Maria mangia una mela ogni giorno. — Maria eats an apple every day.' },
          { text: 'General facts', example: 'Viviamo in Italia. — We live in Italy.' },
          { text: 'Situations that are currently true', example: 'Luca studia italiano. — Luca studies Italian.' },
        ],
        note: 'A single present-tense verb in Italian covers both "I work" and "I am working" in English.',
      },
      {
        heading: 'Verbs Change With the Subject',
        explanation:
          'The most important thing to know: in Italian, the verb ending changes depending on WHO is doing the action. The subject (io, tu, lui...) tells you whose action it is, and the verb changes to match.',
        examples: [
          { italian: 'Io parlo', translation: 'I speak' },
          { italian: 'Tu parli', translation: 'You speak' },
          { italian: 'Lui parla', translation: 'He speaks' },
        ],
        note:
          'This is why Italians can often leave out the subject — the verb ending already tells you who it is!',
      },
    ],
  },
  {
    id: 'verbgroups',
    title: 'Learn the Three Verb Groups',
    subtitle: '-ARE, -ERE, -IRE',
    icon: 'layers',
    sections: [
      {
        heading: 'Italian Verbs Come in Three Families',
        explanation:
          'Every Italian verb ends in -are, -ere, or -ire in its dictionary form (the infinitive). Knowing the family tells you which endings to use.',
        group: 'are',
        verbs: [
          { infinitive: 'parlare', meaning: 'to speak' },
          { infinitive: 'mangiare', meaning: 'to eat' },
          { infinitive: 'lavorare', meaning: 'to work' },
          { infinitive: 'studiare', meaning: 'to study' },
          { infinitive: 'abitare', meaning: 'to live' },
        ],
      },
      {
        heading: '-ERE Verbs',
        explanation: 'Verbs ending in -ere are the second family.',
        group: 'ere',
        verbs: [
          { infinitive: 'leggere', meaning: 'to read' },
          { infinitive: 'vedere', meaning: 'to see' },
          { infinitive: 'prendere', meaning: 'to take' },
          { infinitive: 'scrivere', meaning: 'to write' },
          { infinitive: 'vivere', meaning: 'to live' },
        ],
      },
      {
        heading: '-IRE Verbs',
        explanation: 'Verbs ending in -ire are the third family.',
        group: 'ire',
        verbs: [
          { infinitive: 'dormire', meaning: 'to sleep' },
          { infinitive: 'partire', meaning: 'to leave' },
          { infinitive: 'aprire', meaning: 'to open' },
          { infinitive: 'sentire', meaning: 'to hear / to feel' },
          { infinitive: 'servire', meaning: 'to serve / to be useful' },
        ],
      },
    ],
  },
  {
    id: 'patterns',
    title: 'Learn the Conjugation Patterns',
    subtitle: 'The endings that make it work',
    icon: 'grid',
    sections: [
      {
        heading: 'parlare (-ARE)',
        explanation: 'Drop the -are from parlare and add these endings. The endings are highlighted for you:',
        group: 'are',
        conjugations: {
          stem: 'parl',
          rows: [
            { pronoun: 'io', form: 'parlo', ending: 'o' },
            { pronoun: 'tu', form: 'parli', ending: 'i' },
            { pronoun: 'lui/lei', form: 'parla', ending: 'a' },
            { pronoun: 'noi', form: 'parliamo', ending: 'iamo' },
            { pronoun: 'voi', form: 'parlate', ending: 'ate' },
            { pronoun: 'loro', form: 'parlano', ending: 'ano' },
          ],
        },
        patterns: ['-o', '-i', '-a', '-iamo', '-ate', '-ano'],
      },
      {
        heading: 'leggere (-ERE)',
        explanation: 'Drop the -ere from leggere and add these endings:',
        group: 'ere',
        conjugations: {
          stem: 'legg',
          rows: [
            { pronoun: 'io', form: 'leggo', ending: 'o' },
            { pronoun: 'tu', form: 'leggi', ending: 'i' },
            { pronoun: 'lui/lei', form: 'legge', ending: 'e' },
            { pronoun: 'noi', form: 'leggiamo', ending: 'iamo' },
            { pronoun: 'voi', form: 'leggete', ending: 'ete' },
            { pronoun: 'loro', form: 'leggono', ending: 'ono' },
          ],
        },
        patterns: ['-o', '-i', '-e', '-iamo', '-ete', '-ono'],
      },
      {
        heading: 'dormire (-IRE)',
        explanation: 'Drop the -ire from dormire and add these endings:',
        group: 'ire',
        conjugations: {
          stem: 'dorm',
          rows: [
            { pronoun: 'io', form: 'dormo', ending: 'o' },
            { pronoun: 'tu', form: 'dormi', ending: 'i' },
            { pronoun: 'lui/lei', form: 'dorme', ending: 'e' },
            { pronoun: 'noi', form: 'dormiamo', ending: 'iamo' },
            { pronoun: 'voi', form: 'dormite', ending: 'ite' },
            { pronoun: 'loro', form: 'dormono', ending: 'ono' },
          ],
        },
        patterns: ['-o', '-i', '-e', '-iamo', '-ite', '-ono'],
      },
      {
        heading: 'Spot the Similarities',
        explanation:
          'Notice that -ere and -ire share the same endings for io, tu, and lui/lei: -o, -i, -e. They only differ in three places:',
        comparison: [
          { form: 'noi', are: '-iamo', ere: '-iamo', ire: '-iamo' },
          { form: 'voi', are: '-ate', ere: '-ete', ire: '-ite' },
          { form: 'loro', are: '-ano', ere: '-ono', ire: '-ono' },
        ],
        note:
          'The voi and loro forms are your best clues: -ate vs -ete vs -ite, and -ano vs -ono. The noi form is always -iamo for all three groups.',
      },
    ],
  },
  {
    id: 'sentence',
    title: 'Understand Sentence Structure',
    subtitle: 'WHO + ACTION + OTHER INFO',
    icon: 'type',
    sections: [
      {
        heading: 'Every Sentence Tells You WHO + ACTION + MORE',
        explanation:
          'To understand an Italian sentence, ask yourself three questions. Take this example:',
        focus: {
          sentence: 'Marco legge un libro.',
          breakdown: [
            { part: 'Marco', role: 'WHO?', icon: 'user' },
            { part: 'legge', role: 'ACTION', icon: 'action' },
            { part: 'un libro', role: 'WHAT?', icon: 'book' },
          ],
          meaning: 'Marco reads a book. (lui = he, so legge = the he-form of leggere)',
        },
      },
      {
        heading: 'More Examples',
        explanation: 'See how the pattern works with different subjects and details:',
        examples: [
          {
            italian: 'Io studio italiano ogni giorno.',
            break: 'Io (I) + studio (study) + italiano ogni giorno (Italian every day)',
            translation: 'I study Italian every day.',
          },
          {
            italian: 'Lei lavora in un ristorante.',
            break: 'Lei (she) + lavora (works) + in un ristorante (in a restaurant)',
            translation: 'She works in a restaurant.',
          },
          {
            italian: 'Noi mangiamo la pizza a casa.',
            break: 'Noi (we) + mangiamo (eat) + la pizza a casa (pizza at home)',
            translation: 'We eat pizza at home.',
          },
          {
            italian: 'Giulia lavora in un ristorante ogni giorno.',
            break: 'Giulia (who) + lavora (present tense of lavorare) + in un ristorante (where) + ogni giorno (when / how often)',
            translation: 'Giulia works in a restaurant every day.',
          },
        ],
        note: "The verb's ending (the action word) also tells you WHO: studio ends in -o → io, lavora ends in -a → lui/lei, mangiamo ends in -iamo → noi.",
      },
    ],
  },
];

export const presenteExercises = [
  // LEVEL 1 — RECOGNIZE THE PATTERN
  {
    id: 1,
    level: 'Level 1 — Recognize the Pattern',
    title: 'Identify the Verb Group',
    instruction: 'Every verb belongs to one of three groups: -ARE, -ERE, or -IRE. What group does each verb belong to?',
    type: 'multiple',
    questions: [
      {
        question: 'What group does "parlare" belong to?',
        options: ['-ARE', '-ERE', '-IRE'],
        answer: '-ARE',
        explanation: 'parlare ends in -are, so it is an -ARE verb. Meaning: to speak.',
      },
      {
        question: 'What group does "leggere" belong to?',
        options: ['-ARE', '-ERE', '-IRE'],
        answer: '-ERE',
        explanation: 'leggere ends in -ere, so it is an -ERE verb. Meaning: to read.',
      },
      {
        question: 'What group does "dormire" belong to?',
        options: ['-ARE', '-ERE', '-IRE'],
        answer: '-IRE',
        explanation: 'dormire ends in -ire, so it is an -IRE verb. Meaning: to sleep.',
      },
      {
        question: 'What group does "mangiare" belong to?',
        options: ['-ARE', '-ERE', '-IRE'],
        answer: '-ARE',
        explanation: 'mangiare ends in -are. Meaning: to eat.',
      },
      {
        question: 'What group does "scrivere" belong to?',
        options: ['-ARE', '-ERE', '-IRE'],
        answer: '-ERE',
        explanation: 'scrivere ends in -ere. Meaning: to write.',
      },
      {
        question: 'What group does "partire" belong to?',
        options: ['-ARE', '-ERE', '-IRE'],
        answer: '-IRE',
        explanation: 'partire ends in -ire. Meaning: to leave.',
      },
    ],
  },
  {
    id: 2,
    level: 'Level 1 — Recognize the Pattern',
    title: 'Match Infinitive to Meaning',
    instruction: 'Match each Italian verb with its English meaning.',
    type: 'matching',
    pairs: [
      { left: 'parlare', right: 'to speak' },
      { left: 'leggere', right: 'to read' },
      { left: 'dormire', right: 'to sleep' },
      { left: 'mangiare', right: 'to eat' },
      { left: 'scrivere', right: 'to write' },
      { left: 'lavorare', right: 'to work' },
    ],
    explanation: 'These are the six most useful beginner verbs. Notice the infinitive endings -are, -ere, -ire.',
  },
  {
    id: 3,
    level: 'Level 1 — Recognize the Pattern',
    title: 'Find the Correct Ending',
    instruction: 'Choose the correct ending to complete each verb form.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'io parl___ (parlare)',
        options: ['o', 'i', 'a'],
        answer: 'o',
        explanation: 'io takes the -o ending: io parlo.',
      },
      {
        sentence: 'tu parl___ (parlare)',
        options: ['o', 'i', 'a'],
        answer: 'i',
        explanation: 'tu takes the -i ending: tu parli.',
      },
      {
        sentence: 'lui parl___ (parlare)',
        options: ['o', 'i', 'a'],
        answer: 'a',
        explanation: 'lui/lei takes the -a ending: lui parla.',
      },
      {
        sentence: 'noi legg___ (leggere)',
        options: ['iamo', 'ete', 'ono'],
        answer: 'iamo',
        explanation: 'noi always takes -iamo: noi leggiamo.',
      },
      {
        sentence: 'loro legg___ (leggere)',
        options: ['iamo', 'ete', 'ono'],
        answer: 'ono',
        explanation: 'loro takes -ono for -ere verbs: loro leggono.',
      },
      {
        sentence: 'voi dorm___ (dormire)',
        options: ['iamo', 'ite', 'ono'],
        answer: 'ite',
        explanation: 'voi takes -ite for -ire verbs: voi dormite.',
      },
    ],
  },
  {
    id: 4,
    level: 'Level 1 — Recognize the Pattern',
    title: 'Choose the Correct Conjugation',
    instruction: 'Pick the correct verb form that matches the subject.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io ______ italiano.',
        options: ['parlo', 'parla', 'parlano'],
        answer: 'parlo',
        explanation: 'Io = I, so we use the io form: parlo.',
      },
      {
        sentence: 'Tu ______ italiano.',
        options: ['parli', 'parla', 'parlate'],
        answer: 'parli',
        explanation: 'Tu = you, so we use the tu form: parli.',
      },
      {
        sentence: 'Maria ______ una mela.',
        options: ['mangio', 'mangia', 'mangiano'],
        answer: 'mangia',
        explanation: 'Maria = lei, so we use the lui/lei form: mangia.',
      },
      {
        sentence: 'Noi ______ in Italia.',
        options: ['abitiamo', 'abitate', 'abitano'],
        answer: 'abitiamo',
        explanation: 'Noi = we, so we use the noi form: abitiamo.',
      },
      {
        sentence: 'Loro ______ un libro.',
        options: ['leggio', 'legge', 'leggono'],
        answer: 'leggono',
        explanation: 'Loro = they, so we use the loro form: leggono.',
      },
    ],
  },
  {
    id: 5,
    level: 'Level 1 — Recognize the Pattern',
    title: 'Subject + Verb Matching',
    instruction: 'Match each subject with the correct verb form.',
    type: 'matching',
    pairs: [
      { left: 'io', right: 'lavoro' },
      { left: 'tu', right: 'lavori' },
      { left: 'lui', right: 'lavora' },
      { left: 'noi', right: 'lavoriamo' },
      { left: 'voi', right: 'lavorate' },
      { left: 'loro', right: 'lavorano' },
    ],
    explanation: 'The full conjugation of lavorare (-are). -o, -i, -a, -iamo, -ate, -ano.',
  },

  // LEVEL 2 — BASIC CONJUGATION
  {
    id: 6,
    level: 'Level 2 — Basic Conjugation',
    title: 'Fill in the Blank: -ARE',
    instruction: 'Complete each sentence with the correct form of the -ARE verb.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io ______ (studiare) ogni giorno.',
        options: ['studi', 'studio', 'studiamo'],
        answer: 'studio',
        explanation: 'Io takes -o: studio.',
      },
      {
        sentence: 'Tu ______ (lavorare) a Roma.',
        options: ['lavoro', 'lavora', 'lavori'],
        answer: 'lavori',
        explanation: 'Tu takes -i: lavori.',
      },
      {
        sentence: 'Lei ______ (parlare) italiano.',
        options: ['parli', 'parla', 'parliamo'],
        answer: 'parla',
        explanation: 'Lei takes -a: parla.',
      },
      {
        sentence: 'Noi ______ (mangiare) la pizza.',
        options: ['mangi', 'mangia', 'mangiamo'],
        answer: 'mangiamo',
        explanation: 'Noi takes -iamo: mangiamo.',
      },
      {
        sentence: 'Loro ______ (abitare) a Milano.',
        options: ['abitano', 'abitate', 'abita'],
        answer: 'abitano',
        explanation: 'Loro takes -ano: abitano.',
      },
      {
        sentence: 'Voi ______ (guardare) la televisione.',
        options: ['guardate', 'guardano', 'guarda'],
        answer: 'guardate',
        explanation: 'Voi takes -ate: guardate.',
      },
    ],
  },
  {
    id: 7,
    level: 'Level 2 — Basic Conjugation',
    title: 'Fill in the Blank: -ERE',
    instruction: 'Complete each sentence with the correct form of the -ERE verb.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io ______ (leggere) un libro.',
        options: ['leggi', 'leggo', 'legge'],
        answer: 'leggo',
        explanation: 'Io takes -o: leggo.',
      },
      {
        sentence: 'Tu ______ (scrivere) una lettera.',
        options: ['scrivete', 'scrive', 'scrivi'],
        answer: 'scrivi',
        explanation: 'Tu takes -i: scrivi.',
      },
      {
        sentence: 'Lui ______ (vedere) il film.',
        options: ['vedo', 'vedi', 'vede'],
        answer: 'vede',
        explanation: 'Lui takes -e: vede.',
      },
      {
        sentence: 'Noi ______ (prendere) il caffè.',
        options: ['prendiamo', 'prendete', 'prende'],
        answer: 'prendiamo',
        explanation: 'Noi takes -iamo: prendiamo.',
      },
      {
        sentence: 'Voi ______ (leggere) molti libri.',
        options: ['leggono', 'leggete', 'leggiamo'],
        answer: 'leggete',
        explanation: 'Voi takes -ete: leggete.',
      },
      {
        sentence: 'Loro ______ (vivere) in Italia.',
        options: ['vivete', 'viviamo', 'vivono'],
        answer: 'vivono',
        explanation: 'Loro takes -ono: vivono.',
      },
    ],
  },
  {
    id: 8,
    level: 'Level 2 — Basic Conjugation',
    title: 'Fill in the Blank: -IRE',
    instruction: 'Complete each sentence with the correct form of the -IRE verb.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io ______ (dormire) otto ore.',
        options: ['dorme', 'dormi', 'dormo'],
        answer: 'dormo',
        explanation: 'Io takes -o: dormo.',
      },
      {
        sentence: 'Tu ______ (partire) domani.',
        options: ['parti', 'parte', 'partono'],
        answer: 'parti',
        explanation: 'Tu takes -i: parti.',
      },
      {
        sentence: 'Lui ______ (aprire) la porta.',
        options: ['apri', 'apre', 'aprono'],
        answer: 'apre',
        explanation: 'Lui takes -e: apre.',
      },
      {
        sentence: 'Noi ______ (sentire) la musica.',
        options: ['sentiamo', 'sentite', 'sentono'],
        answer: 'sentiamo',
        explanation: 'Noi takes -iamo: sentiamo.',
      },
      {
        sentence: 'Voi ______ (partire) per Roma.',
        options: ['partono', 'partite', 'parte'],
        answer: 'partite',
        explanation: 'Voi takes -ite: partite.',
      },
      {
        sentence: 'Loro ______ (dormire) bene.',
        options: ['dormono', 'dormite', 'dorme'],
        answer: 'dormono',
        explanation: 'Loro takes -ono: dormono.',
      },
    ],
  },
  {
    id: 9,
    level: 'Level 2 — Basic Conjugation',
    title: 'Mixed Verb Groups',
    instruction: 'Now mix it up! Choose the correct form for each sentence - it could be -ARE, -ERE, or -IRE.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io ______ (parlare) con mia sorella.',
        options: ['parli', 'parlo', 'parla'],
        answer: 'parlo',
        explanation: 'Io + parlare = parlo.',
      },
      {
        sentence: 'Lui ______ (leggere) il giornale.',
        options: ['legge', 'leggo', 'leggono'],
        answer: 'legge',
        explanation: 'Lui + leggere = legge.',
      },
      {
        sentence: 'Noi ______ (dormire) molto.',
        options: ['dormono', 'dormi', 'dormiamo'],
        answer: 'dormiamo',
        explanation: 'Noi + dormire = dormiamo.',
      },
      {
        sentence: 'Tu ______ (mangiare) la cena.',
        options: ['mangi', 'mangia', 'mangiamo'],
        answer: 'mangi',
        explanation: 'Tu + mangiare = mangi.',
      },
      {
        sentence: 'Loro ______ (scrivere) un messaggio.',
        options: ['scrive', 'scrivono', 'scriviamo'],
        answer: 'scrivono',
        explanation: 'Loro + scrivere = scrivono.',
      },
      {
        sentence: 'Voi ______ (sentire) un rumore.',
        options: ['sentite', 'sento', 'sente'],
        answer: 'sentite',
        explanation: 'Voi + sentire = sentite.',
      },
    ],
  },
  {
    id: 10,
    level: 'Level 2 — Basic Conjugation',
    title: 'Conjugation Table Completion',
    instruction: 'Complete the conjugation tables. Pick the missing form for each verb.',
    type: 'multiple',
    questions: [
      {
        question: 'The missing form of parlare: io parlo, tu ______, lui/lei parla…',
        options: ['parli', 'parlo', 'parlate'],
        answer: 'parli',
        explanation: 'Second row of the -ARE table: parli.',
      },
      {
        question: 'The missing form of leggere: io leggo, tu leggi, lui/lei ______, noi leggiamo…',
        options: ['leggete', 'legge', 'leggono'],
        answer: 'legge',
        explanation: 'Lui/lei takes -e: legge.',
      },
      {
        question: 'The missing form of dormire: io dormo, tu dormi, lui/lei dorme, noi ______, voi dormite…',
        options: ['dormiamo', 'dormono', 'dorme'],
        answer: 'dormiamo',
        explanation: 'Noi always takes -iamo: dormiamo.',
      },
      {
        question: 'The missing form of lavorare: ... noi lavoriamo, voi ______, loro lavorano.',
        options: ['lavorano', 'lavoriamo', 'lavorate'],
        answer: 'lavorate',
        explanation: 'Voi takes -ate: lavorate.',
      },
      {
        question: 'The missing form of scrivere: ... voi scrivete, loro ______.',
        options: ['scriviamo', 'scrivono', 'scrivete'],
        answer: 'scrivono',
        explanation: 'Loro takes -ono: scrivono.',
      },
      {
        question: 'The missing form of aprire: io ______, tu apri, lui/lei apre…',
        options: ['apre', 'apro', 'apri'],
        answer: 'apro',
        explanation: 'Io takes -o: apro.',
      },
    ],
  },

  // LEVEL 3 — UNDERSTAND COMPLETE SENTENCES
  {
    id: 11,
    level: 'Level 3 — Understand Complete Sentences',
    title: 'Choose the Correct Meaning',
    instruction: 'Read each sentence and choose what it means in English.',
    type: 'multiple',
    questions: [
      {
        question: '"Anna legge un libro." What does this mean?',
        options: ['Anna reads a book.', 'Anna writes a book.', 'Anna buys a book.'],
        answer: 'Anna reads a book.',
        explanation: 'legge = reads (leggere).',
      },
      {
        question: '"Io lavoro a Milano." What does this mean?',
        options: ['I live in Milan.', 'I work in Milan.', 'I study in Milan.'],
        answer: 'I work in Milan.',
        explanation: 'lavoro = I work (lavorare).',
      },
      {
        question: '"Noi dormiamo in casa." What does this mean?',
        options: ['We eat at home.', 'We sleep at home.', 'We work at home.'],
        answer: 'We sleep at home.',
        explanation: 'dormiamo = we sleep (dormire).',
      },
      {
        question: '"Tu scrivi una lettera." What does this mean?',
        options: ['You read a letter.', 'You throw a letter.', 'You write a letter.'],
        answer: 'You write a letter.',
        explanation: 'scrivi = you write (tu + scrivere).',
      },
      {
        question: '"Loro mangiano la pasta." What does this mean?',
        options: ['They eat pasta.', 'They cook pasta.', 'They buy pasta.'],
        answer: 'They eat pasta.',
        explanation: 'mangiano = they eat (mangiare).',
      },
    ],
  },
  {
    id: 12,
    level: 'Level 3 — Understand Complete Sentences',
    title: 'Italian → English',
    instruction: 'Translate each Italian sentence into English.',
    type: 'translation',
    direction: 'it-en',
    questions: [
      {
        sentence: 'Maria beve un caffè.',
        options: ['Maria drinks a coffee.', 'Maria eats a coffee.', 'Maria makes a coffee.'],
        answer: 'Maria drinks a coffee.',
        explanation: 'beve = he/she drinks (bere is irregular, but here it acts like the 3rd person singular).',
      },
      {
        sentence: 'Io abito a Roma.',
        options: ['I work in Rome.', 'I live in Rome.', 'I study in Rome.'],
        answer: 'I live in Rome.',
        explanation: 'abito = I live (abitare).',
      },
      {
        sentence: 'Luca e Marco lavorano a Milano.',
        options: ['Luca and Marco live in Milan.', 'Luca and Marco eat in Milan.', 'Luca and Marco work in Milan.'],
        answer: 'Luca and Marco work in Milan.',
        explanation: 'Luca e Marco = loro, so lavorano (they work).',
      },
      {
        sentence: 'Noi prendiamo il treno.',
        options: ['We take the train.', 'We drive the train.', 'We see the train.'],
        answer: 'We take the train.',
        explanation: 'prendiamo = we take (prendere).',
      },
      {
        sentence: 'Lei apre la finestra.',
        options: ['She closes the window.', 'She opens the window.', 'She washes the window.'],
        answer: 'She opens the window.',
        explanation: 'apre = opens (aprire).',
      },
    ],
  },
  {
    id: 13,
    level: 'Level 3 — Understand Complete Sentences',
    title: 'English → Italian',
    instruction: 'Each English sentence has one correct Italian translation. Choose it.',
    type: 'translation',
    direction: 'en-it',
    questions: [
      {
        sentence: 'I eat pizza.',
        options: ['Io mangio la pizza.', 'Io mangi la pizza.', 'Io mangia la pizza.'],
        answer: 'Io mangio la pizza.',
        explanation: 'I = io, so the verb ends in -o: mangio.',
      },
      {
        sentence: 'You (singular) study Italian.',
        options: ['Tu studia italiano.', 'Tu studiamo italiano.', 'Tu studi italiano.'],
        answer: 'Tu studi italiano.',
        explanation: 'You (tu) takes the -i ending: studi.',
      },
      {
        sentence: 'She reads a book.',
        options: ['Lei leggi un libro.', 'Lei legge un libro.', 'Lei leggo un libro.'],
        answer: 'Lei legge un libro.',
        explanation: 'She (lei) takes the -e ending (for -ere verbs): legge.',
      },
      {
        sentence: 'We work together.',
        options: ['Noi lavorate insieme.', 'Noi lavorano insieme.', 'Noi lavoriamo insieme.'],
        answer: 'Noi lavoriamo insieme.',
        explanation: 'We (noi) always takes -iamo: lavoriamo.',
      },
      {
        sentence: 'They sleep eight hours.',
        options: ['Loro dormono otto ore.', 'Loro dorme otto ore.', 'Loro dormiamo otto ore.'],
        answer: 'Loro dormono otto ore.',
        explanation: 'They (loro) takes -ono (for -ire): dormono.',
      },
    ],
  },
  {
    id: 14,
    level: 'Level 3 — Understand Complete Sentences',
    title: 'Who Does What?',
    instruction: 'Read the sentence and answer the question about it.',
    type: 'multiple',
    questions: [
      {
        question: '"Luca e Marco lavorano a Milano." Who works in Milan?',
        options: ['Luca only', 'Marco only', 'Luca and Marco'],
        answer: 'Luca and Marco',
        explanation: 'The verb is lavorano (they plural), and the sentence names both Luca e Marco.',
      },
      {
        question: '"Anna e Giulia studiano insieme." Who studies together?',
        options: ['Anna and Giulia', 'Anna only', 'Giulia only'],
        answer: 'Anna and Giulia',
        explanation: 'studiano = they study. The subject is Anna e Giulia.',
      },
      {
        question: '"Marco prende il treno alle otto." Who takes the train?',
        options: ['Marco', 'Anna', 'Luca'],
        answer: 'Marco',
        explanation: 'prendere → prende (singular he-form). The subject is Marco.',
      },
      {
        question: '"Voi scrivete un biglietto." Who writes a ticket/note?',
        options: ['I (io)', 'You all (voi)', 'They (loro)'],
        answer: 'You all (voi)',
        explanation: 'scrivete is the voi form.',
      },
      {
        question: '"Io e mia sorella apriamo il negozio." Who opens the shop?',
        options: ['He', 'I and my sister (we)', 'You'],
        answer: 'I and my sister (we)',
        explanation: 'apriamo = noi form. "Io e mia sorella" = we.',
      },
    ],
  },
  {
    id: 15,
    level: 'Level 3 — Understand Complete Sentences',
    title: 'Find the Subject',
    instruction: 'Who is performing the action in each sentence? Look at the verb ending for the clue.',
    type: 'multiple',
    questions: [
      {
        question: '"Gioca a calcio ogni sabato." Who plays? (gioca = he/she plays)',
        options: ['He/She', 'They', 'We'],
        answer: 'He/She',
        explanation: 'The -a ending tells us it is lui/lei.',
      },
      {
        question: '"Studiamo molto per gli esami." Who studies? (studiamo = we study)',
        options: ['He', 'We', 'They'],
        answer: 'We',
        explanation: 'The -iamo ending always means noi (we).',
      },
      {
        question: '"Leggono il giornale al bar." Who reads? (leggono = they read)',
        options: ['They', 'We', 'You (plural)'],
        answer: 'They',
        explanation: 'The -ono ending means loro (they).',
      },
      {
        question: '"Parli troppo al telefono!" Who talks? (parli = you talk)',
        options: ['I', 'You (tu)', 'He'],
        answer: 'You (tu)',
        explanation: 'The -i ending means tu (or io for -are... but here context + form make it tu).',
      },
      {
        question: '"Verificano i compiti." Who checks? (verificano = they check)',
        options: ['I', 'They', 'We'],
        answer: 'They',
        explanation: 'The -ano ending means loro (they) for -are verbs.',
      },
    ],
  },

  // LEVEL 4 — SENTENCE BUILDING
  {
    id: 16,
    level: 'Level 4 — Sentence Building',
    title: 'Put the Words in Order',
    instruction: 'Tap the words in the correct order to build a correct Italian sentence.',
    type: 'wordorder',
    questions: [
      {
        words: ['mangia', 'Maria', 'una mela'],
        answer: 'Maria mangia una mela.',
        explanation: 'WHO (Maria) + ACTION (mangia) + WHAT (una mela).',
      },
      {
        words: ['lavora', 'a Roma', 'Luca'],
        answer: 'Luca lavora a Roma.',
        explanation: 'WHO (Luca) + ACTION (lavora) + WHERE (a Roma).',
      },
      {
        words: ['italiano', 'studi', 'Tu', 'ogni giorno'],
        answer: 'Tu studi italiano ogni giorno.',
        explanation: 'WHO (Tu) + ACTION (studi) + WHAT (italiano) + WHEN (ogni giorno).',
      },
      {
        words: ['un libro', 'leggiamo', 'Noi'],
        answer: 'Noi leggiamo un libro.',
        explanation: 'WHO (Noi) + ACTION (leggiamo) + WHAT (un libro).',
      },
      {
        words: ['la porta', 'aprono', 'Loro'],
        answer: 'Loro aprono la porta.',
        explanation: 'WHO (Loro) + ACTION (aprono) + WHAT (la porta).',
      },
    ],
  },
  {
    id: 17,
    level: 'Level 4 — Sentence Building',
    title: 'Complete the Sentence',
    instruction: 'Choose the word that completes each sentence correctly.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io ______ il giornale ogni mattina.',
        options: ['leggio', 'leggo', 'legge'],
        answer: 'leggo',
        explanation: 'Io takes the -o ending: leggo.',
      },
      {
        sentence: 'Mia madre ______ in un ospedale.',
        options: ['lavori', 'lavoro', 'lavora'],
        answer: 'lavora',
        explanation: 'Mia madre = lei (she), so lavora.',
      },
      {
        sentence: 'I miei amici ______ italiano.',
        options: ['studiano', 'studiamo', 'studiate'],
        answer: 'studiano',
        explanation: 'I miei amici = they, so studiano.',
      },
      {
        sentence: 'Tu ______ sempre la verità.',
        options: ['dica', 'dici', 'dice'],
        answer: 'dici',
        explanation: 'Tu takes the -i form: dici.',
      },
      {
        sentence: 'Noi ______ la televisione la sera.',
        options: ['guardate', 'guardiamo', 'guardano'],
        answer: 'guardiamo',
        explanation: 'Noi takes -iamo: guardiamo.',
      },
    ],
  },
  {
    id: 18,
    level: 'Level 4 — Sentence Building',
    title: 'Choose the Correct Subject',
    instruction: 'Pick the subject that matches the verb form.',
    type: 'multiple',
    questions: [
      {
        question: '______ leggono molti libri.',
        options: ['Io', 'Marco', 'Marco e Anna'],
        answer: 'Marco e Anna',
        explanation: 'leggono = they (plural), so we need a plural subject: Marco e Anna.',
      },
      {
        question: '______ dormiamo otto ore.',
        options: ['Noi', 'Loro', 'Tu'],
        answer: 'Noi',
        explanation: 'dormiamo = noi (we) form.',
      },
      {
        question: '______ lavori in banca.',
        options: ['Tu', 'Lei', 'Io'],
        answer: 'Tu',
        explanation: 'lavori = tu (you) form.',
      },
      {
        question: '______ scrive una lettera.',
        options: ['Io e Marta', 'Marta', 'Noi'],
        answer: 'Marta',
        explanation: 'scrive = singular he/she form, so the subject must be singular: Marta.',
      },
      {
        question: '______ mangiate la pasta.',
        options: ['Voi', 'Loro', 'Tu'],
        answer: 'Voi',
        explanation: 'mangiate = voi (you all) form.',
      },
    ],
  },
  {
    id: 19,
    level: 'Level 4 — Sentence Building',
    title: 'Change the Subject',
    instruction: 'Change the subject of each sentence and pick the correct new verb form.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Io lavoro. → Tu ______.',
        options: ['lavoro', 'lavori', 'lavora'],
        answer: 'lavori',
        explanation: 'Change io → tu makes the verb end in -i: lavori.',
      },
      {
        sentence: 'Io lavoro. → Lui ______.',
        options: ['lavoro', 'lavori', 'lavora'],
        answer: 'lavora',
        explanation: 'Change io → lui makes the verb end in -a: lavora.',
      },
      {
        sentence: 'Io lavoro. → Noi ______.',
        options: ['lavoriamo', 'lavorate', 'lavorano'],
        answer: 'lavoriamo',
        explanation: 'Change io → noi makes the verb end in -iamo: lavoriamo.',
      },
      {
        sentence: 'Io lavoro. → Voi ______.',
        options: ['lavoriamo', 'lavorate', 'lavorano'],
        answer: 'lavorate',
        explanation: 'Change io → voi makes the verb end in -ate: lavorate.',
      },
      {
        sentence: 'Io lavoro. → Loro ______.',
        options: ['lavoriamo', 'lavorate', 'lavorano'],
        answer: 'lavorano',
        explanation: 'Change io → loro makes the verb end in -ano: lavorano.',
      },
    ],
  },
  {
    id: 20,
    level: 'Level 4 — Sentence Building',
    title: 'Change Singular → Plural',
    instruction: 'Change each sentence from one person to many people.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'La ragazza legge. → Le ragazze ______.',
        options: ['leggono', 'legge', 'leggiamo'],
        answer: 'leggono',
        explanation: 'One girl (lei) → many girls (loro): leggono.',
      },
      {
        sentence: 'Il bambino dorme. → I bambini ______.',
        options: ['dorme', 'dormono', 'dormiamo'],
        answer: 'dormono',
        explanation: 'One boy (lui) → many boys (loro): dormono.',
      },
      {
        sentence: 'L\'uomo lavora. → Gli uomini ______.',
        options: ['lavorano', 'lavora', 'lavorate'],
        answer: 'lavorano',
        explanation: 'One man (lui) → many men (loro): lavorano.',
      },
      {
        sentence: 'La donna parla. → Le donne ______.',
        options: ['parlano', 'parla', 'parliamo'],
        answer: 'parlano',
        explanation: 'One woman (lei) → many women (loro): parlano.',
      },
      {
        sentence: 'Lo studente studia. → Gli studenti ______.',
        options: ['studiano', 'studia', 'studiamo'],
        answer: 'studiano',
        explanation: 'One student (lui) → many students (loro): studiano.',
      },
    ],
  },

  // LEVEL 5 — REAL-LIFE PRESENT TENSE
  {
    id: 21,
    level: 'Level 5 — Real-Life Present Tense',
    title: 'Daily Routine',
    instruction: 'Complete the sentences about a typical daily routine.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Ogni mattina Marco ______ il caffè.',
        options: ['prendo', 'prende', 'prendono'],
        answer: 'prende',
        explanation: 'Marco = lui, so prende (he takes).',
      },
      {
        sentence: 'Io ______ alle sette.',
        options: ['svegli', 'svegliano', 'sveglio'],
        answer: 'sveglio',
        explanation: 'Io + svegliarsi = mi sveglio. Io takes -o.',
      },
      {
        sentence: 'Tu ______ il lavoro alle nove.',
        options: ['cominci', 'comincia', 'cominciate'],
        answer: 'cominci',
        explanation: 'Tu takes -i: cominci.',
      },
      {
        sentence: 'La sera noi ______ la televisione.',
        options: ['guardo', 'guardate', 'guardiamo'],
        answer: 'guardiamo',
        explanation: 'Noi takes -iamo: guardiamo.',
      },
      {
        sentence: 'Loro ______ a dormire a mezzanotte.',
        options: ['vanno', 'va', 'andiamo'],
        answer: 'vanno',
        explanation: 'Loro + andare = vanno (they go).',
      },
      {
        sentence: 'Voi ______ la colazione in cucina.',
        options: ['fate', 'fanno', 'facciamo'],
        answer: 'fate',
        explanation: 'Voi + fare = fate (you all do/make).',
      },
    ],
  },
  {
    id: 22,
    level: 'Level 5 — Real-Life Present Tense',
    title: 'At Home',
    instruction: 'sentences about things people do at home.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Mia madre ______ la cena.',
        options: ['prepari', 'prepara', 'preparano'],
        answer: 'prepara',
        explanation: 'Mia madre = lei, so prepara.',
      },
      {
        sentence: 'Mio padre ______ il giardino.',
        options: ['guardo', 'guarda', 'guardate'],
        answer: 'guarda',
        explanation: 'Mio padre = lui, so guarda.',
      },
      {
        sentence: 'Io ______ la casa il sabato.',
        options: ['puliamo', 'pulisco', 'pulite'],
        answer: 'pulisco',
        explanation: 'Pulire is an -IRE verb with -isc-: io pulisco.',
      },
      {
        sentence: 'Noi ______ in cucina.',
        options: ['pranzano', 'pranzate', 'pranziamo'],
        answer: 'pranziamo',
        explanation: 'Noi takes -iamo: pranziamo.',
      },
      {
        sentence: 'I bambini ______ nella loro camera.',
        options: ['giochi', 'giocate', 'giocano'],
        answer: 'giocano',
        explanation: 'I bambini = they, so giocano.',
      },
    ],
  },
  {
    id: 23,
    level: 'Level 5 — Real-Life Present Tense',
    title: 'At Work / School',
    instruction: 'Practical sentences you hear at work or school.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Gli studenti ______ in classe.',
        options: ['studiano', 'studia', 'studi'],
        answer: 'studiano',
        explanation: 'Gli studenti = they, so studiano.',
      },
      {
        sentence: 'Io ______ le email ogni mattina.',
        options: ['controlli', 'controllo', 'controlla'],
        answer: 'controllo',
        explanation: 'Io takes -o: controllo.',
      },
      {
        sentence: 'L\'insegnante ______ la lezione.',
        options: ['spiegiamo', 'spiegono', 'spiega'],
        answer: 'spiega',
        explanation: 'L\'insegnante = lui/lei, so spiega.',
      },
      {
        sentence: 'Tu ______ il progetto oggi.',
        options: ['finisci', 'finisce', 'finiamo'],
        answer: 'finisci',
        explanation: 'Finire is -IRE with -isc-: tu finisci.',
      },
      {
        sentence: 'Noi ______ una riunione alle tre.',
        options: ['avere', 'abbiamo', 'avete'],
        answer: 'abbiamo',
        explanation: 'Noi + avere = abbiamo (we have).',
      },
    ],
  },
  {
    id: 24,
    level: 'Level 5 — Real-Life Present Tense',
    title: 'Free Time',
    instruction: 'Activities people do in their free time.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Noi ______ la musica nel tempo libero.',
        options: ['ascoltano', 'ascoltiamo', 'ascolti'],
        answer: 'ascoltiamo',
        explanation: 'Noi takes -iamo: ascoltiamo.',
      },
      {
        sentence: 'Loro ______ film al cinema.',
        options: ['guardiamo', 'guardate', 'guardano'],
        answer: 'guardano',
        explanation: 'Loro takes -ano: guardano.',
      },
      {
        sentence: 'Io ______ i libri di avventura.',
        options: ['leggi', 'leggono', 'leggo'],
        answer: 'leggo',
        explanation: 'Io takes -o: leggo.',
      },
      {
        sentence: 'Tu ______ molto con gli amici.',
        options: ['esci', 'esce', 'escono'],
        answer: 'esci',
        explanation: 'Uscire - tu esci (you go out).',
      },
      {
        sentence: 'Lui ______ con gli amici.',
        options: ['giocano', 'gioca', 'giochi'],
        answer: 'gioca',
        explanation: 'Lui + giocare = gioca.',
      },
    ],
  },
  {
    id: 25,
    level: 'Level 5 — Real-Life Present Tense',
    title: 'Mixed Real-Life Dialogue',
    instruction: 'Read this short dialogue and answer the questions about it.',
    type: 'story',
    story:
      'Anna: Cosa fai oggi?\nMarco: Lavoro e poi studio italiano.\nAnna: Lavori anche il sabato?\nMarco: Sì, lavoro il sabato. Tu che cosa fai?\nAnna: Io non lavoro oggi. Leggo un libro e ascolto la musica.\nMarco: Che bello!',
    questions: [
      {
        question: 'What does Marco do today?',
        options: ['He works and studies Italian.', 'He reads a book.', 'He listens to music.'],
        answer: 'He works and studies Italian.',
        explanation: 'Marco says: "Lavoro e poi studio italiano."',
      },
      {
        question: 'Does Marco work on Saturday?',
        options: ['Yes', 'No', 'We do not know'],
        answer: 'Yes',
        explanation: 'Marco: "Sì, lavoro il sabato."',
      },
      {
        question: 'What does Anna do today?',
        options: ['She works and studies.', 'She reads and listens to music.', 'She sleeps.'],
        answer: 'She reads and listens to music.',
        explanation: 'Anna: "Leggo un libro e ascolto la musica."',
      },
      {
        question: '"Leggo" is the ___ form of leggere.',
        options: ['io', 'tu', 'loro'],
        answer: 'io',
        explanation: 'Leggo ends in -o, so it is the io form.',
      },
      {
        question: '"Ascolto" is the ___ form of ascoltare.',
        options: ['io', 'noi', 'lui'],
        answer: 'io',
        explanation: 'Ascolto ends in -o, so it is the io form.',
      },
    ],
  },

  // STORY 1 — Beginner (Exercise 26)
  {
    id: 26,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: La giornata di Marco',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 1 — Beginner (50–70 words)',
    story:
      'La giornata di Marco\n\nMarco si alza alle sette. Fa colazione e beve un caffè. Poi lavora in ufficio. A mezzogiorno mangia un panino. Lavora fino alle sei. La sera guarda la televisione e legge un libro. Alle undici dorme. Ogni giorno è sempre lo stesso.',
    vocab: [
      { word: 'si alza', meaning: 'gets up' },
      { word: 'fa colazione', meaning: 'has breakfast' },
      { word: 'beve', meaning: 'drinks' },
      { word: 'ufficio', meaning: 'office' },
      { word: 'panino', meaning: 'sandwich' },
    ],
    questions: [
      {
        question: 'Who is the story about?',
        options: ['Anna', 'Marco', 'Luca'],
        answer: 'Marco',
        explanation: 'The story title is "La giornata di Marco" (Marco\'s day).',
      },
      {
        question: 'When does Marco get up?',
        options: ['at six', 'at seven', 'at eight'],
        answer: 'at seven',
        explanation: '"Marco si alza alle sette."',
      },
      {
        question: 'What does Marco drink for breakfast?',
        options: ['tea', 'water', 'a coffee'],
        answer: 'a coffee',
        explanation: '"Fa colazione e beve un caffè."',
      },
      {
        question: 'Where does Marco work?',
        options: ['in an office', 'in a shop', 'at home'],
        answer: 'in an office',
        explanation: '"Poi lavora in ufficio."',
      },
      {
        question: 'What happens at eleven?',
        options: ['He sleeps.', 'He eats.', 'He works.'],
        answer: 'He sleeps.',
        explanation: '"Alle undici dorme."',
      },
      {
        question: 'Which verb means "to eat" in the story?',
        options: ['mangia', 'beve', 'lavora'],
        answer: 'mangia',
        explanation: 'mangia = eats (from mangiare).',
      },
      {
        question: 'Write your own sentence about a morning routine using a verb like "lavoro" or "leggo".',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Any correct sentence like "Io lavoro in ufficio" is fine - the goal is to start producing Italian.',
      },
    ],
  },

  // STORY 2 — Intermediate (Exercise 27)
  {
    id: 27,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Una giornata tipica',
    instruction: 'Read this longer story and answer the English comprehension questions.',
    type: 'story',
    storyTitle: 'Story 2 — Intermediate (80–100 words)',
    story:
      'Una giornata tipica\n\nAnna lavora in un piccolo negozio di fiori. Ogni mattina apre il negozio alle nove e parla con i clienti. Vende rose, tulipani e altri fiori. A pranzo, Anna e la sua collega Marta mangiano insieme. Marta prepara la pasta, e Anna porta il pane. Dopo il lavoro, Anna cammina per la città e guarda le vetrine. La sera cena con la famiglia e racconta la sua giornata. Poi scrive nel suo diario e legge un po\'. A mezzanotte dorme. Anna ama il suo lavoro, ma il sabato riposa!',
    vocab: [
      { word: 'negozio', meaning: 'shop' },
      { word: 'fiori', meaning: 'flowers' },
      { word: 'clienti', meaning: 'customers' },
      { word: 'vende', meaning: 'sells' },
      { word: 'collega', meaning: 'colleague' },
      { word: 'vetrine', meaning: 'shop windows' },
      { word: 'diario', meaning: 'diary' },
    ],
    questions: [
      {
        question: 'Where does Anna work?',
        options: ['in a flower shop', 'in a bakery', 'in an office'],
        answer: 'in a flower shop',
        explanation: '"Anna lavora in un piccolo negozio di fiori."',
      },
      {
        question: 'What does Anna sell?',
        options: ['bread and cakes', 'roses, tulips and other flowers', 'books'],
        answer: 'roses, tulips and other flowers',
        explanation: '"Vende rose, tulipani e altri fiori."',
      },
      {
        question: 'Who does Anna eat lunch with?',
        options: ['her family', 'Marta, her colleague', 'her customers'],
        answer: 'Marta, her colleague',
        explanation: '"Anna e la sua collega Marta mangiano insieme."',
      },
      {
        question: 'What does Anna do in the evening?',
        options: ['She cooks for the family.', 'She reads and writes in her diary.', 'She opens the shop.'],
        answer: 'She reads and writes in her diary.',
        explanation: '"Poi scrive nel suo diario e legge un po\'."',
      },
      {
        question: 'When does Anna rest?',
        options: ['on Saturday', 'on Sunday', 'every day'],
        answer: 'on Saturday',
        explanation: '"il sabato riposa" - she rests on Saturday.',
      },
      {
        question: 'Find three present-tense verbs in the story.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Any three verbs, e.g. lavora, apre, parla, vende, mangiano, cammina, dorme, ama, riposa.',
        explanation: 'Good examples: lavora, apre, parla, vende. All end in -a (lui/lei form) because the subject is Anna (she).',
      },
      {
        question: 'Write one sentence about your own typical day in Italian.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Any correct sentence in Italian.',
        explanation: 'Try: "Io lavoro ogni giorno" or "Io leggo la sera". The verb must match the subject.',
      },
    ],
  },

  // STORY 3 — Missing verbs (Exercise 28)
  {
    id: 28,
    level: 'Level 6 — Reading and Stories',
    title: 'Story With Missing Verbs',
    instruction: 'Complete the story with the correct present-tense form of each verb in the word bank.',
    type: 'fillblank',
    questions: [
      {
        sentence: 'Marco ______ (svegliarsi) alle sette.',
        options: ['si sveglia', 'si svegliano', 'mi sveglio'],
        answer: 'si sveglia',
        explanation: 'Marco = lui, reflexive form: si sveglia.',
      },
      {
        sentence: 'Poi ______ (prendere) il caffè.',
        options: ['prendono', 'prende', 'prendiamo'],
        answer: 'prende',
        explanation: 'Marco = lui, so prende.',
      },
      {
        sentence: 'Dopo ______ (partire) per andare a lavorare.',
        options: ['parte', 'partono', 'parti'],
        answer: 'parte',
        explanation: 'Marco = lui, so parte.',
      },
      {
        sentence: 'In ufficio ______ (scrivere) molte email.',
        options: ['scrive', 'scrivono', 'scrivi'],
        answer: 'scrive',
        explanation: 'Marco = lui, so scrive.',
      },
      {
        sentence: 'A pranzo ______ (mangiare) con i colleghi.',
        options: ['mangia', 'mangiano', 'mangi'],
        answer: 'mangia',
        explanation: 'Marco = lui, so mangia.',
      },
      {
        sentence: 'La sera ______ (vedere) la televisione.',
        options: ['vede', 'vedo', 'vedono'],
        answer: 'vede',
        explanation: 'Marco = lui, so vede.',
      },
      {
        sentence: 'E alle undici ______ (dormire).',
        options: ['dorme', 'dormono', 'dormo'],
        answer: 'dorme',
        explanation: 'Marco = lui, so dorme.',
      },
    ],
  },

  // STORY 4 — Read and answer in Italian (Exercise 29)
  {
    id: 29,
    level: 'Level 6 — Reading and Stories',
    title: 'Read and Answer in Italian',
    instruction: 'Read the story, then answer the questions IN ITALIAN. Type full sentences.',
    type: 'story',
    storyTitle: 'Story 4 — Final Challenge (100–130 words)',
    story:
      'La famiglia Rossi\n\nI Rossi abitano a Firenze. Il signor Rossi lavora in una banca, e sua moglie lavora in una scuola. Ogni giorno i figli prendono l\'autobus e arrivano a scuola alle otto. La sera, tutti cenano insieme e parlano della giornata. Il sabato, la famiglia parte per il mare. Al mare nuotano e giocano sulla spiaggia. La domenica riposano e preparano la settimana. Il signor Rossi scrive la lista della spesa, la moglie fa le pulizie, e i bambini guardano la televisione. Vivono una vita tranquilla e felice a Firenze.',
    vocab: [
      { word: 'banca', meaning: 'bank' },
      { word: 'figli', meaning: 'children (sons/daughters)' },
      { word: 'autobus', meaning: 'bus' },
      { word: 'nuotano', meaning: 'swim' },
      { word: 'spiaggia', meaning: 'beach' },
      { word: 'lista della spesa', meaning: 'shopping list' },
    ],
    questions: [
      {
        question: 'Dove abita la famiglia Rossi? (Where does the Rossi family live?)',
        type: 'text',
        acceptedAnswers: ['la famiglia rossi abita a firenze', 'i rossi abitano a firenze', 'abitano a firenze', 'a firenze'],
        answer: 'La famiglia Rossi abita a Firenze.',
        explanation: 'The story says: "I Rossi abitano a Firenze." Reasonable variations are accepted.',
      },
      {
        question: 'Dove lavora il signor Rossi? (Where does Mr. Rossi work?)',
        type: 'text',
        acceptedAnswers: ['il signor rossi lavora in una banca', 'in una banca', 'lavora in una banca', 'in banca', 'una banca'],
        answer: 'Il signor Rossi lavora in una banca.',
        explanation: 'The story says: "Il signor Rossi lavora in una banca."',
      },
      {
        question: 'Dove lavora la moglie? (Where does the wife work?)',
        type: 'text',
        acceptedAnswers: ['in una scuola', 'lavora in una scuola', 'in scuola', 'la moglie lavora in una scuola'],
        answer: 'La moglie lavora in una scuola.',
        explanation: 'The story says: "sua moglie lavora in una scuola."',
      },
      {
        question: 'Cosa fanno il sabato? (What do they do on Saturday?)',
        type: 'text',
        acceptedAnswers: ['partono per il mare', 'vanno al mare', 'nuotano e giocano sulla spiaggia', 'al mare'],
        answer: 'Il sabato la famiglia parte per il mare e nuota.',
        explanation: 'The story says: "Il sabato, la famiglia parte per il mare."',
      },
      {
        question: 'Cosa fa il signor Rossi la domenica? (What does Mr. Rossi do on Sunday?)',
        type: 'text',
        acceptedAnswers: ['scrive la lista della spesa', 'il signor rossi scrive la lista della spesa', 'scrive la lista', 'fa la lista della spesa'],
        answer: 'Il signor Rossi scrive la lista della spesa.',
        explanation: 'The story says: "Il signor Rossi scrive la lista della spesa."',
      },
      {
        question: 'Trova tre verbi al presente nella storia. (Find three present-tense verbs in the story.)',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Any three, e.g. abitano, lavora, prendono, cenano, parlano, parte, nuotano, riposano, scrive, guardano, vivono.',
        explanation: 'There are many: abitano, lavora, prendono, cenano, parlano, parte, nuotano, giocano, riposano, preparano, scrive, fa, guardano, vivono.',
      },
    ],
  },

  // STORY 5 — La famiglia Bianchi (Exercise 31)
  {
    id: 31,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: La famiglia Bianchi',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 5 — Family Life',
    story:
      'Ogni mattina la famiglia Bianchi fa colazione insieme. Il signor Bianchi legge il giornale e beve un caffè. Sua moglie prepara il pane con il burro per i bambini. Alle otto tutti partono: i genitori vanno al lavoro e i bambini vanno a scuola.\n\nLa sera la famiglia cena insieme e racconta la giornata. Marco, il figlio più grande, studia il francese. La piccola Giulia gioca con il cane. Dopo cena tutti guardano un film o leggono un libro. Vive una vita tranquilla ma piena.',
    vocab: [
      { word: 'fa colazione', meaning: 'has breakfast' },
      { word: 'il pane', meaning: 'bread' },
      { word: 'il burro', meaning: 'butter' },
      { word: 'racconta', meaning: 'tells / recounts' },
      { word: 'il figlio', meaning: 'the son' },
      { word: 'tranquilla', meaning: 'quiet / peaceful' },
    ],
    translation:
      'Every morning the Bianchi family has breakfast together. Mr. Bianchi reads the newspaper and drinks a coffee. His wife prepares bread and butter for the children. At eight everyone leaves: the parents go to work and the children go to school.\n\nIn the evening the family has dinner together and tells about their day. Marco, the oldest son, studies French. Little Giulia plays with the dog. After dinner everyone watches a film or reads a book. They live a quiet but full life.',
    questions: [
      {
        question: 'Who prepares the bread and butter for the children?',
        options: ['Mr. Bianchi', 'The signora Bianchi', 'Giulia'],
        answer: 'The signora Bianchi',
        explanation: '"Sua moglie prepara il pane con il burro per i bambini."',
      },
      {
        question: 'What does Mr. Bianchi do in the morning?',
        options: ['Reads the newspaper and drinks a coffee', 'Cooks breakfast', 'Takes the children to school'],
        answer: 'Reads the newspaper and drinks a coffee',
        explanation: '"Il signor Bianchi legge il giornale e beve un caffè."',
      },
      {
        question: 'What happens at eight?',
        options: ['Everyone leaves', 'The family sleeps', 'They eat dinner'],
        answer: 'Everyone leaves',
        explanation: '"Alle otto tutti partono."',
      },
      {
        question: 'What does Marco study in the evening?',
        options: ['French', 'Mathematics', 'English'],
        answer: 'French',
        explanation: '"Marco, il figlio più grande, studia il francese."',
      },
      {
        question: 'What does Giulia do after dinner?',
        options: ['Plays with the dog', 'Reads a book', 'Studies French'],
        answer: 'Plays with the dog',
        explanation: '"La piccola Giulia gioca con il cane."',
      },
      {
        question: 'Which present-tense verb means "tells / recounts" in the story?',
        options: ['racconta', 'leggere', 'partono'],
        answer: 'racconta',
        explanation: 'racconta = he/she tells (from raccontare), used in "la famiglia racconta la giornata".',
      },
      {
        question: 'Write one sentence about your own family using a present-tense verb.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "La mia famiglia cena insieme ogni sera." The subject and verb must agree.',
      },
    ],
  },

  // STORY 6 — Il mercato di sabato (Exercise 32)
  {
    id: 32,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Il mercato di sabato',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 6 — At the Market',
    story:
      'Ogni sabato mia madre e io andiamo al mercato. Il mercato è nel centro della città. Ci sono molte bancarelle: la frutta, la verdura, il pesce e i fiori.\n\nMia madre parla con i venditori e compra le cose per la settimana. Io porto le borse e aiuto a scegliere la frutta. A mezzogiorno compriamo il pane fresco e torniamo a casa. La domenica mangiamo tutto insieme. Mia madre dice che il mercato è il suo posto preferito.',
    vocab: [
      { word: 'le bancarelle', meaning: 'the stalls' },
      { word: 'la verdura', meaning: 'vegetables' },
      { word: 'i venditori', meaning: 'the sellers' },
      { word: 'le borse', meaning: 'the bags' },
      { word: 'fresco', meaning: 'fresh' },
      { word: 'il posto preferito', meaning: 'favourite place' },
    ],
    translation:
      'Every Saturday my mother and I go to the market. The market is in the centre of the city. There are many stalls: fruit, vegetables, fish and flowers.\n\nMy mother talks to the sellers and buys the things for the week. I carry the bags and help to choose the fruit. At noon we buy fresh bread and return home. On Sunday we eat everything together. My mother says the market is her favourite place.',
    questions: [
      {
        question: 'When do they go to the market?',
        options: ['Every Saturday', 'Every Sunday', 'Only in summer'],
        answer: 'Every Saturday',
        explanation: '"Ogni sabato mia madre e io andiamo al mercato."',
      },
      {
        question: 'Where is the market?',
        options: ['In the centre of the city', 'Near the sea', 'Outside the city'],
        answer: 'In the centre of the city',
        explanation: '"Il mercato è nel centro della città."',
      },
      {
        question: 'Who carries the bags?',
        options: ['The narrator (I)', 'The mother', 'The sellers'],
        answer: 'The narrator (I)',
        explanation: '"Io porto le borse."',
      },
      {
        question: 'What does the narrator help to choose?',
        options: ['The fruit', 'The fish', 'The flowers'],
        answer: 'The fruit',
        explanation: '"aiuto a scegliere la frutta."',
      },
      {
        question: 'What do they buy at noon?',
        options: ['Fresh bread', 'Fish', 'Flowers'],
        answer: 'Fresh bread',
        explanation: '"A mezzogiorno compriamo il pane fresco."',
      },
      {
        question: 'Which verb in the story means "to choose"?',
        options: ['scegliere', 'comprare', 'portare'],
        answer: 'scegliere',
        explanation: '"aiuto a scegliere la frutta" — scegliere = to choose.',
      },
      {
        question: 'Write one sentence about a place you visit regularly, using the present tense.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Vado spesso in palestra." Any correct third-person or first-person sentence is accepted.',
      },
    ],
  },

  // STORY 7 — Una domenica in famiglia (Exercise 33)
  {
    id: 33,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Una domenica in famiglia',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 7 — A Sunday with the Family',
    story:
      'La domenica è il giorno della famiglia. La mattina dormiamo fino a tardi e poi facciamo una lunga colazione. Mio padre prepara i pancake e mia madre fa il succo d\'arancia.\n\nNel pomeriggio andiamo a trovare i nonni. La nonna cucina il pranzo per tutti e il nonno racconta le storie di quando era giovane. Dopo il pranzo giochiamo a carte o facciamo una passeggiata nel parco. La sera torniamo a casa e guardiamo un bel film. Amo queste domeniche.',
    vocab: [
      { word: 'fino a tardi', meaning: 'until late' },
      { word: 'il succo', meaning: 'the juice' },
      { word: 'i nonni', meaning: 'the grandparents' },
      { word: 'una passeggiata', meaning: 'a walk' },
      { word: 'giochiamo a carte', meaning: 'we play cards' },
      { word: 'amo', meaning: 'I love' },
    ],
    translation:
      'Sunday is the day of the family. In the morning we sleep until late and then we have a long breakfast. My father makes pancakes and my mother makes orange juice.\n\nIn the afternoon we go to visit our grandparents. Grandmother cooks lunch for everyone and grandfather tells stories from when he was young. After lunch we play cards or take a walk in the park. In the evening we return home and watch a nice film. I love these Sundays.',
    questions: [
      {
        question: 'What do they do on Sunday morning?',
        options: ['Sleep late and have a long breakfast', 'Go to work', 'Visit the market'],
        answer: 'Sleep late and have a long breakfast',
        explanation: '"La mattina dormiamo fino a tardi e poi facciamo una lunga colazione."',
      },
      {
        question: 'Who makes pancakes?',
        options: ['The father', 'The mother', 'The grandmother'],
        answer: 'The father',
        explanation: '"Mio padre prepara i pancake."',
      },
      {
        question: 'Who do they visit in the afternoon?',
        options: ['Their grandparents', 'Their friends', 'Their cousins'],
        answer: 'Their grandparents',
        explanation: '"Andiamo a trovare i nonni."',
      },
      {
        question: 'What does the grandfather do?',
        options: ['Tells stories from his youth', 'Cooks lunch', 'Plays cards'],
        answer: 'Tells stories from his youth',
        explanation: '"il nonno racconta le storie di quando era giovane."',
      },
      {
        question: 'What do they do after lunch?',
        options: ['Play cards or take a walk', 'Go to the market', 'Study Italian'],
        answer: 'Play cards or take a walk',
        explanation: '"Dopo il pranzo giochiamo a carte o facciamo una passeggiata nel parco."',
      },
      {
        question: 'Which pronoun matches the verb forms "dormiamo, facciamo, andiamo"?',
        options: ['noi', 'loro', 'io'],
        answer: 'noi',
        explanation: 'All these verbs end in -iamo/-iamo/-iamo, the noi forms: dormiamo, facciamo, andiamo.',
      },
      {
        question: 'Write one sentence about what your family likes to do on Sundays.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "La domenica la mia famiglia guarda un film." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 8 — A scuola (Exercise 34)
  {
    id: 34,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: A scuola',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 8 — At School',
    story:
      'La classe di italiano ha venti studenti. Gli studenti vengono da molti paesi: dalla Francia, dalla Spagna, dal Brasile e dal Giappone. La professoressa parla sempre in italiano e gli studenti ascoltano con attenzione.\n\nOggi la professoressa spiega il presente. Gli studenti fanno molti esercizi e parlano in coppia. Marco, uno studente brasiliano, dice: "L\'italiano è difficile ma bello." Tutti ridono. Alla fine della lezione la professoressa assegna i compiti per casa. La prossima lezione è lunedì.',
    vocab: [
      { word: 'gli studenti', meaning: 'the students' },
      { word: 'da molti paesi', meaning: 'from many countries' },
      { word: 'la professoressa', meaning: 'the teacher (female)' },
      { word: 'con attenzione', meaning: 'carefully' },
      { word: 'in coppia', meaning: 'in pairs' },
      { word: 'i compiti', meaning: 'the homework' },
    ],
    translation:
      'The Italian class has twenty students. The students come from many countries: from France, Spain, Brazil and Japan. The teacher always speaks in Italian and the students listen carefully.\n\nToday the teacher explains the present tense. The students do many exercises and talk in pairs. Marco, a Brazilian student, says: "Italian is difficult but beautiful." Everyone laughs. At the end of the lesson the teacher assigns homework. The next lesson is Monday.',
    questions: [
      {
        question: 'How many students are in the Italian class?',
        options: ['Twenty', 'Twelve', 'Thirty'],
        answer: 'Twenty',
        explanation: '"La classe di italiano ha venti studenti."',
      },
      {
        question: 'Where do the students come from?',
        options: ['France, Spain, Brazil and Japan', 'Only from Italy', 'Italy, France and Germany'],
        answer: 'France, Spain, Brazil and Japan',
        explanation: '"dalla Francia, dalla Spagna, dal Brasile e dal Giappone."',
      },
      {
        question: 'What does the teacher explain today?',
        options: ['The present tense', 'The future tense', 'The alphabet'],
        answer: 'The present tense',
        explanation: '"Oggi la professoressa spiega il presente."',
      },
      {
        question: 'What does Marco say about Italian?',
        options: ['It is difficult but beautiful', 'It is easy', 'He does not like it'],
        answer: 'It is difficult but beautiful',
        explanation: '"L\'italiano è difficile ma bello."',
      },
      {
        question: '"Gli studenti vengono..." — "vengono" comes from which verb?',
        options: ['venire', 'vedere', 'vendere'],
        answer: 'venire',
        explanation: 'vengono = they come, from venire (irregular present).',
      },
      {
        question: 'When is the next lesson?',
        options: ['On Monday', 'On Friday', 'Tomorrow'],
        answer: 'On Monday',
        explanation: '"La prossima lezione è lunedì."',
      },
      {
        question: 'Write one sentence in Italian about your Italian class or your studies.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Studio italiano ogni giorno." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 9 — Lavoro e passioni (Exercise 35)
  {
    id: 35,
    level: 'Level 6 — Reading and Stories',
    title: 'Read and Answer in Italian: Lavoro e passioni',
    instruction: 'Read the story, then answer the questions IN ITALIAN. Type full sentences.',
    type: 'story',
    storyTitle: 'Story 9 — Work and Passions',
    story:
      'Il signor Ferri lavora in una grande azienda a Milano. Ogni giorno prende il treno alle sette e arriva in ufficio alle otto e mezza. Al lavoro scrive email, parla con i clienti e partecipa a molte riunioni.\n\nMa il signor Ferri ha anche una passione: la fotografia. Nel fine settimana esce con la sua macchina fotografica e fotografa la natura, le persone e le città. Le sue foto piacciono a tutti. Dice sempre: "Il lavoro dà il pane, ma la fotografia dà la gioia."',
    vocab: [
      { word: 'l\'azienda', meaning: 'the company' },
      { word: 'i clienti', meaning: 'the clients' },
      { word: 'le riunioni', meaning: 'the meetings' },
      { word: 'la passione', meaning: 'the passion' },
      { word: 'la macchina fotografica', meaning: 'the camera' },
      { word: 'la gioia', meaning: 'the joy' },
    ],
    translation:
      'Mr. Ferri works in a big company in Milan. Every day he takes the train at seven and arrives at the office at eight thirty. At work he writes emails, talks to clients and takes part in many meetings.\n\nBut Mr. Ferri also has a passion: photography. At the weekend he goes out with his camera and photographs nature, people and cities. His photos are liked by everyone. He always says: "Work gives you bread, but photography gives you joy."',
    questions: [
      {
        question: 'Dove lavora il signor Ferri? (Where does Mr. Ferri work?)',
        type: 'text',
        acceptedAnswers: ['in una grande azienda a milano', 'a milano', 'lavora in una grande azienda a milano', 'in una grande azienda'],
        answer: 'Il signor Ferri lavora in una grande azienda a Milano.',
        explanation: 'The story says: "Il signor Ferri lavora in una grande azienda a Milano."',
      },
      {
        question: 'Che mezzo prende ogni giorno? (What transport does he take every day?)',
        type: 'text',
        acceptedAnswers: ['il treno', 'prende il treno', 'prende il treno alle sette'],
        answer: 'Prende il treno.',
        explanation: 'The story says: "prende il treno alle sette."',
      },
      {
        question: 'Cosa fa al lavoro? (What does he do at work?)',
        type: 'text',
        acceptedAnswers: ['scrive email', 'scrive le email', 'scrive email e parla con i clienti', 'scrive email parla con i clienti e partecipa alle riunioni'],
        answer: 'Scrive email, parla con i clienti e partecipa a riunioni.',
        explanation: 'The story says: "scrive email, parla con i clienti e partecipa a molte riunioni."',
      },
      {
        question: 'Che passione ha il signor Ferri? (What passion does Mr. Ferri have?)',
        type: 'text',
        acceptedAnswers: ['la fotografia', 'fotografa', 'la passione della fotografia'],
        answer: 'La fotografia.',
        explanation: 'The story says: "ha anche una passione: la fotografia."',
      },
      {
        question: 'Cosa fotografa nel fine settimana? (What does he photograph at the weekend?)',
        type: 'text',
        acceptedAnswers: ['la natura le persone e le città', 'la natura', 'la natura e le persone', 'le persone e le città', 'fotografa la natura le persone e le città'],
        answer: 'Fotografa la natura, le persone e le città.',
        explanation: 'The story says: "fotografa la natura, le persone e le città."',
      },
      {
        question: 'Trova due verbi al presente nella storia. (Find two present-tense verbs in the story.)',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Any two, e.g. lavora, prende, arriva, scrive, parla, partecipa, esce, fotografa, piacciono, dice, dà.',
        explanation: 'Examples: lavora, prende, arriva, scrive, parla, partecipa, esce, fotografa, piacciono, dice, dà.',
      },
    ],
  },

  // STORY 10 — Un caffè al bar (Exercise 36)
  {
    id: 36,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Un caffè al bar',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 10 — A Daily Ritual',
    story:
      'Il signor Moretti va ogni giorno allo stesso bar. Il barista lo conosce e sa già cosa vuole: un cappuccino e una brioche. Il signor Moretti legge il giornale e beve il caffè lentamente.\n\nAl bar incontra i suoi amici. Parlano di politica, di sport e del tempo. Alle nove il signor Moretti paga e va al lavoro. Dice sempre: "Il caffè è il mio piccolo rito del mattino!"',
    vocab: [
      { word: 'il barista', meaning: 'the bartender' },
      { word: 'la brioche', meaning: 'the croissant / sweet bun' },
      { word: 'lentamente', meaning: 'slowly' },
      { word: 'il rito', meaning: 'the ritual' },
      { word: 'paga', meaning: 'he/she pays (pagare)' },
      { word: 'il tempo', meaning: 'the weather' },
    ],
    translation:
      'Mr. Moretti goes to the same bar every day. The bartender knows him and already knows what he wants: a cappuccino and a brioche. Mr. Moretti reads the newspaper and drinks his coffee slowly.\n\nAt the bar he meets his friends. They talk about politics, sport and the weather. At nine Mr. Moretti pays and goes to work. He always says: "Coffee is my little morning ritual!"',
    questions: [
      {
        question: 'Where does Mr. Moretti go every day?',
        options: ['To the same bar', 'To a different café', 'To the office'],
        answer: 'To the same bar',
        explanation: '"Il signor Moretti va ogni giorno allo stesso bar."',
      },
      {
        question: 'What does the barista already know?',
        options: ['What he wants: a cappuccino and a brioche', 'His name', 'His job'],
        answer: 'What he wants: a cappuccino and a brioche',
        explanation: '"sa già cosa vuole: un cappuccino e una brioche."',
      },
      {
        question: 'What do the friends talk about?',
        options: ['Politics, sport and the weather', 'Their jobs only', 'Football only'],
        answer: 'Politics, sport and the weather',
        explanation: '"Parlano di politica, di sport e del tempo."',
      },
      {
        question: 'What happens at nine?',
        options: ['He pays and goes to work', 'He drinks a second coffee', 'He goes home'],
        answer: 'He pays and goes to work',
        explanation: '"Alle nove il signor Moretti paga e va al lavoro."',
      },
      {
        question: '"Il caffè è il mio piccolo rito" — which verb means "it is"?',
        options: ['è', 'va', 'beve'],
        answer: 'è',
        explanation: 'è = is, from essere.',
      },
      {
        question: 'Write one sentence in Italian about a daily morning routine of yours (using the present tense).',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "La mattina leggo il giornale e bevo un caffè." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 11 — Al supermercato (Exercise 37)
  {
    id: 37,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Al supermercato',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 11 — At the Supermarket',
    story:
      'Ogni venerdì sera, Elena e suo marito vanno al supermercato. Elena scrive una lista: la pasta, il pomodoro, il pane, il latte e i biscotti. Al negozio leggono le etichette e cercano le offerte.\n\nMentre Elena confronta i prezzi, suo marito mette le cose nel carrello. Alla cassa, la cassiera sorride e dice buonasera. Pagano con la carta e tornano a casa. La lista è troppo lunga, ma per loro è una piccola ma piacevole abitudine.',
    vocab: [
      { word: 'la lista', meaning: 'the list' },
      { word: 'le etichette', meaning: 'the labels' },
      { word: 'le offerte', meaning: 'the offers' },
      { word: 'i prezzi', meaning: 'the prices' },
      { word: 'il carrello', meaning: 'the trolley' },
      { word: 'la cassiera', meaning: 'the checkout assistant' },
    ],
    translation:
      'Every Friday evening, Elena and her husband go to the supermarket. Elena writes a list: pasta, tomatoes, bread, milk and biscuits. At the shop they read the labels and look for offers.\n\nWhile Elena compares prices, her husband puts things in the trolley. At the checkout the assistant smiles and says good evening. They pay by card and go home. The list is too long, but for them it is a small but pleasant habit.',
    questions: [
      {
        question: 'When do Elena and her husband go to the supermarket?',
        options: ['Every Friday evening', 'Every Monday morning', 'Only on holidays'],
        answer: 'Every Friday evening',
        explanation: '"Ogni venerdì sera, Elena e suo marito vanno al supermercato."',
      },
      {
        question: 'Who writes the shopping list?',
        options: ['Elena', 'Her husband', 'The checkout assistant'],
        answer: 'Elena',
        explanation: '"Elena scrive una lista."',
      },
      {
        question: 'What does Elena do while her husband fills the trolley?',
        options: ['Compares prices', 'Talks on the phone', 'Reads a book'],
        answer: 'Compares prices',
        explanation: '"Mentre Elena confronta i prezzi, suo marito mette le cose nel carrello."',
      },
      {
        question: 'How do they pay?',
        options: ['By card', 'By cash', 'By phone'],
        answer: 'By card',
        explanation: '"Pagano con la carta."',
      },
      {
        question: '"mette le cose nel carrello" — "mette" is the present of which verb?',
        options: ['mettere', 'mangiare', 'parlare'],
        answer: 'mettere',
        explanation: 'mettere (to put): io metto, lui/lei mette.',
      },
      {
        question: 'Write one sentence about where you do your weekly shopping, using the present tense.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Faccio la spesa al supermercato vicino a casa." Any correct sentence is accepted.',
      },
    ],
  },

  // STORY 12 — I piatti della nonna (Exercise 38)
  {
    id: 38,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: I piatti della nonna',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 12 — Grandma\'s Recipes',
    story:
      'La nonna Maria cucina da cinquant\'anni. Ogni domenica prepara il pranzo per tutta la famiglia: le lasagne, l\'arrosto e il tiramisù. Il segreto? Usa pochi ingredienti ma buonissimi.\n\nMentre cucina, la nonna mette la musica e canta. Mia madre l\'aiuta in cucina e io apparecchio la tavola. La nonna dice: "Il cibo è amore!" Nessuno resiste ai suoi piatti.',
    vocab: [
      { word: 'le lasagne', meaning: 'lasagne' },
      { word: 'l\'arrosto', meaning: 'the roast' },
      { word: 'gli ingredienti', meaning: 'the ingredients' },
      { word: 'apparecchio la tavola', meaning: 'I set the table' },
      { word: 'resiste', meaning: 'he/she resists (resistere)' },
      { word: 'il segreto', meaning: 'the secret' },
    ],
    translation:
      'Grandma Maria has been cooking for fifty years. Every Sunday she prepares lunch for the whole family: lasagne, roast and tiramisù. The secret? She uses few but excellent ingredients.\n\nWhile she cooks, Grandma puts on music and sings. My mother helps her in the kitchen and I set the table. Grandma says: "Food is love!" Nobody can resist her dishes.',
    questions: [
      {
        question: 'How long has Grandma Maria been cooking?',
        options: ['For fifty years', 'For five years', 'For fifteen years'],
        answer: 'For fifty years',
        explanation: '"La nonna Maria cucina da cinquant\'anni."',
      },
      {
        question: 'What does Grandma prepare every Sunday?',
        options: ['Lasagne, roast and tiramisù', 'Pizza and salad', 'Soup only'],
        answer: 'Lasagne, roast and tiramisù',
        explanation: '"le lasagne, l\'arrosto e il tiramisù."',
      },
      {
        question: 'What is her secret?',
        options: ['Few but excellent ingredients', 'Very expensive ingredients', 'A special oven'],
        answer: 'Few but excellent ingredients',
        explanation: '"Usa pochi ingredienti ma buonissimi."',
      },
      {
        question: 'What does Grandma do while she cooks?',
        options: ['Puts on music and sings', 'Watches TV', 'Talks on the phone'],
        answer: 'Puts on music and sings',
        explanation: '"la nonna mette la musica e canta."',
      },
      {
        question: '"l\'aiuta in cucina" — "aiuta" refers to whom?',
        options: ['Grandma (the mother helps her)', 'The narrator', 'The father'],
        answer: 'Grandma (the mother helps her)',
        explanation: '"Mia madre l\'aiuta (aiuta la nonna) in cucina."',
      },
      {
        question: 'Write one sentence about a traditional dish of your family.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Mia nonna prepara la pasta al forno." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 13 — Al parco nel weekend (Exercise 39)
  {
    id: 39,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Al parco nel weekend',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 13 — At the Park at the Weekend',
    story:
      'Nel fine settimana, il parco si riempie di vita. Le famiglie fanno un picnic sull\'erba, i bambini giocano a calcio e i cani corrono felici. Le coppie passeggiano lungo il lago e molti leggono sotto gli alberi.\n\nIo e i miei amici veniamo qui quasi sempre. Portiamo la chitarra, cantiamo e parliamo fino a sera. Quando il sole tramonta, torniamo a casa contenti. Il parco è il nostro posto del cuore.',
    vocab: [
      { word: 'si riempie', meaning: 'it fills up (riempirsi)' },
      { word: 'un picnic', meaning: 'a picnic' },
      { word: 'passeggiano', meaning: 'they stroll (passeggiare)' },
      { word: 'gli alberi', meaning: 'the trees' },
      { word: 'la chitarra', meaning: 'the guitar' },
      { word: 'tramonta', meaning: 'it sets (tramontare)' },
    ],
    translation:
      'At the weekend, the park fills with life. Families have a picnic on the grass, children play football and happy dogs run around. Couples stroll along the lake and many people read under the trees.\n\nMy friends and I come here almost always. We bring the guitar, sing and talk until evening. When the sun sets, we go home happy. The park is our place of the heart.',
    questions: [
      {
        question: 'What do families do in the park?',
        options: ['Have a picnic on the grass', 'Go fishing', 'Ride bikes'],
        answer: 'Have a picnic on the grass',
        explanation: '"Le famiglie fanno un picnic sull\'erba."',
      },
      {
        question: 'What do children do?',
        options: ['Play football', 'Swim', 'Read'],
        answer: 'Play football',
        explanation: '"i bambini giocano a calcio."',
      },
      {
        question: 'Who strolls along the lake?',
        options: ['Couples', 'Grandparents', 'The dogs'],
        answer: 'Couples',
        explanation: '"Le coppie passeggiano lungo il lago."',
      },
      {
        question: 'When do the friends go home?',
        options: ['When the sun sets', 'At noon', 'In the early morning'],
        answer: 'When the sun sets',
        explanation: '"Quando il sole tramonta, torniamo a casa."',
      },
      {
        question: '"torniamo a casa contenti" — "contenti" refers to...?',
        options: ['We (the friends)', 'The dogs', 'The children'],
        answer: 'We (the friends)',
        explanation: 'torniamo (we return) ... contenti (happy) — the narrator and his/her friends.',
      },
      {
        question: 'Write one sentence about what you like to do at the weekend.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Nel weekend vado al parco con gli amici." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 14 — La mia giornata tipo (Exercise 40)
  {
    id: 40,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: La mia giornata tipo',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 14 — A Typical Day',
    story:
      'La mia giornata inizia alle sei e mezza. Faccio colazione, preparo lo zaino e vado a scuola in bici. Io studio al liceo e amo soprattutto la storia e l\'inglese.\n\nAlle otto entra la professoressa e cominciano le lezioni. Durante l\'intervallo parlo con gli amici e mangio una merenda. A mezzogiorno finisco a scuola e torno a casa. Nel pomeriggio faccio i compiti, suono la chitarra e leggo un po\'. La sera sono stanco ma felice.',
    vocab: [
      { word: 'lo zaino', meaning: 'the backpack' },
      { word: 'il liceo', meaning: 'the high school' },
      { word: 'l\'intervallo', meaning: 'the break' },
      { word: 'la merenda', meaning: 'the snack' },
      { word: 'i compiti', meaning: 'the homework' },
      { word: 'suono la chitarra', meaning: 'I play the guitar' },
    ],
    translation:
      'My day starts at six thirty. I have breakfast, pack my backpack and go to school by bike. I study at high school and I especially love history and English.\n\nAt eight the teacher comes in and the lessons begin. During the break I talk with my friends and eat a snack. At midday school finishes and I go home. In the afternoon I do my homework, play the guitar and read a bit. In the evening I am tired but happy.',
    questions: [
      {
        question: 'When does the day start?',
        options: ['At six thirty', 'At eight', 'At noon'],
        answer: 'At six thirty',
        explanation: '"La mia giornata inizia alle sei e mezza."',
      },
      {
        question: 'How does the narrator go to school?',
        options: ['By bike', 'By bus', 'On foot'],
        answer: 'By bike',
        explanation: '"vado a scuola in bici."',
      },
      {
        question: 'Which subjects does the narrator love?',
        options: ['History and English', 'Maths and Physics', 'Art and Music'],
        answer: 'History and English',
        explanation: '"amo soprattutto la storia e l\'inglese."',
      },
      {
        question: 'What happens during the break?',
        options: ['The narrator talks with friends and eats a snack', 'The lessons start', 'The narrator sleeps'],
        answer: 'The narrator talks with friends and eats a snack',
        explanation: '"Durante l\'intervallo parlo con gli amici e mangio una merenda."',
      },
      {
        question: 'What does the narrator do in the afternoon?',
        options: ['Homework, guitar and reading', 'Sleeps all afternoon', 'Plays videogames only'],
        answer: 'Homework, guitar and reading',
        explanation: '"faccio i compiti, suono la chitarra e leggo un po\'."',
      },
      {
        question: 'Write one sentence in Italian about your typical day.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "La mia giornata comincia alle sette." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 15 — Sul treno (Exercise 41)
  {
    id: 41,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Sul treno',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 15 — On the Train',
    story:
      'Ogni mattina prendo il treno per andare al lavoro. Il viaggio dura mezz\'ora. All\'inizio la folla mi infastidiva, ma adesso mi piace: osservo le persone e invento le loro storie.\n\nLa signora in rosso legge un romanzo. Il ragazzo con gli auricolari ascolta la musica e muove la testa. Un signore dorme con il giornale in mano. Poi arriva la mia fermata e scendo. Ogni giorno è un piccolo film.',
    vocab: [
      { word: 'la folla', meaning: 'the crowd' },
      { word: 'osservo', meaning: 'I observe (osservare)' },
      { word: 'invento', meaning: 'I invent (inventare)' },
      { word: 'gli auricolari', meaning: 'the earphones' },
      { word: 'la fermata', meaning: 'the stop' },
      { word: 'scendo', meaning: 'I get off (scendere)' },
    ],
    translation:
      'Every morning I take the train to go to work. The journey lasts half an hour. At first the crowd annoyed me, but now I like it: I observe the people and invent their stories.\n\nThe lady in red reads a novel. The boy with earphones listens to music and moves his head. A man sleeps with the newspaper in his hand. Then my stop arrives and I get off. Every day is a little film.',
    questions: [
      {
        question: 'How long does the journey last?',
        options: ['Half an hour', 'Two hours', 'Ten minutes'],
        answer: 'Half an hour',
        explanation: '"Il viaggio dura mezz\'ora."',
      },
      {
        question: 'What does the narrator do on the train?',
        options: ['Observes people and invents their stories', 'Reads the newspaper', 'Sleeps'],
        answer: 'Observes people and invents their stories',
        explanation: '"osservo le persone e invento le loro storie."',
      },
      {
        question: 'What does the lady in red do?',
        options: ['Reads a novel', 'Listens to music', 'Sleeps'],
        answer: 'Reads a novel',
        explanation: '"La signora in rosso legge un romanzo."',
      },
      {
        question: 'What does the boy with earphones do?',
        options: ['Listens to music and moves his head', 'Reads a book', 'Talks on the phone'],
        answer: 'Listens to music and moves his head',
        explanation: '"il ragazzo con gli auricolari ascolta la musica e muove la testa."',
      },
      {
        question: '"scendo" is the present of which verb?',
        options: ['scendere', 'salire', 'sentire'],
        answer: 'scendere',
        explanation: 'scendere (to get off / go down): io scendo.',
      },
      {
        question: 'Write one sentence about what you observe during a commute or a trip.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Sul treno leggo o ascolto la musica." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 16 — Allo stadio (Exercise 42)
  {
    id: 42,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Allo stadio',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 16 — At the Stadium',
    story:
      'La squadra della nostra città gioca in casa sabato. Lo stadio è pieno di tifosi che agitano le bandiere e cantano. Io vado sempre con mio padre: per lui il calcio è una religione.\n\nDurante la partita tutti urlano. Quando la squadra segna, il pubblico esplode in un urlo di gioia. Mio padre salta e mi abbraccia. Se la squadra perde, invece, nessuno parla. Ma noi ci divertiamo lo stesso: è la nostra tradizione.',
    vocab: [
      { word: 'i tifosi', meaning: 'the fans' },
      { word: 'le bandiere', meaning: 'the flags' },
      { word: 'una religione', meaning: 'a religion' },
      { word: 'segna', meaning: 'he/she scores (segnare)' },
      { word: 'esplode', meaning: 'he/she explodes (esplodere)' },
      { word: 'perde', meaning: 'he/she loses (perdere)' },
    ],
    translation:
      'Our city\'s team plays at home on Saturday. The stadium is full of fans who wave flags and sing. I always go with my father: for him football is a religion.\n\nDuring the match everyone shouts. When the team scores, the crowd explodes with a cry of joy. My father jumps and hugs me. If the team loses, instead, nobody talks. But we enjoy ourselves anyway: it is our tradition.',
    questions: [
      {
        question: 'What do the fans do?',
        options: ['Wave flags and sing', 'Read newspapers', 'Sell food'],
        answer: 'Wave flags and sing',
        explanation: '"tifosi che agitano le bandiere e cantano."',
      },
      {
        question: 'Who does the narrator always go to the stadium with?',
        options: ['With his father', 'With his friends', 'With his brother'],
        answer: 'With his father',
        explanation: '"Io vado sempre con mio padre."',
      },
      {
        question: 'What happens when the team scores?',
        options: ['The crowd explodes with joy', 'Everyone goes home', 'The stadium goes silent'],
        answer: 'The crowd explodes with joy',
        explanation: '"il pubblico esplode in un urlo di gioia."',
      },
      {
        question: 'What happens if the team loses?',
        options: ['Nobody talks', 'They sing louder', 'They change teams'],
        answer: 'Nobody talks',
        explanation: '"Se la squadra perde, invece, nessuno parla."',
      },
      {
        question: '"per lui il calcio è una religione" — what does "per lui" mean?',
        options: ['for him', 'for her', 'for us'],
        answer: 'for him',
        explanation: 'per lui = for him (the father), a fixed phrase with per.',
      },
      {
        question: 'Write one sentence about a sport or hobby you practice or watch regularly.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "La domenica guardo la partita con mio padre." Any correct sentence is accepted.',
      },
    ],
  },

  // STORY 17 — Dal dentista (Exercise 43)
  {
    id: 43,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Dal dentista',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 17 — At the Dentist',
    story:
      'Oggi vado dal dentista: mi fa male un dente. La mia visita è alle dieci. Quando entro nello studio, sento il tipico profumo di disinfettante e il mio cuore batte forte.\n\nIl dentista è gentile e mi tranquillizza. "Apri la bocca, per favore," dice con calma. Dopo un controllo veloce, mi spiega che devo usare il filo interdentale. Esco sollevato: nessun buco!',
    vocab: [
      { word: 'mi fa male', meaning: 'it hurts me' },
      { word: 'lo studio', meaning: 'the surgery / office' },
      { word: 'batte forte', meaning: 'beats strongly' },
      { word: 'mi tranquillizza', meaning: 'he/she reassures me' },
      { word: 'il filo interdentale', meaning: 'the dental floss' },
      { word: 'sollevato', meaning: 'relieved' },
    ],
    translation:
      'Today I go to the dentist: a tooth hurts me. My appointment is at ten. When I enter the surgery, I smell the typical smell of disinfectant and my heart beats strongly.\n\nMy dentist is kind and reassures me. "Open your mouth, please," he says calmly. After a quick check, he explains that I have to use dental floss. I leave relieved: no cavity!',
    questions: [
      {
        question: 'Why does the narrator go to the dentist?',
        options: ['A tooth hurts', 'He has a headache', 'He needs a check-up for work'],
        answer: 'A tooth hurts',
        explanation: '"mi fa male un dente."',
      },
      {
        question: 'What time is the appointment?',
        options: ['At ten', 'At eight', 'At twelve'],
        answer: 'At ten',
        explanation: '"La mia visita è alle dieci."',
      },
      {
        question: 'What does the narrator feel when entering the surgery?',
        options: ['The smell of disinfectant and a beating heart', 'A headache', 'Cold'],
        answer: 'The smell of disinfectant and a beating heart',
        explanation: '"sento il tipico profumo di disinfettante e il mio cuore batte forte."',
      },
      {
        question: 'What must the narrator use?',
        options: ['Dental floss', 'A new toothbrush', 'Mouthwash'],
        answer: 'Dental floss',
        explanation: '"devo usare il filo interdentale."',
      },
      {
        question: 'How does the narrator leave?',
        options: ['Relieved, with no cavity', 'Worried', 'Angry'],
        answer: 'Relieved, with no cavity',
        explanation: '"Esco sollevato: nessun buco!"',
      },
      {
        question: 'Write one sentence in Italian about what you do when you have a health problem.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Quando ho mal di testa, prendo una medicina." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 18 — Shopping in centro (Exercise 44)
  {
    id: 44,
    level: 'Level 6 — Reading and Stories',
    title: 'Story: Shopping in centro',
    instruction: 'Read the story, then answer the comprehension questions.',
    type: 'story',
    storyTitle: 'Story 18 — Shopping in the Centre',
    story:
      'Sabato pomeriggio, io e mia sorella andiamo a fare shopping in centro. I negozi sono pieni di vetrine colorate. Prima compriamo un regalo per nostra madre, poi cerchiamo una maglietta per me.\n\nIo provo tre taglie diverse. Mia sorella dice che il blu mi sta meglio. Alla fine scelgo la maglietta blu e paghiamo alla cassa. Prendiamo anche un gelato al volo e torniamo a casa soddisfatte.',
    vocab: [
      { word: 'le vetrine', meaning: 'the shop windows' },
      { word: 'il regalo', meaning: 'the gift' },
      { word: 'la maglietta', meaning: 'the t-shirt' },
      { word: 'le taglie', meaning: 'the sizes' },
      { word: 'mi sta meglio', meaning: 'it suits me better' },
      { word: 'soddisfatte', meaning: 'satisfied (feminine plural)' },
    ],
    translation:
      'On Saturday afternoon my sister and I go shopping in the centre. The shops are full of colourful windows. First we buy a gift for our mother, then we look for a t-shirt for me.\n\nI try three different sizes. My sister says that blue suits me better. In the end I choose the blue t-shirt and we pay at the cash desk. We also grab a gelato and go home satisfied.',
    questions: [
      {
        question: 'When do the sisters go shopping?',
        options: ['On Saturday afternoon', 'On Sunday morning', 'On Friday evening'],
        answer: 'On Saturday afternoon',
        explanation: '"Sabato pomeriggio, io e mia sorella andiamo a fare shopping."',
      },
      {
        question: 'What do they buy first?',
        options: ['A gift for their mother', 'A t-shirt', 'A gelato'],
        answer: 'A gift for their mother',
        explanation: '"Prima compriamo un regalo per nostra madre."',
      },
      {
        question: 'What are the sisters looking for for the narrator?',
        options: ['A t-shirt', 'A pair of shoes', 'A bag'],
        answer: 'A t-shirt',
        explanation: '"poi cerchiamo una maglietta per me."',
      },
      {
        question: 'Which colour suits the narrator better according to her sister?',
        options: ['Blue', 'Red', 'Green'],
        answer: 'Blue',
        explanation: '"il blu mi sta meglio."',
      },
      {
        question: 'How do they end the afternoon?',
        options: ['With a gelato, going home satisfied', 'With another shop', 'With a coffee'],
        answer: 'With a gelato, going home satisfied',
        explanation: '"Prendiamo anche un gelato al volo e torniamo a casa soddisfatte."',
      },
      {
        question: 'Write one sentence about shopping with someone you like.',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Write any correct sentence in Italian.',
        explanation: 'Example: "Con la mia amica andiamo spesso in centro." Any correct present-tense sentence is accepted.',
      },
    ],
  },

  // STORY 19 — La nuova collega (Exercise 45)
  {
    id: 45,
    level: 'Level 6 — Reading and Stories',
    title: 'Read and Answer in Italian: La nuova collega',
    instruction: 'Read the story, then answer the questions IN ITALIAN. Type full sentences.',
    type: 'story',
    storyTitle: 'Story 19 — The New Colleague',
    story:
      'All\'ufficio c\'è una nuova collega: si chiama Paola. Ogni giorno arriva alle otto e mezza, saluta tutti con un sorriso e accende il computer. Lei lavora con ordine, risponde al telefono e partecipa alle riunioni.\n\nLa pausa caffè la passiamo insieme: Paola ride spesso e racconta tante storie divertenti. Quando ha un problema, chiede subito aiuto e non si vergogna mai. Tutti all\'ufficio la stimano molto. Lei dice sempre che la squadra è la cosa più importante.',
    vocab: [
      { word: 'la collega', meaning: 'the (female) colleague' },
      { word: 'accende', meaning: 'he/she turns on (accendere)' },
      { word: 'con ordine', meaning: 'in an orderly way' },
      { word: 'la pausa', meaning: 'the break' },
      { word: 'si vergogna', meaning: 'he/she feels ashamed (vergognarsi)' },
      { word: 'la stimano', meaning: 'they esteem her (stimare)' },
    ],
    translation:
      'At the office there is a new colleague: her name is Paola. Every day she arrives at eight thirty, greets everyone with a smile and switches on the computer. She works in an orderly way, answers the phone and takes part in the meetings.\n\nWe spend the coffee break together: Paola often laughs and tells many funny stories. When she has a problem, she immediately asks for help and is never ashamed. Everyone at the office esteems her a lot. She always says that the team is the most important thing.',
    questions: [
      {
        question: 'Come si chiama la nuova collega? (What is the new colleague\'s name?)',
        type: 'text',
        acceptedAnswers: ['paola', 'si chiama paola', 'la nuova collega si chiama paola', 'il suo nome è paola'],
        answer: 'Si chiama Paola.',
        explanation: 'The story says: "si chiama Paola."',
      },
      {
        question: 'Quando arriva ogni giorno? (When does she arrive every day?)',
        type: 'text',
        acceptedAnswers: ['alle otto e mezza', 'arriva alle otto e mezza', 'alle otto e trenta'],
        answer: 'Arriva alle otto e mezza.',
        explanation: 'The story says: "Ogni giorno arriva alle otto e mezza."',
      },
      {
        question: 'Cosa fa nella pausa caffè? (What does she do during the coffee break?)',
        type: 'text',
        acceptedAnswers: ['ride e racconta storie', 'ride spesso e racconta storie divertenti', 'racconta storie divertenti', 'ride', 'lavora', 'parla con i colleghi'],
        answer: 'Nella pausa caffè ride e racconta storie divertenti.',
        explanation: 'The story says: "Paola ride spesso e racconta tante storie divertenti."',
      },
      {
        question: 'Cosa fa quando ha un problema? (What does she do when she has a problem?)',
        type: 'text',
        acceptedAnswers: ['chiede aiuto', 'chiede subito aiuto', 'chiede aiuto e non si vergogna', 'aiuta i colleghi'],
        answer: 'Quando ha un problema chiede subito aiuto.',
        explanation: 'The story says: "Quando ha un problema, chiede subito aiuto."',
      },
      {
        question: 'Cosa dice che è la cosa più importante? (What does she say is the most important thing?)',
        type: 'text',
        acceptedAnswers: ['la squadra', 'dice che la squadra è la cosa più importante', 'che la squadra è la cosa più importante', 'la cosa più importante è la squadra'],
        answer: 'Dice che la squadra è la cosa più importante.',
        explanation: 'The story says: "Lei dice sempre che la squadra è la cosa più importante."',
      },
      {
        question: 'Trova due verbi al presente nella storia. (Find two present-tense verbs in the story.)',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Any two, e.g. arriva, saluta, lavora, risponde, partecipa, ride, racconta, chiede, stima.',
        explanation: 'Examples: arriva, saluta, lavora, risponde, partecipa, ride, racconta, chiede, stima.',
      },
    ],
  },

  // Exercise 30 — Final Mastery Test
  {
    id: 30,
    level: 'Level 7 — Final Proficiency',
    title: 'Present Tense Mastery Test',
    instruction: 'Complete the final test. It covers everything from the whole lesson. Do your best!',
    type: 'mastery',
    questions: [
      // -ARE, -ERE, -IRE conjugation
      {
        question: 'Io ______ (parlare) con il mio amico.',
        options: ['parlo', 'parli', 'parla'],
        answer: 'parlo',
      },
      {
        question: 'Voi ______ (leggere) il giornale.',
        options: ['leggete', 'leggono', 'leggiamo'],
        answer: 'leggete',
      },
      {
        question: 'Loro ______ (dormire) molto la domenica.',
        options: ['dormo', 'dorme', 'dormono'],
        answer: 'dormono',
      },
      {
        question: 'Tu ______ (studiare) all\'università.',
        options: ['studi', 'studia', 'studiate'],
        answer: 'studi',
      },
      // All six persons
      {
        question: 'Which is the correct form of lavorare for lui/lei?',
        options: ['lavoro', 'lavori', 'lavora', 'lavoriamo'],
        answer: 'lavora',
      },
      {
        question: 'Which is the correct form of scrivere for noi?',
        options: ['scriviamo', 'scrivete', 'scrivono', 'scrivo'],
        answer: 'scriviamo',
      },
      {
        question: 'Which is the correct form of partire for io?',
        options: ['parti', 'parte', 'parto', 'partono'],
        answer: 'parto',
      },
      // Sentence comprehension
      {
        question: '"Giulia mangia la pasta ogni sera." What does this mean?',
        options: ['Giulia eats pasta every evening.', 'Giulia cooks pasta every evening.', 'Giulia buys pasta every evening.'],
        answer: 'Giulia eats pasta every evening.',
      },
      {
        question: '"Loro abitano in una casa grande." What does this mean?',
        options: ['They work in a big house.', 'They live in a big house.', 'They sleep in a big house.'],
        answer: 'They live in a big house.',
      },
      // Italian → English
      {
        question: 'What does "Noi apriamo il negozio alle nove" mean?',
        options: ['We open the shop at nine.', 'We close the shop at nine.', 'We clean the shop at nine.'],
        answer: 'We open the shop at nine.',
      },
      {
        question: 'What does "Tu scrivi una lettera" mean?',
        options: ['You read a letter.', 'You write a letter.', 'You send a letter.'],
        answer: 'You write a letter.',
      },
      // English → Italian
      {
        question: 'How do you say "I live in Italy"?',
        options: ['Io abito in Italia.', 'Io abita in Italia.', 'Io abitano in Italia.'],
        answer: 'Io abito in Italia.',
      },
      {
        question: 'How do you say "We drink coffee" (bere)?',
        options: ['Noi beviamo un caffè.', 'Noi bevi un caffè.', 'Noi bevete un caffè.'],
        answer: 'Noi beviamo un caffè.',
      },
      // Subject recognition
      {
        question: '"Lavorano molto." Who works? (lavorano)',
        options: ['He', 'We', 'They'],
        answer: 'They',
      },
      {
        question: '"Balliamo insieme." Who dances? (balliamo)',
        options: ['We', 'They', 'I'],
        answer: 'We',
      },
      // Verb conjugation
      {
        question: 'Complete: Loro ______ (ascoltare) la radio.',
        options: ['ascoltano', 'ascoltiamo', 'ascolti'],
        answer: 'ascoltano',
      },
      {
        question: 'Complete: Tu ______ (finire) i compiti. (finire has -isc-)',
        options: ['finisci', 'finisce', 'finiamo'],
        answer: 'finisci',
      },
      // Story-based
      {
        question: 'Story: "Paolo lavora in un bar. Ogni mattina apre il bar e prepara i caffè." Where does Paolo work?',
        options: ['in a restaurant', 'in a bar', 'in a hotel'],
        answer: 'in a bar',
      },
      {
        question: 'Story: "Paolo prepara i caffè ogni mattina. Poi serve i clienti." What does Paolo do every morning?',
        options: ['He prepares coffees and serves customers.', 'He sleeps until noon.', 'He reads the newspaper.'],
        answer: 'He prepares coffees and serves customers.',
      },
      {
        question: 'Story: "La sera, Paolo cammina con il suo cane." What does Paolo do in the evening?',
        options: ['He walks with his dog.', 'He works in the bar.', 'He drinks a coffee.'],
        answer: 'He walks with his dog.',
      },
      // Sentence production
      {
        question: 'Answer in Italian: "Che cosa fai oggi?" (Write one sentence about what you do today.)',
        type: 'text',
        acceptedAnswers: [],
        answer: 'Any correct sentence in Italian, e.g. "Oggi lavoro", "Oggi studio italiano", "Oggi leggo un libro".',
      },
    ],
  },
];

export const presenteFinalBands = [
  { min: 90, grade: 'Excellent!', color: 'green', message: 'You are confident with regular Italian present tense.' },
  { min: 75, grade: 'Good!', color: 'gold', message: 'You understand the main patterns. Review a few areas.' },
  { min: 60, grade: 'Almost there!', color: 'gold', message: 'Practice the verb endings and sentence structure again.' },
  { min: 0, grade: 'Keep practicing!', color: 'red', message: 'Review the lessons and repeat the exercises.' },
];