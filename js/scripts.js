
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

// // User interface (or front-end) logic:
//
// $(document).ready(function() {
//   // $("form#add").submit(function(event) {
//   //   event.preventDefault();
//   //   var number1 = parseInt($("#add1").val());
//   //   var number2 = parseInt($("#add2").val());
//   //   var result = (add(number1, number2));
//   //   $("#output").text(result);
//   // });
//   $("form#subtract").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#minus1").val());
//     var number2 = parseInt($("#minus2").val());
//     console.log(number2);
//     var result = (subtract(number1, number2));
//     console.log(result);
//     $("#output").text(result);
//
//   });
// });
$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = parseInt($("input:radio[name=operator]:checked").val());
    //this if statement calls the add function
    if (operator === 0) {
      console.log("add func");
      var answer = add(number1, number2);
      console.log("end add");
      $("#output").text(answer);
    }
    else if (operator === 1) {
      var answer = subtract(number1, number2);
      console.log("subtract");
      $("#output").text(answer);
    }
    else if (operator === 2) {
      var answer = multiply(number1, number2);
      $("#output").text(answer);
    }
    else   {
      var answer = divide(number1, number2);
      $("#output").text(answer);
    }
  });
});

// $("form#calculator").submit(function() {
//   event.preventDefault();
//   var array = [add, subtract, multiply, divide];
//   var number1 = parseInt($("#input1").val());
//   var number2 = parseInt($("#input2").val());
//   var operator = $("input:radio[name=operator]:checked").val();
//   var result = array[parseInt(operator)](number1, number2);
//   $("#output").text(result);
// });
