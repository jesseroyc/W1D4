var map = function mapIt (words, changeMeAHHH) {

	var temp = [];
	words.forEach( function (word) {
		temp.push(changeMeAHHH(word));
	});

	console.log(temp);
	return temp;
}

var words = ["ground", "control", "to", "major", "tom"];

console.log('');
map(words, function(word) {
  return word.length;
});

console.log('');
map(words, function(word) {
  return word.toUpperCase();
});

console.log('');
map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log('');