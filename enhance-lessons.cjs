const fs = require('fs');
const content = fs.readFileSync('./src/data/lessons/index.js', 'utf8');
const lessons = JSON.parse(content.replace('const lessons = ', '').replace(';\n\nexport default lessons;', ''));

// Content additions indexed by lesson ID
const additions = {
  'lesson-1': {
    vocab: [
      { italian: 'Buonasera', english: 'Good evening', pronunciation: 'bwoh-nah-SEH-rah' },
      { italian: 'Buonanotte', english: 'Good night', pronunciation: 'bwoh-nah-NOHT-teh' },
      { italian: 'Arrivederci', english: 'Goodbye (formal)', pronunciation: 'ah-ree-veh-DEHR-chee' },
      { italian: 'A presto', english: 'See you soon', pronunciation: 'ah PREH-stoh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'Which greeting is used in the evening?', options: ['Buongiorno', 'Buonasera', 'Buonanotte', 'Salve'], answer: 'Buonasera' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Arrivederci, a domani!', answer: 'Goodbye, see you tomorrow!', hint: 'Arrivederci = Goodbye (formal)' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buonasera! Come sta?', english: 'Good evening! How are you?' },
      { speaker: 'A', italian: 'Buonasera! Bene, grazie.', english: 'Good evening! Well, thank you.' },
    ],
  },
  'lesson-2': {
    vocab: [
      { italian: 'Piacere', english: 'Nice to meet you', pronunciation: 'pyah-CHEH-reh' },
      { italian: 'Vengo da...', english: 'I come from...', pronunciation: 'VEHN-goh dah' },
      { italian: 'Lavoro a...', english: 'I work at...', pronunciation: 'lah-VOH-roh ah' },
      { italian: 'Studio a...', english: 'I study at...', pronunciation: 'STOO-dyoh ah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you say "I am Italian"?', options: ['Sono italiano', 'Io sono italiano', 'Sono italiano io', 'Italiano sono'], answer: 'Sono italiano' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I live in Milan', answer: 'Vivo a Milano', hint: 'vivere = to live' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Di dov\'è Lei?', english: 'Where are you from?' },
      { speaker: 'A', italian: 'Sono di Napoli. E Lei?', english: 'I\'m from Naples. And you?' },
    ],
  },
  'lesson-3': {
    vocab: [
      { italian: 'Cento', english: 'One hundred', pronunciation: 'CHEHN-toh' },
      { italian: 'Mille', english: 'One thousand', pronunciation: 'MEEL-leh' },
      { italian: 'Zero', english: 'Zero', pronunciation: 'DZEH-roh' },
      { italian: 'La metà', english: 'Half', pronunciation: 'lah meh-TAH' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is 15 in Italian?', options: ['Quindici', 'Quattordici', 'Sedici', 'Diciassette'], answer: 'Quindici' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I have twenty apples', answer: 'Ho venti mele', hint: 'venti = 20' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Quanti anni hai?', english: 'How old are you?' },
      { speaker: 'A', italian: 'Ho venticinque anni.', english: 'I am twenty-five years old.' },
    ],
  },
  'lesson-4': {
    vocab: [
      { italian: 'La pizza', english: 'The pizza', pronunciation: 'lah PEET-tsah' },
      { italian: 'Il gelato', english: 'The ice cream', pronunciation: 'eel jeh-LAH-toh' },
      { italian: 'Il pane', english: 'The bread', pronunciation: 'eel PAH-neh' },
      { italian: 'Il riso', english: 'The rice', pronunciation: 'eel REE-zoh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la pasta" in English?', options: ['The bread', 'The pasta', 'The rice', 'The meat'], answer: 'The pasta' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Vorrei un caffè, per favore', answer: 'I would like a coffee, please', hint: 'vorrei = I would like' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa vuoi mangiare?', english: 'What do you want to eat?' },
      { speaker: 'A', italian: 'Voglio una pizza margherita.', english: 'I want a margherita pizza.' },
    ],
  },
  'lesson-5': {
    vocab: [
      { italian: 'Il cugino', english: 'The cousin (male)', pronunciation: 'eel koo-JEE-noh' },
      { italian: 'La cugina', english: 'The cousin (female)', pronunciation: 'lah koo-JEE-nah' },
      { italian: 'Il nipote', english: 'The nephew/grandson', pronunciation: 'eel nee-POH-teh' },
      { italian: 'La zia', english: 'The aunt', pronunciation: 'lah TSYAH' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la nonna"?', options: ['The aunt', 'The grandmother', 'The mother', 'The sister'], answer: 'The grandmother' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I have two brothers', answer: 'Ho due fratelli', hint: 'fratelli = brothers' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Quant\'anni ha tuo fratello?', english: 'How old is your brother?' },
      { speaker: 'A', italian: 'Ha vent\'anni. È più grande di me.', english: 'He\'s twenty. He\'s older than me.' },
    ],
  },
  'lesson-6': {
    vocab: [
      { italian: 'Lo sconto', english: 'The discount', pronunciation: 'loh SKOHN-toh' },
      { italian: 'La cassa', english: 'The checkout', pronunciation: 'lah KAHS-sah' },
      { italian: 'Il biglietto', english: 'The ticket', pronunciation: 'eel bee-LYEHT-toh' },
      { italian: 'Provare', english: 'To try on', pronunciation: 'proh-VAH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you ask "How much does it cost?"', options: ['Quanto è?', 'Quanto costa?', 'Che prezzo?', 'Quale prezzo?'], answer: 'Quanto costa?' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Questo vestito è troppo caro', answer: 'This dress is too expensive', hint: 'caro = expensive' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Posso aiutarla?', english: 'Can I help you?' },
      { speaker: 'A', italian: 'Cerco un regalo per mia moglie.', english: 'I\'m looking for a gift for my wife.' },
    ],
  },
  'lesson-7': {
    vocab: [
      { italian: 'La mappa', english: 'The map', pronunciation: 'lah MAHP-pah' },
      { italian: 'Dritto', english: 'Straight ahead', pronunciation: 'DREET-toh' },
      { italian: 'L\'angolo', english: 'The corner', pronunciation: 'lahn-GOH-loh' },
      { italian: 'Il ponte', english: 'The bridge', pronunciation: 'eel POHN-teh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: '"Giri a sinistra" means:', options: ['Turn right', 'Turn left', 'Go straight', 'Go back'], answer: 'Turn left' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Where is the train station?', answer: 'Dov\'è la stazione?', hint: 'dov\'è = where is' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Scusi, dov\'è la farmacia?', english: 'Excuse me, where is the pharmacy?' },
      { speaker: 'A', italian: 'Vada dritto, poi giri a destra.', english: 'Go straight, then turn right.' },
    ],
  },
  'lesson-8': {
    vocab: [
      { italian: 'Ho mangiato', english: 'I ate / I have eaten', pronunciation: 'oh mahn-JYAH-toh' },
      { italian: 'Sei andato?', english: 'Did you go?', pronunciation: 'sey ahn-DAH-toh' },
      { italian: 'Ieri', english: 'Yesterday', pronunciation: 'YEH-ree' },
      { italian: 'L\'anno scorso', english: 'Last year', pronunciation: 'lahn-noh SKOHR-soh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the passato prossimo of "mangiare"?', options: ['Mangiavo', 'Ho mangiato', 'Mangerò', 'Mangiarei'], answer: 'Ho mangiato' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Ieri sono andato al cinema', answer: 'Yesterday I went to the cinema', hint: 'andare = to go' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa hai fatto ieri?', english: 'What did you do yesterday?' },
      { speaker: 'A', italian: 'Sono andato al cinema con gli amici.', english: 'I went to the cinema with friends.' },
    ],
  },
  'lesson-9': {
    vocab: [
      { italian: 'Mangerò', english: 'I will eat', pronunciation: 'mahn-jeh-ROH' },
      { italian: 'Andrò', english: 'I will go', pronunciation: 'ahn-DROH' },
      { italian: 'Domani', english: 'Tomorrow', pronunciation: 'doh-MAH-nee' },
      { italian: 'La prossima settimana', english: 'Next week', pronunciation: 'lah PROHS-see-mah seht-tee-MAH-nah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the futuro semplice of "essere"?', options: ['Ero', 'Sono', 'Sarò', 'Sarei'], answer: 'Sarò' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I will call you tomorrow', answer: 'Ti chiamerò domani', hint: 'chiamare = to call' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa farai domani?', english: 'What will you do tomorrow?' },
      { speaker: 'A', italian: 'Andrò al mare con la famiglia.', english: 'I will go to the sea with the family.' },
    ],
  },
  'lesson-10': {
    vocab: [
      { italian: 'Per favore', english: 'Please', pronunciation: 'pehr fah-VOH-reh' },
      { italian: 'Mi scusi', english: 'Excuse me', pronunciation: 'mee SKOO-zee' },
      { italian: 'Non capisco', english: 'I don\'t understand', pronunciation: 'nohn kah-PEE-skoh' },
      { italian: 'Parla inglese?', english: 'Do you speak English?', pronunciation: 'PAHR-lah een-GLEH-zeh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Scusi" mean?', options: ['Sorry', 'Excuse me', 'Thank you', 'Hello'], answer: 'Excuse me' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Non parlo bene italiano', answer: 'I don\'t speak Italian well', hint: 'parlare = to speak' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Scusi, parla inglese?', english: 'Excuse me, do you speak English?' },
      { speaker: 'A', italian: 'Un pochino. Come posso aiutarla?', english: 'A little. How can I help you?' },
    ],
  },
  'lesson-11': {
    vocab: [
      { italian: 'L\'arancione', english: 'Orange', pronunciation: 'lah-RAHN-choh-neh' },
      { italian: 'Il marrone', english: 'Brown', pronunciation: 'eel mahr-ROH-neh' },
      { italian: 'Il grigio', english: 'Gray', pronunciation: 'eel GREE-joh' },
      { italian: 'Il rosa', english: 'Pink', pronunciation: 'eel ROH-zah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What color is "il blu"?', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 'Blue' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'The cat is white and black', answer: 'Il gatto è bianco e nero', hint: 'bianco = white' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Di che colore è la tua macchina?', english: 'What color is your car?' },
      { speaker: 'A', italian: 'È rossa. Mi piace molto il rosso.', english: 'It\'s red. I really like red.' },
    ],
  },
  'lesson-12': {
    vocab: [
      { italian: 'Il vento', english: 'The wind', pronunciation: 'eel VEHN-toh' },
      { italian: 'La neve', english: 'The snow', pronunciation: 'lah NEH-veh' },
      { italian: 'La nuvola', english: 'The cloud', pronunciation: 'lah NOO-voh-lah' },
      { italian: 'L\'umidità', english: 'The humidity', pronunciation: 'loo-mee-dee-TAH' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Piove" mean?', options: ['It\'s windy', 'It\'s raining', 'It\'s snowing', 'It\'s sunny'], answer: 'It\'s raining' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Fa molto caldo oggi', answer: 'It\'s very hot today', hint: 'molto = very' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che tempo fa oggi?', english: 'What\'s the weather like today?' },
      { speaker: 'A', italian: 'Piove un po\', ma domani ci sarà il sole.', english: 'It\'s raining a bit, but tomorrow the sun will shine.' },
    ],
  },
  'lesson-13': {
    vocab: [
      { italian: 'Certamente', english: 'Certainly', pronunciation: 'chehr-tah-MEHN-teh' },
      { italian: 'Volentieri', english: 'Willingly / With pleasure', pronunciation: 'voh-lehn-TYEH-ree' },
      { italian: 'Mi dispiace', english: 'I\'m sorry', pronunciation: 'mee dees-PYAH-cheh' },
      { italian: 'Non c\'è di che', english: 'You\'re welcome', pronunciation: 'nohn cheh dee keh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you say "Yes, please" in Italian?', options: ['Sì, grazie', 'Sì, per favore', 'Sì, certamente', 'Sì, volentieri'], answer: 'Sì, per favore' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'No, thank you', answer: 'No, grazie', hint: 'grazie = thank you' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Vuoi un caffè?', english: 'Do you want a coffee?' },
      { speaker: 'A', italian: 'Sì, per favore. Grazie mille!', english: 'Yes, please. Thank you very much!' },
    ],
  },
  'lesson-14': {
    vocab: [
      { italian: 'Scusi', english: 'Excuse me (formal)', pronunciation: 'SKOO-zee' },
      { italian: 'Prego', english: 'You\'re welcome', pronunciation: 'PREH-goh' },
      { italian: 'Mi permetta', english: 'Allow me (formal)', pronunciation: 'mee pehr-MEHT-tah' },
      { italian: 'Le chiedo scusa', english: 'I apologize to you (formal)', pronunciation: 'leh KYEH-doh SKOO-zah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the polite way to say "Excuse me"?', options: ['Scusa', 'Scusi', 'Ehi', 'Dimmi'], answer: 'Scusi' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Mi scusi, dov\'è il bagno?', answer: 'Excuse me, where is the bathroom?', hint: 'il bagno = the bathroom' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Mi scusi, è libero questo posto?', english: 'Excuse me, is this seat free?' },
      { speaker: 'A', italian: 'Sì, prego. Si accomodi.', english: 'Yes, please. Make yourself comfortable.' },
    ],
  },
  'lesson-15': {
    vocab: [
      { italian: 'La birra', english: 'The beer', pronunciation: 'lah BEER-rah' },
      { italian: 'Il succo di frutta', english: 'The fruit juice', pronunciation: 'eel SOOK-koh dee FROOT-tah' },
      { italian: 'La acqua frizzante', english: 'Sparkling water', pronunciation: 'lah AH-kwah free-TSAHN-teh' },
      { italian: 'Il te', english: 'The tea', pronunciation: 'eel teh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you order "a glass of water"?', options: ['Un bicchiere d\'acqua', 'Una bottiglia d\'acqua', 'Un litro d\'acqua', 'Un tazza d\'acqua'], answer: 'Un bicchiere d\'acqua' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Vorrei un caffè senza zucchero', answer: 'I would like a coffee without sugar', hint: 'senza = without' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa desidera?', english: 'What would you like?' },
      { speaker: 'A', italian: 'Un tè caldo con limone, per favore.', english: 'A hot tea with lemon, please.' },
    ],
  },
  'lesson-16': {
    vocab: [
      { italian: 'Il primo', english: 'The first', pronunciation: 'eel PREE-moh' },
      { italian: 'L\'ultimo', english: 'The last', pronunciation: 'loor-TEE-moh' },
      { italian: 'Il giorno', english: 'The day', pronunciation: 'eel JOHR-noh' },
      { italian: 'La settimana', english: 'The week', pronunciation: 'lah seht-tee-MAH-nah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "mercoledì"?', options: ['Monday', 'Wednesday', 'Friday', 'Saturday'], answer: 'Wednesday' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Today is Tuesday', answer: 'Oggi è martedì', hint: 'martedì = Tuesday' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che giorno è oggi?', english: 'What day is it today?' },
      { speaker: 'A', italian: 'Oggi è venerdì. Domani è sabato!', english: 'Today is Friday. Tomorrow is Saturday!' },
    ],
  },
  'lesson-17': {
    vocab: [
      { italian: 'Le ore', english: 'The hours', pronunciation: 'leh OH-reh' },
      { italian: 'I minuti', english: 'The minutes', pronunciation: 'ee mee-NOO-tee' },
      { italian: 'Mezzogiorno', english: 'Noon', pronunciation: 'mehd-dzoh-JOHR-noh' },
      { italian: 'Le tre e mezza', english: 'Half past three', pronunciation: 'leh treh eh MEHD-tsah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you say "It is three o\'clock"?', options: ['Sono le tre', 'È le tre', 'Ha le tre', 'Ci sono tre'], answer: 'Sono le tre' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Sono le quattro e mezza', answer: 'It\'s half past four', hint: 'mezza = half (feminine)' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che ore sono?', english: 'What time is it?' },
      { speaker: 'A', italian: 'Sono le due e un quarto.', english: 'It\'s a quarter past two.' },
    ],
  },
  'lesson-18': {
    vocab: [
      { italian: 'Dove?', english: 'Where?', pronunciation: 'DOH-veh' },
      { italian: 'Quando?', english: 'When?', pronunciation: 'KWAHN-doh' },
      { italian: 'Come?', english: 'How?', pronunciation: 'KOH-meh' },
      { italian: 'Quanto?', english: 'How much?', pronunciation: 'KWAHN-toh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Perché" mean?', options: ['Where', 'When', 'Why', 'How'], answer: 'Why' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Who is that man?', answer: 'Chi è quell\'uomo?', hint: 'chi = who' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Dov\'è la stazione?', english: 'Where is the station?' },
      { speaker: 'A', italian: 'È vicina. Cammini per cinque minuti.', english: 'It\'s nearby. Walk for five minutes.' },
    ],
  },
  'lesson-19': {
    vocab: [
      { italian: 'Il menu', english: 'The menu', pronunciation: 'eel meh-NOO' },
      { italian: 'L\'antipasto', english: 'The appetizer', pronunciation: 'lahn-tee-PAHS-toh' },
      { italian: 'Il secondo', english: 'The main course', pronunciation: 'eel seh-KOHN-doh' },
      { italian: 'Il dolce', english: 'The dessert', pronunciation: 'eel DOHL-cheh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "L\'antipasto"?', options: ['The main course', 'The dessert', 'The appetizer', 'The drink'], answer: 'The appetizer' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Vorrei un tavolo vicino alla finestra', answer: 'I would like a table near the window', hint: 'finestra = window' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa vuole come antipasto?', english: 'What would you like as an appetizer?' },
      { speaker: 'A', italian: 'Vorrei un\'insalata mista.', english: 'I would like a mixed salad.' },
    ],
  },
  'lesson-20': {
    vocab: [
      { italian: 'Mi piace', english: 'I like', pronunciation: 'mee PYAH-cheh' },
      { italian: 'Non mi piace', english: 'I don\'t like', pronunciation: 'nohn mee PYAH-cheh' },
      { italian: 'Mi piace molto', english: 'I like a lot', pronunciation: 'mee PYAH-cheh MOHL-toh' },
      { italian: 'Il mio hobby', english: 'My hobby', pronunciation: 'eel mee-oh OH-bee' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you say "I like music"?', options: ['Mi piace la musica', 'Io piace la musica', 'La musica mi piace', 'Piace a me la musica'], answer: 'Mi piace la musica' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I don\'t like coffee', answer: 'Non mi piace il caffè', hint: 'non mi piace = I don\'t like' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che tipo di musica ti piace?', english: 'What type of music do you like?' },
      { speaker: 'A', italian: 'Mi piace il jazz e la musica classica.', english: 'I like jazz and classical music.' },
    ],
  },
  'lesson-21': {
    vocab: [
      { italian: 'La testa', english: 'The head', pronunciation: 'lah TEHS-tah' },
      { italian: 'La pancia', english: 'The belly', pronunciation: 'lah PAHN-chah' },
      { italian: 'Il dito', english: 'The finger', pronunciation: 'eel DEE-toh' },
      { italian: 'La bocca', english: 'The mouth', pronunciation: 'lah BOHK-kah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "l\'occhio"?', options: ['The ear', 'The eye', 'The nose', 'The mouth'], answer: 'The eye' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Mi fa male la gola', answer: 'My throat hurts', hint: 'male = pain' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa ti fa male?', english: 'What hurts?' },
      { speaker: 'A', italian: 'Mi fa male la testa. Ho un gran mal di testa.', english: 'My head hurts. I have a bad headache.' },
    ],
  },
  'lesson-22': {
    vocab: [
      { italian: 'La gioia', english: 'Joy', pronunciation: 'lah JOH-yah' },
      { italian: 'La paura', english: 'Fear', pronunciation: 'lah pah-OO-rah' },
      { italian: 'La sorpresa', english: 'Surprise', pronunciation: 'lah sohr-PREH-zah' },
      { italian: 'La rabbia', english: 'Anger', pronunciation: 'lah RAHB-byah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Sono triste" mean?', options: ['I am happy', 'I am sad', 'I am angry', 'I am afraid'], answer: 'I am sad' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I am very happy today', answer: 'Sono molto contento oggi', hint: 'contento = happy' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come ti senti oggi?', english: 'How do you feel today?' },
      { speaker: 'A', italian: 'Sono molto contento! Ho ricevuto una buona notizia.', english: 'I\'m very happy! I received good news.' },
    ],
  },
  'lesson-23': {
    vocab: [
      { italian: 'Ero', english: 'I was', pronunciation: 'EH-roh' },
      { italian: 'Avevo', english: 'I had', pronunciation: 'ah-VEH-voh' },
      { italian: 'Potevo', english: 'I could', pronunciation: 'poh-TEH-voh' },
      { italian: 'Dovevo', english: 'I had to', pronunciation: 'doh-VEH-voh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the imperfetto of "fare"?', options: ['Feci', 'Facevo', 'Farò', 'Farei'], answer: 'Facevo' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Quando ero piccolo giocavo nel parco', answer: 'When I was little I played in the park', hint: 'piccolo = little' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa facevi da bambino?', english: 'What did you do as a child?' },
      { speaker: 'A', italian: 'Giocavo sempre con i miei amici nel parco.', english: 'I always played with my friends in the park.' },
    ],
  },
  'lesson-24': {
    vocab: [
      { italian: 'Vorrei', english: 'I would like', pronunciation: 'vohr-RAY' },
      { italian: 'Potresti', english: 'Could you', pronunciation: 'poh-TREHS-tee' },
      { italian: 'Dovresti', english: 'You should', pronunciation: 'dohv-REHS-tee' },
      { italian: 'Farei', english: 'I would do', pronunciation: 'fah-REY' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Vorrei un caffè" mean?', options: ['I want a coffee', 'I would like a coffee', 'I need a coffee', 'I will have a coffee'], answer: 'I would like a coffee' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Could you help me?', answer: 'Potresti aiutarmi?', hint: 'aiutare = to help' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa vorresti fare questo weekend?', english: 'What would you like to do this weekend?' },
      { speaker: 'A', italian: 'Vorrei andare al mare, se fa bel tempo.', english: 'I would like to go to the sea, if the weather is nice.' },
    ],
  },
  'lesson-25': {
    vocab: [
      { italian: 'L\'ufficio', english: 'The office', pronunciation: 'loor-FYOH-choh' },
      { italian: 'Il datore di lavoro', english: 'The employer', pronunciation: 'eel dah-TOH-reh dee lah-VOH-roh' },
      { italian: 'Lo stipendio', english: 'The salary', pronunciation: 'loh stee-PEHN-dyoh' },
      { italian: 'Il collega', english: 'The colleague', pronunciation: 'eel koh-LEH-gah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il datore di lavoro"?', options: ['The employee', 'The employer', 'The customer', 'The manager'], answer: 'The employer' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I work in an office', answer: 'Lavoro in un ufficio', hint: 'ufficio = office' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che lavoro fai?', english: 'What do you do for work?' },
      { speaker: 'A', italian: 'Sono ingegnere. Lavoro in un\'azienda tecnologica.', english: 'I\'m an engineer. I work at a technology company.' },
    ],
  },
  'lesson-26': {
    vocab: [
      { italian: 'La reception', english: 'The reception', pronunciation: 'lah reh-sehp-SHOHN' },
      { italian: 'Il corridoio', english: 'The hallway', pronunciation: 'eel kohr-ree-DOH-yoh' },
      { italian: 'La scala', english: 'The staircase', pronunciation: 'lah SKAH-lah' },
      { italian: 'L\'ascensore', english: 'The elevator', pronunciation: 'lah-shehn-SOH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "La camera doppia" mean?', options: ['The single room', 'The double room', 'The suite', 'The bathroom'], answer: 'The double room' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'A che ora è la colazione?', answer: 'What time is breakfast?', hint: 'colazione = breakfast' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buongiorno, ho una prenotazione a nome Rossi.', english: 'Good morning, I have a reservation under Rossi.' },
      { speaker: 'A', italian: 'Perfetto, Signor Rossi. Ecco la chiave della camera 205.', english: 'Perfect, Mr. Rossi. Here is the key for room 205.' },
    ],
  },
  'lesson-27': {
    vocab: [
      { italian: 'La ricetta', english: 'The prescription', pronunciation: 'lah ree-CHEHT-tah' },
      { italian: 'La farmacia', english: 'The pharmacy', pronunciation: 'lah fahr-mah-CHEE-ah' },
      { italian: 'Il farmaco', english: 'The medicine', pronunciation: 'eel FAHR-mah-koh' },
      { italian: 'La febbre', english: 'The fever', pronunciation: 'lah FEHB-breh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la febbre"?', options: ['The headache', 'The fever', 'The cough', 'The cold'], answer: 'The fever' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I need to see a doctor', answer: 'Ho bisogno di vedere un dottore', hint: 'vedere = to see' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buongiorno, dottore. Ho mal di gola.', english: 'Good morning, doctor. I have a sore throat.' },
      { speaker: 'A', italian: 'Si Accomodi. Mi racconti i suoi sintomi.', english: 'Please sit down. Tell me about your symptoms.' },
    ],
  },
  'lesson-28': {
    vocab: [
      { italian: 'Essere', english: 'To be', pronunciation: 'ehs-SEH-reh' },
      { italian: 'Avere', english: 'To have', pronunciation: 'ah-VEH-reh' },
      { italian: 'Fare', english: 'To do / To make', pronunciation: 'FAH-reh' },
      { italian: 'Andare', english: 'To go', pronunciation: 'ahn-DAH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the irregular past tense of "andare"?', options: ['Andavo', 'Andai', 'Andrò', 'Andrei'], answer: 'Andai' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Sono stato a Roma la scorsa settimana', answer: 'I was in Rome last week', hint: 'scorsa = last' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Sei mai stato a Parigi?', english: 'Have you ever been to Paris?' },
      { speaker: 'A', italian: 'Sì, ci sono stato due anni fa.', english: 'Yes, I went there two years ago.' },
    ],
  },
  'lesson-29': {
    vocab: [
      { italian: 'Svegliarsi', english: 'To wake up', pronunciation: 'svehl-YAHR-see' },
      { italian: 'Vestirsi', english: 'To get dressed', pronunciation: 'vehs-TEER-see' },
      { italian: 'Lavarsi', english: 'To wash oneself', pronunciation: 'lah-VAHR-see' },
      { italian: 'Chiamarsi', english: 'To be called', pronunciation: 'kyah-MAHR-see' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Svegliarsi" mean?', options: ['To sleep', 'To wake up', 'To dress', 'To eat'], answer: 'To wake up' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I wake up at seven o\'clock', answer: 'Mi sveglio alle sette', hint: 'svegliarsi = to wake up' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'A che ora ti svegli la mattina?', english: 'What time do you wake up in the morning?' },
      { speaker: 'A', italian: 'Mi sveglio alle sei e mezza.', english: 'I wake up at six thirty.' },
    ],
  },
  'lesson-30': {
    vocab: [
      { italian: 'Penso che...', english: 'I think that...', pronunciation: 'PEHN-soh keh' },
      { italian: 'È possibile che...', english: 'It\'s possible that...', pronunciation: 'eh pohs-SEE-bee-leh keh' },
      { italian: 'Sebbene', english: 'Although', pronunciation: 'sehb-BEH-neh' },
      { italian: 'Prima che', english: 'Before (temporal)', pronunciation: 'PREE-mah keh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'Which requires the subjunctive?', options: ['Penso che è bello', 'Penso che sia bello', 'Penso che era bello', 'Penso che sarà bello'], answer: 'Penso che sia bello' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Voglio che tu venga alla festa', answer: 'I want you to come to the party', hint: 'che = that (triggers subjunctive)' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Credi che pioverà domani?', english: 'Do you think it will rain tomorrow?' },
      { speaker: 'A', italian: 'Penso che piova. Porta un ombrello!', english: 'I think it might rain. Bring an umbrella!' },
    ],
  },
  'lesson-31': {
    vocab: [
      { italian: 'Il nostro', english: 'Our (masculine)', pronunciation: 'eel NOHS-troh' },
      { italian: 'La nostra', english: 'Our (feminine)', pronunciation: 'lah NOHS-trah' },
      { italian: 'Il vostro', english: 'Your (plural, masc.)', pronunciation: 'eel VOHS-troh' },
      { italian: 'La vostra', english: 'Your (plural, fem.)', pronunciation: 'lah VOHS-trah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "nostro" in English?', options: ['My', 'Your', 'Our', 'Their'], answer: 'Our' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'This is our house', answer: 'Questa è la nostra casa', hint: 'casa = house (feminine)' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'È la vostra prima volta a Roma?', english: 'Is this your first time in Rome?' },
      { speaker: 'A', italian: 'Sì, è la nostra prima volta. Siamo molto emozionati!', english: 'Yes, it\'s our first time. We\'re very excited!' },
    ],
  },
  'lesson-32': {
    vocab: [
      { italian: 'Il migliore', english: 'The best', pronunciation: 'eel mee-LYOH-reh' },
      { italian: 'Il peggiore', english: 'The worst', pronunciation: 'eel peh-JOH-reh' },
      { italian: 'Più di', english: 'More than', pronunciation: 'PYOO dee' },
      { italian: 'Meno di', english: 'Less than', pronunciation: 'MEH-noh dee' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il migliore" in English?', options: ['The bigger', 'The best', 'The smaller', 'The worst'], answer: 'The best' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Roma è più grande di Firenze', answer: 'Rome is bigger than Florence', hint: 'grande = big' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Quale ristorante è il migliore della città?', english: 'Which restaurant is the best in the city?' },
      { speaker: 'A', italian: 'Il ristorante "Da Mario" è il migliore, ma è anche il più caro.', english: '"Da Mario" restaurant is the best, but also the most expensive.' },
    ],
  },
  'lesson-33': {
    vocab: [
      { italian: 'Mi', english: 'Me / To me', pronunciation: 'mee' },
      { italian: 'Ti', english: 'You / To you (informal)', pronunciation: 'tee' },
      { italian: 'Lo', english: 'It / Him (direct)', pronunciation: 'loh' },
      { italian: 'La', english: 'It / Her (direct)', pronunciation: 'lah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the direct object pronoun for "him" in Italian?', options: ['Le', 'Lo', 'Li', 'Lui'], answer: 'Lo' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Lo vedo ogni giorno', answer: 'I see him every day', hint: 'vedere = to see' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Hai visto Marco oggi?', english: 'Did you see Marco today?' },
      { speaker: 'A', italian: 'Sì, l\'ho visto al supermercato.', english: 'Yes, I saw him at the supermarket.' },
    ],
  },
  'lesson-34': {
    vocab: [
      { italian: 'Mangia!', english: 'Eat! (informal)', pronunciation: 'MAHN-jah' },
      { italian: 'Parli!', english: 'Speak! (formal)', pronunciation: 'PAHR-lee' },
      { italian: 'Non fare!', english: 'Don\'t do!', pronunciation: 'nohn FAH-reh' },
      { italian: 'Andiamo!', english: 'Let\'s go!', pronunciation: 'ahn-DYAH-moh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the imperative of "parlare" for "tu"?', options: ['Parli', 'Parla', 'Parlate', 'Parlare'], answer: 'Parla' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Listen to me!', answer: 'Ascoltami!', hint: 'ascoltare = to listen' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Non posso trovare le chiavi!', english: 'I can\'t find my keys!' },
      { speaker: 'A', italian: 'Cerca nella borsa. Forse sono lì.', english: 'Look in your bag. Maybe they\'re there.' },
    ],
  },
  'lesson-35': {
    vocab: [
      { italian: 'Il Natale', english: 'Christmas', pronunciation: 'eel nah-TAH-leh' },
      { italian: 'Il Capodanno', english: 'New Year\'s', pronunciation: 'eel kah-poh-DAHN-noh' },
      { italian: 'La Pasqua', english: 'Easter', pronunciation: 'lah PAHS-kwah' },
      { italian: 'Il compleanno', english: 'Birthday', pronunciation: 'eel kohm-pleh-AHN-noh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'When is "Il Natale"?', options: ['January 1st', 'December 25th', 'March 8th', 'November 1st'], answer: 'December 25th' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Buon compleanno! Tanti auguri!', answer: 'Happy birthday! Best wishes!', hint: 'auguri = wishes' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che cosa fate per Capodanno?', english: 'What do you do for New Year\'s?' },
      { speaker: 'A', italian: 'Mangiamo i ceci per portare fortuna!', english: 'We eat chickpeas for good luck!' },
    ],
  },
  'lesson-36': {
    vocab: [
      { italian: 'Sarei', english: 'I would be', pronunciation: 'sah-REY' },
      { italian: 'Avrei', english: 'I would have', pronunciation: 'ahv-REY' },
      { italian: 'Fossi', english: 'If I were', pronunciation: 'FOHS-see' },
      { italian: 'Dovessi', english: 'If I had to', pronunciation: 'doh-VEHS-see' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'Which triggers the imperfect subjunctive?', options: ['Io penso che...', 'Se fossi ricco...', 'Io voglio che...', 'Io credo che...'], answer: 'Se fossi ricco...' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Se avessi più tempo, viaggerei di più', answer: 'If I had more time, I would travel more', hint: 'viaggiare = to travel' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa faresti se vincessi alla lotteria?', english: 'What would you do if you won the lottery?' },
      { speaker: 'A', italian: 'Se vincessi alla lotteria, comprerei una casa al mare.', english: 'If I won the lottery, I would buy a house by the sea.' },
    ],
  },
  'lesson-37': {
    vocab: [
      { italian: 'È stato fatto', english: 'It was made', pronunciation: 'eh SAHT-toh FAHT-toh' },
      { italian: 'Viene fatto', english: 'It is made', pronunciation: 'VYEH-neh FAHT-toh' },
      { italian: 'Sarà fatto', english: 'It will be made', pronunciation: 'sah-RAH FAHT-toh' },
      { italian: 'Il progetto', english: 'The project', pronunciation: 'eel proh-JEH-toh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the passive form of "Il cuoco prepara la cena"?', options: ['La cena prepara il cuoco', 'La cena è preparata dal cuoco', 'La cena si prepara', 'Il cuoco è preparato dalla cena'], answer: 'La cena è preparata dal cuoco' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Questo romanzo è stato scritto da un italiano', answer: 'This novel was written by an Italian', hint: 'romanzo = novel' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Chi ha scritto questo libro?', english: 'Who wrote this book?' },
      { speaker: 'A', italian: 'È stato scritto da Umberto Eco.', english: 'It was written by Umberto Eco.' },
    ],
  },
  'lesson-38': {
    vocab: [
      { italian: 'Sebbene', english: 'Although', pronunciation: 'sehb-BEH-neh' },
      { italian: 'Inoltre', english: 'Furthermore', pronunciation: 'ee-NOHL-treh' },
      { italian: 'Tuttavia', english: 'However', pronunciation: 'toot-tah-VAH-yah' },
      { italian: 'Perciò', pronunciation: 'pehr-CHOH', english: 'Therefore' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Tuttavia" mean?', options: ['Therefore', 'However', 'Furthermore', 'Although'], answer: 'However' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Sebbene sia tardi, voglio continuare', answer: 'Although it\'s late, I want to continue', hint: 'sebbene = although' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Perché non vieni alla festa?', english: 'Why aren\'t you coming to the party?' },
      { speaker: 'A', italian: 'Sebbene mi dispiaccia, devo studiare per l\'esame.', english: 'Although I\'m sorry, I need to study for the exam.' },
    ],
  },
  'lesson-39': {
    vocab: [
      { italian: 'Gentilmente', english: 'Kindly', pronunciation: 'jehn-tee-LMEHN-teh' },
      { italian: 'In attesa di', english: 'In anticipation of', pronunciation: 'ee ah-TEH-zah dee' },
      { italian: 'Cordiali saluti', english: 'Kind regards', pronunciation: 'kohr-DYAH-lee sah-LOO-tee' },
      { italian: 'Il/i gentile/i', english: 'Dear (formal)', pronunciation: 'eel jehn-TEE-leh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you end a formal letter in Italian?', options: ['Ciao!', 'Un bacio', 'Cordiali saluti', 'A presto'], answer: 'Cordiali saluti' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Dear Sir or Madam', answer: 'Gentile Signore o Signora', hint: 'gentile = dear/kind' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come si scrive una lettera formale in italiano?', english: 'How do you write a formal letter in Italian?' },
      { speaker: 'A', italian: 'Si inizia con "Gentile" e si finisce con "Cordiali saluti".', english: 'You start with "Gentile" and end with "Cordiali saluti".' },
    ],
  },
  'lesson-40': {
    vocab: [
      { italian: 'Il capolavoro', english: 'The masterpiece', pronunciation: 'eel kah-poh-LAH-voh-roh' },
      { italian: 'Lo stile', english: 'The style', pronunciation: 'loh STEE-leh' },
      { italian: 'La biografia', english: 'The biography', pronunciation: 'lah byoh-grah-FEE-ah' },
      { italian: 'L\'esposizione', english: 'The exhibition', pronunciation: 'leh-spoh-zee-TSYOH-neh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il capolavoro"?', options: ['The biography', 'The masterpiece', 'The exhibition', 'The style'], answer: 'The masterpiece' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'La Gioconda è il capolavoro di Leonardo', answer: 'The Mona Lisa is Leonardo\'s masterpiece', hint: 'capolavoro = masterpiece' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Qual è il tuo film italiano preferito?', english: 'What is your favorite Italian movie?' },
      { speaker: 'A', italian: 'Adoro "La Vita è Bella" di Roberto Benigni.', english: 'I love "Life is Beautiful" by Roberto Benigni.' },
    ],
  },
  'lesson-41': {
    vocab: [
      { italian: 'Il biglietto aereo', english: 'The plane ticket', pronunciation: 'eel bee-LYEHT-toh ah-EH-reh-oh' },
      { italian: 'Il binario', english: 'The platform', pronunciation: 'eel bee-NAH-ryoh' },
      { italian: 'La corsa', english: 'The trip/race', pronunciation: 'lah KOHR-sah' },
      { italian: 'Il passeggero', english: 'The passenger', pronunciation: 'eel pahs-SEH-jeh-roh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il binario"?', options: ['The ticket', 'The platform', 'The passenger', 'The luggage'], answer: 'The platform' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Il treno parte dal binario cinque', answer: 'The train leaves from platform five', hint: 'partire = to leave' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Da quale binario parte il treno per Firenze?', english: 'From which platform does the train to Florence leave?' },
      { speaker: 'A', italian: 'Dal binario tre. Attenzione, il treno sta per partire!', english: 'From platform three. Attention, the train is about to leave!' },
    ],
  },
  'lesson-42': {
    vocab: [
      { italian: 'Lo schermo', english: 'The screen', pronunciation: 'loh SKHEHR-moh' },
      { italian: 'La tastiera', english: 'The keyboard', pronunciation: 'lah tahs-TYEH-rah' },
      { italian: 'Il mouse', english: 'The mouse', pronunciation: 'eel mows' },
      { italian: 'La stampante', english: 'The printer', pronunciation: 'lah stahm-PAHN-teh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la tastiera"?', options: ['The screen', 'The keyboard', 'The mouse', 'The printer'], answer: 'The keyboard' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'My computer is very slow', answer: 'Il mio computer è molto lento', hint: 'lento = slow' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Il mio computer non funziona!', english: 'My computer isn\'t working!' },
      { speaker: 'A', italian: 'Hai provato a riavviarlo? A volte basta questo.', english: 'Did you try restarting it? Sometimes that\'s enough.' },
    ],
  },
  'lesson-43': {
    vocab: [
      { italian: 'L\'inquinamento', english: 'The pollution', pronunciation: 'leen-kwee-nah-MEHN-toh' },
      { italian: 'Il riciclo', english: 'The recycling', pronunciation: 'eel ree-CHEE-kloh' },
      { italian: 'La energia rinnovabile', english: 'Renewable energy', pronunciation: 'lah eh-NEHR-jyah ree-noh-VAH-bee-leh' },
      { italian: 'La deforestazione', english: 'Deforestation', pronunciation: 'lah deh-foh-rehs-tah-TSYOH-neh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "l\'inquinamento"?', options: ['The recycling', 'The pollution', 'The energy', 'The forest'], answer: 'The pollution' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Dobbiamo proteggere l\'ambiente', answer: 'We must protect the environment', hint: 'ambiente = environment' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa possiamo fare per l\'ambiente?', english: 'What can we do for the environment?' },
      { speaker: 'A', italian: 'Possiamo riciclare di più e usare meno plastica.', english: 'We can recycle more and use less plastic.' },
    ],
  },
  'lesson-44': {
    vocab: [
      { italian: 'La notizia', english: 'The news', pronunciation: 'lah noh-TSEE-tsyah' },
      { italian: 'Il giornalista', english: 'The journalist', pronunciation: 'eel johr-nah-LEES-tah' },
      { italian: 'Il telegiornale', english: 'The TV news', pronunciation: 'eel teh-leh-johr-NAH-leh' },
      { italian: 'La trasmissione', english: 'The broadcast', pronunciation: 'lah trahs-mee-SYOH-neh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il telegiornale"?', options: ['The newspaper', 'The TV news', 'The radio', 'The magazine'], answer: 'The TV news' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I read the news every morning', answer: 'Leggo le notizie ogni mattina', hint: 'leggere = to read' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Hai visto le notizie stasera?', english: 'Did you see the news tonight?' },
      { speaker: 'A', italian: 'Sì, c\'era una notizia importante sulla politica.', english: 'Yes, there was important news about politics.' },
    ],
  },
  'lesson-45': {
    vocab: [
      { italian: 'Il soffritto', english: 'The sautéed base', pronunciation: 'eel sohf-FREET-toh' },
      { italian: 'La cottura', english: 'The cooking', pronunciation: 'lah koht-TOO-rah' },
      { italian: 'Mescolare', english: 'To stir/mix', pronunciation: 'meh-skoh-LAH-reh' },
      { italian: 'Il forno', english: 'The oven', pronunciation: 'eel FOHR-noh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "al dente" mean?', options: ['Well done', 'Undercooked', 'Firm to the bite', 'Soft'], answer: 'Firm to the bite' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Cuoci la pasta per otto minuti', answer: 'Cook the pasta for eight minutes', hint: 'cuocere = to cook' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come si fa la carbonara?', english: 'How do you make carbonara?' },
      { speaker: 'A', italian: 'Servi la pasta al dente con uova, guanciale e pecorino.', english: 'Serve the pasta al dente with eggs, guanciale, and pecorino.' },
    ],
  },
  'lesson-46': {
    vocab: [
      { italian: 'In bocca al lupo', english: 'Good luck (literal: into the mouth of the wolf)', pronunciation: 'een BOHK-kah ahl LOO-poh' },
      { italian: 'Hai voluto la bicicletta?', english: 'You asked for it (literal: did you want the bicycle?)', pronunciation: 'ai voh-LOO-toh lah bee-chee-KLEHT-tah' },
      { italian: 'Non è rose e fiori', english: 'It\'s not a bed of roses', pronunciation: 'nohn eh ROH-zeh eh FYOH-ree' },
      { italian: 'Avere le mani in pasta', english: 'To be involved', pronunciation: 'ah-VEH-reh leh MAH-nee een PAH-stah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is the response to "In bocca al lupo"?', options: ['Grazie', 'Crepi!', 'Prego', 'Buona fortuna'], answer: 'Crepi!' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Ogni lasciata è persa', answer: 'Every chance missed is lost', hint: 'lasciata = chance missed' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Domani ho l\'esame. Sono nervoso!', english: 'Tomorrow I have the exam. I\'m nervous!' },
      { speaker: 'A', italian: 'In bocca al lupo! Studia bene e vedrai che andrà tutto bene.', english: 'Good luck! Study well and you\'ll see everything will be fine.' },
    ],
  },
  'lesson-47': {
    vocab: [
      { italian: 'L\'impero', english: 'The empire', pronunciation: 'leem-PEH-roh' },
      { italian: 'Il Medioevo', english: 'The Middle Ages', pronunciation: 'eel MEH-dyoh-EH-voh' },
      { italian: 'Il Rinascimento', english: 'The Renaissance', pronunciation: 'eel ree-nahs-chee-MEHN-toh' },
      { italian: 'Il Risorgimento', english: 'The Italian unification', pronunciation: 'eel ree-zohr-jee-MEHN-toh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il Rinascimento"?', options: ['The Middle Ages', 'The Renaissance', 'The Empire', 'The Unification'], answer: 'The Renaissance' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'L\'Italia è stata unita nel 1861', answer: 'Italy was unified in 1861', hint: 'unita = unified' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Quando è iniziato il Rinascimento?', english: 'When did the Renaissance start?' },
      { speaker: 'A', italian: 'Il Rinascimento è iniziato nel XV secolo, a Firenze.', english: 'The Renaissance started in the 15th century, in Florence.' },
    ],
  },
  'lesson-48': {
    vocab: [
      { italian: 'Il dialetto', english: 'The dialect', pronunciation: 'eel dyah-LEHT-toh' },
      { italian: 'Il托斯卡纳语', english: 'Tuscan dialect', pronunciation: 'toos-KAH-nah' },
      { italian: 'L\'accento', english: 'The accent', pronunciation: 'lahk-SEHN-toh' },
      { italian: 'La parlata', english: 'The speech/manner of speaking', pronunciation: 'lah pahr-LAH-tah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il dialetto"?', options: ['The accent', 'The dialect', 'The language', 'The speech'], answer: 'The dialect' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'In Italia ci sono molti dialetti', answer: 'In Italy there are many dialects', hint: 'dialetti = dialects' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Tu parli qualche dialetto?', english: 'Do you speak any dialect?' },
      { speaker: 'A', italian: 'Parlo il napoletano, ma lo parlo solo in famiglia.', english: 'I speak Neapolitan, but I only speak it with family.' },
    ],
  },
  'lesson-49': {
    vocab: [
      { italian: 'Il governo', english: 'The government', pronunciation: 'eel goh-VEHR-noh' },
      { italian: 'Il parlamento', english: 'The parliament', pronunciation: 'eel pahr-lah-MEHN-toh' },
      { italian: 'La legge', english: 'The law', pronunciation: 'lah LEHJ-jeh' },
      { italian: 'Il presidente', english: 'The president', pronunciation: 'eel preh-zee-DEHN-teh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il parlamento"?', options: ['The government', 'The parliament', 'The law', 'The president'], answer: 'The parliament' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'The government made a new law', answer: 'Il governo ha fatto una nuova legge', hint: 'governo = government' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa ne pensi della politica italiana?', english: 'What do you think about Italian politics?' },
      { speaker: 'A', italian: 'Penso che ci sia bisogno di più trasparenza.', english: 'I think there needs to be more transparency.' },
    ],
  },
  'lesson-50': {
    vocab: [
      { italian: 'La logica', english: 'The logic', pronunciation: 'lah LOH-jee-kah' },
      { italian: 'La morale', english: 'The morality', pronunciation: 'lah moh-RAH-leh' },
      { italian: 'Il pensiero', english: 'The thought', pronunciation: 'eel pehn-SYEH-roh' },
      { italian: 'La verità', english: 'The truth', pronunciation: 'lah veh-ree-TAH' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la morale"?', options: ['The logic', 'The morality', 'The thought', 'The truth'], answer: 'The morality' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'La filosofia è l\'amore per la sapienza', answer: 'Philosophy is the love of wisdom', hint: 'sapienza = wisdom' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che cos\'è la filosofia per te?', english: 'What is philosophy to you?' },
      { speaker: 'A', italian: 'La filosofia è il modo di comprendere il mondo.', english: 'Philosophy is the way to understand the world.' },
    ],
  },
  'lesson-51': {
    vocab: [
      { italian: 'L\'ombrello', english: 'The umbrella', pronunciation: 'lohm-BREHL-loh' },
      { italian: 'La crema solare', english: 'The sunscreen', pronunciation: 'lah KREH-mah soh-LAH-reh' },
      { italian: 'Il secchio', english: 'The bucket', pronunciation: 'eel SEHK-kyoh' },
      { italian: 'La paletta', english: 'The spade/shovel', pronunciation: 'lah pah-LEHT-tah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la crema solare"?', options: ['The cream', 'The sunscreen', 'The lotion', 'The milk'], answer: 'The sunscreen' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Put on sunscreen before going to the beach', answer: 'Metti la crema solare prima di andare alla spiaggia', hint: 'spiaggia = beach' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Andiamo alla spiaggia domani?', english: 'Shall we go to the beach tomorrow?' },
      { speaker: 'A', italian: 'Sì! Porta l\'ombrello e la crema solare.', english: 'Yes! Bring the umbrella and sunscreen.' },
    ],
  },
  'lesson-52': {
    vocab: [
      { italian: 'Il coniglio', english: 'The rabbit', pronunciation: 'eel koh-NEEL-yoh' },
      { italian: 'La farfalla', english: 'The butterfly', pronunciation: 'lah fahr-FAHL-lah' },
      { italian: 'Il pesce', english: 'The fish', pronunciation: 'eel PEH-sheh' },
      { italian: 'La formica', english: 'The ant', pronunciation: 'lah fohr-MEE-kah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la farfalla"?', options: ['The bird', 'The butterfly', 'The fish', 'The cat'], answer: 'The butterfly' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Il cane è il migliore amico dell\'uomo', answer: 'The dog is man\'s best friend', hint: 'migliore = best' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Qual è il tuo animale preferito?', english: 'What is your favorite animal?' },
      { speaker: 'A', italian: 'Il mio animale preferito è il gatto. È molto dolce.', english: 'My favorite animal is the cat. It\'s very sweet.' },
    ],
  },
  'lesson-53': {
    vocab: [
      { italian: 'Il giardinaggio', english: 'Gardening', pronunciation: 'eel jahr-dee-NAHJ-joh' },
      { italian: 'La lettura', english: 'Reading', pronunciation: 'lah leht-TOO-rah' },
      { italian: 'Il cinema', english: 'The cinema/movies', pronunciation: 'eel CHEE-mah-rah' },
      { italian: 'Il fai da te', english: 'DIY (do it yourself)', pronunciation: 'eel fai dah teh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il giardinaggio"?', options: ['Cooking', 'Gardening', 'Reading', 'Sports'], answer: 'Gardening' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'In my free time I like to read', answer: 'Nel tempo libero mi piace leggere', hint: 'tempo libero = free time' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa fai nel tempo libero?', english: 'What do you do in your free time?' },
      { speaker: 'A', italian: 'Mi piace leggere, cucinare e fare giardinaggio.', english: 'I like reading, cooking, and gardening.' },
    ],
  },
  'lesson-54': {
    vocab: [
      { italian: 'Il portabagagli', english: 'The luggage rack', pronunciation: 'eel pohr-tah-bah-GAH-lyee' },
      { italian: 'Il cameriere', english: 'The waiter', pronunciation: 'eel kah-meh-RYEH-reh' },
      { italian: 'La specialità', english: 'The specialty', pronunciation: 'lah speh-chah-lee-TAH' },
      { italian: 'Il conto, per favore', english: 'The bill, please', pronunciation: 'eel KOHN-toh pehr fah-VOH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'How do you call the waiter in Italy?', options: ['Ehi!', 'Cameriere!', 'Scusi!', 'Signore!'], answer: 'Cameriere!' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Vorrei la nostra specialità, per favore', answer: 'I would like your specialty, please', hint: 'specialità = specialty' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cameriere, il conto per favore!', english: 'Waiter, the bill please!' },
      { speaker: 'A', latin: 'Subito, signora. Grazie per essere venuti.', english: 'Right away, ma\'am. Thank you for coming.' },
    ],
  },
  'lesson-55': {
    vocab: [
      { italian: 'Il genero', english: 'The son-in-law', pronunciation: 'eel jeh-NEH-roh' },
      { italian: 'La nuora', english: 'The daughter-in-law', pronunciation: 'lah NWOH-rah' },
      { italian: 'Il cognato', english: 'The brother-in-law', pronunciation: 'eel koh-NYAH-toh' },
      { italian: 'La suocera', english: 'The mother-in-law', pronunciation: 'lah swOH-cheh-rah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la suocera"?', options: ['The grandmother', 'The mother-in-law', 'The aunt', 'The sister-in-law'], answer: 'The mother-in-law' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'My sister is married to a nice man', answer: ' Mia sorella è sposata con un uomo gentile', hint: 'sposata = married' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Quanti nipoti hai?', english: 'How many grandchildren do you have?' },
      { speaker: 'A', italian: 'Ho tre nipoti: due maschi e una femmina.', english: 'I have three grandchildren: two boys and a girl.' },
    ],
  },
  'lesson-56': {
    vocab: [
      { italian: 'Il mercato', english: 'The market', pronunciation: 'eel mehr-KAH-toh' },
      { italian: 'Il banco', english: 'The counter', pronunciation: 'eel BAHN-koh' },
      { italian: 'Scontare', english: 'To discount', pronunciation: 'skohn-TAH-reh' },
      { italian: 'Il prezzo', english: 'The price', pronunciation: 'eel PREH-tsoh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What does "Scontare" mean?', options: ['To pay', 'To discount', 'To buy', 'To return'], answer: 'To discount' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Posso fare uno sconto del 10%?', answer: 'Can I get a 10% discount?', hint: 'sconto = discount' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buongiorno! Cosa desidera?', english: 'Good morning! What would you like?' },
      { speaker: 'A', italian: 'Vorrei queste mele. Quanto costano al chilo?', english: 'I would like these apples. How much per kilo?' },
    ],
  },
  'lesson-57': {
    vocab: [
      { italian: 'Lo stadio', english: 'The stadium', pronunciation: 'loh STAH-dyoh' },
      { italian: 'La partita', english: 'The match/game', pronunciation: 'lah pahr-TEE-tah' },
      { italian: 'L\'allenatore', english: 'The coach', pronunciation: 'lah-leh-NAH-toh-reh' },
      { italian: 'L\'arbitro', english: 'The referee', pronunciation: 'lahr-BEE-troh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "l\'allenatore"?', options: ['The player', 'The coach', 'The referee', 'The fan'], answer: 'The coach' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'La squadra ha vinto la partita', answer: 'The team won the match', hint: 'vinto = won' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Chi ha vinto la partita ieri?', english: 'Who won the match yesterday?' },
      { speaker: 'A', italian: 'La Juventus ha vinto 2-1 contro il Milan.', english: 'Juventus won 2-1 against Milan.' },
    ],
  },
  'lesson-58': {
    vocab: [
      { italian: 'Il solista', english: 'The soloist', pronunciation: 'eel soh-LEES-tah' },
      { italian: 'La melodia', english: 'The melody', pronunciation: 'lah meh-LOH-dyah' },
      { italian: 'Il ritmo', english: 'The rhythm', pronunciation: 'eel REET-moh' },
      { italian: 'L\'ascoltare', english: 'To listen', pronunciation: 'lah-skohl-TAH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la melodia"?', options: ['The rhythm', 'The melody', 'The song', 'The concert'], answer: 'The melody' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'This song has a beautiful melody', answer: 'Questa canzone ha una melodia bellissima', hint: 'bellissima = very beautiful' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'A chi piace la musica classica?', english: 'Who likes classical music?' },
      { speaker: 'A', italian: 'A me piace molto Vivaldi e Puccini.', english: 'I really like Vivaldi and Puccini.' },
    ],
  },
  'lesson-59': {
    vocab: [
      { italian: 'Il sentiero', english: 'The trail/path', pronunciation: 'eel sehn-TYEH-roh' },
      { italian: 'La cascata', english: 'The waterfall', pronunciation: 'lah kahs-KAH-tah' },
      { italian: 'Il fiume', english: 'The river', pronunciation: 'eel FYOO-meh' },
      { italian: 'La collina', english: 'The hill', pronunciation: 'lah kohl-LEE-nah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la cascata"?', options: ['The river', 'The waterfall', 'The mountain', 'The hill'], answer: 'The waterfall' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Il sentiero porta alla cima della montagna', answer: 'The trail leads to the top of the mountain', hint: 'cima = top' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Dove andiamo per la gita?', english: 'Where are we going for the trip?' },
      { speaker: 'A', italian: 'Andiamo in montagna! C\'è un sentiero bellissimo.', english: 'Let\'s go to the mountains! There\'s a beautiful trail.' },
    ],
  },
  'lesson-60': {
    vocab: [
      { italian: 'L\'ingresso', english: 'The entrance', pronunciation: 'leeng-GREHS-soh' },
      { italian: 'L\'uscita', english: 'The exit', pronunciation: 'loosh-CHEE-tah' },
      { italian: 'La guided', english: 'The guide', pronunciation: 'lah GWEE-deh' },
      { italian: 'L\'audioguida', english: 'The audio guide', pronunciation: 'lah-oh-dyoh-GWEE-dah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "l\'ingresso"?', options: ['The exit', 'The entrance', 'The ticket', 'The guide'], answer: 'The entrance' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Where can I buy tickets?', answer: 'Dove posso comprare i biglietti?', hint: 'biglietti = tickets' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Quanto costa l\'ingresso al museo?', english: 'How much is the museum entrance?' },
      { speaker: 'A', italian: 'Costa 15 euro, ma domani è gratuito.', english: 'It costs 15 euros, but tomorrow it\'s free.' },
    ],
  },
  'lesson-61': {
    vocab: [
      { italian: 'Il casco', english: 'The helmet', pronunciation: 'eel KAH-skoh' },
      { italian: 'Il pedaggio', english: 'The toll', pronunciation: 'eel peh-DAHJ-joh' },
      { italian: 'La benzina', english: 'The gasoline', pronunciation: 'lah behn-TSEE-nah' },
      { italian: 'Il parco自动', english: 'The parking lot', pronunciation: 'eel PAHR-koh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il casco"?', options: ['The car', 'The helmet', 'The ticket', 'The toll'], answer: 'The helmet' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Quanto costa il casco auto?', answer: 'How much does car insurance cost?', hint: 'casco auto = car insurance' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come vai al lavoro?', english: 'How do you go to work?' },
      { speaker: 'A', italian: 'Vado in macchina, ma a volte prendo la metro.', english: 'I go by car, but sometimes I take the subway.' },
    ],
  },
  'lesson-62': {
    vocab: [
      { italian: 'La meditazione', english: 'Meditation', pronunciation: 'lah meh-dee-tah-TSYOH-neh' },
      { italian: 'Lo yoga', english: 'Yoga', pronunciation: 'loh YOH-gah' },
      { italian: 'Il benessere', english: 'Wellness', pronunciation: 'eel beh-NEHS-seh-reh' },
      { italian: 'L\'alimentazione', english: 'The diet/nutrition', pronunciation: 'lah-lee-mehn-tah-TSYOH-neh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il benessere"?', options: ['The illness', 'The wellness', 'The exercise', 'The medicine'], answer: 'The wellness' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'Eating well is important for health', answer: 'Mangiare bene è importante per la salute', hint: 'salute = health' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come mantieni la forma?', english: 'How do you stay in shape?' },
      { speaker: 'A', italian: 'Faccio yoga tre volte a settimana e mangio sano.', english: 'I do yoga three times a week and eat healthy.' },
    ],
  },
  'lesson-63': {
    vocab: [
      { italian: 'Il social media', english: 'The social media', pronunciation: 'eel SOH-chah-lee MEH-dee-ah' },
      { italian: 'La pubblicazione', english: 'The post', pronunciation: 'lah poob-lee-kah-TSYOH-neh' },
      { italian: 'Il profilo', english: 'The profile', pronunciation: 'eel proh-FEE-loh' },
      { italian: 'Il messaggio', english: 'The message', pronunciation: 'eel mehs-SAHJ-joh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la pubblicazione"?', options: ['The message', 'The post', 'The profile', 'The comment'], answer: 'The post' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Ho pubblicato una foto sulla spiaggia', answer: 'I posted a photo on the beach', hint: 'spiaggia = beach' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Hai visto il mio post su Instagram?', english: 'Did you see my post on Instagram?' },
      { speaker: 'A', italian: 'Sì, la foto è bellissima! Ti ho messo "mi piace".', english: 'Yes, the photo is beautiful! I liked it.' },
    ],
  },
  'lesson-64': {
    vocab: [
      { italian: 'Alto', english: 'Tall', pronunciation: 'AHL-toh' },
      { italian: 'Basso', english: 'Short (height)', pronunciation: 'BAHS-soh' },
      { italian: 'Giovane', english: 'Young', pronunciation: 'JOH-vah-neh' },
      { italian: 'Anziano', english: 'Old (person)', pronunciation: 'ahn-TSYAH-noh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "basso" when describing a person?', options: ['Fat', 'Thin', 'Short (height)', 'Tall'], answer: 'Short (height)' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'She has long brown hair', answer: 'Ha i capelli lunghi e castani', hint: 'capelli = hair' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Com\'è la nuova collega?', english: 'What\'s the new colleague like?' },
      { speaker: 'A', italian: 'È alta, bionda e molto simpatica.', english: 'She\'s tall, blonde, and very nice.' },
    ],
  },
  'lesson-65': {
    vocab: [
      { italian: 'Che', english: 'That (subjunctive trigger)', pronunciation: 'keh' },
      { italian: 'Come se', english: 'As if', pronunciation: 'KOH-meh seh' },
      { italian: 'Affinché', english: 'So that', pronunciation: 'ahf-fee-KEH' },
      { italian: 'Prima che', english: 'Before (temporal)', pronunciation: 'PREE-mah keh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'Which conjunction requires the subjunctive?', options: ['Perché', 'Che', 'Quando', 'Anche se'], answer: 'Che' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Bisogna che io studi di più', answer: 'I need to study more', hint: 'bisogna che = it is necessary that' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'È importante che tu venga alla riunione.', english: 'It\'s important that you come to the meeting.' },
      { speaker: 'A', italian: 'Lo so. Farò del mio meglio per essere presente.', english: 'I know. I\'ll do my best to be there.' },
    ],
  },
  'lesson-66': {
    vocab: [
      { italian: 'La ricetta medica', english: 'The medical prescription', pronunciation: 'lah ree-CHEHT-tah MEH-dee-kah' },
      { italian: 'Il farmaco da banco', english: 'Over-the-counter medicine', pronunciation: 'eel FAHR-mah-koh dah BAHN-koh' },
      { italian: 'La posologia', english: 'The dosage instructions', pronunciation: 'lah poh-zoh-loh-JAH-nee-kah' },
      { italian: 'Il collirio', english: 'The eye drops', pronunciation: 'eel kohl-LEE-ryoh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la ricetta medica"?', options: ['The recipe', 'The medical prescription', 'The receipt', 'The medicine'], answer: 'The medical prescription' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Ho bisogno di una ricetta per questo farmaco', answer: 'I need a prescription for this medicine', hint: 'ricetta = prescription' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buongiorno, ho bisogno di questo antibiotico.', english: 'Good morning, I need this antibiotic.' },
      { speaker: 'A', italian: 'Mi porti la ricetta medica, per favore?', english: 'Can you bring me the prescription, please?' },
    ],
  },
  'lesson-67': {
    vocab: [
      { italian: 'L\'abbonamento', english: 'The pass/subscription', pronunciation: 'lahb-boh-nah-MEHN-toh' },
      { italian: 'Il tragitto', english: 'The route', pronunciation: 'eel trah-JEET-toh' },
      { italian: 'La fermata', english: 'The stop', pronunciation: 'lah fehr-MAH-tah' },
      { italian: 'Il biglietto singolo', english: 'The single ticket', pronunciation: 'eel bee-LYEHT-toh seen-GOH-loh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "l\'abbonamento"?', options: ['The ticket', 'The pass/subscription', 'The route', 'The stop'], answer: 'The pass/subscription' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'How long does it take to get there?', answer: 'Quanto tempo ci vuole per arrivarci?', hint: 'arrivare = to arrive' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'A che ora passa il prossimo autobus?', english: 'What time does the next bus come?' },
      { speaker: 'A', italian: 'Tra cinque minuti. È la linea 64.', english: 'In five minutes. It\'s line 64.' },
    ],
  },
  'lesson-68': {
    vocab: [
      { italian: 'La previsione', english: 'The forecast', pronunciation: 'lah preh-vee-ZYOH-neh' },
      { italian: 'La temperatura', english: 'The temperature', pronunciation: 'lah tehm-peh-rah-TOO-rah' },
      { italian: 'Il fulmine', english: 'The lightning', pronunciation: 'eel FOOL-mee-neh' },
      { italian: 'La tempesta', english: 'The storm', pronunciation: 'lah teh-PEHS-tah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la previsione"?', options: ['The temperature', 'The forecast', 'The storm', 'The lightning'], answer: 'The forecast' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'La previsione dice che pioverà', answer: 'The forecast says it will rain', hint: 'previsione = forecast' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Che dice la previsione per domani?', english: 'What does the forecast say for tomorrow?' },
      { speaker: 'A', italian: 'Dice che farà molto caldo, oltre 35 gradi.', english: 'It says it will be very hot, over 35 degrees.' },
    ],
  },
  'lesson-69': {
    vocab: [
      { italian: 'Il mittente', english: 'The sender', pronunciation: 'eel meht-TEHN-teh' },
      { italian: 'Il destinatario', english: 'The recipient', pronunciation: 'eel dehs-tee-nah-TAH-ryoh' },
      { italian: 'L\'oggetto', english: 'The subject', pronunciation: 'loh-JEHT-toh' },
      { italian: 'Il corpo della lettera', english: 'The body of the letter', pronunciation: 'eel KOHR-poh deh-lah LEH-tah-rah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il destinatario"?', options: ['The sender', 'The recipient', 'The subject', 'The body'], answer: 'The recipient' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I am writing to inquire about...', answer: 'Scrigo per informarmi su...', hint: 'informarsi = to inquire' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come inizia una lettera formale?', english: 'How does a formal letter start?' },
      { speaker: 'A', italian: 'Si inizia con "Egregio/a Signore/Signora".', english: 'It starts with "Dear Sir/Madam".' },
    ],
  },
  'lesson-70': {
    vocab: [
      { italian: 'Il tasso di cambio', english: 'The exchange rate', pronunciation: 'eel TAHS-soh dee KAHM-byoh' },
      { italian: 'Il prelievo', english: 'The withdrawal', pronunciation: 'eel preh-LYEH-voh' },
      { italian: 'L\'investimento', english: 'The investment', pronunciation: 'leev-ehs-tee-MEHN-toh' },
      { italian: 'Il mutuo', english: 'The mortgage', pronunciation: 'eel MOO-twoh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il prelievo"?', options: ['The deposit', 'The withdrawal', 'The investment', 'The mortgage'], answer: 'The withdrawal' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Vorrei cambiare euro in dollari', answer: 'I would like to exchange euros for dollars', hint: 'cambiare = to change/exchange' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buongiorno, vorrei aprire un conto.', english: 'Good morning, I would like to open an account.' },
      { speaker: 'A', italian: 'Certo. Qual è lo scopo del conto?', english: 'Of course. What is the purpose of the account?' },
    ],
  },
  'lesson-71': {
    vocab: [
      { italian: 'La ferramenta', english: 'The hardware store', pronunciation: 'lah fehr-rah-MEHN-tah' },
      { italian: 'Il tubo', english: 'The pipe', pronunciation: 'eel TOO-boh' },
      { italian: 'La rubinetto', english: 'The faucet', pronunciation: 'lah roo-bee-NEHT-toh' },
      { italian: 'L\'interruttore', english: 'The switch', pronunciation: 'leen-tehr-rooh-TOH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la ferramenta"?', options: ['The tool', 'The hardware store', 'The pipe', 'The switch'], answer: 'The hardware store' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'The faucet is leaking', answer: 'Il rubinetto perde acqua', hint: 'perdere = to leak' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Ho un problema con il rubinetto.', english: 'I have a problem with the faucet.' },
      { speaker: 'A', italian: 'Prova a stringere la vite. Se non funziona, chiama un idraulico.', english: 'Try tightening the screw. If it doesn\'t work, call a plumber.' },
    ],
  },
  'lesson-72': {
    vocab: [
      { italian: 'La poesia', english: 'The poetry', pronunciation: 'lah poh-eh-ZYAH' },
      { italian: 'Il romanzo', english: 'The novel', pronunciation: 'eel roh-MAHN-tsoh' },
      { italian: 'La narrazione', english: 'The narrative', pronunciation: 'lah nah-rah-TSYOH-neh' },
      { italian: 'L\'autore', english: 'The author', pronunciation: 'lah-oo-TOH-reh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il romanzo"?', options: ['The poem', 'The novel', 'The narrative', 'The author'], answer: 'The novel' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Dante Alighieri ha scritto la Divina Commedia', answer: 'Dante Alighieri wrote the Divine Comedy', hint: 'commedia = comedy' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Qual è il libro italiano più famoso?', english: 'What is the most famous Italian book?' },
      { speaker: 'A', italian: 'La Divina Commedia di Dante è considerata un capolavoro.', english: 'Dante\'s Divine Comedy is considered a masterpiece.' },
    ],
  },
  'lesson-73': {
    vocab: [
      { italian: 'Il curriculum vitae', english: 'The resume', pronunciation: 'eel kehr-ree-KOO-loo-mee VEE-teh' },
      { italian: 'La lettera di presentazione', english: 'The cover letter', pronunciation: 'lah LEH-tah-rah dee preh-zehn-tah-TSYOH-neh' },
      { italian: 'L\'esperienza lavorativa', english: 'Work experience', pronunciation: 'leh-speh-RYEN-tsah lah-voh-rah-TEE-vah' },
      { italian: 'La competenza', english: 'The competency', pronunciation: 'lah kohm-PEH-tahn-tsah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la lettera di presentazione"?', options: ['The resume', 'The cover letter', 'The reference', 'The diploma'], answer: 'The cover letter' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I have five years of work experience', answer: 'Ho cinque anni di esperienza lavorativa', hint: 'esperienza = experience' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Perché vuole lavorare per la nostra azienda?', english: 'Why do you want to work for our company?' },
      { speaker: 'A', italian: 'Sono motivato e ho competenze che si adattano al ruolo.', english: 'I am motivated and have skills that fit the role.' },
    ],
  },
  'lesson-74': {
    vocab: [
      { italian: 'Il regista', english: 'The director', pronunciation: 'eel reh-JEES-tah' },
      { italian: 'L\'attore', english: 'The actor', pronunciation: 'laht-TOH-reh' },
      { italian: 'La recita', english: 'The performance', pronunciation: 'lah reh-CHEE-tah' },
      { italian: 'Il premio', english: 'The award', pronunciation: 'eel PREH-mee-oh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il regista"?', options: ['The actor', 'The director', 'The producer', 'The screenwriter'], answer: 'The director' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Federico Fellini è un grande regista', answer: 'Federico Fellini is a great director', hint: 'regista = director' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Hai visto l\'ultimo film di Sorrentino?', english: 'Have you seen Sorrentino\'s latest film?' },
      { speaker: 'A', italian: 'Sì, è fantastico! La Grande Bellezza è un capolavoro.', english: 'Yes, it\'s fantastic! The Great Beauty is a masterpiece.' },
    ],
  },
  'lesson-75': {
    vocab: [
      { italian: 'Il post', english: 'The post', pronunciation: 'eel pohst' },
      { italian: 'Il commento', english: 'The comment', pronunciation: 'eel koh-MEHN-toh' },
      { italian: 'L\'hashtag', english: 'The hashtag', pronunciation: 'lahs-TAHG' },
      { italian: 'Il follower', english: 'The follower', pronunciation: 'eel FOH-loh-ehr' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il follower"?', options: ['The poster', 'The commenter', 'The follower', 'The hashtag'], answer: 'The follower' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I shared the post on my profile', answer: 'Ho condiviso il post sul mio profilo', hint: 'condividere = to share' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Hai visto il mio ultimo post su Facebook?', english: 'Did you see my latest post on Facebook?' },
      { speaker: 'A', italian: 'Sì, l\'ho commentato! Molto divertente.', english: 'Yes, I commented! Very funny.' },
    ],
  },
  'lesson-76': {
    vocab: [
      { italian: 'Il pacchetto', english: 'The package', pronunciation: 'eel pahk-KEHT-toh' },
      { italian: 'La raccomandata', english: 'The registered mail', pronunciation: 'lah rahk-koh-mahn-DAH-tah' },
      { italian: 'Il franco bollo', english: 'The postage stamp', pronunciation: 'eel FRAHN-koh BOHL-loh' },
      { italian: 'Il mittente', english: 'The sender', pronunciation: 'eel meht-TEHN-teh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la raccomandata"?', options: ['The package', 'The registered mail', 'The stamp', 'The letter'], answer: 'The registered mail' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Devo spedire questo pacchetto in America', answer: 'I need to send this package to America', hint: 'spedire = to send' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Buongiorno, devo spedire un pacco in Germania.', english: 'Good morning, I need to send a package to Germany.' },
      { speaker: 'A', italian: 'Confermata o regolare? La confermata costa di più.', english: 'Registered or regular? Registered costs more.' },
    ],
  },
  'lesson-77': {
    vocab: [
      { italian: 'L\'eccitazione', english: 'The excitement', pronunciation: 'lehk-chee-tah-TSYOH-neh' },
      { italian: 'La delusione', english: 'The disappointment', pronunciation: 'lah deh-loo-ZYOH-neh' },
      { italian: 'La soddisfazione', english: 'The satisfaction', pronunciation: 'lah sohd-dees-fah-TSYOH-neh' },
      { italian: 'La vergogna', english: 'The shame', pronunciation: 'lah vehr-GOH-nyah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la delusione"?', options: ['The excitement', 'The disappointment', 'The satisfaction', 'The shame'], answer: 'The disappointment' } },
      { type: 'translation', content: { direction: 'en-to-it', sentence: 'I feel very excited about the trip', answer: 'Sono molto eccitato per il viaggio', hint: 'eccitato = excited' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Come ti senti dopo l\'esame?', english: 'How do you feel after the exam?' },
      { speaker: 'A', italian: 'Sono soddisfatto. Ho preso un buon voto!', english: 'I\'m satisfied. I got a good grade!' },
    ],
  },
  'lesson-78': {
    vocab: [
      { italian: 'Le elezioni', english: 'The elections', pronunciation: 'leh eh-leh-TSYOH-nee' },
      { italian: 'Il candidato', english: 'The candidate', pronunciation: 'eel kahn-DEE-dah-toh' },
      { italian: 'L\'elettorato', english: 'The electorate', pronunciation: 'leh-leht-toh-RAH-toh' },
      { italian: 'Il sondaggio', english: 'The poll/survey', pronunciation: 'eel sohn-DAHJ-joh' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il sondaggio"?', options: ['The election', 'The candidate', 'The poll', 'The electorate'], answer: 'The poll' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Le elezioni si terranno il prossimo marzo', answer: 'The elections will be held next March', hint: 'tenere = to hold' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Chi voterai alle prossime elezioni?', english: 'Who will you vote for in the next elections?' },
      { speaker: 'A', italian: 'Non ho ancora deciso. Devo informarmi sui candidati.', english: 'I haven\'t decided yet. I need to inform myself about the candidates.' },
    ],
  },
  'lesson-79': {
    vocab: [
      { italian: 'La regione', english: 'The region', pronunciation: 'lah reh-JOH-neh' },
      { italian: 'La provincia', english: 'The province', pronunciation: 'lah proh-VEEN-chah' },
      { italian: 'Il confine', english: 'The border', pronunciation: 'eel koh-FEE-neh' },
      { italian: 'L\'isola', english: 'The island', pronunciation: 'lee-SOH-lah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "la regione"?', options: ['The province', 'The region', 'The border', 'The island'], answer: 'The region' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'La Sicilia è la più grande isola d\'Italia', answer: 'Sicily is the largest island in Italy', hint: 'grande = large' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Qual è la tua regione preferita in Italia?', english: 'What is your favorite region in Italy?' },
      { speaker: 'A', italian: 'Adoro la Toscana. Il paesaggio è incantevole.', english: 'I love Tuscany. The landscape is enchanting.' },
    ],
  },
  'lesson-80': {
    vocab: [
      { italian: 'Il cambiamento climatico', english: 'Climate change', pronunciation: 'eel kahm-byah-MEHN-toh klee-mah-TEE-koh' },
      { italian: 'Le emissioni', english: 'The emissions', pronunciation: 'leh eh-mee-SYOH-nee' },
      { italian: 'La sostenibilità', english: 'Sustainability', pronunciation: 'lah sohs-teh-nee-bee-lee-TAH' },
      { italian: 'L\'energia pulita', english: 'Clean energy', pronunciation: 'leh-NEHR-jyah poo-LEE-tah' },
    ],
    exercises: [
      { type: 'multiple_choice', content: { question: 'What is "il cambiamento climatico"?', options: ['The pollution', 'Climate change', 'The weather', 'The forecast'], answer: 'Climate change' } },
      { type: 'translation', content: { direction: 'it-to-en', sentence: 'Dobbiamo ridurre le emissioni di CO2', answer: 'We must reduce CO2 emissions', hint: 'ridurre = to reduce' } },
    ],
    dialogues: [
      { speaker: 'B', italian: 'Cosa possiamo fare per il pianeta?', english: 'What can we do for the planet?' },
      { speaker: 'A', italian: 'Ridurre l\'uso della plastica e usare l\'energia pulita.', english: 'Reduce plastic use and use clean energy.' },
    ],
  },
};

// Apply additions
let totalVocabAdded = 0;
let totalExercisesAdded = 0;
let totalDialoguesAdded = 0;

lessons.forEach(lesson => {
  const add = additions[lesson.id];
  if (!add) return;

  // Add vocabulary to learn step
  if (add.vocab && add.vocab.length > 0) {
    const learnStep = lesson.steps.find(s => s.type === 'learn');
    if (learnStep && learnStep.content && learnStep.content.items) {
      add.vocab.forEach(v => {
        if (!learnStep.content.items.find(i => i.italian === v.italian)) {
          learnStep.content.items.push(v);
          totalVocabAdded++;
        }
      });
    }
  }

  // Add exercises before review step
  if (add.exercises && add.exercises.length > 0) {
    const reviewIndex = lesson.steps.findIndex(s => s.type === 'review');
    add.exercises.forEach((ex, i) => {
      const insertIndex = reviewIndex >= 0 ? reviewIndex + i : lesson.steps.length - 1 + i;
      const exists = lesson.steps.find(s => s.type === ex.type && s.content.question === ex.content.question);
      if (!exists) {
        lesson.steps.splice(insertIndex, 0, ex);
        totalExercisesAdded++;
      }
    });
  }

  // Add dialogues to example step
  if (add.dialogues && add.dialogues.length > 0) {
    const exampleStep = lesson.steps.find(s => s.type === 'example');
    if (exampleStep && exampleStep.content && exampleStep.content.dialogue) {
      add.dialogues.forEach(d => {
        if (!exampleStep.content.dialogue.find(line => line.italian === d.italian)) {
          exampleStep.content.dialogue.push(d);
          totalDialoguesAdded++;
        }
      });
    }
  }
});

console.log(`Enhanced ${lessons.length} lessons`);
console.log(`Vocabulary added: ${totalVocabAdded}`);
console.log(`Exercises added: ${totalExercisesAdded}`);
console.log(`Dialogue lines added: ${totalDialoguesAdded}`);

// Write the file
const newContent = `const lessons = ${JSON.stringify(lessons, null, 2)};

export default lessons;
`;

fs.writeFileSync('./src/data/lessons/index.js', newContent);
console.log('File written successfully');

// Verify
const verifyContent = fs.readFileSync('./src/data/lessons/index.js', 'utf8');
const lessonCount = (verifyContent.match(/"id": "lesson-/g) || []).length;
console.log(`Verification: ${lessonCount} lessons found`);
