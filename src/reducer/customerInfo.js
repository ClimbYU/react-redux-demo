import { 
    SHOW_QUOTA ,
    REQUEST_POST,
    RECEIVE_POST
} from '../constants/actionTypes'


const initialState = {
    name:'',
    cardPhone:'',
    url:'customer/listQuotaRecords?code=081QNo200mm1zD1NqF0003Xf200QNo21'
}


const customerInfo = (state = initialState , actions) => {
    switch(actions.type){
        case SHOW_QUOTA :
            return Object.assign({}, state, {
                flag: actions.flag
            });
        case REQUEST_POST :
            return Object.assign({}, state, {
                flag: actions.flag
            });
        case RECEIVE_POST :
            return Object.assign({}, state, {
                flag: actions.flag,
                userInfo: actions.userInfo
            });         
        default :
            return state
    }
}

export default customerInfo