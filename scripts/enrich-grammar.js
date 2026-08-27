import { readFileSync, writeFileSync } from 'fs';

const filePath = new URL('../src/data/grammar/index.js', import.meta.url).pathname;
const raw = readFileSync(filePath, 'utf8');

// Extract the array content between "const grammar = [" and "];"
const match = raw.match(/const grammar = \([\s\S]*?\n\];/);
if (!match) {
  // Try alternate export style
  const match2 = raw.match(/const grammar = \[([\s\S]*?)\];/);
  if (!match2) {
    console.error('Could not parse grammar file');
    process.exit(1);
  }
}

// We'll eval the file to get the data
const data = [];
const exportMatch = raw.match(/export default grammar;/);
const evalCode = raw.replace('export default grammar;', 'globalThis._grammar = grammar;');
eval(evalCode);
const grammar = globalThis._grammar;

// Helper: convert single exercise to exercises array
function normalizeExercises(section) {
  if (section.exercises) return; // already normalized
  if (section.exercise) {
    section.exercises = [section.exercise];
    delete section.exercise;
  } else {
    section.exercises = [];
  }
}

// Additional exercises per topic
const extraExercises = {
  'grammar-1': [
    [
      { question: 'Which letters are NOT in the native Italian alphabet?', options: ['J, K, W, X, Y', 'B, C, D, F', 'A, E, I, O, U', 'G, H, L, M'], answer: 'J, K, W, X, Y' },
      { question: 'How many vowels does Italian have?', options: ['5', '6', '7', '4'], answer: '5' },
    ],
    [
      { question: 'How is "ch" pronounced in "che"?', options: ['sh', 'k', 'ch', 'g'], answer: 'k' },
      { question: 'How is "sc" pronounced in "scena"?', options: ['sk', 's', 'sh', 'st'], answer: 'sh' },
    ],
    [
      { question: 'How is "gl" pronounced in "figlia"?', options: ['g-l', 'ly', 'gl', 'j'], answer: 'ly' },
      { question: 'How is "gn" pronounced in "gnocchi"?', options: ['g-n', 'ny', 'ng', 'gn'], answer: 'ny' },
    ],
  ],
  'grammar-2': [
    [
      { question: 'Which article is used before "studente" (student, m.)?', options: ['il', 'lo', 'la', 'i'], answer: 'lo' },
      { question: 'What is the plural of "la ragazza"?', options: ['le ragazze', 'la ragazzas', 'i ragazzi', 'lo ragazze'], answer: 'le ragazze' },
    ],
    [
      { question: 'Which indefinite article is used before "zaino" (backpack)?', options: ['un', 'una', 'uno', 'dei'], answer: 'uno' },
      { question: 'What is the partitive article for "acqua" (water)?', options: ["dell'", 'del', 'dello', 'delle'], answer: "dell'" },
    ],
  ],
  'grammar-3': [
    [
      { question: 'What is the gender of "problema" (problem)?', options: ['Masculine', 'Feminine'], answer: 'Masculine' },
      { question: 'What is the gender of "mano" (hand)?', options: ['Masculine', 'Feminine'], answer: 'Feminine' },
    ],
    [
      { question: 'Nouns ending in -zione are usually:', options: ['Masculine', 'Feminine'], answer: 'Feminine' },
      { question: 'Nouns ending in -ista are:', options: ['Always masculine', 'Always feminine', 'Can be either'], answer: 'Can be either' },
    ],
    [
      { question: 'What is the plural of "il problema"?', options: ['i problemi', 'le probleme', 'i problemas', 'gli problemi'], answer: 'i problemi' },
      { question: 'What is the plural of "la mano"?', options: ['le mani', 'le manos', 'i mani', 'la mani'], answer: 'le mani' },
    ],
  ],
  'grammar-4': [
    [
      { question: 'What is the plural of "la citta" (city)?', options: ['le citta', 'le cittas', 'i citta', 'gli citta'], answer: 'le citta' },
      { question: 'What is the plural of "il caffee" (coffee)?', options: ['i caffè', 'le caffè', 'i caffes', 'gli caffe'], answer: 'i caffè' },
    ],
    [
      { question: 'What is the plural of "la via" (street)?', options: ['le vie', 'le vias', 'i vie', 'gli vie'], answer: 'le vie' },
      { question: 'What is the plural of "il problema"?', options: ['i problemi', 'le probleme', 'i problemas', 'gli problemi'], answer: 'i problemi' },
    ],
  ],
  'grammar-5': [
    [
      { question: 'What is "You (formal) are" using essere?', options: ['sei', 'e', 'siete', 'siamo'], answer: 'e' },
      { question: 'What is "They have" using avere?', options: ['hanno', 'ha', 'hai', 'abbiamo'], answer: 'hanno' },
    ],
    [
      { question: 'Which verb: "Ho freddo" (I am cold)?', options: ['essere', 'avere', 'stare', 'fare'], answer: 'avere' },
      { question: 'Which verb: "Sono stanco" (I am tired)?', options: ['essere', 'avere', 'stare', 'fare'], answer: 'essere' },
    ],
    [
      { question: 'How old are you? Use: "Io ___ vent\'anni."', options: ['sono', 'ho', 'ho avuto', 'facevo'], answer: 'ho' },
      { question: '"Io ___ italiano" (I am Italian). Which verb?', options: ['sono', 'ho', 'sto', 'faccio'], answer: 'sono' },
    ],
  ],
  'grammar-6': [
    [
      { question: 'What is "They speak" using "parlare"?', options: ['parlano', 'parla', 'parliamo', 'parlate'], answer: 'parlano' },
      { question: 'What is "We eat" using "mangiare"?', options: ['mangiamo', 'mangiate', 'mangiano', 'mangia'], answer: 'mangiamo' },
    ],
    [
      { question: 'What is "You (pl.) write" using "scrivere"?', options: ['scrivete', 'scrivono', 'scrivo', 'scrivi'], answer: 'scrivete' },
      { question: 'What is "He/she reads" using "leggere"?', options: ['legge', 'leggo', 'leggono', 'leggiamo'], answer: 'legge' },
    ],
    [
      { question: 'What is "I understand" using "capire"?', options: ['capisco', 'capo', 'capisce', 'capite'], answer: 'capisco' },
      { question: 'Which -ire verb adds -isc- in the io form: dormire or finire?', options: ['finire', 'dormire'], answer: 'finire' },
    ],
  ],
};

