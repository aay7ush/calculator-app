const inputField = document.getElementById('input-el')
const keys = document.querySelectorAll('.key')
const equalBtn = document.getElementById('equal-btn')
const resetBtn = document.getElementById('reset-btn')
const deleteBtn = document.getElementById('delete-btn')
const root = document.documentElement
const themeSwitchBtn = document.getElementById('theme-switcher')

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.textContent === 'x') {
      inputField.value += '*'
    } else {
      inputField.value += key.textContent
    }
  })
})

equalBtn.addEventListener('click', () => {
  inputField.value = eval(inputField.value)
})

inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    inputField.value = eval(inputField.value)
  }
})

resetBtn.addEventListener('click', () => {
  inputField.value = ''
})

deleteBtn.addEventListener('click', () => {
  inputField.value = inputField.value.substring(0, inputField.value.length - 1)
})

inputField.addEventListener('input', validateInput)

function validateInput() {
  inputValue = inputField.value

  const regex = /[^0-9.+\-\/*]/g

  if (regex.test(inputValue)) {
    inputField.value = inputValue.substring(0, inputValue.length - 1)
  }
}

themeSwitchBtn.addEventListener('click', () => {
  if (root.classList.contains('theme-default')) {
    root.classList.replace('theme-default', 'theme-light')
    themeSwitchBtn.classList.replace('after:left-1', 'after:left-6')
  } else if (root.classList.contains('theme-light')) {
    root.classList.replace('theme-light', 'theme-purple')
    themeSwitchBtn.classList.replace('after:left-6', 'after:left-11')
  } else {
    root.classList.replace('theme-purple', 'theme-default')
    themeSwitchBtn.classList.replace('after:left-11', 'after:left-1')
  }
})
