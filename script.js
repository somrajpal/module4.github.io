(function () {

var names = ["Yaakov", "John", "Jester", "Jason", "Paul", "Mog", "Aakash", "Ridhi", "Laura", "Jimmy"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'J') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
