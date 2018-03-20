
const destination = document.getElementById('groupsOf5')

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;

    for (a = 0; a < words.length; a++) {
        if (alphabetize(words[a]) === alphabetize(typedText)) {
            var p = document.createElement('p');
            var ptext = document.createTextNode(' ' + words[a] + ',')
            p.appendChild(ptext);
            document.getElementById('anagrams').appendChild(p);
        }
    }
}

// anagramSets.keys.includes(aphabetized word)
function getAnangrams() {
    const anagramSets = {};
    for (let i = 0; i < words.length; i++) {
        const alphabetizedWord = alphabetize(words[i]);

        if (!anagramSets[alphabetizedWord]) {
            // for (alphabetizedWord in anagramSets) {
            //     const value = anagramSets[alphabetizedWord]
            //     value.push(words[i])
            anagramSets[alphabetizedWord] = [ words[i] ];
        } else {
            anagramSets[alphabetizedWord].push( words[i] );
            // for (alphabetizedWord in anagramSets) {
            //     const value = anagramSets[alphabetizedWord]
            //     value.push(words[i])
            // }
        }
    }
    const alphabetizedWords = Object.keys(anagramSets);

    for (let y = 0; y < alphabetizedWords.length; y++) {
        const alphabetizedWord = alphabetizedWords[y]

        if (anagramSets[alphabetizedWord].length >= 5) {
            const groupFive = document.createElement('p')
            const fiveText = document.createTextNode(anagramSets[alphabetizedWord])
            groupFive.appendChild(fiveText);
            destination.appendChild(groupFive);
        }
    }
}
getAnangrams();