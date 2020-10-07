import * as constants from './constants';
import axios from 'axios';

export const nameFocusAction= () =>({
    type: constants.NAME_FOCUS
});

export const nameLeaveAction = () =>({
    type: constants.NAME_LEAVE
});

export const showInitData =(data) =>({
    type: constants.SHOW_DATA,
    data
});


export const getInitData = () =>{
    return(dispatch) =>{
        axios.get('./res.json').then((res) =>{
            const result = res.data.data;
            dispatch(showInitData(result))
        })
    }
}