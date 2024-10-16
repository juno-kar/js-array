const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції
function getTopScoringStudents(students) {
  let result = [];

  students.forEach(students => {
    if (students.score > 80) {
      result.push(students.name);
    }
  });
  
  return result;
}
getTopScoringStudents(students);

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let average = 0;
  let len = students.length;

  for (let i = 0; i < len; i++) {
    average += students[i].age;
  }

  average = average / len;
  console.log(average);
  return average;
}
getAverageAge(students);

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  return students.filter(student => student.name !== name);
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };