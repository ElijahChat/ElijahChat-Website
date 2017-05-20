function dollarWord() {
  var word = $('#dollar').val();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var worth = 0;
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (word.charAt(i) == alphabet.charAt(j)) {
        worth += j + 1;
        continue;
      }
    }
  }
  return worth;
}
$(function() {
  $('#dollar').on('keyup', function(){
    $('#dollardest').text(dollarWord());
  });
});
