//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
  //Ваш код
  let result = people.filter(people => people.age >= 18);
  return result;
}

module.exports = filterAdults;