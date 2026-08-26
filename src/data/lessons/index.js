const lessons = [
  {
    id: 'lesson-1',
    title: 'Greetings',
    level: 'A1',
    unit: 1,
    unitTitle: 'First Steps',
    description: 'Learn essential Italian greetings and how to say hello and goodbye.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Italian Greetings',
          text: 'In Italian, greetings change based on the time of day. Here are the most common ones:',
          items: [
            { italian: 'Buongiorno', english: 'Good morning / Good day', pronunciation: 'bwon-JOOR-noh' },
            { italian: 'Buonasera', english: 'Good evening', pronunciation: 'bwoh-nah-SEH-rah' },
            { italian: 'Buonanotte', english: 'Good night', pronunciation: 'bwoh-nah-NOHT-teh' },
            { italian: 'Ciao', english: 'Hi / Bye (informal)', pronunciation: 'CHOW' },
            { italian: 'Salve', english: 'Hello (neutral)', pronunciation: 'SAHL-veh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Buongiorno! Come sta?', english: 'Good morning! How are you?' },
            { speaker: 'B', italian: 'Buongiorno! Bene, grazie. E Lei?', english: 'Good morning! Well, thank you. And you?' },
            { speaker: 'A', italian: 'Bene, grazie!', english: 'Well, thank you!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "Good morning" in Italian?',
          options: ['Buonasera', 'Buongiorno', 'Buonanotte', 'Ciao'],
          answer: 'Buongiorno',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Arrivederci, a domani!',
          answer: 'Goodbye, see you tomorrow!',
          hint: 'Arrivederci = Goodbye (formal)',
        },
      },
      {
        type: 'listening',
        content: {
          italian: 'Buongiorno, come sta?',
          answer: 'Good morning, how are you?',
          options: ['Good morning, how are you?', 'Good evening, how are you?', 'Hello, where are you?', 'Goodbye, see you soon.'],
        },
      },
      {
        type: 'review',
        content: {
          title: 'Greetings Review',
          items: [
            { italian: 'Buongiorno', english: 'Good morning' },
            { italian: 'Buonasera', english: 'Good evening' },
            { italian: 'Buonanotte', english: 'Good night' },
            { italian: 'Ciao', english: 'Hi / Bye (informal)' },
            { italian: 'Arrivederci', english: 'Goodbye (formal)' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-2',
    title: 'Introducing Yourself',
    level: 'A1',
    unit: 1,
    unitTitle: 'First Steps',
    description: 'Learn how to introduce yourself and ask others about themselves.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Self-Introduction',
          text: 'To introduce yourself in Italian, you can use these phrases:',
          items: [
            { italian: 'Mi chiamo...', english: 'My name is...', pronunciation: 'mee KYAH-moh' },
            { italian: 'Come ti chiami?', english: 'What is your name? (informal)', pronunciation: 'KOH-meh tee KYAH-mee' },
            { italian: 'Come si chiama?', english: 'What is your name? (formal)', pronunciation: 'KOH-meh see KYAH-mah' },
            { italian: 'Piacere', english: 'Nice to meet you', pronunciation: 'pyah-CHEH-reh' },
            { italian: 'Sono di...', english: 'I am from...', pronunciation: 'SOH-noh dee' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Ciao! Come ti chiami?', english: 'Hi! What is your name?' },
            { speaker: 'B', italian: 'Mi chiamo Maria. E tu?', english: 'My name is Maria. And you?' },
            { speaker: 'A', italian: 'Mi chiamo Luca. Piacere!', english: 'My name is Luca. Nice to meet you!' },
            { speaker: 'B', italian: 'Piacere, Luca! Sono di Roma.', english: 'Nice to meet you, Luca! I am from Rome.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "My name is..." in Italian?',
          options: ['Come chiamo', 'Mi chiamo', 'Io chiamo', 'Tu chiami'],
          answer: 'Mi chiamo',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I am from Milan.',
          answer: 'Sono di Milano.',
          hint: 'Sono = I am, di = from',
        },
      },
      {
        type: 'sentence_order',
        content: {
          words: ['Mi', 'chiamo', 'Marco', '.'],
          answer: 'Mi chiamo Marco.',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Introducing Yourself Review',
          items: [
            { italian: 'Mi chiamo...', english: 'My name is...' },
            { italian: 'Come ti chiami?', english: 'What is your name?' },
            { italian: 'Piacere', english: 'Nice to meet you' },
            { italian: 'Sono di...', english: 'I am from...' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-3',
    title: 'Numbers 1-20',
    level: 'A1',
    unit: 2,
    unitTitle: 'Building Blocks',
    description: 'Learn to count from 1 to 20 in Italian.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Italian Numbers 1-20',
          text: 'Here are the Italian numbers from 1 to 20:',
          items: [
            { italian: 'Uno (1)', english: 'One', pronunciation: 'OO-noh' },
            { italian: 'Due (2)', english: 'Two', pronunciation: 'DOO-eh' },
            { italian: 'Tre (3)', english: 'Three', pronunciation: 'TREH' },
            { italian: 'Quattro (4)', english: 'Four', pronunciation: 'KWAHT-troh' },
            { italian: 'Cinque (5)', english: 'Five', pronunciation: 'CHEEN-kweh' },
            { italian: 'Sei (6)', english: 'Six', pronunciation: 'SEH-ee' },
            { italian: 'Sette (7)', english: 'Seven', pronunciation: 'SEHT-teh' },
            { italian: 'Otto (8)', english: 'Eight', pronunciation: 'OHT-toh' },
            { italian: 'Nove (9)', english: 'Nine', pronunciation: 'NOH-veh' },
            { italian: 'Dieci (10)', english: 'Ten', pronunciation: 'DYEH-chee' },
            { italian: 'Undici (11)', english: 'Eleven', pronunciation: 'OON-dee-chee' },
            { italian: 'Dodici (12)', english: 'Twelve', pronunciation: 'DOH-dee-chee' },
            { italian: 'Tredici (13)', english: 'Thirteen', pronunciation: 'TREH-dee-chee' },
            { italian: 'Quattordici (14)', english: 'Fourteen', pronunciation: 'kwaht-TOR-dee-chee' },
            { italian: 'Quindici (15)', english: 'Fifteen', pronunciation: 'KWEEN-dee-chee' },
            { italian: 'Sedici (16)', english: 'Sixteen', pronunciation: 'SEH-dee-chee' },
            { italian: 'Diciassette (17)', english: 'Seventeen', pronunciation: 'dee-chahs-SEHT-teh' },
            { italian: 'Diciotto (18)', english: 'Eighteen', pronunciation: 'dee-CHOHT-toh' },
            { italian: 'Diciannove (19)', english: 'Nineteen', pronunciation: 'dee-chahn-NOH-veh' },
            { italian: 'Venti (20)', english: 'Twenty', pronunciation: 'VEHN-tee' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is the number 7 in Italian?',
          options: ['Sei', 'Sette', 'Otto', 'Nove'],
          answer: 'Sette',
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "five" in Italian?',
          options: ['Quattro', 'Cinque', 'Sei', 'Tre'],
          answer: 'Cinque',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Ho dodici libri.',
          answer: 'I have twelve books.',
          hint: 'dodici = twelve, libri = books',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Cinque, sei, ___ , otto',
          answer: 'sette',
          hint: 'The number between 6 and 8',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Numbers Review',
          items: [
            { italian: 'Uno', english: '1' },
            { italian: 'Cinque', english: '5' },
            { italian: 'Dieci', english: '10' },
            { italian: 'Quindici', english: '15' },
            { italian: 'Venti', english: '20' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-4',
    title: 'Food and Drinks',
    level: 'A1',
    unit: 3,
    unitTitle: 'Everyday Life',
    description: 'Learn essential food and drink vocabulary for ordering at a restaurant.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Food and Drinks Vocabulary',
          text: 'Italian cuisine is famous worldwide. Here are some essential food and drink words:',
          items: [
            { italian: 'Il pane', english: 'Bread', pronunciation: 'eel PAH-neh' },
            { italian: 'L\'acqua', english: 'Water', pronunciation: 'lahk-KWAH' },
            { italian: 'Il caffee', english: 'Coffee', pronunciation: 'eel kahf-FEH' },
            { italian: 'La pizza', english: 'Pizza', pronunciation: 'lah PEET-tsah' },
            { italian: 'La pasta', english: 'Pasta', pronunciation: 'lah PAHS-tah' },
            { italian: 'Il vino', english: 'Wine', pronunciation: 'eel VEE-noh' },
            { italian: 'La birra', english: 'Beer', pronunciation: 'lah BEER-rah' },
            { italian: 'La frutta', english: 'Fruit', pronunciation: 'lah FROOT-tah' },
            { italian: 'Le verdure', english: 'Vegetables', pronunciation: 'leh vehr-DOO-reh' },
            { italian: 'La carne', english: 'Meat', pronunciation: 'lah KAR-neh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Waiter', italian: 'Buonasera! Cosa desidera?', english: 'Good evening! What would you like?' },
            { speaker: 'Customer', italian: 'Vorrei una pizza Margherita, per favore.', english: 'I would like a Margherita pizza, please.' },
            { speaker: 'Waiter', italian: 'E da bere?', english: 'And to drink?' },
            { speaker: 'Customer', italian: 'Un bicchiere d\'acqua, grazie.', english: 'A glass of water, thank you.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "water" in Italian?',
          options: ['Vino', 'Birra', 'Acqua', 'Caffe'],
          answer: 'Acqua',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I would like a coffee, please.',
          answer: 'Vorrei un caffe, per favore.',
          hint: 'Vorrei = I would like',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Vorrei una ___ con la mozzarella.',
          answer: 'pizza',
          hint: 'The most famous Italian dish',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Food and Drinks Review',
          items: [
            { italian: 'Il pane', english: 'Bread' },
            { italian: "L'acqua", english: 'Water' },
            { italian: 'Il caffee', english: 'Coffee' },
            { italian: 'La pizza', english: 'Pizza' },
            { italian: 'Il vino', english: 'Wine' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-5',
    title: 'Family Members',
    level: 'A1',
    unit: 3,
    unitTitle: 'Everyday Life',
    description: 'Learn vocabulary for family members in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Family Vocabulary',
          text: 'Family is very important in Italian culture. Here are the family members:',
          items: [
            { italian: 'La madre / La mamma', english: 'Mother / Mom', pronunciation: 'lah MAH-dreh / MAHM-mah' },
            { italian: 'Il padre / Il papà', english: 'Father / Dad', pronunciation: 'eel PAH-dreh / pah-PAH' },
            { italian: 'Il fratello', english: 'Brother', pronunciation: 'eel frah-TEHL-loh' },
            { italian: 'La sorella', english: 'Sister', pronunciation: 'lah soh-REHL-lah' },
            { italian: 'I genitori', english: 'Parents', pronunciation: 'ee jeh-nee-TOH-ree' },
            { italian: 'Il figlio', english: 'Son', pronunciation: 'eel FEE-lyoh' },
            { italian: 'La figlia', english: 'Daughter', pronunciation: 'lah FEE-lyah' },
            { italian: 'I figli', english: 'Children', pronunciation: 'ee FEE-lee' },
            { italian: 'Il nonno', english: 'Grandfather', pronunciation: 'eel NOHN-noh' },
            { italian: 'La nonna', english: 'Grandmother', pronunciation: 'lah NOHN-nah' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "sister" in Italian?',
          options: ['Fratello', 'Sorella', 'Madre', 'Figlia'],
          answer: 'Sorella',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Ho due fratelli e una sorella.',
          answer: 'I have two brothers and one sister.',
          hint: 'fratelli = brothers (plural)',
        },
      },
      {
        type: 'sentence_order',
        content: {
          words: ['La', 'mia', 'madre', 'e', 'gentile', '.'],
          answer: 'La mia madre e gentile.',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Family Review',
          items: [
            { italian: 'La madre', english: 'Mother' },
            { italian: 'Il padre', english: 'Father' },
            { italian: 'Il fratello', english: 'Brother' },
            { italian: 'La sorella', english: 'Sister' },
            { italian: 'I genitori', english: 'Parents' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-6',
    title: 'At the Shop',
    level: 'A1',
    unit: 4,
    unitTitle: 'Out and About',
    description: 'Learn how to shop in Italian - asking for items, prices, and sizes.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Shopping Vocabulary',
          text: 'Here are essential phrases for shopping in Italy:',
          items: [
            { italian: 'Quanto costa?', english: 'How much does it cost?', pronunciation: 'KWAHN-toh KOHS-tah' },
            { italian: 'Quanto viene?', english: 'How much is it?', pronunciation: 'KWAHN-toh VYEH-neh' },
            { italian: "L'ultima moda", english: 'The latest fashion', pronunciation: 'loom-TEE-mah MOH-dah' },
            { italian: 'Taglia', english: 'Size', pronunciation: 'TAH-lyah' },
            { italian: 'Sconto', english: 'Discount', pronunciation: 'SKOHN-toh' },
            { italian: 'Provarlo', english: 'To try it on', pronunciation: 'proh-VAHR-loh' },
            { italian: 'Il biglietto', english: 'The ticket', pronunciation: 'eel bee-LYEHT-toh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Customer', italian: 'Scusa, quanto costa questa maglia?', english: 'Excuse me, how much does this shirt cost?' },
            { speaker: 'Shopkeeper', italian: 'Costa venti euro.', english: 'It costs twenty euros.' },
            { speaker: 'Customer', italian: 'C\'è uno sconto?', english: 'Is there a discount?' },
            { speaker: 'Shopkeeper', italian: 'Si, c\'è uno sconto del 10%.', english: 'Yes, there is a 10% discount.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you ask "How much does it cost?" in Italian?',
          options: ['Come si chiama?', 'Quanto costa?', 'Dove si trova?', 'Come sta?'],
          answer: 'Quanto costa?',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'Is there a discount?',
          answer: 'C\'e uno sconto?',
          hint: "C'e = there is, sconto = discount",
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ costa venti euro.',
          answer: 'Costa',
          hint: 'How much does it...',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Shopping Review',
          items: [
            { italian: 'Quanto costa?', english: 'How much does it cost?' },
            { italian: 'Taglia', english: 'Size' },
            { italian: 'Sconto', english: 'Discount' },
            { italian: 'Provarlo', english: 'To try it on' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-7',
    title: 'Asking for Directions',
    level: 'A2',
    unit: 4,
    unitTitle: 'Out and About',
    description: 'Learn how to ask for and understand directions in Italian.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Directions Vocabulary',
          text: 'Getting around Italy requires knowing direction words:',
          items: [
            { italian: 'Dov\'e...?', english: 'Where is...?', pronunciation: 'doh-VEH' },
            { italian: 'A destra', english: 'To the right', pronunciation: 'ah DEHS-trah' },
            { italian: 'A sinistra', english: 'To the left', pronunciation: 'ah see-NEES-trah' },
            { italian: 'Dritto', english: 'Straight ahead', pronunciation: 'DREET-toh' },
            { italian: 'Vicino', english: 'Near / Close', pronunciation: 'vee-CHEE-noh' },
            { italian: 'Lontano', english: 'Far', pronunciation: 'lohn-TAH-noh' },
            { italian: 'La stazione', english: 'The station', pronunciation: 'lah stah-TSYOH-neh' },
            { italian: "L'aeroporto", english: 'The airport', pronunciation: 'lah-eh-roh-POHR-toh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Tourist', italian: 'Scusi, dov\'e la stazione?', english: 'Excuse me, where is the station?' },
            { speaker: 'Local', italian: 'Vada dritto, poi a destra.', english: 'Go straight, then to the right.' },
            { speaker: 'Tourist', italian: 'E lontana?', english: 'Is it far?' },
            { speaker: 'Local', italian: 'No, e vicino. Cinque minuti a piedi.', english: 'No, it is close. Five minutes on foot.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "To the right" in Italian?',
          options: ['A sinistra', 'A destra', 'Dritto', 'Vicino'],
          answer: 'A destra',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Dov\'e l\'aeroporto piu vicino?',
          answer: 'Where is the nearest airport?',
          hint: "Dov'e = where is, piu vicino = nearest",
        },
      },
      {
        type: 'sentence_order',
        content: {
          words: ['Vada', 'dritto', ',', 'poi', 'a', 'sinistra', '.'],
          answer: 'Vada dritto, poi a sinistra.',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Directions Review',
          items: [
            { italian: "Dov'e...?", english: 'Where is...?' },
            { italian: 'A destra', english: 'To the right' },
            { italian: 'A sinistra', english: 'To the left' },
            { italian: 'Dritto', english: 'Straight ahead' },
            { italian: 'Vicino', english: 'Close' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-8',
    title: 'Past Tense (Passato Prossimo)',
    level: 'A2',
    unit: 5,
    unitTitle: 'Grammar Deep Dive',
    description: 'Learn how to talk about past events using the passato prossimo.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'The Passato Prossimo',
          text: 'The passato prossimo is used to talk about completed actions in the past. It is formed with esser/avere + past participle.',
          items: [
            { italian: 'Ho mangiato', english: 'I ate / I have eaten', pronunciation: 'oh mahn-JAH-toh' },
            { italian: 'Sei andato/a', english: 'You went / You have gone', pronunciation: 'seh-ee ahn-DAH-toh' },
            { italian: 'Abbiamo visitato', english: 'We visited', pronunciation: 'ahb-byah-moh vee-zee-TAH-toh' },
            { italian: 'Hanno comprato', english: 'They bought', pronunciation: 'AHN-noh kohm-PRAH-toh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa hai fatto ieri?', english: 'What did you do yesterday?' },
            { speaker: 'B', italian: 'Sono andato al cinema.', english: 'I went to the cinema.' },
            { speaker: 'A', italian: 'Che film hai visto?', english: 'What film did you see?' },
            { speaker: 'B', italian: 'Ho visto un film italiano.', english: 'I saw an Italian film.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'Which auxiliary verb is used with "andare" (to go) in passato prossimo?',
          options: ['Avere', 'Essere', 'Fare', 'Stare'],
          answer: 'Essere',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Io ___ mangiato una pizza ieri.',
          answer: 'ho',
          hint: 'Ho = I have (avere conjugated)',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'We visited Rome last summer.',
          answer: 'Abbiamo visitato Roma l\'estate scorsa.',
          hint: 'Abbiamo visitato = We visited',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Past Tense Review',
          items: [
            { italian: 'Ho mangiato', english: 'I ate' },
            { italian: 'Sei andato/a', english: 'You went' },
            { italian: 'Abbiamo visitato', english: 'We visited' },
            { italian: 'Essere + past participle', english: 'For movement verbs' },
            { italian: 'Avere + past participle', english: 'For transitive verbs' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-9',
    title: 'Future Tense (Futuro Semplice)',
    level: 'A2',
    unit: 5,
    unitTitle: 'Grammar Deep Dive',
    description: 'Learn how to talk about future events and plans.',
    duration: 16,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'The Futuro Semplice',
          text: 'The futuro semplice is used to talk about future actions. Add specific endings to the verb stem:',
          items: [
            { italian: 'Parlero', english: 'I will speak', pronunciation: 'pahr-LEH-roh' },
            { italian: 'Mangero', english: 'I will eat', pronunciation: 'mahn-JEH-roh' },
            { italian: 'Andremo', english: 'We will go', pronunciation: 'ahn-DREH-moh' },
            { italian: 'Dormirai', english: 'You will sleep', pronunciation: 'dohr-mee-RYE' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa farai domani?', english: 'What will you do tomorrow?' },
            { speaker: 'B', italian: 'Andro\' al mare con i miei amici.', english: 'I will go to the sea with my friends.' },
            { speaker: 'A', italian: 'Quando tornerai?', english: 'When will you come back?' },
            { speaker: 'B', italian: 'Tornero\' domenica sera.', english: 'I will come back Sunday evening.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is the future tense ending for "io" (I)?',
          options: ['-ai', '-a', '-o', '-anno'],
          answer: '-o',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Domani ___ (mangiare) una pizza.',
          answer: 'mangero',
          hint: 'Future tense of mangiare for io',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'We will go to Italy next year.',
          answer: 'Andremo in Italia l\'anno prossimo.',
          hint: 'Andremo = We will go',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Future Tense Review',
          items: [
            { italian: '-o (io)', english: 'I will...' },
            { italian: '-ai (tu)', english: 'You will...' },
            { italian: '-a (lui/lei)', english: 'He/She will...' },
            { italian: '-emo (noi)', english: 'We will...' },
            { italian: '-ete (voi)', english: 'You all will...' },
            { italian: '-anno (loro)', english: 'They will...' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-10',
    title: 'Common Phrases',
    level: 'A1',
    unit: 6,
    unitTitle: 'Essential Italian',
    description: 'Master essential phrases for everyday conversation in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Everyday Essential Phrases',
          text: 'These phrases will help you navigate daily interactions in Italian:',
          items: [
            { italian: 'Per favore', english: 'Please', pronunciation: 'pehr fah-VOH-reh' },
            { italian: 'Grazie', english: 'Thank you', pronunciation: 'GRAH-tsee-eh' },
            { italian: 'Prego', english: "You're welcome", pronunciation: 'PREH-goh' },
            { italian: 'Mi scusi', english: 'Excuse me (formal)', pronunciation: 'mee SKOO-zee' },
            { italian: 'Non capisco', english: "I don't understand", pronunciation: 'nohn kah-PEES-koh' },
            { italian: 'Parla inglese?', english: 'Do you speak English?', pronunciation: 'PAHR-lah een-GLEH-zeh' },
            { italian: 'Non parlo italiano', english: "I don't speak Italian", pronunciation: 'nohn PAHR-loh ee-tah-LYAH-noh' },
            { italian: 'Mi aiuti', english: 'Can you help me?', pronunciation: 'mee ah-YOO-tee' },
            { italian: 'Quanto tempo', english: 'How much time', pronunciation: 'KWAHN-toh TEHM-poh' },
            { italian: 'Senza problemi', english: 'No problem', pronunciation: 'SEHN-tsah proh-BLEH-mee' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Tourist', italian: 'Mi scusi, parla inglese?', english: 'Excuse me, do you speak English?' },
            { speaker: 'Local', italian: 'Un po\'. Come posso aiutarLa?', english: 'A little. How can I help you?' },
            { speaker: 'Tourist', italian: 'Dov\'e la farmacia piu vicina?', english: 'Where is the nearest pharmacy?' },
            { speaker: 'Local', italian: 'Vada dritto, e sulla sinistra. Prego!', english: 'Go straight, and on the left. You are welcome!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "Prego" mean?',
          options: ['Please', "You're welcome", 'Thank you', 'Excuse me'],
          answer: "You're welcome",
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Non capisco, mi aiuti?',
          answer: "I don't understand, can you help me?",
          hint: 'Non capisco = I do not understand',
        },
      },
      {
        type: 'sentence_order',
        content: {
          words: ['Mi', 'scusi', ',', 'parla', 'inglese', '?'],
          answer: 'Mi scusi, parla inglese?',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Essential Phrases Review',
          items: [
            { italian: 'Per favore', english: 'Please' },
            { italian: 'Grazie / Prego', english: 'Thank you / You are welcome' },
            { italian: 'Mi scusi', english: 'Excuse me' },
            { italian: 'Non capisco', english: "I don't understand" },
            { italian: 'Senza problemi', english: 'No problem' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-11',
    title: 'Colors and Shapes',
    level: 'A1',
    unit: 2,
    unitTitle: 'Building Blocks',
    description: 'Learn Italian colors and describe objects around you.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Italian Colors',
          text: 'Colors in Italian must agree with the gender of the noun:',
          items: [
            { italian: 'Rosso / Rossa', english: 'Red (m/f)', pronunciation: 'RROH-soh / RROH-sah' },
            { italian: 'Blu', english: 'Blue', pronunciation: 'BLOO' },
            { italian: 'Verde', english: 'Green', pronunciation: 'VEHR-deh' },
            { italian: 'Giallo / Gialla', english: 'Yellow (m/f)', pronunciation: 'JAH-loh / JAH-lah' },
            { italian: 'Bianco / Bianca', english: 'White (m/f)', pronunciation: 'byahn-KOH / byahn-KAH' },
            { italian: 'Nero / Nera', english: 'Black (m/f)', pronunciation: 'NEH-roh / NEH-rah' },
            { italian: 'Arancione', english: 'Orange', pronunciation: 'ah-rahn-CHOH-neh' },
            { italian: 'Marrone', english: 'Brown', pronunciation: 'mahr-ROH-neh' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "green" in Italian?',
          options: ['Giallo', 'Verde', 'Blu', 'Nero'],
          answer: 'Verde',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'La macchina e ___.',
          answer: 'rossa',
          hint: 'Macchina is feminine - what color?',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'The white house is beautiful.',
          answer: 'La casa bianca e bella.',
          hint: 'Casa is feminine, so bianco becomes bianca',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Colors Review',
          items: [
            { italian: 'Rosso', english: 'Red' },
            { italian: 'Blu', english: 'Blue' },
            { italian: 'Verde', english: 'Green' },
            { italian: 'Bianco/Bianca', english: 'White' },
            { italian: 'Nero/Nera', english: 'Black' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-12',
    title: 'Weather and Seasons',
    level: 'A2',
    unit: 6,
    unitTitle: 'Essential Italian',
    description: 'Learn how to talk about the weather and seasons in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Weather Expressions',
          text: 'Italian uses "fare" (to make/do) for weather expressions:',
          items: [
            { italian: 'Fa caldo', english: 'It is hot', pronunciation: 'fah KAHL-doh' },
            { italian: 'Fa freddo', english: 'It is cold', pronunciation: 'fah FREH-doh' },
            { italian: 'Piove', english: 'It is raining', pronunciation: 'PYOH-veh' },
            { italian: 'Nevica', english: 'It is snowing', pronunciation: 'neh-VEE-kah' },
            { italian: 'C\'e il sole', english: 'It is sunny', pronunciation: 'cheh eel SOH-leh' },
            { italian: 'C\'e la luna', english: 'It is moonlit', pronunciation: 'cheh lah LOO-nah' },
            { italian: 'Tira vento', english: 'It is windy', pronunciation: 'TEE-rah VEHN-toh' },
            { italian: 'La primavera', english: 'Spring', pronunciation: 'lah pree-mah-VEH-rah' },
            { italian: "L'estate", english: 'Summer', pronunciation: 'lehs-TAH-teh' },
            { italian: "L'autunno", english: 'Autumn', pronunciation: 'lah-TOON-noh' },
            { italian: "L'inverno", english: 'Winter', pronunciation: 'leen-VEHR-noh' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "It is raining" in Italian?',
          options: ['Nevica', 'Piove', 'Tira vento', 'Fa caldo'],
          answer: 'Piove',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: "In inverno fa freddo e nevica.",
          answer: 'In winter it is cold and snowing.',
          hint: 'Inverno = winter, fa freddo = it is cold',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Oggi c\'e ___. Andiamo al mare!',
          answer: 'il sole',
          hint: 'The sunny thing in the sky',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Weather Review',
          items: [
            { italian: 'Fa caldo', english: 'It is hot' },
            { italian: 'Piove', english: 'It is raining' },
            { italian: "C'e il sole", english: 'It is sunny' },
            { italian: 'La primavera', english: 'Spring' },
            { italian: "L'estate", english: 'Summer' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-13',
    title: 'Yes and No',
    level: 'A1',
    unit: 1,
    unitTitle: 'First Steps',
    description: 'Learn how to say yes, no, and agree or disagree in Italian.',
    duration: 8,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Affirmative and Negative',
          text: 'Basic agreement and disagreement in Italian:',
          items: [
            { italian: 'Si', english: 'Yes', pronunciation: 'SEE' },
            { italian: 'No', english: 'No', pronunciation: 'NOH' },
            { italian: 'Esatto / Esatta', english: 'Exactly', pronunciation: 'eh-SAHT-toh' },
            { italian: 'Certamente', english: 'Certainly', pronunciation: 'chehr-tah-MEHN-teh' },
            { italian: 'Naturalmente', english: 'Of course', pronunciation: 'nah-too-rahl-MEHN-teh' },
            { italian: 'Non', english: 'Not', pronunciation: 'NOHN' },
            { italian: 'Mai', english: 'Never', pronunciation: 'MYE' },
            { italian: 'Sempre', english: 'Always', pronunciation: 'SEHM-preh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Ti piace la pasta?', english: 'Do you like pasta?' },
            { speaker: 'B', italian: 'Si, naturalmente! La adoro.', english: 'Yes, of course! I love it.' },
            { speaker: 'A', italian: 'Mangi la carne?', english: 'Do you eat meat?' },
            { speaker: 'B', italian: 'No, non mangio mai la carne.', english: 'No, I never eat meat.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "Certainly" in Italian?',
          options: ['Mai', 'No', 'Certamente', 'Esatto'],
          answer: 'Certamente',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Non vado mai al mare in inverno.',
          answer: 'I never go to the sea in winter.',
          hint: 'Non ... mai = never',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Parli italiano? ___, parlo un po\'.',
          answer: 'Si',
          hint: 'Affirmative answer',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Yes and No Review',
          items: [
            { italian: 'Si', english: 'Yes' },
            { italian: 'No', english: 'No' },
            { italian: 'Certamente', english: 'Certainly' },
            { italian: 'Mai', english: 'Never' },
            { italian: 'Sempre', english: 'Always' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-14',
    title: 'Polite Expressions',
    level: 'A1',
    unit: 1,
    unitTitle: 'First Steps',
    description: 'Master polite expressions to be courteous in Italian.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Being Polite in Italian',
          text: 'Politeness is very important in Italian culture:',
          items: [
            { italian: 'Per favore', english: 'Please', pronunciation: 'pehr fah-VOH-reh' },
            { italian: 'Grazie', english: 'Thank you', pronunciation: 'GRAH-tsee-eh' },
            { italian: 'Grazie mille', english: 'Thank you very much', pronunciation: 'GRAH-tsee-eh MEE-leh' },
            { italian: 'Prego', english: "You're welcome", pronunciation: 'PREH-goh' },
            { italian: 'Mi scusi', english: 'Excuse me (formal)', pronunciation: 'mee SKOO-zee' },
            { italian: 'Scusa', english: 'Sorry / Excuse me (informal)', pronunciation: 'SKOO-zah' },
            { italian: 'Mi dispiace', english: "I'm sorry", pronunciation: 'mee dee-SPYAH-cheh' },
            { italian: 'Con permesso', english: 'Excuse me (passing by)', pronunciation: 'kohn pehr-MEHS-soh' },
            { italian: 'Auguri', english: 'Best wishes', pronunciation: 'ah-GOO-ree' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Mi scusi, dov\'e il bagno?', english: 'Excuse me, where is the bathroom?' },
            { speaker: 'B', italian: 'Al fondo del corridoio, per favore.', english: 'At the end of the hallway, please.' },
            { speaker: 'A', italian: 'Grazie mille!', english: 'Thank you very much!' },
            { speaker: 'B', italian: 'Prego!', english: "You're welcome!" },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "Mi dispiace" mean?',
          options: ['Thank you', "I'm sorry", 'Excuse me', "You're welcome"],
          answer: "I'm sorry",
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'Excuse me, where is the exit?',
          answer: "Mi scusi, dov'e l'uscita?",
          hint: 'Mi scusi = Excuse me (formal)',
        },
      },
      {
        type: 'sentence_order',
        content: {
          words: ['Grazie', 'mille', ',', 'prego', '!'],
          answer: 'Grazie mille, prego!',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Polite Expressions Review',
          items: [
            { italian: 'Per favore', english: 'Please' },
            { italian: 'Grazie mille', english: 'Thank you very much' },
            { italian: 'Prego', english: "You're welcome" },
            { italian: 'Mi dispiace', english: "I'm sorry" },
            { italian: 'Con permesso', english: 'Excuse me (passing)' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-15',
    title: 'Drinks',
    level: 'A1',
    unit: 3,
    unitTitle: 'Everyday Life',
    description: 'Learn vocabulary for drinks and how to order them in Italian.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Drinks Vocabulary',
          text: 'Italy has a rich drinking culture. Learn these essential drinks:',
          items: [
            { italian: "L'acqua naturale", english: 'Still water', pronunciation: 'lahk-KWAH nah-too-RAH-leh' },
            { italian: "L'acqua frizzante", english: 'Sparkling water', pronunciation: 'lahk-KWAH freet-TSAHN-teh' },
            { italian: 'Il caffe', english: 'Espresso coffee', pronunciation: 'eel kahf-FEH' },
            { italian: 'Il cappuccino', english: 'Cappuccino', pronunciation: 'eel kahp-poo-CHEE-noh' },
            { italian: 'Il tè', english: 'Tea', pronunciation: 'eel TEH' },
            { italian: 'Il succo d\'arancia', english: 'Orange juice', pronunciation: 'eel SOOK-koh dah-RAHN-chah' },
            { italian: 'La birra', english: 'Beer', pronunciation: 'lah BEER-rah' },
            { italian: 'Il vino rosso', english: 'Red wine', pronunciation: 'eel VEE-noh RROHS-soh' },
            { italian: 'Il vino bianco', english: 'White wine', pronunciation: 'eel VEE-noh BYAHN-koh' },
            { italian: 'La spremuta', english: 'Freshly squeezed juice', pronunciation: 'lah spreh-MOO-tah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Barista', italian: 'Buongiorno! Cosa desidera?', english: 'Good morning! What would you like?' },
            { speaker: 'Customer', italian: 'Un cappuccino, per favore.', english: 'A cappuccino, please.' },
            { speaker: 'Barista', english: 'Con panino?', italian: 'Anything else? With a sandwich?' },
            { speaker: 'Customer', italian: 'No, grazie. Solo il cappuccino.', english: 'No, thank you. Just the cappuccino.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "sparkling water" in Italian?',
          options: ['Acqua naturale', 'Acqua frizzante', 'Acqua calda', 'Acqua fredda'],
          answer: 'Acqua frizzante',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'A glass of red wine, please.',
          answer: 'Un bicchiere di vino rosso, per favore.',
          hint: 'bicchiere = glass, vino rosso = red wine',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Vorrei un ___, per favore.',
          answer: 'caffe',
          hint: 'The famous Italian morning drink',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Drinks Review',
          items: [
            { italian: "L'acqua naturale", english: 'Still water' },
            { italian: "L'acqua frizzante", english: 'Sparkling water' },
            { italian: 'Il caffe', english: 'Espresso' },
            { italian: 'Il cappuccino', english: 'Cappuccino' },
            { italian: 'Il vino rosso', english: 'Red wine' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-16',
    title: 'Days and Months',
    level: 'A1',
    unit: 2,
    unitTitle: 'Building Blocks',
    description: 'Learn the days of the week and months of the year in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Days and Months',
          text: 'Learn the Italian calendar:',
          items: [
            { italian: 'Lunedì', english: 'Monday', pronunciation: 'loo-neh-DEE' },
            { italian: 'Martedì', english: 'Tuesday', pronunciation: 'mahr-teh-DEE' },
            { italian: 'Mercoledì', english: 'Wednesday', pronunciation: 'mehr-koh-lee-DEE' },
            { italian: 'Giovedì', english: 'Thursday', pronunciation: 'joh-veh-DEE' },
            { italian: 'Venerdì', english: 'Friday', pronunciation: 'veh-nehr-DEE' },
            { italian: 'Sabato', english: 'Saturday', pronunciation: 'SAH-bah-toh' },
            { italian: 'Domenica', english: 'Sunday', pronunciation: 'doh-MEH-nee-kah' },
            { italian: 'Gennaio', english: 'January', pronunciation: 'jehn-NYE-oh' },
            { italian: 'Febbraio', english: 'February', pronunciation: 'fehb-BRY-oh' },
            { italian: 'Marzo', english: 'March', pronunciation: 'MAHR-tsoh' },
            { italian: 'Aprile', english: 'April', pronunciation: 'ah-PREE-leh' },
            { italian: 'Maggio', english: 'May', pronunciation: 'MAH-joh' },
            { italian: 'Giugno', english: 'June', pronunciation: 'JOO-nyoh' },
            { italian: 'Luglio', english: 'July', pronunciation: 'LOO-lyoh' },
            { italian: 'Agosto', english: 'August', pronunciation: 'ah-GOHS-toh' },
            { italian: 'Settembre', english: 'September', pronunciation: 'seht-TEHM-breh' },
            { italian: 'Ottobre', english: 'October', pronunciation: 'oht-TOH-breh' },
            { italian: 'Novembre', english: 'November', pronunciation: 'noh-VEHM-breh' },
            { italian: 'Dicembre', english: 'December', pronunciation: 'dee-CHEHM-breh' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What day comes after "Martedì" (Tuesday)?',
          options: ['Lunedì', 'Mercoledì', 'Giovedì', 'Sabato'],
          answer: 'Mercoledì',
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "August" in Italian?',
          options: ['Luglio', 'Agosto', 'Settembre', 'Giugno'],
          answer: 'Agosto',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Oggi è venerdì. Domani è sabato.',
          answer: "Today is Friday. Tomorrow is Saturday.",
          hint: 'oggi = today, domani = tomorrow',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Natale è il 25 ___.',
          answer: 'dicembre',
          hint: 'Christmas is on December 25th',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Days and Months Review',
          items: [
            { italian: 'Lunedì', english: 'Monday' },
            { italian: 'Venerdì', english: 'Friday' },
            { italian: 'Gennaio', english: 'January' },
            { italian: 'Luglio', english: 'July' },
            { italian: 'Dicembre', english: 'December' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-17',
    title: 'Telling Time',
    level: 'A1',
    unit: 2,
    unitTitle: 'Building Blocks',
    description: 'Learn how to tell the time and talk about schedules in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Time Expressions',
          text: 'Learn to tell time in Italian:',
          items: [
            { italian: "Che ora e'?", english: 'What time is it?', pronunciation: 'keh OH-rah eh' },
            { italian: "Sono le due", english: 'It is two o\'clock', pronunciation: 'SOH-noh leh DOO-eh' },
            { italian: 'E mezza', english: 'Half past', pronunciation: 'eh MEH-tsah' },
            { italian: 'Meno un quarto', english: 'Quarter to', pronunciation: 'MEH-noh oon KWAHR-toh' },
            { italian: 'Un quarto', english: 'Quarter past', pronunciation: 'oon KWAHR-toh' },
            { italian: "Al mattino", english: 'In the morning', pronunciation: 'ahl maht-TEE-noh' },
            { italian: 'Al pomeriggio', english: 'In the afternoon', pronunciation: 'ahl poh-meh-REE-joh' },
            { italian: 'Sera', english: 'In the evening', pronunciation: 'SEH-rah' },
            { italian: 'Mezzanotte', english: 'Midnight', pronunciation: 'meh-tsah-NOHT-teh' },
            { italian: 'Mezzogiorno', english: 'Noon', pronunciation: 'meh-tsoh-JOHR-noh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: "Che ora e'?", english: 'What time is it?' },
            { speaker: 'B', italian: 'Sono le tre e mezza.', english: 'It is half past three.' },
            { speaker: 'A', italian: 'A che ora inizia il film?', english: 'At what time does the film start?' },
            { speaker: 'B', italian: 'Alle otto e un quarto di sera.', english: 'At quarter past eight in the evening.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "half past" in Italian?',
          options: ['Un quarto', 'E mezza', 'Meno un quarto', 'Sono'],
          answer: 'E mezza',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Sono le sette meno un quarto.',
          answer: 'It is a quarter to seven.',
          hint: 'meno = less, un quarto = a quarter',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: "Che ora ___? Sono le cinque.",
          answer: "e'",
          hint: 'What time ... it?',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Time Review',
          items: [
            { italian: "Che ora e'?", english: 'What time is it?' },
            { italian: 'E mezza', english: 'Half past' },
            { italian: 'Un quarto', english: 'Quarter past' },
            { italian: 'Meno un quarto', english: 'Quarter to' },
            { italian: 'Mezzogiorno', english: 'Noon' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-18',
    title: 'Asking Questions',
    level: 'A1',
    unit: 4,
    unitTitle: 'Out and About',
    description: 'Learn how to form questions and ask for information in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Question Words',
          text: 'Master Italian question words to ask for information:',
          items: [
            { italian: 'Chi?', english: 'Who?', pronunciation: 'KEE' },
            { italian: 'Cosa / Che cosa?', english: 'What?', pronunciation: 'KOH-zah / cheh KOH-zah' },
            { italian: 'Dove?', english: 'Where?', pronunciation: 'DOH-veh' },
            { italian: 'Quando?', english: 'When?', pronunciation: 'KWAHN-doh' },
            { italian: 'Perche?', english: 'Why?', pronunciation: 'pehr-KEH' },
            { italian: 'Come?', english: 'How?', pronunciation: 'KOH-meh' },
            { italian: 'Quanto / Quanta?', english: 'How much? (m/f)', pronunciation: 'KWAHN-toh / KWAHN-tah' },
            { italian: 'Quanti / Quante?', english: 'How many? (m/f)', pronunciation: 'KWAHN-tee / KWAHN-teh' },
            { italian: 'Quale?', english: 'Which?', pronunciation: 'KWAH-leh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Tourist', italian: 'Dove si trova la fermata dell\'autobus?', english: 'Where is the bus stop?' },
            { speaker: 'Local', italian: 'Via Roma, vicino alla chiesa.', english: 'Via Roma, near the church.' },
            { speaker: 'Tourist', italian: 'Quando passa il prossimo autobus?', english: 'When does the next bus come?' },
            { speaker: 'Local', italian: 'Tra cinque minuti.', english: 'In five minutes.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'Which question word means "Why?"',
          options: ['Come', 'Dove', 'Perche', 'Quando'],
          answer: 'Perche',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'How many brothers do you have?',
          answer: 'Quanti fratelli hai?',
          hint: 'Quanti = how many (masc.), fratelli = brothers',
        },
      },
      {
        type: 'sentence_order',
        content: {
          words: ['Dove', 'vai', 'in', 'vacanza', '?'],
          answer: 'Dove vai in vacanza?',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Questions Review',
          items: [
            { italian: 'Chi?', english: 'Who?' },
            { italian: 'Cosa?', english: 'What?' },
            { italian: 'Dove?', english: 'Where?' },
            { italian: 'Perche?', english: 'Why?' },
            { italian: 'Come?', english: 'How?' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-19',
    title: 'Ordering Food',
    level: 'A1',
    unit: 4,
    unitTitle: 'Out and About',
    description: 'Learn how to order food and drinks at a restaurant in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Restaurant Phrases',
          text: 'Essential phrases for dining out in Italy:',
          items: [
            { italian: 'Un tavolo per due', english: 'A table for two', pronunciation: 'oon TAH-voh-loh pehr DOO-eh' },
            { italian: 'Il menu, per favore', english: 'The menu, please', pronunciation: 'eel meh-NOO pehr fah-VOH-reh' },
            { italian: 'Vorrei...', english: 'I would like...', pronunciation: 'vohr-RYE' },
            { italian: 'Come primo', english: 'As a starter', pronunciation: 'KOH-meh PREE-moh' },
            { italian: 'Come secondo', english: 'As a main course', pronunciation: 'KOH-meh seh-KOHN-doh' },
            { italian: 'Il conto, per favore', english: 'The bill, please', pronunciation: 'eel KOHN-toh pehr fah-VOH-reh' },
            { italian: 'E delizioso!', english: "It's delicious!", pronunciation: 'eh deh-lee-TSYOH-zoh' },
            { italian: 'Son pieno/a', english: "I'm full", pronunciation: 'sohn PYEH-noh/nah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Waiter', italian: 'Buonasera! Un tavolo per quanti?', english: 'Good evening! A table for how many?' },
            { speaker: 'Customer', italian: 'Per due, per favore.', english: 'For two, please.' },
            { speaker: 'Waiter', italian: 'Ecco il menu. Cosa desidera?', english: 'Here is the menu. What would you like?' },
            { speaker: 'Customer', italian: 'Vorrei la pasta alla carbonara come primo.', english: 'I would like pasta carbonara as a starter.' },
            { speaker: 'Waiter', italian: 'E come secondo?', english: 'And as a main?' },
            { speaker: 'Customer', italian: 'Il pollo arrosto con le verdure.', english: 'Roast chicken with vegetables.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you ask for the bill?',
          options: ['Il conto, per favore', 'Il menu, per favore', 'Un tavolo', 'Vorrei'],
          answer: 'Il conto, per favore',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I would like a table for four.',
          answer: 'Vorrei un tavolo per quattro.',
          hint: 'Vorrei = I would like, tavolo = table',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Vorrei la pasta come ___.',
          answer: 'primo',
          hint: 'First course',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Restaurant Review',
          items: [
            { italian: 'Un tavolo per due', english: 'A table for two' },
            { italian: 'Vorrei...', english: 'I would like...' },
            { italian: 'Il conto', english: 'The bill' },
            { italian: 'Delizioso', english: 'Delicious' },
            { italian: 'Come primo', english: 'As a starter' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-20',
    title: 'Talking About Yourself',
    level: 'A1',
    unit: 4,
    unitTitle: 'Out and About',
    description: 'Learn to describe yourself, your hobbies, and your life in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Personal Descriptions',
          text: 'Express yourself with these useful phrases:',
          items: [
            { italian: 'Ho ... anni', english: 'I am ... years old', pronunciation: 'oh AHN-nee' },
            { italian: 'Lavoro come...', english: 'I work as...', pronunciation: 'lah-VOH-roh KOH-meh' },
            { italian: 'Mi piace...', english: 'I like...', pronunciation: 'mee PYAH-cheh' },
            { italian: 'Non mi piace...', english: "I don't like...", pronunciation: 'nohn mee PYAH-cheh' },
            { italian: 'Nella mia libera', english: 'In my free time', pronunciation: 'NEHL-lah MEE-ah LEE-beh-rah' },
            { italian: 'Ho una famiglia', english: 'I have a family', pronunciation: 'oh OO-nah fah-MEE-lyah' },
            { italian: 'Studio...', english: 'I study...', pronunciation: 'STOO-dyoh' },
            { italian: 'Vivo a...', english: 'I live in...', pronunciation: 'VEE-voh AH' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Raccontami di te!', english: 'Tell me about yourself!' },
            { speaker: 'B', italian: 'Mi chiamo Anna. Ho trent\'anni e vivo a Milano.', english: 'My name is Anna. I am thirty and I live in Milan.' },
            { speaker: 'A', italian: 'Cosa fai nella vita?', english: 'What do you do in life?' },
            { speaker: 'B', italian: 'Lavoro come insegnante. Mi piace leggere e viaggiare.', english: 'I work as a teacher. I like reading and traveling.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "I like..." in Italian?',
          options: ['Non mi piace', 'Mi piace', 'Mi chiamo', 'Io sono'],
          answer: 'Mi piace',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I am 25 years old and I live in Rome.',
          answer: "Ho venticinque anni e vivo a Roma.",
          hint: 'Ho = I have, anni = years, vivo = I live',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ piace la musica italiana.',
          answer: 'Mi',
          hint: 'I like = ... piace',
        },
      },
      {
        type: 'review',
        content: {
          title: 'About Yourself Review',
          items: [
            { italian: 'Ho ... anni', english: 'I am ... years old' },
            { italian: 'Mi piace...', english: 'I like...' },
            { italian: 'Vivo a...', english: 'I live in...' },
            { italian: 'Lavoro come...', english: 'I work as...' },
            { italian: 'Studio...', english: 'I study...' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-21',
    title: 'Body Parts',
    level: 'A2',
    unit: 6,
    unitTitle: 'Essential Italian',
    description: 'Learn vocabulary for parts of the body in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Body Vocabulary',
          text: 'Know your body parts in Italian - useful for health and daily life:',
          items: [
            { italian: 'La testa', english: 'Head', pronunciation: 'leh TEHS-tah' },
            { italian: "L'occhio", english: 'Eye', pronunciation: 'LOHK-kyoh' },
            { italian: "L'orecchio", english: 'Ear', pronunciation: 'oh-REHK-kyoh' },
            { italian: 'Il naso', english: 'Nose', pronunciation: 'eel NAH-zoh' },
            { italian: 'La bocca', english: 'Mouth', pronunciation: 'lah BOHK-kah' },
            { italian: 'La mano', english: 'Hand', pronunciation: 'lah MAH-noh' },
            { italian: 'Il braccio', english: 'Arm', pronunciation: 'eel BRAH-choh' },
            { italian: 'La gamba', english: 'Leg', pronunciation: 'lah GAHM-bah' },
            { italian: 'Il piede', english: 'Foot', pronunciation: 'eel PYEH-deh' },
            { italian: 'La schiena', english: 'Back', pronunciation: 'lah SKYEH-nah' },
            { italian: 'Il cuore', english: 'Heart', pronunciation: 'eel KWOH-reh' },
            { italian: 'Lo stomaco', english: 'Stomach', pronunciation: 'loh STOH-mah-koh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Doctor', italian: "Cosa non va?", english: "What's wrong?" },
            { speaker: 'Patient', italian: 'Mi fa male la testa.', english: 'My head hurts.' },
            { speaker: 'Doctor', italian: 'E anche la schiena?', english: 'And also the back?' },
            { speaker: 'Patient', italian: 'No, solo la testa e gli occhi.', english: 'No, only the head and the eyes.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "hand" in Italian?',
          options: ['Braccio', 'Mano', 'Piede', 'Gamba'],
          answer: 'Mano',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Mi fa male il cuore.',
          answer: 'My heart hurts.',
          hint: 'Mi fa male = it hurts me',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Mi fa male ___. Devo andare dal dottore.',
          answer: 'lo stomaco',
          hint: 'The organ you digest food with',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Body Parts Review',
          items: [
            { italian: 'La testa', english: 'Head' },
            { italian: 'La mano', english: 'Hand' },
            { italian: 'La gamba', english: 'Leg' },
            { italian: 'Il cuore', english: 'Heart' },
            { italian: 'La bocca', english: 'Mouth' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-22',
    title: 'Emotions and Feelings',
    level: 'A2',
    unit: 6,
    unitTitle: 'Essential Italian',
    description: 'Express your emotions and feelings in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Feeling Words',
          text: 'Express how you feel with these emotion words:',
          items: [
            { italian: 'Contento/a', english: 'Happy', pronunciation: 'kohn-TEHN-toh/tah' },
            { italian: 'Triste', english: 'Sad', pronunciation: 'TREES-teh' },
            { italian: 'Arrabbiato/a', english: 'Angry', pronunciation: 'ahr-rahb-BYAH-toh/tah' },
            { italian: 'Stanco/a', english: 'Tired', pronunciation: 'STAHN-koh/kah' },
            { italian: 'Felice', english: 'Happy/Glad', pronunciation: 'feh-LEE-cheh' },
            { italian: 'Spaventato/a', english: 'Scared', pronunciation: 'spah-vehn-TAH-toh/tah' },
            { italian: 'Emozionato/a', english: 'Excited', pronunciation: 'eh-moh-tsyoh-NAH-toh/tah' },
            { italian: 'Sorpreso/a', english: 'Surprised', pronunciation: 'sohr-PREH-zoh/zah' },
            { italian: 'Solito/a', english: 'Lonely', pronunciation: 'SOH-lee-toh/tah' },
            { italian: 'Bene', english: 'Well / Good', pronunciation: 'BEH-neh' },
            { italian: 'Male', english: 'Bad / Not well', pronunciation: 'MAH-leh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Come stai oggi?', english: 'How are you today?' },
            { speaker: 'B', italian: 'Sto benissimo! Sono molto contento.', english: 'I am very well! I am very happy.' },
            { speaker: 'A', italian: 'Perché sei così felice?', english: 'Why are you so happy?' },
            { speaker: 'B', italian: 'Ho ricevuto una buona notizia!', english: 'I received good news!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "tired" in Italian?',
          options: ['Felice', 'Arrabbiato', 'Stanco', 'Emozionato'],
          answer: 'Stanco',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I am very scared.',
          answer: 'Sono molto spaventato.',
          hint: 'Sono = I am, molto = very',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Oggi sono ___. Non ho voglia di uscire.',
          answer: 'stanco',
          hint: 'Not energetic, need rest',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Emotions Review',
          items: [
            { italian: 'Contento/a', english: 'Happy' },
            { italian: 'Triste', english: 'Sad' },
            { italian: 'Arrabbiato/a', english: 'Angry' },
            { italian: 'Stanco/a', english: 'Tired' },
            { italian: 'Felice', english: 'Happy/Glad' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-23',
    title: 'Imperfect Tense (Imperfetto)',
    level: 'B1',
    unit: 7,
    unitTitle: 'Intermediate Grammar',
    description: 'Learn to talk about past habits and descriptions with the imperfetto.',
    duration: 16,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'The Imperfetto',
          text: 'The imperfetto describes past habits, repeated actions, and ongoing states. Unlike the passato prossimo, it describes actions without a clear beginning or end.',
          items: [
            { italian: 'Parlavo', english: 'I used to speak / I was speaking', pronunciation: 'pahr-LAH-voh' },
            { italian: 'Mangiavi', english: 'You used to eat', pronunciation: 'mahn-JAH-vee' },
            { italian: 'Andavamo', english: 'We used to go', pronunciation: 'ahn-dah-VAH-moh' },
            { italian: 'Vivevano', english: 'They used to live', pronunciation: 'vee-VEH-vah-noh' },
            { italian: 'Era bello', english: 'It was beautiful', pronunciation: 'EH-rah BEHL-loh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Com\'era la tua infanzia?', english: 'What was your childhood like?' },
            { speaker: 'B', italian: 'Da piccolo, giocavo sempre nel parco.', english: 'When I was little, I always played in the park.' },
            { speaker: 'A', italian: 'Con chi giocavi?', english: 'With whom did you play?' },
            { speaker: 'B', italian: 'Con i miei amici. Erano momenti bellissimi.', english: 'With my friends. They were beautiful moments.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'When do you use the imperfetto instead of the passato prossimo?',
          options: [
            'For a specific completed action',
            'For past habits and ongoing states',
            'For future plans',
            'For present actions'
          ],
          answer: 'For past habits and ongoing states',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Quando ero piccolo, ___ (giocare) tutti i giorni.',
          answer: 'giocavo',
          hint: 'Imperfetto of giocare for io',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'We used to live near the sea.',
          answer: 'Vivevamo vicino al mare.',
          hint: 'Vivevamo = We used to live (imperfetto)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Imperfect Tense Review',
          items: [
            { italian: '-avo (io)', english: 'I used to...' },
            { italian: '-avi (tu)', english: 'You used to...' },
            { italian: '-ava (lui/lei)', english: 'He/She used to...' },
            { italian: '-avamo (noi)', english: 'We used to...' },
            { italian: '-avate (voi)', english: 'You all used to...' },
            { italian: '-avano (loro)', english: 'They used to...' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-24',
    title: 'Conditional (Condizionale)',
    level: 'B1',
    unit: 7,
    unitTitle: 'Intermediate Grammar',
    description: 'Learn to express wishes, requests, and hypothetical situations.',
    duration: 16,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'The Condizionale',
          text: 'The condizionale is used for polite requests, wishes, and hypothetical situations:',
          items: [
            { italian: 'Vorrei', english: 'I would like', pronunciation: 'vohr-RYE' },
            { italian: 'Potresti', english: 'Could you', pronunciation: 'poh-TREHS-tee' },
            { italian: 'Dovresti', english: 'You should', pronunciation: 'dohv-REHS-tee' },
            { italian: 'Sarebbe', english: 'It would be', pronunciation: 'sah-REHB-beh' },
            { italian: 'Andrei', english: 'I would go', pronunciation: 'ahn-DRYE' },
            { italian: 'Comprerei', english: 'I would buy', pronunciation: 'kohm-prah-RYE' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa faresti con un milione di euro?', english: 'What would you do with a million euros?' },
            { speaker: 'B', italian: 'Comprerei una casa in Toscana.', english: 'I would buy a house in Tuscany.' },
            { speaker: 'A', italian: 'Io andrei in giro per il mondo!', english: 'I would travel around the world!' },
            { speaker: 'B', italian: 'Sarebbe fantastico!', english: 'That would be fantastic!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "I would like" in Italian?',
          options: ['Voglio', 'Vorrei', 'Ho voglia', 'Volevo'],
          answer: 'Vorrei',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'Could you help me, please?',
          answer: 'Potresti aiutarmi, per favore?',
          hint: 'Potresti = Could you',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ una pizza margherita, per favore.',
          answer: 'Vorrei',
          hint: 'Polite way to say "I would like"',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Conditional Review',
          items: [
            { italian: 'Vorrei', english: 'I would like' },
            { italian: 'Potresti', english: 'Could you' },
            { italian: 'Dovresti', english: 'You should' },
            { italian: 'Sarebbe', english: 'It would be' },
            { italian: 'Andrei', english: 'I would go' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-25',
    title: 'Work and Professions',
    level: 'A2',
    unit: 8,
    unitTitle: 'Life and Culture',
    description: 'Learn vocabulary for professions and talking about work in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Professions Vocabulary',
          text: 'Talk about your job and learn common professions:',
          items: [
            { italian: 'L\'insegnante', english: 'Teacher', pronunciation: 'leen-seh-NYAHN-teh' },
            { italian: 'Il medico / La dottoressa', english: 'Doctor (m/f)', pronunciation: 'eel MEH-dee-koh / doht-toh-REHS-sah' },
            { italian: 'L\'avvocato', english: 'Lawyer', pronunciation: 'lahv-voh-KAH-toh' },
            { italian: 'Il ingegnere', english: 'Engineer', pronunciation: 'een-jehn-NEH-reh' },
            { italian: 'Il cuoco / La cuoca', english: 'Cook (m/f)', pronunciation: 'eel KWOH-koh / KWOH-kah' },
            { italian: 'Il cameriere / La cameriera', english: 'Waiter/Waitress', pronunciation: 'eel kah-meh-RYEH-reh / RYEH-rah' },
            { italian: 'Lo studente / La studentessa', english: 'Student (m/f)', pronunciation: 'loh stoo-DEHN-teh / DEHS-sah' },
            { italian: 'L\'impiegato', english: 'Office worker', pronunciation: 'leem-pyeh-GAH-toh' },
            { italian: 'Il commesso', english: 'Shop assistant', pronunciation: 'eel kohm-MEHS-soh' },
            { italian: 'Il pilota', english: 'Pilot', pronunciation: 'eel pee-LOH-tah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Che lavoro fai?', english: 'What job do you do?' },
            { speaker: 'B', italian: 'Sono insegnante di italiano.', english: 'I am an Italian teacher.' },
            { speaker: 'A', italian: 'Che bella professione! Da quanto tempo lo fai?', english: 'What a beautiful profession! How long have you been doing it?' },
            { speaker: 'B', italian: 'Lo faccio da cinque anni.', english: 'I have been doing it for five years.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you ask "What do you do for work?"',
          options: ['Chi sei?', 'Che lavoro fai?', 'Dove lavori?', 'Come ti chiami?'],
          answer: 'Che lavoro fai?',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'She is a doctor at the hospital.',
          answer: "Lei e' medico in ospedale.",
          hint: 'medico = doctor, ospedale = hospital',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Io sono ___. Lavoro in un ristorante.',
          answer: 'cuoco',
          hint: 'The person who cooks food professionally',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Work Review',
          items: [
            { italian: "L'insegnante", english: 'Teacher' },
            { italian: 'Il medico', english: 'Doctor' },
            { italian: "L'avvocato", english: 'Lawyer' },
            { italian: 'Il cuoco', english: 'Cook' },
            { italian: 'Il cameriere', english: 'Waiter' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-26',
    title: 'At the Hotel',
    level: 'A2',
    unit: 8,
    unitTitle: 'Life and Culture',
    description: 'Learn how to book a room and navigate a hotel in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Hotel Vocabulary',
          text: 'Essential phrases for staying at a hotel in Italy:',
          items: [
            { italian: 'Vorrei prenotare una camera', english: 'I would like to book a room', pronunciation: 'vohr-RYE preh-noh-TAH-reh OO-nah KAH-meh-rah' },
            { italian: 'Una camera singola', english: 'A single room', pronunciation: 'OO-nah KAH-meh-rah SEEN-goh-lah' },
            { italian: 'Una camera doppia', english: 'A double room', pronunciation: 'OO-nah KAH-meh-rah DOHP-pyah' },
            { italian: 'La colazione', english: 'Breakfast', pronunciation: 'lah koh-lah-TSYOH-neh' },
            { italian: "L'ascensore", english: 'The elevator', pronunciation: 'lah-shehn-SOH-reh' },
            { italian: 'La chiave', english: 'The key', pronunciation: 'lah KYAH-veh' },
            { italian: 'A che ora e la colazione?', english: 'What time is breakfast?', pronunciation: 'ah keh OH-rah eh lah koh-lah-TSYOH-neh' },
            { italian: "C'e il Wi-Fi?", english: 'Is there Wi-Fi?', pronunciation: 'cheh eel wee-fee' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Guest', italian: 'Buongiorno, ho una prenotazione a nome di Rossi.', english: 'Good morning, I have a reservation under the name Rossi.' },
            { speaker: 'Receptionist', italian: 'Benvenuto! Ecco la chiave della camera 205.', english: 'Welcome! Here is the key for room 205.' },
            { speaker: 'Guest', italian: 'A che ora e la colazione?', english: 'What time is breakfast?' },
            { speaker: 'Receptionist', italian: 'Dalle sette alle dieci.', english: 'From seven to ten.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "A double room" in Italian?',
          options: ['Camera singola', 'Camera doppia', 'Camera grande', 'Camera piccola'],
          answer: 'Camera doppia',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I would like to book a single room.',
          answer: 'Vorrei prenotare una camera singola.',
          hint: 'Vorrei = I would like, prenotare = to book',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Ecco la ___ della camera.',
          answer: 'chiave',
          hint: 'You need this to open the door',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Hotel Review',
          items: [
            { italian: 'Camera singola', english: 'Single room' },
            { italian: 'Camera doppia', english: 'Double room' },
            { italian: 'La colazione', english: 'Breakfast' },
            { italian: 'La chiave', english: 'The key' },
            { italian: 'Prenotare', english: 'To book' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-27',
    title: 'At the Doctor',
    level: 'A2',
    unit: 8,
    unitTitle: 'Life and Culture',
    description: 'Learn how to describe symptoms and visit the doctor in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Medical Vocabulary',
          text: 'Essential phrases for a doctor visit:',
          items: [
            { italian: 'Ho mal di testa', english: 'I have a headache', pronunciation: 'oh mahl dee TEHS-tah' },
            { italian: 'Ho mal di stomaco', english: 'I have a stomachache', pronunciation: 'oh mahl dee STOH-mah-koh' },
            { italian: 'Ho la febbre', english: 'I have a fever', pronunciation: 'oh lah FEHB-breh' },
            { italian: 'Ho il raffreddore', english: 'I have a cold', pronunciation: 'oh eel rahf-frehd-DOH-reh' },
            { italian: 'Ho mal di gola', english: 'I have a sore throat', pronunciation: 'oh mahl dee GOH-lah' },
            { italian: 'Mi sento male', english: 'I feel sick', pronunciation: 'mee SEHN-toh MAH-leh' },
            { italian: "Ho bisogno di un medico", english: 'I need a doctor', pronunciation: 'oh bee-ZOH-nyoh dee oon MEH-dee-koh' },
            { italian: 'Mi faccia la ricetta', english: 'Write me a prescription', pronunciation: 'mee FAH-chah lah ree-CHEHT-tah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Doctor', italian: 'Buongiorno, che ha?', english: 'Good morning, what is the matter?' },
            { speaker: 'Patient', italian: 'Buongiorno dottore. Ho mal di testa da due giorni.', english: 'Good morning doctor. I have had a headache for two days.' },
            { speaker: 'Doctor', italian: 'Ha anche la febbre?', english: 'Do you also have a fever?' },
            { speaker: 'Patient', italian: 'Si, e mi sento molto stanco.', english: 'Yes, and I feel very tired.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "I have a fever" in Italian?',
          options: ['Ho mal di testa', 'Ho la febbre', 'Ho mal di gola', 'Ho il raffreddore'],
          answer: 'Ho la febbre',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Ho mal di gola e il raffreddore da tre giorni.',
          answer: 'I have had a sore throat and a cold for three days.',
          hint: 'mal di gola = sore throat, raffreddore = cold',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Mi sento ___. Ho bisogno di riposare.',
          answer: 'male',
          hint: 'Not well (feeling)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Doctor Visit Review',
          items: [
            { italian: 'Ho mal di testa', english: 'I have a headache' },
            { italian: 'Ho la febbre', english: 'I have a fever' },
            { italian: 'Ho il raffreddore', english: 'I have a cold' },
            { italian: 'Mi sento male', english: 'I feel sick' },
            { italian: 'Ho mal di gola', english: 'I have a sore throat' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-28',
    title: 'Irregular Verbs',
    level: 'B1',
    unit: 7,
    unitTitle: 'Intermediate Grammar',
    description: 'Master the most common irregular Italian verbs.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Common Irregular Verbs',
          text: 'These verbs do not follow regular patterns and must be memorized:',
          items: [
            { italian: 'Essere (to be)', english: 'io sono, tu sei, lui e, noi siamo, voi siete, loro sono', pronunciation: 'eh-SEH-reh' },
            { italian: 'Avere (to have)', english: 'io ho, tu hai, lui ha, noi abbiamo, voi avete, loro hanno', pronunciation: 'ah-VEH-reh' },
            { italian: 'Fare (to do/make)', english: 'io faccio, tu fai, lui fa, noi facciamo, voi fate, loro fanno', pronunciation: 'FAH-reh' },
            { italian: 'Andare (to go)', english: 'io vado, tu vai, lui va, noi andiamo, voi andate, loro vanno', pronunciation: 'ahn-DAH-reh' },
            { italian: 'Dire (to say)', english: 'io dico, tu dici, lui dice, noi diciamo, voi dite, loro dicono', pronunciation: 'DEE-reh' },
            { italian: 'Vedere (to see)', english: 'io vedo, tu vedi, lui vede, noi vediamo, voi vedete, loro vedono', pronunciation: 'veh-DEH-reh' },
            { italian: 'Venire (to come)', english: 'io vengo, tu vieni, lui viene, noi veniamo, voi venite, loro vengono', pronunciation: 'veh-NEE-reh' },
            { italian: 'Volere (to want)', english: 'io voglio, tu vuoi, lui vuole, noi vogliamo, voi volete, loro vogliono', pronunciation: 'voh-LEH-reh' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is the "io" form of "essere" (to be)?',
          options: ['sei', 'siamo', 'sono', 'siete'],
          answer: 'sono',
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is the "io" form of "avere" (to have)?',
          options: ['hai', 'ho', 'ha', 'abbiamo'],
          answer: 'ho',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Io ___ molto stanco oggi.',
          answer: 'sono',
          hint: 'Irregular verb "to be" for io',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'We want to go to the cinema.',
          answer: 'Vogliamo andare al cinema.',
          hint: 'Vogliamo = we want (volere)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Irregular Verbs Review',
          items: [
            { italian: 'Essere: sono, sei, e', english: 'I am, you are, he/she is' },
            { italian: 'Avere: ho, hai, ha', english: 'I have, you have, he/she has' },
            { italian: 'Fare: faccio, fai, fa', english: 'I do, you do, he/she does' },
            { italian: 'Andare: vado, vai, va', english: 'I go, you go, he/she goes' },
            { italian: 'Volere: voglio, vuoi, vuole', english: 'I want, you want, he/she wants' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-29',
    title: 'Reflexive Verbs',
    level: 'B1',
    unit: 7,
    unitTitle: 'Intermediate Grammar',
    description: 'Learn reflexive verbs for daily routines and self-actions.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Reflexive Verbs',
          text: 'Reflexive verbs describe actions you do to yourself. They use reflexive pronouns (mi, ti, si, ci, vi, si):',
          items: [
            { italian: 'Svegliarsi', english: 'To wake up', pronunciation: 'sveh-LYAHR-see' },
            { italian: 'Alzarsi', english: 'To get up', pronunciation: 'ahl-TSAHR-see' },
            { italian: 'Lavarsi', english: 'To wash oneself', pronunciation: 'lah-VAHR-see' },
            { italian: 'Vestirsi', english: 'To get dressed', pronunciation: 'veh-STEER-see' },
            { italian: 'Pettinarsi', english: 'To comb one\'s hair', pronunciation: 'peht-tee-NAHR-see' },
            { italian: 'Divertirsi', english: 'To have fun', pronunciation: 'dee-vehr-TEER-see' },
            { italian: 'Chiamarsi', english: 'To call oneself', pronunciation: 'kyah-MAHR-see' },
            { italian: 'Sentirsi', english: 'To feel', pronunciation: 'sehn-TEER-see' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Che fai la mattina?', english: 'What do you do in the morning?' },
            { speaker: 'B', italian: 'Mi sveglio alle sei, poi mi lavo e mi vesto.', english: 'I wake up at six, then I wash and get dressed.' },
            { speaker: 'A', italian: 'E poi vai al lavoro?', english: 'Then do you go to work?' },
            { speaker: 'B', italian: 'Si, mi pettino e esco di casa.', english: 'Yes, I comb my hair and leave the house.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'Which pronoun is used for "I" in reflexive verbs?',
          options: ['ti', 'mi', 'si', 'ci'],
          answer: 'mi',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ sveglio alle sette ogni giorno.',
          answer: 'Mi',
          hint: 'Reflexive pronoun for io',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'She gets dressed quickly every morning.',
          answer: 'Si veste velocemente ogni mattina.',
          hint: 'Si = reflexive for lei, veste = dresses',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Reflexive Verbs Review',
          items: [
            { italian: 'Mi sveglio', english: 'I wake up' },
            { italian: 'Ti lavi', english: 'You wash' },
            { italian: 'Si veste', english: 'He/She gets dressed' },
            { italian: 'Ci divertiamo', english: 'We have fun' },
            { italian: 'Vi chiamate', english: 'You all call yourselves' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-30',
    title: 'Subjunctive (Congiuntivo)',
    level: 'B1',
    unit: 7,
    unitTitle: 'Intermediate Grammar',
    description: 'Introduction to the subjunctive mood for expressing doubts and opinions.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'The Congiuntivo',
          text: 'The subjunctive is used to express doubt, wishes, opinions, and uncertain situations. It often appears after phrases like "penso che", "spero che", "voglio che":',
          items: [
            { italian: 'Penso che sia importante', english: 'I think it is important', pronunciation: 'PEHN-soh keh SYAH eem-pohr-TAHN-teh' },
            { italian: 'Spero che venga', english: 'I hope he/she comes', pronunciation: 'SPEH-roh keh VEHN-gah' },
            { italian: 'Voglio che tu parli', english: 'I want you to speak', pronunciation: 'VOHL-yoh keh too PAHR-lee' },
            { italian: 'E meglio che tu studi', english: 'It is better that you study', pronunciation: 'eh MEHL-yoh keh too STOO-dee' },
            { italian: 'Credo che sia vero', english: 'I believe it is true', pronunciation: 'KREH-doh keh SYAH VEH-roh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Pensi che sia una buona idea?', english: 'Do you think it is a good idea?' },
            { speaker: 'B', italian: 'Penso che sia fantastica!', english: 'I think it is fantastic!' },
            { speaker: 'A', italian: 'Spero che il tempo migliori.', english: 'I hope the weather improves.' },
            { speaker: 'B', italian: 'Anche io. E meglio che porti un ombrello.', english: 'Me too. It is better that you bring an umbrella.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'Which phrase triggers the subjunctive?',
          options: ['So che', 'Penso che', 'Vedo che', 'Dico che'],
          answer: 'Penso che',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Penso che ___ (essere) una bella giornata.',
          answer: 'sia',
          hint: 'Subjunctive of "essere" for io',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I hope that you come to the party.',
          answer: 'Spero che tu venga alla festa.',
          hint: 'Spero che = I hope that, venga = subjunctive of venire',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Subjunctive Review',
          items: [
            { italian: 'Penso che sia...', english: 'I think that it is...' },
            { italian: 'Spero che venga...', english: 'I hope that (he/she) comes...' },
            { italian: 'Voglio che tu parli...', english: 'I want you to speak...' },
            { italian: 'E meglio che...', english: 'It is better that...' },
            { italian: 'Credo che sia...', english: 'I believe that it is...' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-31',
    title: 'Possessive Adjectives',
    level: 'B2',
    unit: 9,
    unitTitle: 'Upper Intermediate Grammar',
    description: 'Master possessive adjectives and their agreement patterns in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Possessive Adjectives',
          text: 'Italian possessives agree with the gender of the noun possessed, not the possessor. With singular family nouns, use definite articles:',
          items: [
            { italian: 'Mio / Mia', english: 'My (m/f)', pronunciation: 'MYOH / MYAH' },
            { italian: 'Tuo / Tua', english: 'Your (m/f)', pronunciation: 'TWOH / TWAH' },
            { italian: 'Suo / Sua', english: 'His/Her/Your formal (m/f)', pronunciation: 'SWOH / SWAH' },
            { italian: 'Nostro / Nostra', english: 'Our (m/f)', pronunciation: 'NOHS-troh / NOHS-trah' },
            { italian: 'Vostro / Vostra', english: 'Your all (m/f)', pronunciation: 'VOHS-troh / VOHS-trah' },
            { italian: 'Loro', english: 'Their', pronunciation: 'LOHR-oh' },
            { italian: 'Il mio libro', english: 'My book (masc.)', pronunciation: 'eel MYOH LEE-broh' },
            { italian: 'La mia casa', english: 'My house (fem.)', pronunciation: 'lah MYAH KAH-zah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Di chi e questa macchina?', english: 'Whose car is this?' },
            { speaker: 'B', italian: 'E la macchina di Marco. E la sua.', english: "It's Marco's car. It's his." },
            { speaker: 'A', italian: 'E il tuo fratello a Roma?', english: 'Is your brother in Rome?' },
            { speaker: 'B', italian: 'Si, il mio fratello vive a Roma. La mia sorella anche.', english: 'Yes, my brother lives in Rome. My sister too.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'Which is correct for "my mother" in Italian?',
          options: ['Mia madre', 'La mia madre', 'Il mia madre', 'Mio madre'],
          answer: 'La mia madre',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ fratello e in Italia.',
          answer: 'Il mio',
          hint: 'My brother (fratello is masc. sing.)',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'Our house is beautiful.',
          answer: 'La nostra casa e bella.',
          hint: 'casa is feminine, so nostro becomes nostra',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Possessive Adjectives Review',
          items: [
            { italian: 'Il mio / La mia', english: 'My (m/f)' },
            { italian: 'Il tuo / La tua', english: 'Your (m/f)' },
            { italian: 'Il suo / La sua', english: 'His/Her (m/f)' },
            { italian: 'Il nostro / La nostra', english: 'Our (m/f)' },
            { italian: 'I nostri / Le nostre', english: 'Our (m.pl/f.pl)' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-32',
    title: 'Comparatives and Superlatives',
    level: 'B2',
    unit: 9,
    unitTitle: 'Upper Intermediate Grammar',
    description: 'Learn to compare things and express the highest degree in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Comparisons',
          text: 'Italian uses specific structures for comparisons:',
          items: [
            { italian: 'piu ... di', english: 'more ... than', pronunciation: 'PYOO dee' },
            { italian: 'meno ... di', english: 'less ... than', pronunciation: 'MEH-noh dee' },
            { italian: 'cosi ... come', english: 'as ... as', pronunciation: 'KOH-zee KOH-meh' },
            { italian: 'Il piu / La piu', english: 'The most', pronunciation: 'eel PYOO / lah PYOO' },
            { italian: 'Il meno / La meno', english: 'The least', pronunciation: 'eel MEH-noh / lah MEH-noh' },
            { italian: '-issimo/a', english: 'Very/Extremely (suffix)', pronunciation: '-ees-see-moh/mah' },
            { italian: 'Migliore', english: 'Better (irregular)', pronunciation: 'mee-LYOH-reh' },
            { italian: 'Peggiore', english: 'Worse (irregular)', pronunciation: 'peh-JOH-reh' },
            { italian: 'Grande', english: 'Big', pronunciation: 'GRAHN-deh' },
            { italian: 'Piccolo', english: 'Small', pronunciation: 'PEEK-koh-loh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: "Roma e piu bella di Milano?", english: 'Is Rome more beautiful than Milan?' },
            { speaker: 'B', italian: 'Secondo me, Roma e la citta piu bella d\'Italia.', english: 'In my opinion, Rome is the most beautiful city in Italy.' },
            { speaker: 'A', italian: 'Milano e piu grande di Roma.', english: 'Milan is bigger than Rome.' },
            { speaker: 'B', italian: 'Si, ma Roma e molto piu antica.', english: 'Yes, but Rome is much more ancient.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you say "more beautiful than" in Italian?',
          options: ['meno bella di', 'piu bella di', 'cosi bella come', 'bellissima di'],
          answer: 'piu bella di',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il caffe e ___ del tè.',
          answer: 'migliore',
          hint: 'Better (irregular comparative)',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'This is the best restaurant in the city.',
          answer: "Questo e il miglior ristorante della citta.",
          hint: 'migliore = best (irregular superlative)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Comparatives Review',
          items: [
            { italian: 'piu ... di', english: 'more ... than' },
            { italian: 'meno ... di', english: 'less ... than' },
            { italian: '-issimo', english: 'Very/Extremely' },
            { italian: 'Migliore', english: 'Better/Best' },
            { italian: 'Peggiore', english: 'Worse/Worst' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-33',
    title: 'Object Pronouns',
    level: 'B2',
    unit: 9,
    unitTitle: 'Upper Intermediate Grammar',
    description: 'Master direct, indirect, and combined object pronouns in Italian.',
    duration: 16,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Direct and Indirect Pronouns',
          text: 'Pronouns replace nouns to avoid repetition. Direct pronouns answer "what/whom", indirect answer "to whom/for whom":',
          items: [
            { italian: 'Mi', english: 'Me (direct/indirect)', pronunciation: 'MEE' },
            { italian: 'Ti', english: 'You (direct/indirect)', pronunciation: 'TEE' },
            { italian: 'Lo / La', english: 'Him/Her/It (direct m/f)', pronunciation: 'LOH / LAH' },
            { italian: 'Gli / Le', english: 'Him/Her (indirect m/f)', pronunciation: 'LEE / LEH' },
            { italian: 'Ci', english: 'Us', pronunciation: 'CHEE' },
            { italian: 'Vi', english: 'You all', pronunciation: 'VEE' },
            { italian: 'Li / Le', english: 'Them (direct m.pl/f.pl)', pronunciation: 'LEE / LEH' },
            { italian: 'Gli', english: 'Them (indirect)', pronunciation: 'LEE' },
            { italian: 'Me lo dai?', english: 'Will you give it to me?', pronunciation: 'meh loh DYE' },
            { italian: 'Gli parlo', english: 'I speak to him/her', pronunciation: 'lee PAHR-loh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai il libro?', english: 'Do you have the book?' },
            { speaker: 'B', italian: 'Si, ce l\'ho. Te lo presto volentieri.', english: "Yes, I have it. I'll gladly lend it to you." },
            { speaker: 'A', italian: 'Grazie! Quando me lo dai?', english: 'Thanks! When will you give it to me?' },
            { speaker: 'B', italian: 'Te lo do domani.', english: "I'll give it to you tomorrow." },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "gli" mean as an indirect pronoun?',
          options: ['To me', 'To him', 'To them', 'To us'],
          answer: 'To him',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Non ___ vedo. Dove sono?',
          answer: 'li',
          hint: 'Them (direct, masculine plural)',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: "I'll give it to her tomorrow.",
          answer: 'Glielo do domani.',
          hint: 'glielo = combined pronoun (gli + lo)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Object Pronouns Review',
          items: [
            { italian: 'Mi / Ti', english: 'Me / You' },
            { italian: 'Lo / La', english: 'Him / Her (direct)' },
            { italian: 'Gli / Le', english: 'Him / Her (indirect)' },
            { italian: 'Ci / Vi', english: 'Us / You all' },
            { italian: 'Li / Le', english: 'Them (direct)' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-34',
    title: 'The Imperative Mood',
    level: 'B2',
    unit: 9,
    unitTitle: 'Upper Intermediate Grammar',
    description: 'Learn to give commands, instructions, and make suggestions in Italian.',
    duration: 14,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Imperative Forms',
          text: 'The imperative is used for commands and requests. Forms differ for tu, Lei, noi, and voi:',
          items: [
            { italian: 'Parla! (tu)', english: 'Speak! (informal)', pronunciation: 'PAHR-lah' },
            { italian: 'Parli! (Lei)', english: 'Speak! (formal)', pronunciation: 'PAHR-lee' },
            { italian: 'Parliamo! (noi)', english: "Let's speak!", pronunciation: 'pahr-lyAH-moh' },
            { italian: 'Parlate! (voi)', english: 'Speak! (you all)', pronunciation: 'pahr-LAH-teh' },
            { italian: 'Mangia! (tu)', english: 'Eat!', pronunciation: 'mahn-JAH' },
            { italian: 'Mangiamo! (noi)', english: "Let's eat!", pronunciation: 'mahn-JAH-moh' },
            { italian: 'Andate! (voi)', english: 'Go! (you all)', pronunciation: 'ahn-DAH-teh' },
            { italian: 'Ascolta! (tu)', english: 'Listen!', pronunciation: 'ah-skohl-TAH' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Chef', italian: 'Ascoltate bene! Prima, scaldate l\'olio.', english: 'Listen well! First, heat the oil.' },
            { speaker: 'Chef', italian: 'Poi, aggiungete l\'aglio. Ma non bruciatelo!', english: 'Then, add the garlic. But don\'t burn it!' },
            { speaker: 'Student', italian: 'E dopo?', english: 'And after?' },
            { speaker: 'Chef', italian: 'Aggiungete i pomodori e cuocete per venti minuti. Non mescolate troppo!', english: 'Add the tomatoes and cook for twenty minutes. Don\'t stir too much!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is the imperative form of "parlare" for "tu"?',
          options: ['Parlare', 'Parla', 'Parli', 'Parlamo'],
          answer: 'Parla',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ il tuo dovere! (fare - tu)',
          answer: 'Fai',
          hint: 'Imperative of fare for tu',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: "Let's go to the beach!",
          answer: 'Andiamo alla spiaggia!',
          hint: 'Andiamo = Let\'s go (noi imperative)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Imperative Review',
          items: [
            { italian: 'Tu: -a / -e', english: 'Informal command' },
            { italian: 'Lei: -i', english: 'Formal command' },
            { italian: 'Noi: -iamo', english: "Let's..." },
            { italian: 'Voi: -ate / -ite', english: 'You all command' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-35',
    title: 'Italian Holidays and Traditions',
    level: 'B2',
    unit: 10,
    unitTitle: 'Culture and Society',
    description: 'Explore Italian holidays, celebrations, and cultural traditions.',
    duration: 16,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Holidays and Celebrations',
          text: 'Italy has rich holiday traditions. Learn the vocabulary:',
          items: [
            { italian: "Il Natale", english: 'Christmas', pronunciation: 'eel nah-TAH-leh' },
            { italian: "L'anno nuovo", english: 'New Year', pronunciation: 'lahn-noh NWOH-voh' },
            { italian: 'La Pasqua', english: 'Easter', pronunciation: 'lah PAHS-kwah' },
            { italian: "Il Carnevale", english: 'Carnival', pronunciation: 'eel kahr-neh-VAH-leh' },
            { italian: "La Festa della Repubblica", english: 'Republic Day (June 2)', pronunciation: 'lah FEHST-tah deh-lah reh-PPOOB-lee-kah' },
            { italian: "Il Ferragosto", english: 'August holiday', pronunciation: 'eel fehr-rah-GOHS-toh' },
            { italian: "Tutti i santi", english: 'All Saints Day (Nov 1)', pronunciation: 'TOOT-tee ee SAHN-tee' },
            { italian: "Il presepe", english: 'Nativity scene', pronunciation: 'eel preh-ZEH-peh' },
            { italian: "La Befana", english: 'Epiphany gift-giver', pronunciation: 'lah beh-FAH-nah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa fate a Natale?', english: 'What do you do at Christmas?' },
            { speaker: 'B', italian: 'La vigilia mangiamo il pesce con tutta la famiglia.', english: 'On Christmas Eve we eat fish with the whole family.' },
            { speaker: 'A', italian: 'E a Capodanno?', english: 'And at New Year?' },
            { speaker: 'B', italian: 'Andiamo a vedere i fuochi d\'artificio e mangiamo cotechino con lenticchie.', english: 'We go see fireworks and eat pork sausage with lentils.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is traditionally eaten on Christmas Eve in Italy?',
          options: ['Pizza', 'Fish (Pesce)', 'Pasta', 'Risotto'],
          answer: 'Fish (Pesce)',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'A Ferragosto tutti vanno al mare o in montagna.',
          answer: 'In August everyone goes to the sea or to the mountains.',
          hint: 'Ferragosto = August holiday, mare = sea',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'A ___ si mangia la colomba pasquale.',
          answer: 'Pasqua',
          hint: 'The spring holiday with chocolate doves',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Holidays Review',
          items: [
            { italian: 'Natale', english: 'Christmas' },
            { italian: 'Pasqua', english: 'Easter' },
            { italian: 'Ferragosto', english: 'August holiday' },
            { italian: 'Carnevale', english: 'Carnival' },
            { italian: 'Capodanno', english: 'New Year' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-36',
    title: 'Imperfect Subjunctive',
    level: 'C1',
    unit: 11,
    unitTitle: 'Advanced Grammar',
    description: 'Master the imperfect subjunctive for hypothetical and unreal situations.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Congiuntivo Imperfetto',
          text: 'The imperfect subjunctive is used in hypothetical "if" clauses and after certain expressions in the past:',
          items: [
            { italian: 'Se fossi ricco, viaggerei', english: 'If I were rich, I would travel', pronunciation: 'seh FOHS-see ree-COH, vee-ahj-JEH-rye' },
            { italian: 'Se potessi, lo farei', english: 'If I could, I would do it', pronunciation: 'seh poh-TEHS-see, loh fah-REH-ye' },
            { italian: 'Volevo che tu venissi', english: 'I wanted you to come', pronunciation: 'voh-LEH-voh keh too veh-NEE-see' },
            { italian: 'Era come se fossimo a casa', english: 'It was as if we were at home', pronunciation: 'EH-rah KOH-meh seh fohs-SEE-moh AH KAH-zah' },
            { italian: 'Speravo che tu stessi meglio', english: 'I hoped you were feeling better', pronunciation: 'speh-RAH-voh keh too STEHS-see MEHL-yoh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Se avessi piu tempo, cosa faresti?', english: 'If you had more time, what would you do?' },
            { speaker: 'B', italian: 'Imparerei il giapponese e viaggierei in Giappone.', english: 'I would learn Japanese and travel to Japan.' },
            { speaker: 'A', italian: 'Sei sicuro che ti piacerebbe?', english: 'Are you sure you would like it?' },
            { speaker: 'B', italian: 'Si, sarebbe un\'esperienza fantastica!', english: 'Yes, it would be a fantastic experience!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What tense is used in "if" clauses for unreal present situations?',
          options: ['Present indicative', 'Imperfect subjunctive', 'Future tense', 'Passato prossimo'],
          answer: 'Imperfect subjunctive',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Se ___ (io) milionario, comprerei una villa.',
          answer: 'fossi',
          hint: 'Imperfect subjunctive of essere for io',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'If I could speak Italian, I would move to Rome.',
          answer: 'Se potessi parlare italiano, mi trasferirei a Roma.',
          hint: 'Se = if, potessi = I could (imperf. subj.), mi trasferirei = I would move',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Imperfect Subjunctive Review',
          items: [
            { italian: 'Se fossi...', english: 'If I were...' },
            { italian: 'Se potessi...', english: 'If I could...' },
            { italian: 'Se avessi...', english: 'If I had...' },
            { italian: 'Volevo che tu...', english: 'I wanted you to...' },
            { italian: 'Sarebbe come se...', english: 'It would be as if...' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-37',
    title: 'Passive Voice',
    level: 'C1',
    unit: 11,
    unitTitle: 'Advanced Grammar',
    description: 'Learn to form and use the passive voice in Italian.',
    duration: 16,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Passive Voice',
          text: 'The passive voice is formed with essere + past participle. It is used when the action is more important than who performs it:',
          items: [
            { italian: 'Il libro e scritto da Italo Calvino', english: 'The book is written by Italo Calvino', pronunciation: 'eel LEE-broh eh SKREET-toh dah EE-tah-loh kahl-VEE-noh' },
            { italian: 'La pizza e mangiata in tutto il mondo', english: 'Pizza is eaten all over the world', pronunciation: 'lah PEET-tsah eh mahn-JAH-tah ehn TOOT-toh eel MOHN-doh' },
            { italian: 'Sono stati arrestati tre ladri', english: 'Three thieves were arrested', pronunciation: 'SOH-noh STAH-tee ah-rrehs-TAH-tee treh LAH-dree' },
            { italian: 'La citta e stata fondata dai romani', english: 'The city was founded by the Romans', pronunciation: 'lah CHEET-tah eh STAH-tah fohn-DAH-tah dah-ee roh-MAH-nee' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai letto l\'ultimo libro di Ferrante?', english: 'Have you read Ferrante\'s latest book?' },
            { speaker: 'B', italian: 'Si, e stato pubblicato l\'anno scorso. E stato tradotto in quaranta lingue.', english: 'Yes, it was published last year. It was translated into forty languages.' },
            { speaker: 'A', italian: 'E molto popolare all\'estero?', english: 'Is it very popular abroad?' },
            { speaker: 'B', italian: 'Si, e letto da milioni di persone in tutto il mondo.', english: 'Yes, it is read by millions of people all over the world.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How is the passive voice formed in Italian?',
          options: ['Avere + past participle', 'Essere + past participle', 'Fare + infinitive', 'Stare + gerund'],
          answer: 'Essere + past participle',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'La pizza ___ mangiata ovunque nel mondo.',
          answer: 'e',
          hint: 'Passive: is (essere present tense)',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'Rome was founded in 753 BC.',
          answer: "Roma e stata fondata nel 753 a.C.",
          hint: 'fondata = founded (past part. fem.), e stata = was',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Passive Voice Review',
          items: [
            { italian: 'e scritto', english: 'is written' },
            { italian: 'e stato fatto', english: 'was made' },
            { italian: 'e letta da', english: 'is read by' },
            { italian: 'Sono stati venduti', english: 'Were sold' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-38',
    title: 'Complex Sentences',
    level: 'C1',
    unit: 11,
    unitTitle: 'Advanced Grammar',
    description: 'Master complex sentence structures with relative clauses and connectors.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Connectors and Relative Clauses',
          text: 'Use sophisticated connectors to build complex sentences:',
          items: [
            { italian: 'Tuttavia', english: 'However', pronunciation: 'toot-tah-VEE-ah' },
            { italian: 'Nonostante', english: 'Despite / Although', pronunciation: 'noh-noh-STAHN-teh' },
            { italian: 'Affinche', english: 'So that / In order to', pronunciation: 'ahf-fee-KEH' },
            { italian: 'Purche', english: 'Provided that', pronunciation: 'poor-KEH' },
            { italian: 'Qualora', english: 'In case', pronunciation: 'kwah-LOH-rah' },
            { italian: 'Cosi come', english: 'Just as', pronunciation: 'KOH-zee KOH-meh' },
            { italian: 'Il quale / La quale', english: 'Which (relative)', pronunciation: 'eel KWAH-leh / lah KWAH-leh' },
            { italian: 'I quali / Le quali', english: 'Which (plural)', pronunciation: 'ee KWAH-lee / leh KWAH-lee' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai letto il libro che ti ho prestato?', english: 'Have you read the book I lent you?' },
            { speaker: 'B', italian: 'Si, l\'ho letto tutto. Nonostante fosse lungo, mi e piaciuto molto.', english: 'Yes, I read it all. Despite being long, I liked it a lot.' },
            { speaker: 'A', italian: 'Tuttavia il sequel e ancora meglio, il quale e stato pubblicato quest\'anno.', english: 'However the sequel is even better, which was published this year.' },
            { speaker: 'B', italian: 'Affinche possa leggerlo, ho bisogno che tu me lo presti.', english: 'So that I can read it, I need you to lend it to me.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'Which word means "Despite" or "Although"?',
          options: ['Tuttavia', 'Nonostante', 'Affinche', 'Purche'],
          answer: 'Nonostante',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Voglio un libro ___ sia interessante.',
          answer: 'il quale',
          hint: 'Relative pronoun "which"',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'However, despite the rain, we went to the museum.',
          answer: 'Tuttavia, nonostante la pioggia, siamo andati al museo.',
          hint: 'Tuttavia = however, nonostante = despite',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Complex Sentences Review',
          items: [
            { italian: 'Tuttavia', english: 'However' },
            { italian: 'Nonostante', english: 'Despite' },
            { italian: 'Affinche', english: 'So that' },
            { italian: 'Purche', english: 'Provided that' },
            { italian: 'Il quale', english: 'Which (relative)' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-39',
    title: 'Formal and Business Italian',
    level: 'C1',
    unit: 12,
    unitTitle: 'Professional Italian',
    description: 'Master formal writing, business communication, and professional Italian.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Business Italian',
          text: 'Professional Italian requires formal registers and specific vocabulary:',
          items: [
            { italian: 'Gentile Dottore/Dottoressa', english: 'Dear Doctor (formal letter)', pronunciation: 'jehn-TEE-leh DOHK-toh-reh/DOHK-toh-REHS-sah' },
            { italian: 'In riferimento a...', english: 'With reference to...', pronunciation: 'een ree-feh-ree-MEHN-toh AH' },
            { italian: 'Le scrivo per...', english: 'I am writing to you to...', pronunciation: 'leh SKREE-voh pehr' },
            { italian: 'Resto in attesa di un Suo cortese riscontro', english: 'I remain awaiting your kind reply', pronunciation: 'REHST-oh een aht-TAY-zah dee oon swoh kohr-TEH-zeh ree-SKROHN-toh' },
            { italian: 'In allegato trovera...', english: 'Attached you will find...', pronunciation: 'een ahl-leh-GAH-toh troh-veh-RAH' },
            { italian: 'Cordiali saluti', english: 'Kind regards', pronunciation: 'kohr-DYAH-lee sah-LOO-tee' },
            { italian: 'Disponibilita', english: 'Availability', pronunciation: 'dee-spoh-nee-bee-lee-TAH' },
            { italian: 'Collaborazione', english: 'Collaboration', pronunciation: 'kohl-lah-boh-rah-TSYOH-neh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'Email', italian: 'Gentile Dott. Rossi, Le scrivo in riferimento alla posizione di lavoro pubblicata sul vostro sito.', english: 'Dear Dr. Rossi, I am writing to you regarding the job position published on your website.' },
            { speaker: 'Email', italian: 'Sono un ingegnere con cinque anni di esperienza. In allegato trovera il mio curriculum vitae.', english: 'I am an engineer with five years of experience. Attached you will find my CV.' },
            { speaker: 'Email', italian: 'Resto in attesa di un Suo cortese riscontro. Cordiali saluti.', english: 'I remain awaiting your kind reply. Kind regards.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is the formal greeting in an Italian business letter?',
          options: ['Ciao', 'Salve', 'Gentile', 'Egregio'],
          answer: 'Gentile',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'en-to-it',
          sentence: 'I am writing to you regarding the project we discussed.',
          answer: 'Le scrivo in riferimento al progetto di cui abbiamo parlato.',
          hint: 'Le scrivo = I write to you (formal), in riferimento a = regarding',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___ in attesa di un Suo riscontro.',
          answer: 'Resto',
          hint: 'I remain (formal closing)',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Business Italian Review',
          items: [
            { italian: 'Gentile', english: 'Dear (formal)' },
            { italian: 'In riferimento a', english: 'Regarding' },
            { italian: 'Le scrivo per', english: 'I write to you to' },
            { italian: 'Resto in attesa', english: 'I remain awaiting' },
            { italian: 'Cordiali saluti', english: 'Kind regards' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-40',
    title: 'Italian Art, Literature, and Cinema',
    level: 'C1',
    unit: 12,
    unitTitle: 'Professional Italian',
    description: 'Explore Italian culture through art, literature, and cinema vocabulary.',
    duration: 20,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Art and Culture Vocabulary',
          text: 'Italy has an unparalleled cultural heritage. Learn to discuss it in Italian:',
          items: [
            { italian: 'Il Rinascimento', english: 'The Renaissance', pronunciation: 'eel ree-nah-schee-MEHN-toh' },
            { italian: 'La galleria', english: 'The gallery', pronunciation: 'lah gahl-leh-REE-ah' },
            { italian: 'Il museo', english: 'The museum', pronunciation: 'eel moo-ZEH-oh' },
            { italian: 'La scultura', english: 'Sculpture', pronunciation: 'lah skool-TOO-rah' },
            { italian: "L'architettura", english: 'Architecture', pronunciation: 'lahr-kee-teht-TOO-rah' },
            { italian: 'Il regista', english: 'The director (film)', pronunciation: 'eel reh-JEES-tah' },
            { italian: 'Il film', english: 'The film/movie', pronunciation: 'eel FEELM' },
            { italian: 'Il romanzo', english: 'The novel', pronunciation: 'eel roh-MAHN-tsoh' },
            { italian: 'La poesia', english: 'Poetry', pronunciation: 'lah poh-eh-ZEE-ah' },
            { italian: 'L\'opera lirica', english: 'Opera', pronunciation: 'loh-PEH-rah LEE-ree-kah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai visitato la Galleria degli Uffizi a Firenze?', english: 'Have you visited the Uffizi Gallery in Florence?' },
            { speaker: 'B', italian: 'Si, ho visto i dipinti di Botticelli, Leonardo e Michelangelo. Erano incredibili!', english: 'Yes, I saw paintings by Botticelli, Leonardo, and Michelangelo. They were incredible!' },
            { speaker: 'A', italian: 'Il Rinascimento italiano ha cambiato il mondo dell\'arte.', english: 'The Italian Renaissance changed the world of art.' },
            { speaker: 'B', italian: 'Assolutamente. E come dire, una delle ere piu importanti della storia.', english: 'Absolutely. It was one of the most important eras in history.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "Il Rinascimento" mean?',
          options: ['The Baroque', 'The Renaissance', 'The Medieval Period', 'The Modern Era'],
          answer: 'The Renaissance',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: "Leonardo da Vinci e uno dei registi piu famosi del mondo.",
          answer: 'Leonardo da Vinci is one of the most famous directors/artists in the world.',
          hint: 'regista = director, piu famosi = most famous',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Ho letto un ___ bellissimo di Italo Calvino.',
          answer: 'romanzo',
          hint: 'A long work of fiction',
        },
      },
      {
        type: 'review',
        content: {
          title: 'Art and Culture Review',
          items: [
            { italian: 'Il Rinascimento', english: 'The Renaissance' },
            { italian: 'La galleria', english: 'The gallery' },
            { italian: 'Il regista', english: 'The director' },
            { italian: 'La scultura', english: 'Sculpture' },
            { italian: "L'opera lirica", english: 'Opera' },
          ],
        },
      },
    ],
  },
  {
    id: 'lesson-41',
    title: 'Transportation',
    level: 'B2',
    unit: 9,
    unitTitle: 'Advanced Topics',
    description: 'Learn vocabulary and phrases for getting around Italian cities.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Transportation Vocabulary',
          text: 'Master Italian transportation terms for navigating cities and countryside.',
          items: [
            { italian: 'La stazione', english: 'The station', pronunciation: 'stah-TSYOH-neh' },
            { italian: 'Il binario', english: 'The platform (track)', pronunciation: 'bee-NAH-ryoh' },
            { italian: 'Il treno', english: 'The train', pronunciation: 'TREH-noh' },
            { italian: 'La metro', english: 'The subway', pronunciation: 'MEH-troh' },
            { italian: "L'autobus", english: 'The bus', pronunciation: 'OW-toh-boos' },
            { italian: 'Il biglietto', english: 'The ticket', pronunciation: 'beel-YEHT-toh' },
            { italian: "L'aereo", english: 'The airplane', pronunciation: 'ah-EH-reh-oh' },
            { italian: 'La fermata', english: 'The stop (bus stop)', pronunciation: 'fehr-MAH-tah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Scusi, dov\'e la stazione?', english: 'Excuse me, where is the station?' },
            { speaker: 'B', italian: 'Vada dritto, poi giri a sinistra.', english: 'Go straight, then turn left.' },
            { speaker: 'A', italian: 'A che ora parte il treno per Roma?', english: 'What time does the train to Rome leave?' },
            { speaker: 'B', italian: 'Alle otto e mezza, dal binario cinque.', english: 'At eight thirty, from platform five.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "il binario" mean?',
          options: ['The bus stop', 'The platform/track', 'The ticket', 'The train'],
          answer: 'The platform/track',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Devo prendere il metro per andare in centro.',
          answer: 'I need to take the subway to go downtown.',
          hint: 'prendere = to take',
        },
      },
      {
        type: 'listening',
        content: {
          italian: 'Il treno per Firenze parte alle nove.',
          answer: 'The train to Florence leaves at nine.',
          options: ['The train to Florence leaves at nine.', 'The train to Rome leaves at nine.', 'The bus to Florence leaves at nine.', 'The train to Florence arrives at nine.'],
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Qual e la ___ prossima per Milano?',
          answer: 'fermata',
          hint: 'stop (for bus/metro)',
        },
      },
    ],
  },
  {
    id: 'lesson-42',
    title: 'Technology',
    level: 'B2',
    unit: 9,
    unitTitle: 'Advanced Topics',
    description: 'Learn technology-related Italian vocabulary for modern life.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Technology Vocabulary',
          text: 'Essential Italian tech vocabulary for the digital age.',
          items: [
            { italian: 'Il computer', english: 'The computer', pronunciation: 'kohm-POO-ter' },
            { italian: 'Il telefono', english: 'The phone', pronunciation: 'teh-LEH-foh-noh' },
            { italian: "Lo smartphone", english: 'The smartphone', pronunciation: 'SMART-fon' },
            { italian: "L'internet", english: 'The internet', pronunciation: 'een-tehr-NEHT' },
            { italian: 'La password', english: 'The password', pronunciation: 'PAHS-word' },
            { italian: 'Il sito web', english: 'The website', pronunciation: 'SEE-toh WEHB' },
            { italian: "L'applicazione", english: 'The app', pronunciation: 'ahp-plee-kah-TSYOH-neh' },
            { italian: 'La chat', english: 'The chat', pronunciation: 'CHAHT' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai il numero di telefono di Marco?', english: 'Do you have Marco\'s phone number?' },
            { speaker: 'B', italian: 'Si, te lo mando per WhatsApp.', english: 'Yes, I\'ll send it to you on WhatsApp.' },
            { speaker: 'A', italian: 'Perfetto, grazie!', english: 'Perfect, thanks!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "l\'applicazione" in English?',
          options: ['The computer', 'The app', 'The website', 'The password'],
          answer: 'The app',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Non riesco a connettermi a internet.',
          answer: 'I can\'t connect to the internet.',
          hint: 'connettermi = to connect (myself)',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Qual e la tua ___ di accesso?',
          answer: 'password',
          hint: 'password',
        },
      },
    ],
  },
  {
    id: 'lesson-43',
    title: 'Environment',
    level: 'B2',
    unit: 9,
    unitTitle: 'Advanced Topics',
    description: 'Discuss environmental topics and sustainability in Italian.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Environment Vocabulary',
          text: 'Learn to discuss nature, pollution, and sustainability in Italian.',
          items: [
            { italian: "L'ambiente", english: 'The environment', pronunciation: 'ahm-BYEN-teh' },
            { italian: "L'inquinamento", english: 'Pollution', pronunciation: 'een-kwee-nah-MEHN-toh' },
            { italian: 'Il riciclo', english: 'Recycling', pronunciation: 'ree-CHEE-kloh' },
            { italian: "L'energia rinnovabile", english: 'Renewable energy', pronunciation: 'eh-NEHR-jah reen-noh-VAH-bee-leh' },
            { italian: 'Il cambiamento climatico', english: 'Climate change', pronunciation: 'kahm-byah-MEHN-toh klee-MAH-tee-koh' },
            { italian: 'La foresta', english: 'The forest', pronunciation: 'foh-REHS-tah' },
            { italian: 'Il fiume', english: 'The river', pronunciation: 'FYOO-meh' },
            { italian: 'La montagna', english: 'The mountain', pronunciation: 'mohn-TAH-nyah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa possiamo fare per l\'ambiente?', english: 'What can we do for the environment?' },
            { speaker: 'B', italian: 'Possiamo riciclare e usare meno plastica.', english: 'We can recycle and use less plastic.' },
            { speaker: 'A', italian: 'Hai ragione. Dobbiamo fare qualcosa.', english: 'You\'re right. We must do something.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "il cambiamento climatico" mean?',
          options: ['The weather', 'Climate change', 'The forest', 'Recycling'],
          answer: 'Climate change',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Dobbiamo proteggere le nostre foreste.',
          answer: 'We must protect our forests.',
          hint: 'proteggere = to protect',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___ e un problema grande nel mondo.',
          answer: 'riciclo',
          hint: 'recycling',
        },
      },
    ],
  },
  {
    id: 'lesson-44',
    title: 'Media and News',
    level: 'B2',
    unit: 9,
    unitTitle: 'Advanced Topics',
    description: 'Understand Italian media vocabulary and discuss current events.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Media Vocabulary',
          text: 'Key vocabulary for discussing news, TV, and media in Italian.',
          items: [
            { italian: 'Il giornale', english: 'The newspaper', pronunciation: 'johr-NAH-leh' },
            { italian: 'La televisione', english: 'The television', pronunciation: 'teh-leh-vee-SYOH-neh' },
            { italian: 'Il telegiornale', english: 'The TV news', pronunciation: 'teh-leh-johr-NAH-leh' },
            { italian: 'La notizia', english: 'The news item', pronunciation: 'noh-TEE-tsyah' },
            { italian: 'L\'articolo', english: 'The article', pronunciation: 'ahr-TEE-koh-loh' },
            { italian: 'Il film', english: 'The movie', pronunciation: 'FEELM' },
            { italian: 'La serie TV', english: 'The TV series', pronunciation: 'SEH-ree-eh TV' },
            { italian: 'Il documentario', english: 'The documentary', pronunciation: 'doh-koo-mehn-TAH-ryoh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai visto il telegiornale stasera?', english: 'Did you watch the news tonight?' },
            { speaker: 'B', italian: 'No, cosa e successo?', english: 'No, what happened?' },
            { speaker: 'A', italian: 'C\'era un\'interessante documentario sulla politica.', english: 'There was an interesting documentary about politics.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "il telegiornale"?',
          options: ['The newspaper', 'The TV news', 'The magazine', 'The article'],
          answer: 'The TV news',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Leggo il giornale ogni mattina.',
          answer: 'I read the newspaper every morning.',
          hint: 'leggo = I read (from leggere)',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Ho letto un ___ interessante sul giornale.',
          answer: 'articolo',
          hint: 'article',
        },
      },
    ],
  },
  {
    id: 'lesson-45',
    title: 'Italian Cooking',
    level: 'B2',
    unit: 9,
    unitTitle: 'Advanced Topics',
    description: 'Learn cooking vocabulary and traditional Italian recipes.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Cooking Vocabulary',
          text: 'Essential vocabulary for Italian cuisine and cooking.',
          items: [
            { italian: 'La ricetta', english: 'The recipe', pronunciation: 'ree-CHEHT-tah' },
            { italian: 'Il ingrediente', english: 'The ingredient', pronunciation: 'een-greh-DYEN-teh' },
            { italian: 'Cuocere', english: 'To cook', pronunciation: 'KWOH-cheh-reh' },
            { italian: 'Mescolare', english: 'To mix', pronunciation: 'meh-skoh-LAH-reh' },
            { italian: 'Tagliare', english: 'To cut', pronunciation: 'tah-LYAH-reh' },
            { italian: 'Aggiungere', english: 'To add', pronunciation: 'ahd-JOON-jeh-reh' },
            { italian: 'Il forno', english: 'The oven', pronunciation: 'FOHR-noh' },
            { italian: 'La padella', english: 'The frying pan', pronunciation: 'pah-DEHL-lah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Che cosa stai preparando?', english: 'What are you preparing?' },
            { speaker: 'B', italian: 'Sto facendo la pasta al ragu.', english: 'I\'m making pasta with meat sauce.' },
            { speaker: 'A', italian: 'Che profumo! Cosa ci metti?', english: 'It smells great! What do you put in it?' },
            { speaker: 'B', italian: 'Pomodori, cipolla, aglio e basilico.', english: 'Tomatoes, onion, garlic, and basil.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "cuocere" mean?',
          options: ['To cut', 'To mix', 'To cook', 'To add'],
          answer: 'To cook',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Aggiungi un po\' di sale alla salsa.',
          answer: 'Add a little salt to the sauce.',
          hint: 'aggiungi = add (imperative)',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Prima taglia le verdure, poi le ___ nella padella.',
          answer: 'mescoli',
          hint: 'mix (conjugated)',
        },
      },
    ],
  },
  {
    id: 'lesson-46',
    title: 'Idiomatic Expressions',
    level: 'C1',
    unit: 10,
    unitTitle: 'Mastery',
    description: 'Master common Italian idioms and expressions for natural speech.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Italian Idioms',
          text: 'Idiomatic expressions add color and authenticity to your Italian. Here are essential ones:',
          items: [
            { italian: 'In bocca al lupo', english: 'Good luck (literally: into the mouth of the wolf)', pronunciation: 'in BOHK-kah ahl LOO-poh' },
            { italian: 'Che pasta!', english: 'What a fool! (literally: what dough!)', pronunciation: 'keh PAHS-tah' },
            { italian: 'Avere le mani bucate', english: 'To be clumsy / unlucky with money', pronunciation: 'ah-VEH-reh leh MAH-nee boo-KAH-teh' },
            { italian: 'Non avere peli sulla lingua', english: 'To speak one\'s mind bluntly', pronunciation: 'nohn ah-VEH-reh PEH-lee SOOL-lah LEEN-gwah' },
            { italian: 'Essere al settimo cielo', english: 'To be over the moon', pronunciation: 'ehs-SEH-reh ahl SEHT-tee-moh CHEH-loh' },
            { italian: 'Mettere mano alla tasca', english: 'To reach for one\'s wallet', pronunciation: 'MEHT-teh-reh MAH-noh ahl-lah TAH-skah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Domani ho l\'esame. Sono nervosissimo!', english: 'Tomorrow I have the exam. I\'m so nervous!' },
            { speaker: 'B', italian: 'In bocca al lupo! Lo farai benissimo.', english: 'Good luck! You\'ll do great.' },
            { speaker: 'A', italian: 'Grazie, speriamo bene!', english: 'Thanks, let\'s hope so!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "Essere al settimo cielo" mean?',
          options: ['To be very tired', 'To be over the moon', 'To be lost', 'To be hungry'],
          answer: 'To be over the moon',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'In bocca al lupo per il tuo colloquio!',
          answer: 'Good luck for your interview!',
          hint: 'in bocca al lupo = good luck',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Non avere ___ sulla lingua, dimmi la verita!',
          answer: 'peli',
          hint: 'hairs',
        },
      },
    ],
  },
  {
    id: 'lesson-47',
    title: 'Italian History',
    level: 'C1',
    unit: 10,
    unitTitle: 'Mastery',
    description: 'Discuss Italian history from ancient Rome to modern times.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Historical Vocabulary',
          text: 'Learn to discuss Italian historical periods and events.',
          items: [
            { italian: "L'Impero Romano", english: 'The Roman Empire', pronunciation: 'EEM-peh-roh roh-MAH-noh' },
            { italian: 'Il Rinascimento', english: 'The Renaissance', pronunciation: 'ree-nah-shee-MEHN-toh' },
            { italian: "L'unificazione", english: 'The unification', pronunciation: 'oo-nee-fee-kah-TSYOH-neh' },
            { italian: 'Il Risorgimento', english: 'The Resurgence (Italian unification movement)', pronunciation: 'ree-zohr-jee-MEHN-toh' },
            { italian: 'La Repubblica', english: 'The Republic', pronunciation: 'reh-PPOOB-blee-kah' },
            { italian: 'Il antico', english: 'The ancient', pronunciation: 'ahn-TEE-koh' },
            { italian: 'La storia', english: 'The history', pronunciation: 'STOH-ryah' },
            { italian: 'Il Medioevo', english: 'The Middle Ages', pronunciation: 'MEH-dyoh-EH-voh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Stai studiando la storia italiana?', english: 'Are you studying Italian history?' },
            { speaker: 'B', italian: 'Si, sto leggendo sul Rinascimento.', english: 'Yes, I\'m reading about the Renaissance.' },
            { speaker: 'A', italian: 'Che periodo affascinante!', english: 'What a fascinating period!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "Il Risorgimento"?',
          options: ['The Renaissance', 'The Italian unification movement', 'The Roman Empire', 'The Middle Ages'],
          answer: 'The Italian unification movement',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'L\'Impero Romano e stato uno dei piu grandi della storia.',
          answer: 'The Roman Empire was one of the greatest in history.',
          hint: 'stato = been (passato prossimo of essere)',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___ e stato un periodo di grande creativita.',
          answer: 'Rinascimento',
          hint: 'The Renaissance',
        },
      },
    ],
  },
  {
    id: 'lesson-48',
    title: 'Regional Dialects',
    level: 'C1',
    unit: 10,
    unitTitle: 'Mastery',
    description: 'Learn about Italian regional dialects and cultural variations.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Regional Italian',
          text: 'Italy has rich linguistic diversity. Learn about regional variations:',
          items: [
            { italian: 'Il dialetto', english: 'The dialect', pronunciation: 'dyah-LEHT-toh' },
            { italian: 'Il accento', english: 'The accent', pronunciation: 'ahch-CHEN-toh' },
            { italian: 'Nord', english: 'North', pronunciation: 'NOR' },
            { italian: 'Sud', english: 'South', pronunciation: 'SOOD' },
            { italian: 'Il centro', english: 'The center', pronunciation: 'CHEHN-troh' },
            { italian: 'La tradizione', english: 'The tradition', pronunciation: 'trah-dee-TSYOH-neh' },
            { italian: 'Il dialetto napoletano', english: 'Neapolitan dialect', pronunciation: 'dyah-LEHT-toh nah-poh-leh-TAH-noh' },
            { italian: 'Il dialetto milanese', english: 'Milanese dialect', pronunciation: 'dyah-LEHT-toh mee-lah-NEH-zeh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Parli anche dialetto?', english: 'Do you also speak dialect?' },
            { speaker: 'B', italian: 'Si, parlo il napoletano a casa.', english: 'Yes, I speak Neapolitan at home.' },
            { speaker: 'A', italian: 'Che bello! E molto diverso dall\'italiano?', english: 'How nice! Is it very different from Italian?' },
            { speaker: 'B', italian: 'Si, un po\'. Ma si capisce.', english: 'Yes, a little. But it\'s understandable.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "il dialetto" mean?',
          options: ['The accent', 'The dialect', 'The tradition', 'The region'],
          answer: 'The dialect',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'In Italia ci sono molti dialetti diversi.',
          answer: 'In Italy there are many different dialects.',
          hint: 'ci sono = there are',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___ napoletano e molto musicale.',
          answer: 'dialetto',
          hint: 'dialect',
        },
      },
    ],
  },
  {
    id: 'lesson-49',
    title: 'Politics and Society',
    level: 'C1',
    unit: 10,
    unitTitle: 'Mastery',
    description: 'Discuss Italian politics and social issues fluently.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Politics Vocabulary',
          text: 'Essential vocabulary for discussing Italian politics and society.',
          items: [
            { italian: 'La politica', english: 'Politics', pronunciation: 'poh-LEE-tee-kah' },
            { italian: 'Il governo', english: 'The government', pronunciation: 'goh-VEHR-noh' },
            { italian: 'Il parlamento', english: 'The parliament', pronunciation: 'pahr-lah-MEHN-toh' },
            { italian: 'Il presidente', english: 'The president', pronunciation: 'preh-zee-DEN-teh' },
            { italian: 'Il sindaco', english: 'The mayor', pronunciation: 'SEEN-dah-koh' },
            { italian: 'Le elezioni', english: 'The elections', pronunciation: 'leh eh-leh-TSYOH-neh' },
            { italian: 'Il partito', english: 'The political party', pronunciation: 'pahr-TEE-toh' },
            { italian: 'La legge', english: 'The law', pronunciation: 'LEHJ-jeh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa pensi delle prossime elezioni?', english: 'What do you think about the upcoming elections?' },
            { speaker: 'B', italian: 'Spero che la gente voti con consapevolezza.', english: 'I hope people vote with awareness.' },
            { speaker: 'A', italian: 'E importante partecipare alla vita politica.', english: 'It\'s important to participate in political life.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "il sindaco"?',
          options: ['The president', 'The mayor', 'The minister', 'The senator'],
          answer: 'The mayor',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Il governo ha approvato una nuova legge.',
          answer: 'The government has approved a new law.',
          hint: 'ha approvato = has approved',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Le ___ sono previste per la prossima primavera.',
          answer: 'elezioni',
          hint: 'elections',
        },
      },
    ],
  },
  {
    id: 'lesson-50',
    title: 'Italian Philosophy',
    level: 'C1',
    unit: 10,
    unitTitle: 'Mastery',
    description: 'Explore Italian philosophical traditions and discuss abstract ideas.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Philosophy Vocabulary',
          text: 'Learn to discuss philosophy and abstract concepts in Italian.',
          items: [
            { italian: 'La filosofia', english: 'Philosophy', pronunciation: 'fee-loh-zoh-FEE-ah' },
            { italian: 'Il pensiero', english: 'The thought', pronunciation: 'pehn-SYEH-roh' },
            { italian: 'La verita', english: 'The truth', pronunciation: 'veh-ree-TAH' },
            { italian: 'La liberta', english: 'Freedom', pronunciation: 'lee-behr-TAH' },
            { italian: 'La giustizia', english: 'Justice', pronunciation: 'joos-TEE-tsyah' },
            { italian: 'Il destino', english: 'Destiny / Fate', pronunciation: 'dehs-TEE-noh' },
            { italian: 'La virtu', english: 'Virtue', pronunciation: 'veer-TOO' },
            { italian: 'La saggezza', english: 'Wisdom', pronunciation: 'sahd-JEHT-tsah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Qual e il significato della vita?', english: 'What is the meaning of life?' },
            { speaker: 'B', italian: 'Questa e una grande domanda filosofica.', english: 'That is a great philosophical question.' },
            { speaker: 'A', italian: 'Cosa ne pensi tu?', english: 'What do you think about it?' },
            { speaker: 'B', italian: 'Penso che la felicita sia nella semplicita.', english: 'I think happiness is in simplicity.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la saggezza" mean?',
          options: ['Justice', 'Wisdom', 'Freedom', 'Virtue'],
          answer: 'Wisdom',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'La liberta di pensiero e un diritto fondamentale.',
          answer: 'Freedom of thought is a fundamental right.',
          hint: 'fondamentale = fundamental',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'La ___ e importante quanto la liberta.',
          answer: 'giustizia',
          hint: 'justice',
        },
      },
    ],
  },
  {
    id: 'lesson-51',
    title: 'At the Beach',
    level: 'A2',
    unit: 5,
    unitTitle: 'Daily Life',
    description: 'Vocabulary and phrases for beach and summer activities.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Beach Vocabulary',
          text: 'Essential Italian vocabulary for beach outings.',
          items: [
            { italian: 'La spiaggia', english: 'The beach', pronunciation: 'SPYAHJ-jah' },
            { italian: 'Il mare', english: 'The sea', pronunciation: 'MAH-reh' },
            { italian: 'Il sole', english: 'The sun', pronunciation: 'SOH-leh' },
            { italian: 'La sabbia', english: 'The sand', pronunciation: 'SAHB-byah' },
            { italian: 'L\'ombrello', english: 'The umbrella', pronunciation: 'ohm-BREHL-loh' },
            { italian: 'Il costume da bagno', english: 'The swimsuit', pronunciation: 'kohs-TOO-meh dah BAH-nyoh' },
            { italian: 'Il salvagente', english: 'The life preserver', pronunciation: 'sahl-vah-JEN-teh' },
            { italian: 'La crema solare', english: 'The sunscreen', pronunciation: 'KREH-mah soh-LAH-reh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Andiamo in spiaggia oggi?', english: 'Shall we go to the beach today?' },
            { speaker: 'B', italian: 'Si! Porta la crema solare.', english: 'Yes! Bring the sunscreen.' },
            { speaker: 'A', italian: 'Porto anche l\'ombrello.', english: 'I\'ll also bring the umbrella.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la spiaggia" mean?',
          options: ['The sea', 'The beach', 'The sand', 'The pool'],
          answer: 'The beach',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Il mare e molto bello oggi.',
          answer: 'The sea is very beautiful today.',
          hint: 'mare = sea',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Porta la ___(crema) solare.',
          answer: 'crema',
          hint: 'sunscreen',
        },
      },
    ],
  },
  {
    id: 'lesson-52',
    title: 'Animals',
    level: 'A1',
    unit: 2,
    unitTitle: 'Building Blocks',
    description: 'Learn the names of common animals in Italian.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Animal Names',
          text: 'Common Italian animal vocabulary.',
          items: [
            { italian: 'Il cane', english: 'The dog', pronunciation: 'KAH-neh' },
            { italian: 'Il gatto', english: 'The cat', pronunciation: 'GAHT-toh' },
            { italian: 'Il uccello', english: 'The bird', pronunciation: 'oo-CHEHL-loh' },
            { italian: 'Il pesce', english: 'The fish', pronunciation: 'PEH-sheh' },
            { italian: 'La mucca', english: 'The cow', pronunciation: 'MOOK-kah' },
            { italian: 'Il cavallo', english: 'The horse', pronunciation: 'kah-VAHL-loh' },
            { italian: 'Il coniglio', english: 'The rabbit', pronunciation: 'koh-NEE-lyoh' },
            { italian: 'La farfalla', english: 'The butterfly', pronunciation: 'fahr-FAHL-lah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai un animale domestico?', english: 'Do you have a pet?' },
            { speaker: 'B', italian: 'Si, ho due cani e un gatto.', english: 'Yes, I have two dogs and a cat.' },
            { speaker: 'A', italian: 'Che bello! Come si chiamano?', english: 'How nice! What are their names?' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "il gatto" in English?',
          options: ['The dog', 'The cat', 'The bird', 'The fish'],
          answer: 'The cat',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Il cane e il migliore amico dell\'uomo.',
          answer: 'The dog is man\'s best friend.',
          hint: 'cane = dog',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Ho due ___(cane) e un gatto.',
          answer: 'cani',
          hint: 'plural of cane',
        },
      },
    ],
  },
  {
    id: 'lesson-53',
    title: 'Hobbies and Free Time',
    level: 'A2',
    unit: 5,
    unitTitle: 'Daily Life',
    description: 'Talk about hobbies and leisure activities in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Hobbies Vocabulary',
          text: 'Common Italian hobby and leisure vocabulary.',
          items: [
            { italian: 'Il hobby', english: 'The hobby', pronunciation: 'OH-bee' },
            { italian: 'Il tempo libero', english: 'Free time', pronunciation: 'TEHM-poh LEE-beh-roh' },
            { italian: 'Leggere', english: 'To read', pronunciation: 'LEHJ-jeh-reh' },
            { italian: 'Guardare la TV', english: 'To watch TV', english: 'To watch TV', pronunciation: 'gwahr-DAH-reh lah TV' },
            { italian: 'Ascoltare la musica', english: 'To listen to music', pronunciation: 'ahskohl-TAH-reh lah MOO-zee-kah' },
            { italian: 'Giocare a calcio', english: 'To play soccer', pronunciation: 'joh-KAH-reh ahl CHEE-oh' },
            { italian: 'Fare una passeggiata', english: 'To take a walk', pronunciation: 'FAH-reh OO-nah pahs-seh-JAH-tah' },
            { italian: 'Cucinare', english: 'To cook', pronunciation: 'koo-chee-NAH-reh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Cosa fai nel tempo libero?', english: 'What do you do in your free time?' },
            { speaker: 'B', italian: 'Mi piace leggere e ascoltare la musica.', english: 'I like reading and listening to music.' },
            { speaker: 'A', italian: 'Anche a me piace leggere!', english: 'I also like reading!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "fare una passeggiata" mean?',
          options: ['To take a run', 'To take a walk', 'To go shopping', 'To cook dinner'],
          answer: 'To take a walk',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Nel tempo libero mi piace cucinare.',
          answer: 'In my free time I like to cook.',
          hint: 'cucinare = to cook',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Mi piace ___(giocare) a calcio.',
          answer: 'giocare',
          hint: 'to play',
        },
      },
    ],
  },
  {
    id: 'lesson-54',
    title: 'At the Restaurant',
    level: 'A2',
    unit: 5,
    unitTitle: 'Daily Life',
    description: 'Master ordering food and dining in Italian restaurants.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Restaurant Phrases',
          text: 'Essential Italian phrases for dining out.',
          items: [
            { italian: 'Un tavolo per due, per favore', english: 'A table for two, please' },
            { italian: 'Il menu, per favore', english: 'The menu, please' },
            { italian: 'Cosa mi consiglia?', english: 'What do you recommend?' },
            { italian: 'Vorrei...', english: 'I would like...' },
            { italian: 'Il conto, per favore', english: 'The check, please' },
            { italian: 'E delizioso!', english: 'It\'s delicious!' },
            { italian: 'Posso avere l\'acqua?', english: 'Can I have water?' },
            { italian: 'Sono allergico a...', english: 'I\'m allergic to...' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Buonasera, un tavolo per due.', english: 'Good evening, a table for two.' },
            { speaker: 'B', italian: 'Subito. Ecco il menu.', english: 'Right away. Here\'s the menu.' },
            { speaker: 'A', italian: 'Vorrei la pasta al pomodoro.', english: 'I\'d like the tomato pasta.' },
            { speaker: 'B', italian: 'Buona scelta! E per secondo?', english: 'Good choice! And for the second course?' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'How do you ask for the check in Italian?',
          options: ['Il menu, per favore', 'Il conto, per favore', 'L\'acqua, per favore', 'Il tavolo, per favore'],
          answer: 'Il conto, per favore',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Cosa mi consiglia come secondo?',
          answer: 'What do you recommend as a second course?',
          hint: 'consiglia = recommend',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: '___(vorrei) la pasta al ragu.',
          answer: 'Vorrei',
          hint: 'I would like',
        },
      },
    ],
  },
  {
    id: 'lesson-55',
    title: 'Family Relationships',
    level: 'A1',
    unit: 1,
    unitTitle: 'First Steps',
    description: 'Expand family vocabulary and talk about relationships.',
    duration: 10,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Extended Family',
          text: 'More Italian family vocabulary.',
          items: [
            { italian: 'Il nonno', english: 'The grandfather', pronunciation: 'NOHN-noh' },
            { italian: 'La nonna', english: 'The grandmother', pronunciation: 'NOHN-nah' },
            { italian: 'Il cugino', english: 'The cousin (male)', pronunciation: 'koo-JEE-noh' },
            { italian: 'La cugina', english: 'The cousin (female)', pronunciation: 'koo-JEE-nah' },
            { italian: 'Il nipote', english: 'The nephew/grandchild', pronunciation: 'nee-POH-teh' },
            { italian: 'Lo zio', english: 'The uncle', pronunciation: 'DZEE-oh' },
            { italian: 'La zia', english: 'The aunt', pronunciation: 'DZEE-ah' },
            { italian: 'Il suocero', english: 'The father-in-law', pronunciation: 'SWOH-cheh-roh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Quanti anni ha tuo nonno?', english: 'How old is your grandfather?' },
            { speaker: 'B', italian: 'Ha settantacinque anni.', english: 'He is seventy-five years old.' },
            { speaker: 'A', italian: 'E in buona salute?', english: 'Is he in good health?' },
            { speaker: 'B', italian: 'Si, grazie a Dio!', english: 'Yes, thank God!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What is "la nonna" in English?',
          options: ['The aunt', 'The grandmother', 'The mother', 'The sister'],
          answer: 'The grandmother',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Mio nipote ha cinque anni.',
          answer: 'My nephew/grandchild is five years old.',
          hint: 'nipote = nephew/grandchild',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___(zio) di Marco e medico.',
          answer: 'zio',
          hint: 'uncle',
        },
      },
    ],
  },
  {
    id: 'lesson-56',
    title: 'Shopping and Bargaining',
    level: 'A2',
    unit: 5,
    unitTitle: 'Daily Life',
    description: 'Learn to shop and negotiate prices in Italian markets.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Shopping Phrases',
          text: 'Essential Italian shopping vocabulary.',
          items: [
            { italian: 'Quanto costa?', english: 'How much does it cost?' },
            { italian: 'Troppo caro!', english: 'Too expensive!' },
            { italian: 'Scontato?', english: 'On sale?' },
            { italian: 'Posso provare?', english: 'Can I try it on?' },
            { italian: 'Lo prendo.', english: 'I\'ll take it.' },
            { italian: 'Avete una taglia piu grande?', english: 'Do you have a larger size?' },
            { italian: 'Posso pagare con la carta?', english: 'Can I pay by card?' },
            { italian: 'Mi fa uno sconto?', english: 'Can you give me a discount?' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Buongiorno! Cosa desidera?', english: 'Good morning! What would you like?' },
            { speaker: 'B', italian: 'Quanto costa questa camicia?', english: 'How much is this shirt?' },
            { speaker: 'A', italian: 'Costa cinquanta euro.', english: 'It costs fifty euros.' },
            { speaker: 'B', italian: 'Troppo caro! Me la fa a quaranta?', english: 'Too expensive! Can you do it for forty?' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "Troppo caro" mean?',
          options: ['Very nice', 'Too expensive', 'Very cheap', 'Just right'],
          answer: 'Too expensive',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Posso provare questa gonna?',
          answer: 'Can I try on this skirt?',
          hint: 'provare = to try',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Quanto ___(costare) le scarpe?',
          answer: 'costano',
          hint: 'plural of costa',
        },
      },
    ],
  },
  {
    id: 'lesson-57',
    title: 'Sports and Fitness',
    level: 'A2',
    unit: 6,
    unitTitle: 'Activities',
    description: 'Learn Italian vocabulary for sports and exercise.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Sports Vocabulary',
          text: 'Common Italian sports and fitness vocabulary.',
          items: [
            { italian: 'Il calcio', english: 'Soccer', pronunciation: 'KAHL-choh' },
            { italian: 'La pallacanestro', english: 'Basketball', pronunciation: 'pahl-lah-kah-NEHS-troh' },
            { italian: 'Il tennis', english: 'Tennis', pronunciation: 'TEHN-nees' },
            { italian: 'Il nuoto', english: 'Swimming', pronunciation: 'NWOH-toh' },
            { italian: 'La corsa', english: 'Running', pronunciation: 'KOHR-sah' },
            { italian: 'Il ciclismo', english: 'Cycling', pronunciation: 'chee-CHEES-moh' },
            { italian: 'Lo yoga', english: 'Yoga', pronunciation: 'YOH-gah' },
            { italian: 'La palestra', english: 'The gym', pronunciation: 'pah-LEHS-trah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Che sport fai?', english: 'What sport do you play?' },
            { speaker: 'B', italian: 'Gioco a calcio il weekend.', english: 'I play soccer on weekends.' },
            { speaker: 'A', italian: 'A me piace nuotare.', english: 'I like swimming.' },
            { speaker: 'B', italian: 'Andiamo in palestra insieme!', english: 'Let\'s go to the gym together!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "il nuoto" mean?',
          options: ['Running', 'Swimming', 'Cycling', 'Tennis'],
          answer: 'Swimming',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Vado in palestra tre volte alla settimana.',
          answer: 'I go to the gym three times a week.',
          hint: 'palestra = gym',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Gioco a ___(calcio) il sabato.',
          answer: 'calcio',
          hint: 'Italian soccer',
        },
      },
    ],
  },
  {
    id: 'lesson-58',
    title: 'Music and Concerts',
    level: 'A2',
    unit: 6,
    unitTitle: 'Activities',
    description: 'Discuss music, instruments, and concert experiences.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Music Vocabulary',
          text: 'Italian vocabulary for music and concerts.',
          items: [
            { italian: 'La musica', english: 'Music', pronunciation: 'MOO-zee-kah' },
            { italian: 'La canzone', english: 'The song', pronunciation: 'kah-NOH-tsoh-neh' },
            { italian: 'L\'artista', english: 'The artist', pronunciation: 'ahr-TEES-tah' },
            { italian: 'Il concerto', english: 'The concert', pronunciation: 'kohn-CHEHR-toh' },
            { italian: 'La chitarra', english: 'The guitar', pronunciation: 'kee-TAHR-rah' },
            { italian: 'Il pianoforte', english: 'The piano', pronunciation: 'pyah-noh-FOHR-teh' },
            { italian: 'Il violino', english: 'The violin', pronunciation: 'vyoh-LEE-noh' },
            { italian: 'Il cantante', english: 'The singer', pronunciation: 'kahn-TAHN-teh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Che tipo di musica ascolti?', english: 'What type of music do you listen to?' },
            { speaker: 'B', italian: 'Ascolto la musica classica e pop.', english: 'I listen to classical and pop music.' },
            { speaker: 'A', italian: 'Hai mai stato a un concerto?', english: 'Have you ever been to a concert?' },
            { speaker: 'B', italian: 'Si, sono stato al concerto di Pavarotti!', english: 'Yes, I went to Pavarotti\'s concert!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la canzone" mean?',
          options: ['The album', 'The song', 'The concert', 'The instrument'],
          answer: 'The song',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Mi piace ascoltare la musica italiana.',
          answer: 'I like listening to Italian music.',
          hint: 'ascoltare = to listen',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___(cantante) e molto bravo.',
          answer: 'cantante',
          hint: 'singer',
        },
      },
    ],
  },
  {
    id: 'lesson-59',
    title: 'Nature and Outdoors',
    level: 'B1',
    unit: 7,
    unitTitle: 'Culture and Society',
    description: 'Describe nature, landscapes, and outdoor activities.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Nature Vocabulary',
          text: 'Italian vocabulary for nature and outdoor environments.',
          items: [
            { italian: 'La natura', english: 'Nature', pronunciation: 'nah-TOO-rah' },
            { italian: 'Il bosco', english: 'The forest', pronunciation: 'BOHS-koh' },
            { italian: 'Il lago', english: 'The lake', pronunciation: 'LAH-goh' },
            { italian: 'La spiaggia', english: 'The beach', pronunciation: 'SPYAHJ-jah' },
            { italian: 'Il fiume', english: 'The river', pronunciation: 'FYOO-meh' },
            { italian: 'La montagna', english: 'The mountain', pronunciation: 'mohn-TAH-nyah' },
            { italian: 'La valle', english: 'The valley', pronunciation: 'VAHL-leh' },
            { italian: 'Il sentiero', english: 'The path/trail', pronunciation: 'sehn-TYEH-roh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Dove vai in vacanza?', english: 'Where are you going on vacation?' },
            { speaker: 'B', italian: 'Vado in montagna per fare escursioni.', english: 'I\'m going to the mountains for hiking.' },
            { speaker: 'A', italian: 'Che bello! Amo la natura.', english: 'How nice! I love nature.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "il sentiero" mean?',
          options: ['The road', 'The path/trail', 'The bridge', 'The valley'],
          answer: 'The path/trail',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Il bosco e pieno di alberi alti.',
          answer: 'The forest is full of tall trees.',
          hint: 'bosco = forest',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___(lago) e molto tranquillo.',
          answer: 'lago',
          hint: 'body of water',
        },
      },
    ],
  },
  {
    id: 'lesson-60',
    title: 'Art and Museums',
    level: 'B1',
    unit: 7,
    unitTitle: 'Culture and Society',
    description: 'Visit museums and discuss Italian art and culture.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Art Vocabulary',
          text: 'Italian vocabulary for art and museums.',
          items: [
            { italian: 'Il museo', english: 'The museum', pronunciation: 'moo-ZEH-oh' },
            { italian: 'Il quadro', english: 'The painting', pronunciation: 'KWAH-droh' },
            { italian: 'La scultura', english: 'The sculpture', pronunciation: 'skool-TOO-rah' },
            { italian: 'La galleria', english: 'The gallery', pronunciation: 'gahl-leh-REE-ah' },
            { italian: "L'opera", english: 'The artwork', pronunciation: 'OH-peh-rah' },
            { italian: 'L\'artista', english: 'The artist', pronunciation: 'ahr-TEES-tah' },
            { italian: 'Il biglietto', english: 'The ticket', pronunciation: 'beel-YEHT-toh' },
            { italian: 'La mostra', english: 'The exhibition', pronunciation: 'MOH-strah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai mai visitato i musei vaticani?', english: 'Have you ever visited the Vatican museums?' },
            { speaker: 'B', italian: 'Si, erano impressionanti!', english: 'Yes, they were impressive!' },
            { speaker: 'A', italian: 'Qual e la tua opera preferita?', english: 'What is your favorite artwork?' },
            { speaker: 'B', italian: 'La Cappella Sistina, senza dubbio.', english: 'The Sistine Chapel, without a doubt.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la mostra" mean?',
          options: ['The museum', 'The exhibition', 'The painting', 'The gallery'],
          answer: 'The exhibition',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Ho visitato la galleria degli Uffizi.',
          answer: 'I visited the Uffizi Gallery.',
          hint: 'galleria = gallery',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Il ___(quadro) e molto bello.',
          answer: 'quadro',
          hint: 'painting',
        },
      },
    ],
  },
  {
    id: 'lesson-61',
    title: 'Means of Transport',
    level: 'A2',
    unit: 5,
    unitTitle: 'Daily Life',
    description: 'Discuss different modes of transportation.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Transport Vocabulary',
          text: 'Italian vocabulary for various transportation modes.',
          items: [
            { italian: "L'automobile", english: 'The car', pronunciation: 'ow-toh-moh-BEE-leh' },
            { italian: "L'autobus", english: 'The bus', pronunciation: 'OW-toh-boos' },
            { italian: 'Il treno', english: 'The train', pronunciation: 'TREH-noh' },
            { italian: "L'aereo", english: 'The airplane', pronunciation: 'ah-EH-reh-oh' },
            { italian: 'La bicicletta', english: 'The bicycle', pronunciation: 'bee-chee-KLEHT-tah' },
            { italian: 'La moto', english: 'The motorcycle', pronunciation: 'MOH-toh' },
            { italian: 'Il taxi', english: 'The taxi', pronunciation: 'TAHK-see' },
            { italian: 'La barca', english: 'The boat', pronunciation: 'BAHR-kah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Come vai al lavoro?', english: 'How do you go to work?' },
            { speaker: 'B', italian: 'Vado in autobus.', english: 'I go by bus.' },
            { speaker: 'A', italian: 'E piu veloce in treno?', english: 'Is it faster by train?' },
            { speaker: 'B', italian: 'Si, ma il bus e piu economico.', english: 'Yes, but the bus is cheaper.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la bicicletta" mean?',
          options: ['The motorcycle', 'The bicycle', 'The car', 'The bus'],
          answer: 'The bicycle',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Prendo il treno ogni mattina.',
          answer: 'I take the train every morning.',
          hint: 'treno = train',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Vado al lavoro in ___(automobile).',
          answer: 'automobile',
          hint: 'car',
        },
      },
    ],
  },
  {
    id: 'lesson-62',
    title: 'Health and Wellness',
    level: 'A2',
    unit: 5,
    unitTitle: 'Daily Life',
    description: 'Discuss health, symptoms, and wellness in Italian.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Health Vocabulary',
          text: 'Essential Italian vocabulary for health and wellness.',
          items: [
            { italian: 'La salute', english: 'Health', pronunciation: 'sah-LOO-teh' },
            { italian: 'Il dolore', english: 'The pain', pronunciation: 'doh-LOH-reh' },
            { italian: 'La febbre', english: 'The fever', pronunciation: 'FEHB-beh-reh' },
            { italian: 'Il mal di testa', english: 'Headache', pronunciation: 'mahl dee TEHS-tah' },
            { italian: 'Il mal di stomaco', english: 'Stomachache', pronunciation: 'mahl dee STOH-mah-koh' },
            { italian: 'La medicina', english: 'The medicine', pronunciation: 'meh-dee-CHEE-nah' },
            { italian: 'La ricetta', english: 'The prescription', pronunciation: 'ree-CHEHT-tah' },
            { italian: 'La farmacia', english: 'The pharmacy', pronunciation: 'fahr-mah-CHEE-ah' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Come ti senti?', english: 'How do you feel?' },
            { speaker: 'B', italian: 'Ho un forte mal di testa.', english: 'I have a bad headache.' },
            { speaker: 'A', italian: 'Prendi una medicina e riposati.', english: 'Take some medicine and rest.' },
            { speaker: 'B', italian: 'Grazie del consiglio.', english: 'Thanks for the advice.' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la febbre" mean?',
          options: ['The headache', 'The fever', 'The cough', 'The cold'],
          answer: 'The fever',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Devo andare in farmacia a comprare la medicina.',
          answer: 'I need to go to the pharmacy to buy medicine.',
          hint: 'farmacia = pharmacy',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Ho un forte mal di ___(testa).',
          answer: 'testa',
          hint: 'head',
        },
      },
    ],
  },
  {
    id: 'lesson-63',
    title: 'Technology in Daily Life',
    level: 'B1',
    unit: 7,
    unitTitle: 'Culture and Society',
    description: 'Discuss technology and its impact on daily life.',
    duration: 15,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Technology Vocabulary',
          text: 'Italian vocabulary for modern technology.',
          items: [
            { italian: 'Il computer', english: 'The computer', pronunciation: 'kohm-POO-ter' },
            { italian: "Lo smartphone", english: 'The smartphone', pronunciation: 'SMART-fon' },
            { italian: "L'applicazione", english: 'The app', pronunciation: 'ahp-plee-kah-TSYOH-neh' },
            { italian: 'La rete', english: 'The network', pronunciation: 'REH-teh' },
            { italian: "L'e-mail", english: 'The email', pronunciation: 'EE-mayl' },
            { italian: 'Il sito web', english: 'The website', pronunciation: 'SEE-toh WEHB' },
            { italian: 'La password', english: 'The password', pronunciation: 'PAHS-word' },
            { italian: 'Il download', english: 'The download', pronunciation: 'DOWN-loh-d' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Hai scaricato la nuova app?', english: 'Have you downloaded the new app?' },
            { speaker: 'B', italian: 'Si, e molto utile!', english: 'Yes, it\'s very useful!' },
            { speaker: 'A', italian: 'Come si chiama?', english: 'What\'s it called?' },
            { speaker: 'B', italian: 'Si chiama "Parla Italiano".', english: 'It\'s called "Parla Italiano".' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "la rete" mean?',
          options: ['The website', 'The network', 'The password', 'The email'],
          answer: 'The network',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Non riesco a connettermi alla rete.',
          answer: 'I can\'t connect to the network.',
          hint: 'rete = network',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Ho mandato un\'___(e-mail) al professore.',
          answer: 'e-mail',
          hint: 'electronic mail',
        },
      },
    ],
  },
  {
    id: 'lesson-64',
    title: 'Describing People',
    level: 'A1',
    unit: 2,
    unitTitle: 'Building Blocks',
    description: 'Learn adjectives to describe people\'s appearance and personality.',
    duration: 12,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Descriptive Adjectives',
          text: 'Common Italian adjectives for describing people.',
          items: [
            { italian: 'Alto', english: 'Tall', pronunciation: 'AHL-toh' },
            { italian: 'Basso', english: 'Short', pronunciation: 'BAHS-soh' },
            { italian: 'Giovane', english: 'Young', pronunciation: 'JOH-vah-neh' },
            { italian: 'Vecchio', english: 'Old', pronunciation: 'VEH-kyoh' },
            { italian: 'Bello', english: 'Beautiful/Handsome', pronunciation: 'BEHL-loh' },
            { italian: 'Gentile', english: 'Kind', pronunciation: 'jehn-TEE-leh' },
            { italian: 'Intelligente', english: 'Intelligent', pronunciation: 'een-tehl-LEHJ-en-teh' },
            { italian: 'Timido', english: 'Shy', pronunciation: 'TEE-mee-doh' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Com\'è tuo fratello?', english: 'What\'s your brother like?' },
            { speaker: 'B', italian: 'E alto e gentile.', english: 'He\'s tall and kind.' },
            { speaker: 'A', italian: 'E intelligente?', english: 'Is he intelligent?' },
            { speaker: 'B', italian: 'Si, e molto intelligente!', english: 'Yes, he\'s very intelligent!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'What does "timido" mean?',
          options: ['Brave', 'Shy', 'Clever', 'Strong'],
          answer: 'Shy',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'La mia amica e giovane e bella.',
          answer: 'My friend is young and beautiful.',
          hint: 'giovane = young',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Mio padre e ___(gentile) con tutti.',
          answer: 'gentile',
          hint: 'kind',
        },
      },
    ],
  },
  {
    id: 'lesson-65',
    title: 'The Imperfetto Subjunctive (Advanced)',
    level: 'C1',
    unit: 10,
    unitTitle: 'Mastery',
    description: 'Master the imperfetto del congiuntivo for complex sentences.',
    duration: 18,
    steps: [
      {
        type: 'learn',
        content: {
          title: 'Imperfetto del Congiuntivo',
          text: 'The imperfetto subjunctive is used for hypothetical and dependent clauses.',
          items: [
            { italian: 'Se avessi tempo, viaggerei di piu.', english: 'If I had time, I would travel more.' },
            { italian: 'Credevo che fosse giusto.', english: 'I believed it was right.' },
            { italian: 'Sarei felice se potessi aiutarti.', english: 'I would be happy if I could help you.' },
            { italian: 'Volevo che tu venissi con me.', english: 'I wanted you to come with me.' },
          ],
        },
      },
      {
        type: 'example',
        content: {
          dialogue: [
            { speaker: 'A', italian: 'Se tu fossi milionario, cosa faresti?', english: 'If you were a millionaire, what would you do?' },
            { speaker: 'B', italian: 'Viaggerei per il mondo!', english: 'I would travel the world!' },
            { speaker: 'A', italian: 'Anche io vorrei poterlo fare.', english: 'I would also like to be able to do that.' },
            { speaker: 'B', italian: 'Ma purtroppo non abbiamo milioni!', english: 'But unfortunately we don\'t have millions!' },
          ],
        },
      },
      {
        type: 'multiple_choice',
        content: {
          question: 'In "Se avessi tempo, viaggerei", what mood is "avessi"?',
          options: ['Indicativo', 'Congiuntivo imperfetto', 'Condizionale', 'Imperativo'],
          answer: 'Congiuntivo imperfetto',
        },
      },
      {
        type: 'translation',
        content: {
          direction: 'it-to-en',
          sentence: 'Se fossi piu ricco, comprerei una casa in Toscana.',
          answer: 'If I were richer, I would buy a house in Tuscany.',
          hint: 'fossi = were (congiuntivo imperfetto of essere)',
        },
      },
      {
        type: 'fill_blank',
        content: {
          sentence: 'Se ___(potere) aiutarti, lo farei.',
          answer: 'potessi',
          hint: 'congiuntivo imperfetto of potere',
        },
      },
    ],
  },
];

export default lessons;
