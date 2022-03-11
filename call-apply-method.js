const student = {
  id: 191021,
  name: 'Wahidul Alam',
  balance: 3000,
  department: 'CCE',
  isReading() {
    console.log(this.name, 'is reading');
  },
  total(earning, expenses) {
    this.balance = this.balance + earning - expenses;
    console.log(this);
  }
}
// another object 
const student2 = {
  id: 191041,
  name: 'Hablu Alam',
  balance: 1000,
  department: 'CCE'
}
// another object 
const student3 = {
  id: 191049,
  name: 'Tablu Alam',
  balance: 2000,
  department: 'Law'
}
student.total.call(student2, 1000, 500);
student.total.call(student3, 500, 1500);
// student.total(2000, 500);
student.total.apply(student2, [500, 1000]);
student.total.apply(student3, [500, 1000]); 