import * as types from '../mutation-types'
import {isOperator, simplifyZero} from "../../api/api-utils";
import * as Events from "../../foundation/event-hub"

const state = {
  displayValue: "0",
  savedOperator: "",
  savedValue: "",
  inputHistory: [{value: 0}],
  calculatorButton: {
    //col 1
    seven: {value: '7', label: '7'},
    eight: {value: '8', label: '8'},
    nine: {value: '9', label: '9'},
    divide: {value: '/', label: '÷'},

    //col 2
    four: {value: '4', label: '4'},
    five: {value: '5', label: '5'},
    six: {value: '6', label: '6'},
    times: {value: '*', label: 'x'},

    //col 3
    one: {value: '1', label: '1'},
    two: {value: '2', label: '2'},
    three: {value: '3', label: '3'},
    minus: {value: '-', label: '-'},

    //col 4
    clear: {value: 'clear', label: 'AC'},
    zero: {value: '0', label: '0'},
    equal: {value: '=', label: '='},
    plus: {value: '+', label: '+'},
  }
}

const getters = {}

const actions = {
  [types.ACTION_UPDATE_DISPLAY_VALUE]({commit, state}, displayValue) {
    commit(types.ACTION_UPDATE_DISPLAY_VALUE, displayValue)
  },
  [types.ACTION_INSERT_INPUT_HISTORY]({commit, state}, input) {
    commit(types.ACTION_INSERT_INPUT_HISTORY, input)
  },
  [types.ACTION_UPDATE_OPERATOR]({commit, state}, operator) {
    commit(types.ACTION_UPDATE_OPERATOR, operator)
  },
  [types.ACTION_CALCULATE_RESULT]({commit}) {
    commit(types.ACTION_CALCULATE_RESULT)
  },
  [types.ACTION_CLEAR_CALCULATOR]({commit}) {
    commit(types.ACTION_CLEAR_CALCULATOR)
  },
}

const mutations = {
  [types.ACTION_UPDATE_DISPLAY_VALUE](state, input) {

    let recentInput = state.inputHistory[1]
    let isRecentInputOperator = (recentInput) ? isOperator(recentInput.value) : false
    if (isRecentInputOperator || state.savedOperator === '=') {
      if (state.savedOperator === '=') state.savedOperator = ""
      state.savedValue = state.displayValue
      state.displayValue = input
    } else {
      state.displayValue = simplifyZero(state.displayValue) + input
    }
  },
  [types.ACTION_CLEAR_CALCULATOR](state) {
    state.displayValue = "0"
    state.savedOperator = ""
    state.savedValue = ""
  },

  [types.ACTION_INSERT_INPUT_HISTORY](state, input) {
    const tableMaxSize = 10
    let arrLength = state.inputHistory.length
    let isReachedMaxSize = (arrLength >= tableMaxSize)
    if (isReachedMaxSize) state.inputHistory = state.inputHistory.slice(0, 9)
    state.inputHistory.unshift({value: input})
  },


  [types.ACTION_UPDATE_OPERATOR](state, operator) {
    let needCalculated = (isOperator(state.savedOperator) && state.savedValue && state.displayValue)
    if (needCalculated) {
      state.displayValue = eval(state.savedValue + state.savedOperator + state.displayValue).toString()

      state.savedValue = ""
    }
    state.savedOperator = operator
  },

  [types.ACTION_CALCULATE_RESULT](state) {
    try {

      let isValid = (state.displayValue) && (state.savedValue) && (isOperator(state.savedOperator))

      if (isValid) {
        state.displayValue = eval(state.savedValue + state.savedOperator + state.displayValue).toString()
      }
      if (state.displayValue === 'NaN'){
        state.displayValue = "0"
        Events.hub.$emit(Events.SHOW_ERROR_MESSAGE, types.CAN_NOT_DIVIDED_BY_0)

      }
      state.savedValue = ""
      state.savedOperator = "="
    } catch (e) {
      Events.hub.$emit(Events.SHOW_ERROR_MESSAGE, "")
    }
  },
}


export default {
  state,
  getters,
  actions,
  mutations,
}
