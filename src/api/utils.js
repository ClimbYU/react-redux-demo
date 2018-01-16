
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

export const getImageUrl = function(path){
    let suffix;
    if (!path) {
        // return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
        return
    }
    if (path.indexOf('jpeg') !== -1) {
        suffix = '.jpeg'
    } else {
        suffix = '.png'
    }
    let url = '/' + path.slice(0,1) + '/' + path.slice(1,3) +  '/' + path.slice(3) + suffix;

    return 'https://fuss10.elemecdn.com' + url
}

export const getCategoryId = function(url){
    let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
    if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id
    }else{
        return ''
    }
}