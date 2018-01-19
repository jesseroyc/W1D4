var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

console.log(students.sort(function(a, b){
	return (a.age && !b.age ? -1
		 : (!a.age && b.age ? 1
		 : (b.name && !a.name ? -1
		 : (!b.name && a.name ? 1
		 : b.age - a.age))));
}));