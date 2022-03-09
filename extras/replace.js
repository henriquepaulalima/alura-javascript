console.log('===== Javascript replace =====')

const numWithoutForm = 'ID: 12083741684'
//console.log(`Number without formatation: ${numWithoutForm}`)

const numWithForm = numWithoutForm.replace('12083741684', '120.837.416-84')
//console.log(`Number with formatation: ${numWithForm}`)


const phraseWithSwearword = 'Phrase with swearword'
//console.log(phraseWithSwearword)

const phraseWithoutSwearword = phraseWithSwearword.replace('swearword', '*********')
//console.log(phraseWithoutSwearword)


const phraseWith2Swearword = 'Phrase with swearword and other swearword'
//console.log(phraseWith2Swearword)

const phraseWithout2Swearword = phraseWith2Swearword.replace(/swearword/g, '*********')
//console.log(phraseWithout2Swearword)


const id = '12083741684'
//console.log(`Id without formatation: ${id}`)

const idWithFormatation = id.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(regexMatch, group1, group2, group3, group4) {
  return `${group1}.${group2}.${group3}-${group4}`
})
//console.log(`Id with formatation: ${idWithFormatation}`)