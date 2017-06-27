import { getAsyncInjectors } from '../../utils/asyncInjectors';
import { injectReducer } from '../../reducers'
const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

export default (store) => {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectSagas } = getAsyncInjectors(store);
  console.log(store);
  return {
      path: '/impact',
      getComponent(nextState, cb) {
           /*  Webpack - use 'require.ensure' to create a split point
                and embed an async module loader (jsonp) when bundling   */
            require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const Impact = require('./container').default
            const reducer = require('./reducer').default
            const saga = require('./sagas').default
            console.log(reducer);

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: 'impact', reducer })
            injectSagas(sagas.default);

            /*  Return getComponent   */
            cb(null, Impact)

            /* Webpack named bundle   */
            }, 'impact')
      }
    }
}

