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
        axios.get('/api/blog/list').then((res) =>{
            console.log(res.data)
            const result = res.data.data[0].title;
            console.log(result)
            dispatch(showInitData(result))
        })
    }
}