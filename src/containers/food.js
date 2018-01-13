import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import $$ from 'immutable'

import Header from '../components/common/header'
import config from '../config' 
import {optionDeal,getImageUrl} from '../api/utils'
import {getCarouselMessage,initData,getRestaurant} from '../actions'
import Footer from '../components/common/footer'
import '../styles/home.scss'

class Food extends Component{
    
    constructor (props) {
        super(props);
        this.state = {
            index:parseInt(this.props.params.type),
            shopShow:'none',
            showFoodList:'food_shop_list_hide'
        }
    }

    foodList(state){ 
        if(state == 'food_shop_list_hide'){
            this.setState({
                shopShow:'flex',
                showFoodList:'food_shop_list'
            })
        }else{
            this.setState({
                shopShow:'none',
                showFoodList:'food_shop_list_hide'
            })
        }
        
    }

    shouldComponentUpdate(nextProps, nextState){
        return !$$.is($$.fromJS(this.props), $$.fromJS(nextProps)) || !$$.is($$.fromJS(this.state),$$.fromJS(nextState))
    }

    componentDidMount(){
        if(this.props.foods.get('carouselMessage').size == 0){
            // 获取导航栏的信息
            const optionShop = optionDeal('get',{}, config.GET_NAV_MESSAGE);
            this.props.getCarouselMessage(optionShop);
        } 
        if(!this.props.user.getIn(['locCity','name'])){
            // 获取所在位置信息
            const options1 = optionDeal('get',{type:'guess'}, config.GET_CUSTOMER_INFO)
            this.props.initData(options1)
        }
       
    }

    componentDidUpdate(){
        if(this.props.user.getIn(['locCity','latitude']) && 
        this.props.user.getIn(['locCity','longitude']) && this.props.foods.get('dropdownList').size === 0){
            //获取下拉列表信息
            const options1 = optionDeal('get',
                        {latitude:this.props.user.getIn(['locCity','latitude']), longitude:this.props.user.getIn(['locCity','longitude'])},config.GET_RESTAURANT_INFO)
            this.props.getRestaurant(options1)
        }
    }

    render(){
        // const {locCity,carouselMessage} = this.props.dealInitData
        const {user,foods} = this.props
        const restaurantList = foods.get('restaurantList')
        const carouselMessage = foods.get('carouselMessage');
        const dropdownList = foods.get('dropdownList');
        const restaurantMessage =  dropdownList.map((restaurant,index) => 
                <li className='shop_list_unit' key={index}>
                    <section>
                        <img className='restaurant_style' src={getImageUrl(restaurant.get('image_url'))} />
                        <span>{restaurant.get('name')}</span>
                    </section>
                    <section>
                        <span>{restaurant.get('count')}</span>
                    </section>
                </li>
        ) 
        let title = ''
        const index = this.state.index
        if(carouselMessage.get(index) &&　title == ''){
             title = carouselMessage.get(index).get('title')
        }
        var shopShow = this.state.shopShow;
        var showFoodList = this.state.showFoodList;
        return (
            <div>
               <Header title={title} city={user}/>
               <div className='header_display'>
                   
                    <div  onClick={this.foodList.bind(this,showFoodList)}>
                        <section className='border_food border_right'>
                            <span>{title}</span>
                            <span>></span>
                        </section>
                    </div>
                    <div>
                        <section  className='border_food  border_right'>
                            <span>智能排序</span>
                            <span>></span>
                        </section>
                    </div>
                    <div>
                        <section className='border_food'>
                            <span>筛选</span>
                            <span>></span>
                        </section>
                    </div>
                </div>
                <div className={showFoodList} style={{display:shopShow}}>
                    <section className='shop_list'>
                        <ul>
                            {restaurantMessage}
                        </ul>
                    </section>
                    <section className='food_list'>
                        <ul>
                            <li  className='food_list_unit'>
                                <section>
                                    <span>水果</span>
                                </section>
                                <section>
                                    <span>354</span>
                                </section>
                            </li>
                            <li className='food_list_unit'>
                                <section>
                                    <span>沙拉</span>
                                </section>
                                <section>
                                    <span>354</span>
                                </section>
                            </li>
                            <li className='food_list_unit'>
                                <section>
                                    <span>奶茶</span>
                                </section>
                                <section>
                                    <span>354</span>
                                </section>
                            </li>
                        </ul>
                    </section>
                </div>
               
               <Footer></Footer>
            </div>        
        )
    }
}

const mapStateToProps = (state) =>({
    user:state.user,
    foods:state.foods
});

export default connect(
    mapStateToProps,
    {getCarouselMessage,initData,getRestaurant}
)(Food)

