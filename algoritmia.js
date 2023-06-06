function duplicateEncode(word) {
  var caracteresEncontrados = {};
  var resultado = '';

  // Convertir el string a minúsculas para ignorar mayúsculas y minúsculas
  var wordMin = word.toLowerCase();

  for (var i = 0; i < wordMin.length; i++) {
    var char = wordMin[i];

    if (caracteresEncontrados[char]) {
      caracteresEncontrados[char]++;
    } else {
      caracteresEncontrados[char] = 1;
    }
  }

  for (var j = 0; j < wordMin.length; j++) {
    var char = wordMin[j];
    resultado += caracteresEncontrados[char] > 1 ? ')' : '(';
  }

  return resultado;
}

var resultado = duplicateEncode("recede");
console.log(resultado); // Resultado: "()()()"
