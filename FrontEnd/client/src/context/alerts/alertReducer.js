import {DISPLAY_ALERT, HIDE_ALERT} from '../../types/';



const AlertReducer = (state, action) => {
    switch(action.type){

        case DISPLAY_ALERT:
            return {
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                alert: null
            }

        default:
            return state;
    }
}
export default AlertReducer;