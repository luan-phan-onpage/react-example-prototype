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

import Impact from './components/Impact'

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
    return {
        repos : getReposList(state),
        loading: getLoadingState(state),
        error: getErrorState(state),
        name: getCurrentUserName(state)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Impact)
