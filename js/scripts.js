
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  // $("form#add").submit(function(event) {
  //   event.preventDefault();
  //   var number1 = parseInt($("#add1").val());
  //   var number2 = parseInt($("#add2").val());
  //   var result = (add(number1, number2));
  //   $("#output").text(result);
  // });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#minus1").val());
    var number2 = parseInt($("#minus2").val());
    console.log(number2);
    var result = (subtract(number1, number2));
    console.log(result);
    $("#output").text(result);

  });
});
