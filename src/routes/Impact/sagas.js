import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
    reposLoaded,
    reposLoadingError
} from './actions'
import {
    LOAD_REPOS
} from './constant'
import request from '../../utils/request';
import {
    getCurrentUserName
} from './selectors'

export function* getRepos() {
    const username = yield select(getCurrentUserName());
    console.log(username);
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
    try {
        const repos = yield call(request, requestURL);
        yield put(reposLoaded(username, repos ));
    } catch (e) {
        yield put(reposLoadingError(e));
    }
}

export function* getGitHubData() {
    const watcher = yield* takeLatest(LOAD_REPOS, getRepos);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

// Bootstrap sagas
export default [
  getGitHubData
];