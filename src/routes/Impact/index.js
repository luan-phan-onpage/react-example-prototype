import { getAsyncInjectors } from '../../utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default (store) => {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  return {
      path: '/',
      name: 'impact',
      getComponent(nextState, cb) {
          /*  Webpack - use 'require.ensure' to create a split point
              and embed an async module loader (jsonp) when bundling   */
          require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const containers = require('./container').default
            const reducer = require('./reducer').default
            const sagas = require('./sagas').default
            injectReducer('impact', reducer )
            injectSagas(sagas)
            /*  Return getComponent   */
            cb(null, containers)

          /* Webpack named bundle   */
          }, 'impact')
      }
    }
}

