import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routes: routeReducer,
    ...asyncReducers
  })
}

export default makeRootReducer
