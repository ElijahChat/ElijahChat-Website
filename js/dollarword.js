
function dollarWord() {
  var word = $('#dollar').val();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var worth = 0;
  var upper = "";
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (word.charAt(i) == alphabet.charAt(j)) {
        worth += j + 1;
        continue;
      }
      else {
        upper = alphabet.charAt(j).toUpperCase();
        if (word.charAt(i) == upper) {
          worth += j + 1;
        }
        upper = "";
        continue;
      }
    }
  }
  return worth;
}
$(function() {
  var isBoring = false;
  var blah = isBoring ? "This is so boring." : "This is fun!";
  console.log(blah);
  $('#dollar').on('keyup', function(){
    $('#dollarDest').text(dollarWord());
  });
});
