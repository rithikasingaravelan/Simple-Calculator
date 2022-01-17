var input_box = document.getElementById("display");
var historyData = [];
var expressionData = "";
var resultData = "";
input_box.onkeydown = function () {
  console.log(input_box.value);

};

function Button(input) {
  var oldinput = input_box.value;
  var newinput = oldinput + input;
  expressionData = newinput;
  input_box.value = newinput;
}
function Calculate() {
  console.log("Click");
  var input = input_box.value;
  input = input.replace('"', "").replace("'", "");
  var result = eval(input);
  resultData = result;
  resultData = "";
  expressionData = "";
  input_box.value = result;
}
function Clear() {
  input_box.value = "";
}
function Delete() {
    input_box.value = input_box.value.slice(0, -1)
}

    