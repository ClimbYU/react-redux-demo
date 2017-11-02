import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';
import { is, fromJS} from 'immutable';

import'../../lib/swiper.min.js'
import '../../styles/swiper.css'
import config from '../../config' 
import '../../styles/nav_content.scss'

export default class NavContent extends Component{
    //组件名首字母必须大写
    constructor(props,context){
        super(props,context)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }

    componentDidMount(){
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            loop: true,
            grabCursor : true,//鼠标变为手柄
            preventLinksPropagation : true,
        });
    }
    componentWillUpdate(){
            
    }
    render(){
        const navMessage = [];
        const navLength = this.props.message.length;
        for (let i = 0, j = 0; i < navLength; i += 8, j++) {
            navMessage[j] = this.props.message.splice(0, 8);
        }
        
        const swiperContent = function(message){
            return message.map((data,index) => <Link key={index} className='food_container_type'>
            <figure>
                <img src={config.IMG_BASE_URL + data.image_url}/>    
                <figcaption>{data.title}</figcaption>
            </figure>    
        </Link>)
        } 
        const navSwiper = navMessage.map((message,index) => <div  className='swiper-slide food_container' key={index}>
                {swiperContent(message)}
        </div> )
        return(
            <nav>
                <div className='swiper-container swiper-pagination-bottom'>
                  <div className='swiper-wrapper'>
                        {navSwiper}
                        {/* <div className="swiper-slide">slider1</div>
                        <div className="swiper-slide">slider2</div>
                        <div className="swiper-slide">slider3</div> */}
                        
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
            </nav>
        )
    }
}