// Enriched explanations per topic
const enrichedExplanations = {
  'grammar-1': {
    0: 'Italian uses the Latin alphabet with only 21 letters. The letters J, K, W, X, and Y do not exist in native Italian words — they appear only in loanwords (e.g., "weekend", "yoga"). Italian is a phonetic language: words are pronounced almost exactly as they are written.',
    1: 'Italian has 5 pure vowels: A, E, I, O, U. Each vowel has ONE consistent, clear sound — unlike English where vowels can have multiple pronunciations. This is the foundation of Italian pronunciation. Master these 5 sounds and you can pronounce any Italian word.\n\nRule: Every vowel is always pronounced, even in unstressed positions. There are no "silent" vowels in Italian.',
    2: 'Italian uses special letter combinations to produce sounds that the individual letters cannot make alone. These are essential for correct pronunciation:\n\n• CH = "k" sound (before e/i): che, chi, chemical\n• GH = "g" sound (before e/i): ghetto, aghe\n• GL = "ly" sound: figlia,biglietto\n• GN = "ny" sound: gnocchi, signora\n• SC = "sh" sound (before e/i): scena, pesce',
  },
  'grammar-2': {
    0: 'Italian definite articles MUST agree in gender and number with the noun they modify. Unlike English which just has "the," Italian has 6 forms:\n\nRule: Use "lo" before nouns starting with s+consonant, z, gn, ps, or vowel: lo studente, lo zaino\nRule: Use "l\'" before nouns starting with a vowel (masculine or feminine): l\'uomo, l\'amica\nRule: Use "gli" for masculine plurals starting with vowel, s+consonant, z, or gn: gli uomini, gli studenti',
    1: 'Italian indefinite articles also change based on gender and number. They are less complex than definite articles:\n\n• "un" = a/an (masculine, before most consonants)\n• "una" = a/an (feminine, before most consonants)\n• "uno" = a/an (masculine, before s+consonant, z, gn)\n• "un\'" = a/an (before vowels, same for both genders)\n\nNote: Partitive articles (del, della, dello, dei, delle, degli) mean "some" and are used with uncountable or unspecified quantities.',
  },
  'grammar-3': {
    0: 'Masculine nouns typically end in -o (singular) and -i (plural). This is the most common pattern and covers the majority of Italian nouns.\n\nTip: There are many exceptions. Some nouns ending in -o are feminine (e.g., la mano = hand, la radio = radio, la foto = photo). When in doubt, check the article!',
    1: 'Feminine nouns typically end in -a (singular) and -e (plural). This is the second most common pattern.\n\nException: Nouns ending in -ista (e.g., il giornista = the journalist, m. / la giornista = the journalist, f.) can be either gender — the article tells you the gender.',
    2: 'Nouns ending in -e are the trickiest group because they can be either masculine or feminine. There is no reliable rule — you must memorize the gender of each word.\n\nTip: Some patterns exist but they have many exceptions. For example, many words ending in -one are masculine (il telefono) and many ending in -ine are feminine (la medicina), but don\'t rely on these rules blindly.',
  },
  'grammar-4': {
    0: 'Regular Italian plurals follow simple vowel-change rules:\n\n• Masculine -o → -i: libro → libri\n• Feminine -a → -e: casa → case\n• Both genders -e → -i: studente → studenti\n\nTip: When changing -a to -e, the noun changes from feminine to the same ending, but the article changes: la → le.',
    1: 'Some nouns have irregular plurals. Common patterns:\n\n• -io → -i (but -gio → -gi): il patriarca → i patriarchi\n• -ca → -che, -ga → -ge (feminine): amica → amiche\n• Some nouns are the same in singular and plural: il film → i film\n• Foreign words ending in a consonant usually don\'t change: il bar → i bar',
    2: 'Some Italian nouns are invariable — they don\'t change between singular and plural:\n\n• Words ending in a consonant: il film → i film, il bar → i bar\n• Abbreviations: il dott. → i dott.\n• Some nouns ending in accented vowels: la citta → le citta\n\nTip: The article always changes to indicate number, even when the noun doesn\'t.',
  },
  'grammar-5': {
    0: 'Essere (to be) is one of the two most important Italian verbs. It is highly irregular and used for:\n\n• Identity: Sono Marco\n• Origin: Sono italiano\n• Characteristics: Sei bello\n• Emotion: Sono felice\n• Current state: Sono stanco\n\nMemorize this conjugation — you will use it constantly.',
    1: 'Avere (to have) is the second most important Italian verb. It is also irregular and used for:\n\n• Possession: Ho una macchina\n• Age: Ho vent\'anni (literally: "I have twenty years")\n• Physical states: Ho fame (hungry), ho sete (thirsty), ho freddo (cold), ho caldo (hot), ho sonno (sleepy)\n• Expressions: Ho bisogno di (I need), ho paura di (I am afraid of)',
    2: 'The key difference between ESSERE and AVERE:\n\nUse ESSERE with:\n• Nationalities, professions, characteristics\n• Movement verbs (andare, venire, partire, arrivare)\n• Most adjectives describing identity\n\nUse AVERE with:\n• Age\n• Physical sensations (fame, sete, freddo, caldo, sonno)\n• Possession\n• Many fixed expressions\n\nTip: "Essere" describes WHAT something is. "Avere" describes what something HAS.',
  },
  'grammar-6': {
    0: '-ARE verbs are the largest and most regular group. The pattern is simple:\n\nDrop -are, add: -o, -i, -a, -iamo, -ate, -ano\n\nparlare: parlo, parli, parla, parliamo, parlate, parlano\n\nThis pattern applies to hundreds of common verbs: mangiare, studiare, lavorare, camminare, guardare, ascoltare, etc.',
    1: '-ERE verbs have a slight variation — the stress can fall on different syllables:\n\nDrop -ere, add: -o, -i, -e, -iamo, -ete, -ono\n\nscrivere: scrivo, scrivi, scrive, scriviamo, scrivete, scrivono\n\nNote: Some -ERE verbs have stressed penultimate syllable (vivere: vivo, vivi, vive) while others have stressed ultimate (prendere: prendo, prendi, prende).',
    2: '-IRE verbs come in two patterns:\n\nPattern 1 (regular): dormire → dormo, dormi, dorme, dormiamo, dormite, dormono\n\nPattern 2 (with -isc-): finire → finisco, finisci, finisce, finiamo, finite, finiscono\n\nThe -isc- pattern applies to many common verbs: capire, pulire, costruire, preferire, generale. There\'s no way to predict which pattern a verb follows — you must learn them individually.',
  },
};

