/* function getWordCount(str) {
  return str.trim().split(/\s+/).length;
}
function countVowels(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}

const sentence = "hello from the other world adele";
console.log("Sentence: " + sentence);
console.log(
  "Total words: " +
    getWordCount(sentence) +
    "No. of Vowels: " +
    countVowels(sentence)
); */

const textArea = document.getElementById("passage");

textArea.addEventListener("input", () => {
  var textLn = textArea.value;
  document.getElementById("countwords").innerHTML =
    "Total words: " + countWords(textLn);
});

textArea.addEventListener("input", () => {
  var vowelLn = textArea.value;
  document.getElementById("countvowels").innerHTML =
    "Total Vowels: " + countVowels(vowelLn);
});

function countWords(str) {
  let wordCounter = 1;
  let i = 0;
  while (i < str.length) {
    if (str[i] == " " || str[i] == "\n" || str[i] == "\t") ++wordCounter;
    ++i;
  }
  return wordCounter;
}

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      ++count;
    }
  }
  return count;
}

var sentence = "hello from the other world adele";
console.log(
  "No of words : " +
    countWords(sentence) +
    "\n" +
    "No of Vowels: " +
    countVowels(sentence)
);
