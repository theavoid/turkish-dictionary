# Turkish Dictionary
Multi-purpose simplified Turkish dictionary library.

## Installation
```
npm i turkish-dictionary
```

## Usage
```js
const Dictionary = require('./index.js');
const dictionary = new Dictionary();
```

### Has
```js
dictionary.has('test').then((result) => {
    console.log(result);
});

// Output:
// true / false
```

### Get
```js
dictionary.get('kitap').then((result) => {
    console.log(result);
});

// Output:
// {
//   madde_id: '27874',
//   kac: '0',
//   kelime_no: '30668',
//   cesit: '0',
//   anlam_gor: '0',
//   on_taki: null,
//   madde: 'kitap',
//   cesit_say: '6',
//   anlam_say: '3',
//   taki: 'bı',
//   cogul_mu: '0',
//   ozel_mi: '0',
//   lisan_kodu: '11',
//   lisan: 'Arapça kitāb',
//   telaffuz: null,
//   birlesikler: 'kitap açacağı, kitap cebi, kitap dolabı, kitap düşkünü, kitap ehli, kitabevi, kitap fuarı, kitap kurdu, kitap sarayı, kitapsever, ana kitap, beyaz kitap, ehlikitap, hesap kitap, kara kaplı kitap, yardımcı kitap, yasak kitap, adres kitabı, baş ucu kitabı, boyama kitabı, cep kitabı, el kitabı, okuma kitabı, şiir kitabı',
//   font: null,
//   madde_duz: 'kitap',
//   gosterim_tarihi: null,
//   anlamlarListe: [
//     {
//       anlam_id: '52009',
//       madde_id: '27874',
//       anlam_sira: '1',
//       fiil: '0',
//       tipkes: '0',
//       anlam: 'Ciltli veya ciltsiz olarak bir araya getirilmiş, basılı veya yazılı kâğıt yaprakların bütünü',
//       gos: '0',
//       orneklerListe: [Array],
//       ozelliklerListe: [Array]
//     },
//     {
//       anlam_id: '52010',
//       madde_id: '27874',
//       anlam_sira: '2',
//       fiil: '0',
//       tipkes: '0',
//       anlam: 'Herhangi bir konuda yazılmış eser',
//       gos: '0',
//       orneklerListe: [Array]
//     },
//     {
//       anlam_id: '52011',
//       madde_id: '27874',
//       anlam_sira: '3',
//       fiil: '0',
//       tipkes: '0',
//       anlam: 'Kutsal kitap',
//       gos: '0'
//     }
//   ],
//   atasozu: [
//     {
//       madde_id: '27877',
//       madde: 'kitaba (veya kitabına) uydurmak',
//       on_taki: null
//     },
//     { madde_id: '27876', madde: 'kitaba el basmak', on_taki: null },
//     { madde_id: '27878', madde: 'kitabı kapamak', on_taki: null },
//     {
//       madde_id: '27879',
//       madde: 'kitabında yer almamak',
//       on_taki: null
//     },
//     {
//       madde_id: '27875',
//       madde: 'kitap (veya kitaplar) devirmek (veya devretmek)',
//       on_taki: null
//     },
//     { madde_id: '27880', madde: 'kitapta yeri olmak', on_taki: null }
//   ]
// }
```

### isVerb
```js
dictionary.isVerb('yazmak').then((result) => {
    console.log(result);
})

// Output:
// true / false
```

### isNoun
```js
dictionary.isNoun('kitap').then(console.log);

// Output:
// true / false
```

### isPlural
```js
dictionary.isPlural('kedi').then((result) => {
    console.log(result);
});

// Output
// true / false
```

### isProperNoun
```js
dictionary.isProperNoun('istanbul').then((result) => {
    console.log(result);
});

// Output:
// true / false
```

### getMeans
```js
dictionary.getMeans('kitap').then(console.log);

// Output:
// [
//   {
//     anlam_id: '52009',
//     madde_id: '27874',
//     anlam_sira: '1',
//     fiil: '0',
//     tipkes: '0',
//     anlam: 'Ciltli veya ciltsiz olarak bir araya getirilmiş, basılı veya yazılı kâğıt yaprakların bütünü',
//     gos: '0',
//     orneklerListe: [ [Object] ],
//     ozelliklerListe: [ [Object] ]
//   },
//   {
//     anlam_id: '52010',
//     madde_id: '27874',
//     anlam_sira: '2',
//     fiil: '0',
//     tipkes: '0',
//     anlam: 'Herhangi bir konuda yazılmış eser',
//     gos: '0',
//     orneklerListe: [ [Object] ]
//   },
//   {
//     anlam_id: '52011',
//     madde_id: '27874',
//     anlam_sira: '3',
//     fiil: '0',
//     tipkes: '0',
//     anlam: 'Kutsal kitap',
//     gos: '0'
//   }
// ]

```

### getExamples
```js
dictionary.getExamples('kitap').then(console.log);

// Output:
// [
//   {
//     ornek_id: '9889',
//     anlam_id: '52009',
//     ornek_sira: '1',
//     ornek: 'Ama ben, bir kitap üzerine bir fikir edinmek istedim mi o kitabı kendim okurum.',
//     kac: '1',
//     yazar_id: '42',
//     yazar: [ [Object] ]
//   }
// ]
```