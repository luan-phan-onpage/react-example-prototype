import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
   changeUserName,
   loadRepos 
} from './actions'
import { 
    getImpact,
    getLoadingState,
    getErrorState,
    getReposList,
    getCurrentUserName
} from './selectors'

import Impact from './Components/Impact'

const mapDispatchToProps= (dispatch) => {
    return {
        changeUserName: (e) => dispatch(changeUserName(e.target.value)),
        onSubmit: (e) => {
            e.preventDefault();
            dispatch(loadRepos());
        }
    }
    
}

const mapStateToProps = (state) => {
    console.log(state);
    return createStructuredSelector({
        repos : getReposList(),
        loading: getLoadingState(),
        error: getErrorState(),
        name: getCurrentUserName()
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Impact)
