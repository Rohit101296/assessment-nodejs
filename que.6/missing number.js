var x =[6,3,2,7,5,1,8,9,4,10,11,12,13,14,16,15,17,18,19,20,21,22,23,24,26,25,28,27,29,30,31,32,33,34,36,35,37,39,38,40,41,42,44,43,45,46,49,47,48,50,51,52,53,55,54,56,59,57,58,60,61,62,63,69,64,65,66,67,68,70,71,72,73,75,74,76,79,77,78,80,81,82,83,84,85,87,86,88,89,92,91,94,98,95,96,97,99,93,100]
// var x = [1,3,4,5]

var l = x.length+1;

var sum = l* ((l+1)/2);
var count =0;
for(var i = 0; i< l-1; i++) {
	count = count+ x[i];
}

var num = sum-count;
console.log("missing number is"+ num);  