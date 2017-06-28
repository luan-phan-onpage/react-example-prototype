import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
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
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
    try {
        const repos = yield call(request, requestURL);
        yield put(reposLoaded(username, repos ));
    } catch (e) {
        yield put(reposLoadingError(e));
    }
}

export function* getGitHubData() {
    yield takeLatest(LOAD_REPOS, getRepos);
}

// Bootstrap sagas
export default [
  getGitHubData
];