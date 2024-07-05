const course = {
    courseName: "JS in Hindi",
    courseFee: 999,
    courseInstructor: "Krish",
}

console.log(course);
console.log(course.courseFee);

const repeatName = course.courseInstructor;
console.log(repeatName);
console.log(repeatName.length);
console.log(typeof repeatName);

const { courseName: CName } = course;
// console.log(courseName);
console.log(CName);
// console.log(courseFee);  //It is not possible because we donot define that as different variable