// Process grammar data
grammar.forEach((topic) => {
  topic.sections.forEach((section, sIdx) => {
    // Normalize exercises
    normalizeExercises(section);

    // Add extra exercises if available
    const extras = extraExercises[topic.id];
    if (extras && extras[sIdx]) {
      extras[sIdx].forEach((ex) => {
        if (!section.exercises.find((e) => e.question === ex.question)) {
          section.exercises.push(ex);
        }
      });
    }

    // Enrich explanation if available
    if (enrichedExplanations[topic.id] && enrichedExplanations[topic.id][sIdx]) {
      section.explanation = enrichedExplanations[topic.id][sIdx];
    }
  });
});

// Serialize back to JS
function serialize(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  const pad1 = '  '.repeat(indent + 1);
  const pad2 = '  '.repeat(indent + 2);
  const pad3 = '  '.repeat(indent + 3);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map((item) => pad1 + serialize(item, indent + 1));
    return '[\n' + items.join(',\n') + '\n' + pad + ']';
  }

  if (obj !== null && typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';
    const lines = keys.map((key) => {
      const val = serialize(obj[key], indent + 2);
      return pad2 + `${key}: ${val}`;
    });
    return '{\n' + lines.join(',\n') + '\n' + pad1 + '}';
  }

  if (typeof obj === 'string') {
    // Use backticks for strings containing quotes or newlines
    if (obj.includes("'") || obj.includes('"') || obj.includes('\n')) {
      const escaped = obj.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\n/g, '\\n');
      return '`' + escaped + '`';
    }
    return "'" + obj.replace(/'/g, "\\'") + "'";
  }

  return String(obj);
}

const output = 'const grammar = ' + serialize(grammar, 0) + ';\n\nexport default grammar;\n';
writeFileSync(filePath, output, 'utf8');
console.log('Grammar enriched successfully!');
console.log(`Processed ${grammar.length} topics`);

// Count exercises
let totalExercises = 0;
grammar.forEach((topic) => {
  topic.sections.forEach((section) => {
    totalExercises += section.exercises ? section.exercises.length : 0;
  });
});
console.log(`Total exercises: ${totalExercises}`);
