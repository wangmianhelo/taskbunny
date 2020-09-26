import { combineReducers } from 'redux';
import {reducer as taskerReducer} from '../pages/Home/components/TaskerArea/store'

export default combineReducers ({
    tasker: taskerReducer
})