import { createSelector } from 'reselect'

const getImpact = (state) => {
    console.log(state);
    return state.get('impact')
};

const getCurrentUserName = createSelector(
    getImpact,
    (globalState) => globalState.getIn(['userData', 'name'])
)

const getLoadingState = createSelector(
    getImpact,
    (globalState) => globalState.get('loading')
)

const getErrorState = createSelector(
    getImpact,
    (globalState) => globalState.get('error')
)

const getReposList = createSelector(
    getImpact,
    (globalState) => globalState.getIn(['userData', 'reposList'])
)

export {
    getImpact,
    getLoadingState,
    getErrorState,
    getReposList,
    getCurrentUserName
}