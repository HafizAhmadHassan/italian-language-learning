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
];

export default lessons;
