var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];

///John Doe | M | BMI: 24 | Normal Weight
///Mary Anne | F | BMI: 30 | Obese

for (var i = 0 ; i < persons.length; i++) {
  var currentPersons = persons[i];
  
  var bmi = currentPersons.weight / (currentPersons.height * currentPersons.height);
  
  
if (bmi < 18.5) {
  console.log(currentPersons.name + '|' + currentPersons.gender + '| BMI:' + bmi + 'Underweight');
  }

else if (bmi <25) {
  console.log(currentPersons.name + '|' + currentPersons.gender + '| BMI:' + bmi + 'Normal');
  }

else if (bmi < 30) {
  console.log(currentPersons.name + '|' + currentPersons.gender + '| BMI:' + bmi + 'overweight');
  }

else {
  console.log(currentPersons.name + '|' + currentPersons.gender + '| BMI:' + bmi + 'Obese');
  }
}