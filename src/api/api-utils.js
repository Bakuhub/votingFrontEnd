import * as Events from '../foundation/event-hub'


export function passInputToCalculator(input) {
  const isFromInputHistory = (input.value)
  Events.hub.$emit(Events.PASS_INPUT_TO_CALCULATOR, isFromInputHistory ? input.value : input)

}

export function simplifyZero(curValue) {
  console.log("simply")
  let index = curValue.length - 1
  let lastDigit = curValue.charAt(index)

  while (lastDigit === '0') {
    index--
    lastDigit = curValue.charAt(index)
  }
  const hasExcessZero = !(isSingleNumber(lastDigit) || (lastDigit === '.'))
  return (hasExcessZero) ? curValue.slice(0, index + 1) : curValue

}

export function isSingleNumber(input) {
  return ((parseInt(input) >= 0 && parseInt(input) < 10))
}
export  function isOperator(input) {

  let operatorSet= ['+', '-', '*', '/', '.','%']
  return (operatorSet.filter(t => t === input).length > 0)
}
