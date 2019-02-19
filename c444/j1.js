(function (window) {
  var byeSpeaker = {};
  // byeSpeaker.name = "Yaakov";
  var greeting = "Good bye ";
  byeSpeaker.sayHello = function (name) {
    console.log(greeting + name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
