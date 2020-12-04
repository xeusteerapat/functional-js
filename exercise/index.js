const meal = {
  id: 1,
  description: 'Breakfast',
};

const updatedMeal = Object.assign({ calories: 5000 }, meal);
console.log(updatedMeal);

const numbers = [1, 2, 3, 4];

function sum(acc, curr) {
  console.log('accomulate', acc);
  console.log('current value', curr);
  return acc + curr;
}

const total = numbers.reduce(sum, 10);
console.log(total);

const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 },
];

const studentFeedback = studentGrades.map(student => {
  switch (student.name) {
    case 'Joe':
      return `Nice Job ${student.name}, you got an b`;
    case 'Jen':
      return `Excellent Job ${student.name}, you got an a`;
    case 'Steph':
      return `Well done ${student.name}, you got an c`;
    case 'Allen':
      return `What happened ${student.name}, you got an b`;
    case 'Gina':
      return `Not good ${student.name}, you got an b`;
    default:
      break;
  }
});

console.log(studentFeedback);
