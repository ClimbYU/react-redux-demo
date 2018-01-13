import { 
    SHOP_MESSAGE_RES,
    NAV_MESSAGE_RES,
    RESTAURANT_MESSAGE_RES    
} from '../actions/actionTypes'
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    restaurantList:[],
    carouselMessage:[],
    dropdownList:[]
})

const foods = (state = initialState,actions) => {
    switch(actions.type){
        case SHOP_MESSAGE_RES:
            return state.set('restaurantList',actions.data)
        case NAV_MESSAGE_RES :
            return state.set('carouselMessage',actions.data)    
        case RESTAURANT_MESSAGE_RES :
            return state.set('dropdownList',actions.data)    
        default :
            return state
    }
}

export default foods;