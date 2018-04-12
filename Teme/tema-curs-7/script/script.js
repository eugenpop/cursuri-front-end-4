console.log("ex 1 :")
// 1-20
for (var i = 1; i <= 20; i++) {
	console.log(i);
}
console.log("ex 2 :")
//odd numbers
for (var p = 1; p <= 20; p++) {
	if (p % 2 !== 0) {
		console.log(p);
	}
}

console.log("ex 3 :")
//sum
var nums = [1, -3, 5, 7, 5, 4, 12, 2]
var sum = 0;

for (var i = 0; i < nums.length; i++) {

	sum = sum + nums[i];

}
console.log(sum);

//maximum of elements

console.log("ex 4 :")
var arr = [1, -3, 5, 7, 5, 4, 12, 2];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
	if (max < arr[i]) {
		max = arr[i];
	}
}
console.log(max);
//

console.log("ex 5 :")

var numbers = [1, -3, 5, 7, 5, 4, 12, 2];

var value = 5;
var counter = 0;
for (var i = 0; i < numbers.length; i++) {
	if (value === numbers[i]) {
		counter = counter + 1;
	}

}
console.log("Numarul " + value +" a fost gasit de "+counter);