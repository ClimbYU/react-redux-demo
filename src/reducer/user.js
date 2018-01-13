import { 
    SHOW_QUOTA ,
    REQUEST_POST,
    RECEIVE_POST,
    GET_CUSTOMER_INFO,
    ALL_GET_DATA,
    HOT_GET_DATA,
    LOC_GET_DATA,
    LOC_GET_DATA_RE,
    NAV_MESSAGE_RES,
    SHOP_MESSAGE_RES,
} from '../actions/actionTypes'
import Immutable from 'immutable';

// const initialState = {
//     data:[],
//     allCity:[],
//     hotCity:[],
//     locCity:{},
//     carouselMessage:[],
//     shopList:[],
//     url:'',
//     RestaurantList:[]
// }
const initialState = Immutable.fromJS({
    allCity:[],
    hotCity:[],
    locCity:{},
})

const user = (state = initialState , actions) => {
    switch(actions.type){
        case SHOW_QUOTA :
            return Object.assign({}, state, {
                data: actions.data
            });
        case ALL_GET_DATA :
            // return Object.assign({}, state, {
            //     allCity: actions.data
            // });   
            return state.set('allCity',actions.data)
        case HOT_GET_DATA :
            // return Object.assign({}, state, {
            //     hotCity: actions.data
            // }); 
            return state.set('hotCity',actions.data)
        case LOC_GET_DATA :
            return state.set('locCity',actions.data)      
            //刷新是获取信息
        case LOC_GET_DATA_RE :
            return state.set('locCity',actions.data)     
        default :
            return state
    }
}

export default user