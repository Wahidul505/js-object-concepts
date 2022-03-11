const student = {
  id: 191021,
  name: 'Wahidul Alam',
  balance: 3000,
  department: 'CCE',
  subjects: ['accounting', 'java', 'english', 'data structure'],
  teacher: {
    name: 'Humayun Kabir Rabbi',
    designation: 'lacturer'
  },
  // 1st way of declaring method 
  isReading: function () {
    console.log(this.name, 'is reading');
  },
  // another way of declaring method 
  isTeaching() {
    console.log(this.teacher.name, 'is teaching');
  },
  // we can also return something from it 
  isAbsent() {
    return this.id;
  },
  // doing calculation in method 
  total(earning, expenses) {
    this.balance = this.balance + earning - expenses;
    return this.balance;
  }
}
student.isReading();
student.isTeaching();
const showId = student.isAbsent();
console.log(showId, 'is absent today');
const remaining = student.total(1000, 700);
console.log(remaining);
const remaining2 = student.total(500, 100);
console.log(remaining2);