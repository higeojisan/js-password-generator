(function() {
  'use strict';

  var input = document.getElementById('password');
  var btn = document.getElementById('btn');
  var Cbox1 = document.getElementById('Cbox1');
  var Cbox2 = document.getElementById('Cbox2');
  var Cbox3 = document.getElementById('Cbox3');
  var Cbox4 = document.getElementById('Cbox4');
  var word_count_ele = document.getElementById('word-count');
  var small_alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var large_alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var symbols = ['/', '*', '-', '+', '.', '!', '#', '$', '@', '%', '&', '(', ')'];

  // 文字数の取得
  function getWordCount() {
    var word_count = word_count_ele.value;
    if (word_count >= 4 && word_count <= 20) {
      return word_count;
    } else {
      return false;
    }
  }

  // チェックされた文字の種類を取得する
  function getCheckedWordTypes() {
    var checked_results = {};
    checked_results = {
      Cbox1: Cbox1.checked, Cbox2: Cbox2.checked, Cbox3: Cbox3.checked, Cbox4: Cbox4.checked
    };
    return checked_results;
  }

  // チェックされた文字の種類に応じて配列を返す
  function returnGenerateElements(checked_results) {
    if (checked_results.Cbox1 == false && checked_results.Cbox2 == false && checked_results.Cbox3 == false && checked_results.Cbox4 == false) {
      return false;
    }
    var generateElements = [];
    if (checked_results.Cbox1 == true) {
      Array.prototype.push.apply(generateElements, large_alphabets);
    }
    if (checked_results.Cbox2 == true) {
      Array.prototype.push.apply(generateElements, small_alphabets);
    }
    if (checked_results.Cbox3 == true) {
      Array.prototype.push.apply(generateElements, numbers);
    }
    if (checked_results.Cbox4 == true) {
      Array.prototype.push.apply(generateElements, symbols);
    }
    return generateElements;
  }

  function generatePassword(count, generateElements) {
    var password = '';
    for (var i = 0; i < count; i++) {
      password += generateElements[Math.floor(Math.random() * generateElements.length)];
    }
    return password;
  }

  btn.addEventListener('click', function(){
    // 文字数を取得する
    var word_count = getWordCount();
    if (word_count == false) {
      return;
    }
    // 文字の種類を取得する
    var checkedwordTypes = getCheckedWordTypes();
    var generateElements = returnGenerateElements(checkedwordTypes);
    if (generateElements == false) {
      return;
    }
    var password = generatePassword(word_count, generateElements);
    input.value = password;
  });
})();
