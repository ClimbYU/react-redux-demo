import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';
import { is, fromJS} from 'immutable';

import '../../styles/search_module.scss'

export default class SearchModule extends Component{
    constructor(props,context){
        super(props,context)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
               <div className='search-address-food'>
                    <div className='transform-weather'>
                        <span>配送地址：北京西直门</span>
                        <span>14° 晴</span>
                    </div>
                    <div className='search-shop'>
                        <input type="search" placeholder='搜索商家 商品名称'/>
                    </div>
                    <ul className='hot-foodlist'>
                        <li>鲜果狂欢减20</li>
                        <li>冒菜</li>
                        <li>奶茶</li>
                        <li>星巴克</li>
                        <li>麦当劳</li>
                        <li>汉堡王</li>
                        <li>鸡排</li>
                        <li>酸辣粉</li>
                    </ul>
               </div>
            </div>
        )
    }
}