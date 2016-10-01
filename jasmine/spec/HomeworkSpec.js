/*
 Tests can be disabled with the xdescribe function.
 These tests and any specs inside them are skipped when run and thus their results will not appear in the results.
 */
describe("opposite function", function() {

  it("should return opposite number", function() {
    expect(opposite(1)).toEqual(-1);
    expect(opposite(-9)).toEqual(9);
    expect(opposite(12345)).toEqual(-12345);
    expect(opposite(5.84)).toEqual(-5.84);
  });

});

xdescribe("arraySumPositive function", function() {

  it("should return sum of positive numbers", function() {
    expect(arraySumPositive([1,0,5])).toEqual(6);
    expect(arraySumPositive([4,4,0,-1, 5, 10])).toEqual(23);
    expect(arraySumPositive([2,1,0,-5, -3])).toEqual(3);
    expect(arraySumPositive([11,0,5])).toEqual(16);
    expect(arraySumPositive([0,-1,-2,-3])).toEqual(0);
  });

});
xdescribe("removeNumbers function", function() {

  it("should return string without numbers", function() {
    expect(removeNumbers("123456789")).toEqual("");
    expect(removeNumbers("k1i2t3t4e5n6789")).toEqual("kitten");
    expect(removeNumbers("(E3at m2e2!!)")).toEqual("(Eat me!!)");
    expect(removeNumbers(" ")).toEqual(" ");
  });
});
xdescribe("getAverage function", function() {
  it("should return  the average of the given array rounded downward to its nearest integer", function() {
    expect(getAverage([2,2,2,2])).toEqual(2);
    expect(getAverage([1,2,3,4,5])).toEqual(3);
    expect(getAverage([1,1,1,1,1,1,1,2])).toEqual(1);
  });

});
xdescribe("sumArray function", function() {
  it("should return sum all the numbers of the array except the highest and the lowest element (the value, not the index!)", function() {
    expect(sumArray([1,2,3,4])).toEqual(5);
    expect(sumArray([1,1,3,4,5])).toEqual(8);
    expect(sumArray([1,2,3,4,5,5])).toEqual(14);
  });

});
xdescribe("findLongest function", function() {

  it("should return length of the longest word", function() {
    expect(findLongest("The quick white fox jumped around the massive dog")).toEqual(7);
    expect(findLongest("Take me to tinseltown with you")).toEqual(10);
    expect(findLongest("Sausage chops")).toEqual(7);
  });

});