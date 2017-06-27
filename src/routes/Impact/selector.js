import { createSelector } from 'reselect'

const getGlobalState = (state) => {
    console.log(state);
    return state.get('impact')
};

const getCurrentUserName = createSelector(
    getGlobalState,
    (globalState) => globalState.getIn(['userData', 'name'])
)

const getLoadingState = createSelector(
    getGlobalState,
    (globalState) => globalState.get('loading')
)

const getErrorState = createSelector(
    getGlobalState,
    (globalState) => globalState.get('error')
)

const getReposList = createSelector(
    getGlobalState,
    (globalState) => globalState.getIn(['userData', 'reposList'])
)

export {
    getGlobalState,
    getLoadingState,
    getErrorState,
    getReposList,
    getCurrentUserName
}