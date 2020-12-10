var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray;
  newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray;
  newArray = [...array, element];
  return newArray;
}

function accessElementInArray(array, index) {

}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.shift();
  return array;
}
