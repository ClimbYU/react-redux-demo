
import config from '../config' 


export const optionDeal = function(type,_data){
    const options = {
        method:type,
        url:config.URLADDRESS + config.GET_CUSTOMER_INFO,
        fetchType:config.GET_CUSTOMER_INFO,
        data:_data
    }

    return options
}