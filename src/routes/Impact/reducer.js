import { fromJS } from 'immutable'
// ------------------------------------
// Constants
// ------------------------------------
import {
  CHANGE_USER_NAME,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_FAIL
} from './constant'

import {
  getImpact
} from './selectors'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_USER_NAME]    : (state, action) => state.setIn(['userData', 'name'], action.name.replace(/@/gi, '')),
  [LOAD_REPOS]    : (state, action) => state.set('loading', true).set('error', false).setIn(['userData', 'reposList'], false),
  [LOAD_REPOS_SUCCESS]    : (state, action) => state.set('loading', false).set('error', false).setIn(['userData', 'reposList'], action.reposList),
  [LOAD_REPOS_FAIL]    : (state, action) => state.set('loading', false).set('error', action.error).setIn(['userData', 'reposList'], false)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = fromJS({
  loading: false,
  error: false,
  userData: {
    name: "",
    reposList: false
  }
})
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
