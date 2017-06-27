import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
   changeUserName,
   loadRepos 
} from './actions'
import { 
    getGlobalState,
    getLoadingState,
    getErrorState,
    getReposList,
    getCurrentUserName
} from './selector'

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

const mapStateToProps =  createStructuredSelector({
  repos : getReposList(),
  loading: getLoadingState(),
  error: getErrorState(),
  name: getCurrentUserName()
})

export default connect(mapStateToProps, mapDispatchToProps)(Impact)
