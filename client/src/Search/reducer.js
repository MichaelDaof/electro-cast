// TODO: Consider type-checking this
const initialState = {
  input: '',
  fetching: false,
  fetched: false,
  results: {
    byId: {},
    order: []
  }
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case 'RESULTS':
      return Object.assign({}, state, action.payload);
    case 'FETCHING':
      return Object.assign({}, state, action.payload);
    case 'FETCHED':
      return Object.assign({}, state, action.payload);
    case 'INPUT':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
