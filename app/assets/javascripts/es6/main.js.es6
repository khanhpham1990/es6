// function blockBindingDemo() {
//   let roll_num = 123;
//   var rol = 123;
//   if(true) {
//     let roll_num = 456;
//     var rol = 456;
//     console.log(roll_num + "\n" + rol);
//   }
//   console.log(roll_num + "\n" + rol);
// }


// var helloWorld = function(name, greeting) {
//   return name + "\n" + greeting;
// }
// // console.log(helloWorld("khanhpn", "Great!"));


// var newGreeting = (name, greeting) => name + "\n" + greeting;
// console.log(newGreeting("khanhpn", "Great!"));

// var newDefault = name => name;
// console.log(newDefault("fuck"));

// var noValue = () => "test";
// console.log(noValue());


// var courses = ["Java", "C#", "Ruby", "C++"];

// console.log(courses.map(course => {
//     return course.toUpperCase();
//   })
// );

// var [d,m,y] = [1,2,2015];
// console.log(m);

// function currentDate() {return {d: 10, m: 1, y:2015};}
// var {m: month, y: year} = currentDate();
// var {m,y} = currentDate();
// console.log(m);
// console.log(y);

// function assginCourseES6(courseName="jQuery", publishBy="2015-06-04", ...details) {
//   console.log(courseName + "\n" + publishBy);
//   console.log("\n" + details);
//   for(contact in details) {
//     console.log(contact);
//   }
// }
// assginCourseES6("Java", "2016/04/04", "Definite programming", "Design pattern in rails");






// var number = [1,2,3,4,5];
// var max = Math.max(...number);
// console.log(max);


// function logMessage(message, ...args) {
//   console.log(message, ...args);
// }

// console.log("Skill in Ruby %s : %s", "Master jQuery vs JavaScript", "Learn JS vs jQuery");


// function logMessage(msg, {name: courseName, publisher: publisherName}) {
//   console.log(msg + "\n" + courseName + "\n" + publisherName);
// }

// logMessage("java", {name: "ES6", publisher: "Rails on Ruby"});


var words = [1,2,3,4,5,6];
for(let word of words.entries())
  console.log(word);
for(let word of words.values())
  console.log(word);
