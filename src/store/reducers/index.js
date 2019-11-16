const initialState = {
  number: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      state.number += 1
      return { ...state }
    }
    default:
      return state
  }
}
