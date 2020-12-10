var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 var array = [];
 var element;
  array.unshift("element");
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [];
  var element = "";
  var newArray;
  newArray = [element, ...array];
  return newArray;
}
