import axios from 'axios';
import {statscountersURL} from '../constants';
import {GET_COUNTER_STATS} from '../types/reportTypes';

export const getCounterStats = () => dispatch => {
    axios.get(statscountersURL)
        .then(res => {
            dispatch({
                type: GET_COUNTER_STATS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
