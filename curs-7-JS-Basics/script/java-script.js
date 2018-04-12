

var p = 1 + 1;
var q = p * 2;
console.log(p, q);

var firstName = "Chuck";
var lastName = "Norris";

var fullName= firstName + " " + lastName;
console.log("fullName", fullName);

var names = ['eugen','horea','levi','florina','sasha','mela'];
console.log(names[4]);
console.log(names.sort());
console.log('length', names.length);

var robot = {
  model: 'TRX1000',
  color: 'red',
  "full name": "robot's name",
  walk: function() {
    console.log('robot is running');
  }
};

console.log('color', robot.color);
console.log('full name', robot["full name"]); //robot.full name incorrect
robot.walk();

var color = "red"; //console.log(color);

if (color === "red") {
  console.log("red color");}
else {
  console.log("not red");
}
  
var email= "melanaimoldovan@scoalainformala.ro";

if (email.indexOf("@") > -1) {
  console.log("email correct");
} else {
  console.log("email incorrect");
}


var weather = "sunny";

switch (weather) {
  case 'rainy':
    console.log("Bring an umbrella.");
    break;
  case 'sunny':
    console.log("Dress lightly.");
    break;
  case 'cloudy':
    console.log("Go outside");
    break;
  default:
    console.log("unknown weather");
    break;
   }

var i = 0;

while (i < 10)  {
  console.log('number', i);
  i++;// i=i+1
}
console.log('while done');

var j = 15;

do {
  console.log('j', i);
  j++;
} while (j < 10);
console.log('do while done');

var numbers = [4, 6, 8, -2, 5];
for (var k = 0; k < numbers.length; k++) {
  console.log('position k'. k);
  console.log('elemenet at position k', numbers[k]);
}










