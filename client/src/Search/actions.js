export function results(results = []) {
  return {
    type: 'RESULTS',
    payload: results
  }
}

export function searchInput(input = '') {
  return {
    type: 'INPUT',
    payload: {
      input
    }
  }
}

export function isFetching(input) {
  return {
    type: 'FETCHING',
    payload: {
      input: input,
      fetching: true,
      fetched: false
    }
  }
}

export function isFetched(results) {
  return {
    type: 'FETCHED',
    payload: {
      fetching: false,
      fetched: true,
      results
    }
  }
}

export function searchYoutube(input) {
  // Invalid or empty inputs will not lead to API request
  if (!input) {
    return dispatch => {
      dispatch(searchInput(input))
    }
  }
  const restFriendlyInput = input.replace(/\s/g, '+');
  return (dispatch, getState, api) => {
    dispatch(isFetching(input));
    return fetch(api('search', restFriendlyInput))
      .then(res => res.json())
      .then(json => {
        dispatch(isFetched(json))
        return json
      })
  }
}