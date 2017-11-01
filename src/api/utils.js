
import config from '../config' 


export const optionDeal = function(type,_data,_url){
    const options = {
        method:type,
        url:config.URLADDRESS + _url,
        fetchType:_url,
        data:_data
    }

    return options
}