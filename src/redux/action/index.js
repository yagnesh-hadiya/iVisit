import Axios from 'axios';
import { GETVISITS } from '../constants';

export const getVisits = (limit) => async (dispatch) => {
    const response = await Axios.get(`https://dummyapi.io/data/api/user?limit=${limit}`, {
        headers: {
            ' app-id': '600c4c7e43aa981852b532ef'
        }
    })
        .catch((e) => console.error(e))
    // console.log('Response', response)
    return dispatch({
        type: GETVISITS,
        payload: response.data

    })
}