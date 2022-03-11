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
student.total(1000, 500);

// another object 
const student2 = {
  id: 191041,
  name: 'Hablu Alam',
  balance: 6000,
  department: 'CCE'
}
// another object 
const student3 = {
  id: 191049,
  name: 'Tablu Alam',
  balance: 12000,
  department: 'Law'
}
const student2Total = student.total.bind(student2);
student2Total(2000, 3000);
const student3Total = student.total.bind(student3);
student3Total(3000, 14000);
student2Total(10000, 8000);
student2Total(300, 500);
student.total(2000, 1000);