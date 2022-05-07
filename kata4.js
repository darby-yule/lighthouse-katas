const instructorWithLongestName = function(instructors) {
  let index = 0;
  let longname = instructors[0].name; 
  for (let i = 0; i < instructors.length; i++){
    if(instructors[i].name.length > longname.length){
      index = i; longname = instructors[i];
    }
  }
  return instructors[index];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));