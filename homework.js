function opposite(number) {
  //Very simple, given a number, find its opposite.
  //1: -1
  //14: -14
  //-34: 34
  return number*-1;
}
function arraySumPositive(arr){
  //You get an array of numbers, return the sum of all of the positives ones.
  //Example [1,-4,7,12] => 1 + 7 + 12 = 20
  sum = 0;
  for (var i=0; i < arr.length; i++){
    if (arr[i]>0){
      sum = sum+arr[i];
    }

  }
  return sum;
}
function removeNumbers(str){
  var spl = str.split("");
  var splnew = [];
  for (var i = 0; i < spl.length; i++) {
    if (isNaN(parseInt(spl[i]))) {
      splnew.push(spl[i]); 
    }
  }
  return splnew.join("");
}
function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  // return Math.round(marks.reduce(function(prev, curr){ return prev + curr},0)/marks.length);
  var sum = 0;
  for (var i = 0; i < marks.length; i++){
    sum += marks[i];
  }
  return Math.floor(sum/marks.length);
}
function sumArray(array) {
  //Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
  //(Only one element at each edge, even if there are more than one with the same value!)
  var min = array[0]; 
  var max = array[0];
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] >=  max) {
      max = array[i];
    }
    if (array[i] <=  min) {
      min = array[i];
    }
    sum += array[i];
  }
  return (sum-max-min);
}
function findLongest(str) {
  var spl = str.split(" ");
  var longest = 0;

  for (var i = 0; i < spl.length; i++) {
    var spl2 = spl[i].split("");
    if (spl2.length > longest) {
      longest = spl2.length;
    }
  }
  return longest;
}