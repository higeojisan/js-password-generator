(function() {
  'use strict';

  var input = document.getElementById('password');
  var btn = document.getElementById('btn');
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function generatePassword() {
    var password = '';
    for (var i = 0; i < 6; i++) {
      password += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
    return password;
  }

  btn.addEventListener('click', function(){
    var password = generatePassword();
    input.value = password;
  });
})();
