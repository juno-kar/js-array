// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  // Ваш код
  let result = people.find((people) => people.name == name);
  return result;
}

module.exports = findByName;