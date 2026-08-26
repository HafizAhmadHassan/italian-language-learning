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
];

export default lessons;
