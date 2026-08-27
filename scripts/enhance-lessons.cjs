const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/lessons/index.js');
const content = fs.readFileSync(filePath, 'utf-8');

// Extract the array from the file
const match = content.match(/const lessons = (\[[\s\S]*\]);\s*export default lessons;/);
if (!match) { console.error('Could not parse lessons file'); process.exit(1); }

let lessons;
try {
  lessons = eval(match[1]);
} catch(e) {
  console.error('Could not evaluate lessons:', e.message);
  process.exit(1);
}

// Fill blank exercises to add for each lesson based on its content
const fillBlankExercises = {
  'lesson-1': [
    { type: 'fill_blank', content: { sentence: 'Buongiorno, come ___?', answer: 'sta', hint: 'formal "are you"' } },
    { type: 'fill_blank', content: { sentence: '___! Come stai?', answer: 'Ciao', hint: 'informal greeting' } }
  ],
  'lesson-2': [
    { type: 'fill_blank', content: { sentence: 'Mi ___ Mario.', answer: 'chiamo', hint: 'I call myself' } },
    { type: 'fill_blank', content: { sentence: 'Sono ___ Milano.', answer: 'di', hint: 'from (origin)' } }
  ],
  'lesson-5': [
    { type: 'fill_blank', content: { sentence: 'La ___ è molto gentile.', answer: 'madre', hint: 'mother' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ gioca a calcio.', answer: 'fratello', hint: 'brother' } }
  ],
  'lesson-7': [
    { type: 'fill_blank', content: { sentence: 'Scusi, dove è la ___?', answer: 'stazione', hint: 'train station' } },
    { type: 'fill_blank', content: { sentence: 'Vada dritto e poi giri a ___', answer: 'destra', hint: 'right (direction)' } }
  ],
  'lesson-10': [
    { type: 'fill_blank', content: { sentence: 'Per ___! Come si dice...?', answer: 'favore', hint: 'please' } },
    { type: 'fill_blank', content: { sentence: '___ mille! (Thank you very much!)', answer: 'Grazie', hint: 'thanks' } }
  ],
  'lesson-14': [
    { type: 'fill_blank', content: { sentence: 'Mi ___, può aiutarmi?', answer: 'scusi', hint: 'excuse me (formal)' } },
    { type: 'fill_blank', content: { sentence: '___ piacere!', answer: 'Il', hint: 'Nice to meet you! (part 1)' } }
  ],
  'lesson-18': [
    { type: 'fill_blank', content: { sentence: '___ viene da?', answer: 'Di', hint: 'Where are you from?' } },
    { type: 'fill_blank', content: { sentence: '___ ore sono?', answer: 'Che', hint: 'What time is it?' } }
  ],
  'lesson-44': [
    { type: 'fill_blank', content: { sentence: 'Ho letto un ___ interessante sul giornale.', answer: 'articolo', hint: 'article' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ ha dato notizie importanti.', answer: 'telegiornale', hint: 'TV news' } }
  ],
  'lesson-81': [
    { type: 'fill_blank', content: { sentence: 'Il ___ ha emesso una sentenza.', answer: 'giudice', hint: 'judge' } },
    { type: 'fill_blank', content: { sentence: 'L\'avvocato ha presentato un ___.', answer: 'ricorso', hint: 'appeal' } }
  ],
  'lesson-82': [
    { type: 'fill_blank', content: { sentence: 'Ho un mal di ___ alla mascella.', answer: 'denti', hint: 'toothache' } },
    { type: 'fill_blank', content: { sentence: 'Il dentista mi ha fatto una ___', answer: 'pulizia', hint: 'cleaning' } }
  ],
  'lesson-83': [
    { type: 'fill_blank', content: { sentence: 'Sto ___ a fare la pasta.', answer: 'imparando', hint: 'I am learning' } },
    { type: 'fill_blank', content: { sentence: 'Il chef ha spiegato la ___', answer: 'ricetta', hint: 'recipe' } }
  ],
  'lesson-84': [
    { type: 'fill_blank', content: { sentence: 'L\'___ è in centro città.', answer: 'appartamento', hint: 'apartment' } },
    { type: 'fill_blank', content: { sentence: 'La ___ è di tre camere.', answer: 'casa', hint: 'house' } }
  ],
  'lesson-85': [
    { type: 'fill_blank', content: { sentence: 'Questa ___ è molto elegante.', answer: 'maglia', hint: 'shirt' } },
    { type: 'fill_blank', content: { sentence: 'Indosso un ___ lungo.', answer: 'vestito', hint: 'dress' } }
  ],
  'lesson-86': [
    { type: 'fill_blank', content: { sentence: 'Questo ___ rosso è buonissimo.', answer: 'vino', hint: 'wine' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ è della Toscana.', answer: 'Chianti', hint: 'famous Tuscan wine' } }
  ],
  'lesson-87': [
    { type: 'fill_blank', content: { sentence: 'La ___ gira intorno al sole.', answer: 'Terra', hint: 'Earth' } },
    { type: 'fill_blank', content: { sentence: 'La ___ è notte è piena di stelle.', answer: 'notte', hint: 'night' } }
  ],
  'lesson-88': [
    { type: 'fill_blank', content: { sentence: 'La ___ è il ritmo della musica.', answer: 'battuta', hint: 'beat' } },
    { type: 'fill_blank', content: { sentence: 'Suono la ___ da cinque anni.', answer: 'chitarra', hint: 'guitar' } }
  ],
  'lesson-89': [
    { type: 'fill_blank', content: { sentence: 'Ho bisogno di un ___ medico!', answer: 'ambulanza', hint: 'ambulance' } },
    { type: 'fill_blank', content: { sentence: 'Chiama il ___ al 113!', answer: 'polizia', hint: 'police' } }
  ],
  'lesson-90': [
    { type: 'fill_blank', content: { sentence: 'Ogni ___ ha dei doveri.', answer: 'cittadino', hint: 'citizen' } },
    { type: 'fill_blank', content: { sentence: 'La ___ è uguale per tutti.', answer: 'legge', hint: 'law' } }
  ],
  'lesson-91': [
    { type: 'fill_blank', content: { sentence: 'Secondo la ___ , il lupo abitava nei boschi.', answer: 'leggenda', hint: 'legend' } },
    { type: 'fill_blank', content: { sentence: 'La fiaba inizia con "C\'era una ___..."', answer: 'volta', hint: 'Once upon a time...' } }
  ],
  'lesson-92': [
    { type: 'fill_blank', content: { sentence: 'L\'___ solare è una fonte pulita.', answer: 'energia', hint: 'energy' } },
    { type: 'fill_blank', content: { sentence: 'L\'___ eolica sfrutta il vento.', answer: 'energia', hint: 'wind energy' } }
  ],
  'lesson-93': [
    { type: 'fill_blank', content: { sentence: 'Ho mandato un ___ via email.', answer: 'messaggio', hint: 'message' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ è gratis.', answer: 'Wi-Fi', hint: 'Wi-Fi' } }
  ],
  'lesson-94': [
    { type: 'fill_blank', content: { sentence: 'La ___ è salpata dal porto.', answer: 'nave', hint: 'ship' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ sta scaricando le merci.', answer: 'cargo', hint: 'cargo' } }
  ],
  'lesson-95': [
    { type: 'fill_blank', content: { sentence: 'Secondo Aristotele, la felicità è il ___ supremo.', answer: 'bene', hint: 'highest good' } },
    { type: 'fill_blank', content: { sentence: 'La ___ è la madre di tutte le scienze.', answer: 'filosofia', hint: 'philosophy' } }
  ],
  'lesson-106': [
    { type: 'fill_blank', content: { sentence: 'Ho un mal di ___ alla gola.', answer: 'testa', hint: 'headache' } },
    { type: 'fill_blank', content: { sentence: 'Il dottore mi ha fatto una ___', answer: 'visita', hint: 'check-up' } }
  ],
  'lesson-107': [
    { type: 'fill_blank', content: { sentence: 'Vorrei un ___ di caffè.', answer: 'bicchiere', hint: 'glass/cup' } },
    { type: 'fill_blank', content: { sentence: 'La ___ è calda.', answer: 'pizza', hint: 'pizza' } }
  ],
  'lesson-108': [
    { type: 'fill_blank', content: { sentence: 'La ___ è in soggiorno.', answer: 'tavola', hint: 'table' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ è nel bagno.', answer: 'lavandino', hint: 'sink' } }
  ],
  'lesson-109': [
    { type: 'fill_blank', content: { sentence: 'Lavoro come ___ in ospedale.', answer: 'medico', hint: 'doctor' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ insegna a scuola.', answer: 'professore', hint: 'teacher' } }
  ],
  'lesson-110': [
    { type: 'fill_blank', content: { sentence: 'La ___ vola nel cielo.', answer: 'aquila', hint: 'eagle' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ vive nel bosco.', answer: 'cervo', hint: 'deer' } }
  ],
  'lesson-111': [
    { type: 'fill_blank', content: { sentence: 'Vada dritto e giri a ___', answer: 'sinistra', hint: 'left' } },
    { type: 'fill_blank', content: { sentence: 'La farmacia è ___ l\'angolo.', answer: 'dopo', hint: 'after' } }
  ],
  'lesson-112': [
    { type: 'fill_blank', content: { sentence: 'Secondo me, hai ___!', answer: 'ragione', hint: 'right/opinion' } },
    { type: 'fill_blank', content: { sentence: 'Non sono ___ che sia una buona idea.', answer: 'sicuro', hint: 'sure' } }
  ],
  'lesson-113': [
    { type: 'fill_blank', content: { sentence: 'Quanto ___ la frutta?', answer: 'costa', hint: 'costs' } },
    { type: 'fill_blank', content: { sentence: 'Vorrei un ___ di pomodori.', answer: 'chilo', hint: 'kilo' } }
  ],
  'lesson-114': [
    { type: 'fill_blank', content: { sentence: 'Se avessi più tempo, ___ a viaggiare.', answer: 'andrei', hint: 'I would go' } },
    { type: 'fill_blank', content: { sentence: 'Se piovesse, ___ a casa.', answer: 'resterei', hint: 'I would stay' } }
  ],
  'lesson-115': [
    { type: 'fill_blank', content: { sentence: 'Ho messo un ___ su Instagram.', answer: 'like', hint: 'like (social media)' } },
    { type: 'fill_blank', content: { sentence: 'Seguo molti ___ su Twitter.', answer: 'account', hint: 'accounts' } }
  ],
  'lesson-116': [
    { type: 'fill_blank', content: { sentence: 'Lei è una donna ___', answer: 'bella', hint: 'beautiful' } },
    { type: 'fill_blank', content: { sentence: 'Lui è molto ___ e gentile.', answer: 'alto', hint: 'tall' } }
  ],
  'lesson-117': [
    { type: 'fill_blank', content: { sentence: 'Ieri ___ al cinema.', answer: 'sono andato', hint: 'I went (passato prossimo)' } },
    { type: 'fill_blank', content: { sentence: 'Quando ero piccolo, ___ nel parco.', answer: 'giocavo', hint: 'I used to play (imperfetto)' } }
  ],
  'lesson-118': [
    { type: 'fill_blank', content: { sentence: 'Domani ___ una festa.', answer: 'ci sarà', hint: 'there will be' } },
    { type: 'fill_blank', content: { sentence: 'L\'anno prossimo ___ in Italia.', answer: 'andrò', hint: 'I will go' } }
  ],
  'lesson-119': [
    { type: 'fill_blank', content: { sentence: 'La ___ è la regione più grande.', answer: 'Sicilia', hint: 'Sicily' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ è la regione del vino.', answer: 'Trentino', hint: 'Trentino (wine region)' } }
  ],
  'lesson-120': [
    { type: 'fill_blank', content: { sentence: 'Era una volta un ___ che viveva in un castello.', answer: 're', hint: 'king' } },
    { type: 'fill_blank', content: { sentence: 'Il ___ è arrivato alla fine.', answer: 'racconto', hint: 'story' } }
  ],
  'lesson-121': [
    { type: 'fill_blank', content: { sentence: 'Il ___ ha diretto il film.', answer: 'regista', hint: 'director' } },
    { type: 'fill_blank', content: { sentence: 'La scena ___ mi ha commosso.', answer: 'finale', hint: 'final' } }
  ],
  'lesson-122': [
    { type: 'fill_blank', content: { sentence: 'L\'___ è di mille euro al mese.', answer: 'affitto', hint: 'rent' } },
    { type: 'fill_blank', content: { sentence: 'Ho firmato il ___ ieri.', answer: 'contratto', hint: 'contract' } }
  ],
  'lesson-123': [
    { type: 'fill_blank', content: { sentence: 'Sono ___ per il tuo successo.', answer: 'grato', hint: 'grateful' } },
    { type: 'fill_blank', content: { sentence: 'Mi sento ___ dal risultato.', answer: 'sollevato', hint: 'relieved' } }
  ],
  'lesson-124': [
    { type: 'fill_blank', content: { sentence: 'Il gesto del ___ significa "che vuoi?"', answer: 'mellone', hint: 'melon gesture' } },
    { type: 'fill_blank', content: { sentence: 'Gli italiani usano molti ___ quando parlano.', answer: 'gesti', hint: 'gestures' } }
  ],
  'lesson-125': [
    { type: 'fill_blank', content: { sentence: 'Ho bisogno del ___ per tagliare.', answer: 'coltello', hint: 'knife' } },
    { type: 'fill_blank', content: { sentence: 'Metti l\'acqua nella ___.', answer: 'pentola', hint: 'pot' } }
  ],
  'lesson-126': [
    { type: 'fill_blank', content: { sentence: 'Devo comprare un ___ per la lettera.', answer: 'francobollo', hint: 'stamp' } },
    { type: 'fill_blank', content: { sentence: 'Il pacco è in ___.', answer: 'coda', hint: 'line/queue' } }
  ],
  'lesson-127': [
    { type: 'fill_blank', content: { sentence: '___ devo studiare di più.', answer: 'Devo', hint: 'I must' } },
    { type: 'fill_blank', content: { sentence: 'Vorrei un caffè, ___.', answer: 'per favore', hint: 'please' } }
  ],
  'lesson-128': [
    { type: 'fill_blank', content: { sentence: 'Suono la ___ da dieci anni.', answer: 'chitarra', hint: 'guitar' } },
    { type: 'fill_blank', content: { sentence: 'Ho comprato un ___ di Måneskin.', answer: 'album', hint: 'album' } }
  ],
  'lesson-129': [
    { type: 'fill_blank', content: { sentence: 'Sono ___ che hai ragione.', answer: 'convinto', hint: 'convinced' } },
    { type: 'fill_blank', content: { sentence: 'In ___, dobbiamo agire.', answer: 'conclusione', hint: 'conclusion' } }
  ],
  'lesson-130': [
    { type: 'fill_blank', content: { sentence: 'Il ___ climatico è un problema grave.', answer: 'cambiamento', hint: 'climate change' } },
    { type: 'fill_blank', content: { sentence: 'Dobbiamo ridurre l\'___ di carbonio.', answer: 'impronta', hint: 'carbon footprint' } }
  ],
};

// Add fill_blank exercises to lessons that need them
let modified = 0;
lessons.forEach(lesson => {
  const needsFillBlank = !lesson.steps.some(s => s.type === 'fill_blank');
  const hasFewerSteps = lesson.steps.length < 6;
  
  if ((needsFillBlank || hasFewerSteps) && fillBlankExercises[lesson.id]) {
    const exercisesToAdd = fillBlankExercises[lesson.id];
    
    // If lesson has fewer than 6 steps, add more exercises
    if (hasFewerSteps && !needsFillBlank) {
      // Already has fill_blank, just add one more
      const lastExercise = exercisesToAdd[exercisesToAdd.length - 1];
      lesson.steps.push(lastExercise);
    } else {
      // Add all fill_blank exercises
      exercisesToAdd.forEach(ex => lesson.steps.push(ex));
    }
    modified++;
  }
});

console.log(`Modified ${modified} lessons`);

// Write back
const output = `const lessons = ${JSON.stringify(lessons, null, 2)};\n\nexport default lessons;\n`;
fs.writeFileSync(filePath, output, 'utf-8');
console.log('Lessons file updated');
