export function globalReducer(state, action) {
  switch (action.type) {
    case 'setCurrentPage':
      return { ...state, currentPage: action.currentPage }
    default:
      return state
  }
}
