import {
    CHANGE_USER_NAME,
    LOAD_REPOS,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS_FAIL
} from './constant'

export function changeUserName (name) {
    return {
        type: CHANGE_USER_NAME,
        name
    }
}
export function loadRepos () {
    return {
        type: LOAD_REPOS
    }
}

export function reposLoaded (name, repos) {
    return {
        type: LOAD_REPOS_SUCCESS,
        name,
        repos
    }
}

export function reposLoadingError (error) {
    return {
        type: LOAD_REPOS_FAIL,
        error
    }
}