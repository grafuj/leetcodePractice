Array.prototype.last = function() {
  let elements = this.length;
  if (elements < 1) {
      return -1;
  }
  return this[elements - 1];
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/

/*
2619. Array Prototype Last
Accepted
Editorial
Solution
Runtime
Details
54ms
Beats 73.81%of users with JavaScript
Memory
Details
41.37mb
Beats 90.67%of users with JavaScript

*/