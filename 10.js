import User from "./classes/User";
const Student = new User('Ali', `Alibaba`, `2016`);
console.log(Student.getFullName());
console.log(Student.getCourse());
