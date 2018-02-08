function alphabetize(input) {
    return input.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    var typedText = document.getElementById("input").value;

    for (a = 0; a < words.length; a++) {
        if (alphabetize(words[a]) === alphabetize(typedText)) {
            var p = document.createElement('p');
            var ptext = document.createTextNode(' ' + words[a] + ',')
            p.appendChild(ptext);
            document.getElementById('anas').appendChild(p);
        }
    }
    
}