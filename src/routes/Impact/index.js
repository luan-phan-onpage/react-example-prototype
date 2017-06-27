import { getAsyncInjectors } from '../../utils/asyncInjectors';

export default (store) => {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  console.log(store);
  return {
      path: '/impact',
      getComponent(nextState, cb) {
         
           /*  Webpack - use 'require.ensure' to create a split point
                and embed an async module loader (jsonp) when bundling   */
            require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
                 console.log('Impact');
            const saga = require('./sagas')
            const Impact = require('./container')
            const reducer = require('./reducer')
            
            console.log(reducer);

            /*  Add the reducer to the store on key 'impact'  */
            injectReducer('impact', reducer)
            injectSagas(sagas);

            /*  Return getComponent   */
            cb(null, Impact)

            /* Webpack named bundle   */
            }, 'impact')
      }
    }
}

