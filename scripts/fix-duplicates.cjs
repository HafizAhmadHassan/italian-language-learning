const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/lessons/index.js');
const content = fs.readFileSync(filePath, 'utf-8');

const match = content.match(/const lessons = (\[[\s\S]*\]);\s*export default lessons;/);
if (!match) { console.error('Could not parse lessons file'); process.exit(1); }

let lessons;
try {
  lessons = eval(match[1]);
} catch(e) {
  console.error('Could not evaluate lessons:', e.message);
  process.exit(1);
}

// Fix duplicate titles
const titleRenames = {
  'lesson-107': { title: 'Italian Cuisine Basics', description: 'Learn essential Italian cooking vocabulary, ingredients, and recipes.' },
  'lesson-97': { title: 'Seasons and Weather Expressions', description: 'Expand your weather vocabulary and learn seasonal expressions.' },
  'lesson-100': { title: 'Advanced Emotions Vocabulary', description: 'Express complex feelings and nuanced emotions in Italian.' },
  'lesson-106': { title: 'Health and Symptoms', description: 'Describe symptoms, illnesses, and medical situations in Italian.' },
  'lesson-116': { title: 'Personality Traits', description: 'Describe character and personality with rich Italian vocabulary.' },
  'lesson-121': { title: 'Italian Film Industry', description: 'Discuss Italian cinema, famous directors, and film culture.' },
  'lesson-126': { title: 'Postal Services', description: 'Navigate Italian postal services, send packages, and handle mail.' },
  'lesson-130': { title: 'Climate and Sustainability', description: 'Discuss environmental challenges, climate change, and green solutions.' }
};

// Add dialogues to lessons with thin content
const dialoguesToAdd = {
  'lesson-3': [
    { speaker: 'A', italian: 'Quanti anni hai?', english: 'How old are you?' },
    { speaker: 'B', italian: 'Ho venti anni. E tu?', english: 'I am twenty years old. And you?' },
    { speaker: 'A', italian: 'Ne ho venticinque.', english: 'I am twenty-five.' }
  ],
  'lesson-5': [
    { speaker: 'A', italian: 'Quant\'alti siete nella vostra famiglia?', english: 'How many are there in your family?' },
    { speaker: 'B', italian: 'Siamo in cinque: mamma, papà, due fratelli e io.', english: 'We are five: mom, dad, two brothers and me.' },
    { speaker: 'A', italian: 'Avete anche una sorella?', english: 'Do you also have a sister?' },
    { speaker: 'B', italian: 'Sì, ho una sorellina piccola.', english: 'Yes, I have a little sister.' }
  ],
  'lesson-11': [
    { speaker: 'A', italian: 'Che colore è la tua macchina?', english: 'What color is your car?' },
    { speaker: 'B', italian: 'È rossa. E la tua?', english: 'It\'s red. And yours?' },
    { speaker: 'A', italian: 'La mia è blu. Mi piace il blu.', english: 'Mine is blue. I like blue.' }
  ],
  'lesson-12': [
    { speaker: 'A', italian: 'Che tempo fa oggi?', english: 'What\'s the weather like today?' },
    { speaker: 'B', italian: 'Fa bel tempo. C\'è il sole.', english: 'The weather is nice. The sun is shining.' },
    { speaker: 'A', italian: 'Ieri pioveva tantissimo!', english: 'Yesterday it was raining a lot!' },
    { speaker: 'B', italian: 'Sì, e domani nevicherà.', english: 'Yes, and tomorrow it will snow.' }
  ],
  'lesson-16': [
    { speaker: 'A', italian: 'Che giorno è oggi?', english: 'What day is it today?' },
    { speaker: 'B', italian: 'Oggi è venerdì. Domani è sabato!', english: 'Today is Friday. Tomorrow is Saturday!' },
    { speaker: 'A', italian: 'Perfetto, è quasi il weekend.', english: 'Perfect, it\'s almost the weekend.' }
  ],
  'lesson-28': [
    { speaker: 'A', italian: 'Quali sono i verbi irregolari più comuni?', english: 'What are the most common irregular verbs?' },
    { speaker: 'B', italian: 'Essere, avere, andare, fare e dire sono i più usati.', english: 'Essere, avere, andare, fare and dire are the most used.' },
    { speaker: 'A', italian: 'Come si coniuga "fare" al passato prossimo?', english: 'How do you conjugate "fare" in passato prossimo?' },
    { speaker: 'B', italian: 'Ho fatto, hai fatto, ha fatto... usa "avere".', english: 'Ho fatto, hai fatto, ha fatto... it uses "avere".' }
  ]
};

// Apply changes
let renamed = 0;
let dialoguesAdded = 0;

lessons.forEach(lesson => {
  // Fix duplicate titles
  if (titleRenames[lesson.id]) {
    lesson.title = titleRenames[lesson.id].title;
    lesson.description = titleRenames[lesson.id].description;
    renamed++;
  }
  
  // Add dialogues to thin lessons
  if (dialoguesToAdd[lesson.id]) {
    const exampleStep = lesson.steps.find(s => s.type === 'example');
    if (!exampleStep) {
      // Insert example step after learn step
      const learnIndex = lesson.steps.findIndex(s => s.type === 'learn');
      lesson.steps.splice(learnIndex + 1, 0, {
        type: 'example',
        content: { dialogue: dialoguesToAdd[lesson.id] }
      });
      dialoguesAdded++;
    }
  }
});

console.log(`Renamed ${renamed} duplicate titles`);
console.log(`Added ${dialoguesAdded} dialogues`);

// Write back
const output = `const lessons = ${JSON.stringify(lessons, null, 2)};\n\nexport default lessons;\n`;
fs.writeFileSync(filePath, output, 'utf-8');
console.log('Lessons file updated');
