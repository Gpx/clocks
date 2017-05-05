const classes = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const maxDigit = classes.length - 1

const pad = s => s < 10 ? `0${s}` : s.toString()

const getUnits = value => {
  const binaryString = value.toString(maxDigit + 1)
  return binaryString.split('').map(s => parseInt(s, 10))
}

const getValue = () => {
  const now = new Date()
  const hours = pad(now.getHours())
  const minutes = pad(now.getMinutes())
  const seconds = pad(now.getSeconds())

  return hours + minutes + seconds
}

const tick = (maxDigits) => {
  const maxValue = (maxDigit + 1) ** digits.length
  const value = getValue()
  const units = getUnits(value)

  units.map((unit, index) => {
    if (index < maxDigits - 1) return
    const digit = digits[index]
    const unitClass = classes[unit]
    digit.classList.value = `digit ${unitClass}`
  })

  const newMaxDigits = maxDigits === 0
    ? maxDigits
    : maxDigits - 1

  setTimeout(() => tick(newMaxDigits), 1000)
}

createDigits = () => {
  const container = document.querySelector('.container')

  for (let i = 0; i < 6; i++) {
    const digit = createDigit()
    container.appendChild(digit)
  }
}

const createDigit = () => {
  const digit = document.createElement('div')
  digit.classList.add('digit')

  for (let i = 0; i < 4 * 6; i++) {
    const clock  = document.createElement('div')
    clock.classList.add('clock')
    digit.appendChild(clock)
  }

  return digit
}

createDigits()
const digits = Array.from(document.querySelectorAll('.digit'))

setTimeout(() => tick(6), 2000)
