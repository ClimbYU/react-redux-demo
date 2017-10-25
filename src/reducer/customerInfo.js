import { 
    SHOW_QUOTA ,
    REQUEST_POST,
    RECEIVE_POST,
    GET_CUSTOMER_INFO
} from '../actions/actionTypes'


const initialState = {
    data:[],
    url:'pipeApi/recharge/queryRecharge'
}


const customerInfo = (state = initialState , actions) => {
    switch(actions.type){
        case SHOW_QUOTA :
            return Object.assign({}, state, {
                data: actions.data
            });
        case REQUEST_POST :
            return Object.assign({}, state, {
                data: actions.data
            });
        case RECEIVE_POST :
            return Object.assign({}, state, {
                data: actions.data,
                userInfo: actions.userInfo
            });     
        default :
            return state
    }
}

export default customerInfo