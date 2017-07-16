(function() {
  'use strict';

  var input = document.getElementById('password');
  var btn = document.getElementById('btn');
  var word_count_ele = document.getElementById('word-count');
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  function getWordCount() {
    var word_count = word_count_ele.value;
    if (word_count >= 4 && word_count <= 20) {
      return word_count;
    } else {
      return false;
    }
  }

  function generatePassword(count) {
    var password = '';
    for (var i = 0; i < count; i++) {
      password += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
    return password;
  }

  btn.addEventListener('click', function(){
    var word_count = getWordCount();
    if (word_count == false) {
      return;
    }
    var password = generatePassword(word_count);
    input.value = password;
  });
})();
