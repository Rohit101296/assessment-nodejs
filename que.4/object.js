

const person  = {
    id: 2,
    gender: 'male',
    course: "java"
};



const student = {
    name: "ravi",
    email: "ravi11@yopmail.com"
};
 const detail = {
	...person,
	...student
 };


console.log(detail);