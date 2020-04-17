import {combineReducers} from 'redux'
import reducers from '../store/counterReducer'


const rootReducer = combineReducers({
    counter : reducers
})

export default rootReducer