import { 
    SHOW_QUOTA ,
    REQUEST_POST,
    RECEIVE_POST,
    GET_CUSTOMER_INFO,
    ALL_GET_DATA,
    HOT_GET_DATA,
    LOC_GET_DATA,
    NAV_MESSAGE_RES
} from '../actions/actionTypes'


const initialState = {
    data:[],
    allCity:[],
    hotCity:[],
    locCity:[],
    navMessage:[],
    url:'pipeApi/recharge/queryRecharge'
}


const dealInitData = (state = initialState , actions) => {
    switch(actions.type){
        case SHOW_QUOTA :
            return Object.assign({}, state, {
                data: actions.data
            });
        case ALL_GET_DATA :
            return Object.assign({}, state, {
                allCity: actions.data
            });   
        case HOT_GET_DATA :
            return Object.assign({}, state, {
                hotCity: actions.data
            }); 
        case LOC_GET_DATA :
            return Object.assign({}, state, {
                locCity: actions.data
            });
        case NAV_MESSAGE_RES :
            return Object.assign({}, state, {
                navMessage: actions.data
        });          
        default :
            return state
    }
}

export default dealInitData