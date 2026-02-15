/*
 * #1
 * Функція для обчислення суми елементів масиву за допомогою reduce
 */
function sumArray(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0)
}

/*
 * #2
 * Функція для подвоєння елементів масиву за допомогою map
 */
function doubleArrayElements(numbers) {
  return numbers.map(number => number * 2)
}

/*
 * #3
 * Клас для управління списком навичок
 */
class SkillsManager {
  constructor() {
    this.skills = []
  }

  addSkill(skill) {
    if (typeof skill === 'string' && skill.length >= 2) {
      this.skills.push(skill)
      return skill
    }
    return null
  }

  getAllSkills() {
    return this.skills
  }
}

/*
 * #4
 * Калькулятор дат (функція-конструктор)
 */
function DateCalculator(initialDate) {
  this.date = new Date(initialDate)

  this.addDays = function (days) {
    this.date.setDate(this.date.getDate() + days)
  }

  this.subtractDays = function (days) {
    this.date.setDate(this.date.getDate() - days)
  }

  this.getResult = function () {
    const year = this.date.getFullYear()
    const month = String(this.date.getMonth() + 1).padStart(2, '0')
    const day = String(this.date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
}

export { sumArray, doubleArrayElements, SkillsManager, DateCalculator }
