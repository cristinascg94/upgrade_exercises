const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(wordsList) {
    let unicWord = new Map ()
    for ( word of wordsList) {
        unicWord.set(word);
    }
    return unicWord;
  }
  console.log(removeDuplicates(duplicates));

//   to do