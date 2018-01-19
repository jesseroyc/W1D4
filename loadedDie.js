function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  /* this part will update once */
  index = -1;

  return function() {
    /* your code here */
   	index++;
   	return list[index];

  }
}

var rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6