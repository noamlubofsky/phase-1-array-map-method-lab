const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  const mappedTutorials = tutorials.map(tutorialString => {
   const wordArray = tutorialString.split(' ')
   const mappedWords = wordArray.map(word => {
     const capWord = word[0].toUpperCase() + word.substring(1)
     return capWord
   })
   const joinedWords = mappedWords.join(' ')
   return joinedWords
  })
  return mappedTutorials
}

