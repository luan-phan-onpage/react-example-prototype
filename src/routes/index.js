// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Impact from './Impact'

export const createRoutes = (store) => {
  return [
    Impact(store)
  ]
}

export default createRoutes
