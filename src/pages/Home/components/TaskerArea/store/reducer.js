import * as constants from './constants';


const defaultState = {
    name: "Brende",
    focus: false,
    data: ""
};

export default(state = defaultState, action) =>{
    if (action.type === constants.NAME_FOCUS) {
        return {
            name: "Tom",
            focus: true
        }
    }
    if (action.type === constants.NAME_LEAVE) {
        return {
            name: "Brende",
            focus: false
        }

    }
    if (action.type === constants.SHOW_DATA) {
        console.log(action.data)
        return {
            name: "Brende",
            focus: false,
            data: action.data
        }
    }
    return state
}