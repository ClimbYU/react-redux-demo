import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';
import { is, fromJS} from 'immutable';

import config from '../../config' 
import '../../styles/shop_list.scss'


export default class RecommendedStore extends Component{
    constructor(props,context){
        super(props,context)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    componentDidMount(){
     
    }
    componentDidUpdate(){
        console.log(this.props.shopMessage)
    }
    render(){
        const shopList = this.props.shopMessage.map((shop,index) => <li key={index}>
            <section>
                <img src={config.URLADDRESS + 'img/'+shop.get('image_path')} alt=""/>
            </section>
            <hgroup>
                    <header>
                        <h5 className='premium'>
                            效果演示
                        </h5>
                        <h5 className='esure'>保准票</h5>
                    </header>
                    <div className='assess-shop'>
                        <section>
                            <span className='shop-grade'> ☆☆☆☆☆</span>
                            <span>4.5</span>
                            <span>月售1232</span>
                        </section>
                        <section>
                            <div className='transport-choice'>蜂鸟配送</div>
                            <div className='transport-choice'>准时达</div>
                        </section>
                    </div>
                    <div className='assess-shop'>
                        <section>
                            <span> ￥20起送</span>
                            <span> | 配送费约￥5</span>
                        </section>
                        <section>
                            <div>2.91km / </div>
                            <div> 30分钟</div>
                        </section>
                    </div>
            </hgroup>
        </li>)
        return (
            <div>
                <ul className='shop-unit'>
                    {shopList}
                </ul>
            </div>
        )
    }
}
