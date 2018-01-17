import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import $$ from 'immutable'

import Header from '../components/common/header'
import config from '../config' 
import {optionDeal,getImageUrl} from '../api/utils'
import {getCarouselMessage,initData,getRestaurant} from '../actions'
import Footer from '../components/common/footer'
import RecommendedStore from '../components/home/recommendedStore'
import '../styles/home.scss'
import '../styles/food.scss'

class Food extends Component{
    
    constructor (props) {
        super(props);
        this.state = {
            // index:parseInt(this.props.params.type),
            shopShow:'none',
            showFoodList:'food_shop_list_hide',
            subRestaurantList:[],
            restaurant_id:this.props.params.restaurant_id
        }
    }

    foodList(state){ 
        if(state == 'food_shop_list_hide'){
            this.setState({
                shopShow:'flex',
                showFoodList:'food_shop_list',
                subRestaurantList:this.props.foods.get('dropdownList').getIn([0,'sub_categories'])
            })
        }else{
            this.setState({
                shopShow:'none',
                showFoodList:'food_shop_list_hide'
            })
        }
        
    }
    getSubList(restaurant){
        this.setState({
            subRestaurantList:restaurant.get('sub_categories'),
            restaurant_id:restaurant.get('id')
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        return !$$.is($$.fromJS(this.props), $$.fromJS(nextProps)) || !$$.is($$.fromJS(this.state),$$.fromJS(nextState))
    }

    componentDidMount(){
        // if(this.props.foods.get('carouselMessage').size == 0){
        //     // 获取导航栏的信息
        //     const optionShop = optionDeal('get',{}, config.GET_NAV_MESSAGE);
        //     this.props.getCarouselMessage(optionShop);
        // } 
        if(!this.props.user.getIn(['locCity','name'])){
            // 获取所在位置信息
            const options1 = optionDeal('get',{type:'guess'}, config.GET_CUSTOMER_INFO)
            this.props.initData(options1)
        } 
        if(this.props.params.latitude && this.props.params.longitude 
         && this.props.foods.get('dropdownList').size === 0){
            //获取下拉列表信息
            const options1 = optionDeal('get',
                        {latitude:this.props.params.latitude, longitude:this.props.params.longitude },config.GET_RESTAURANT_INFO)
            this.props.getRestaurant(options1)
        }
       
    }

    componentDidUpdate(){
       
    }

    render(){
        const {user,foods} = this.props
        const restaurantList = foods.get('restaurantList')
        const carouselMessage = foods.get('carouselMessage');
        const dropdownList = foods.get('dropdownList');
        // 第一个tab的下拉列表项
        const restaurantMessage =  dropdownList.map((restaurant,index) => 
                <li  className={this.state.restaurant_id == restaurant.get('id') ? 'shop_list_unit food_list_checked':'shop_list_unit'} key={index} onClick={this.getSubList.bind(this,restaurant)}> 
                    <section>
                        <img className='restaurant_style' src={getImageUrl(restaurant.get('image_url'))} />
                        <span>{restaurant.get('name')}</span>
                    </section>
                    <section>
                        <span>{restaurant.get('count')}</span>
                    </section>
                </li>
        ) 
        // 下拉列表的子列表
        const subRestaurantMessage = this.state.subRestaurantList.map((sub,index) => 
                <li  className='food_list_unit' key={index}>
                    <section>
                        <span>{sub.get('name')}</span>
                    </section>
                    <section>
                        <span>{sub.get('count')}</span>
                    </section>
                </li>
            )
        let title = this.props.params.type
        // const index = this.state.index
        // if(carouselMessage.get(index) &&　title == ''){
        //      title = carouselMessage.get(index).get('title')
        // }
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
                    <section className='food_list food_list_sub'>
                        <ul>
                        {subRestaurantMessage}
                        </ul>
                    </section>
                </div>
                <div className='food_shop_list' style={{display:'none'}}>
                    <ul className='sort_list'>
                        <li>
                            <span>☆</span>
                            <p>智能排序</p>
                        </li>
                        <li>
                            <span>☆</span>
                            <p>距离最近</p>
                        </li>
                        <li>
                            <span>☆</span>
                            <p>智能排序</p>
                        </li>
                        <li>
                            <span>☆</span>
                            <p>智能排序</p>
                        </li>
                        <li>
                            <span>☆</span>
                            <p>智能排序</p>
                        </li>
                        <li>
                            <span>☆</span>
                            <p>智能排序</p>
                        </li>
                    </ul>
                </div>
                <div className='food_shop_list1 filter_list'>
                    <section>
                        <header>
                            配送方式
                        </header>
                        <ul>
                            <li>
                                <span>☆</span>
                                <span>蜂鸟配送</span>
                            </li>
                        </ul>
                    </section>
                       
                    <section>
                        <header>
                            商家属性
                        </header>
                        <ul>
                            <li>
                                <span>☆</span>
                                <span>蜂鸟配送</span>
                            </li>
                            <li>
                                <span>☆</span>
                                <span>外卖保</span>
                            </li>
                            <li>
                                <span>☆</span>
                                <span>准时达</span>
                            </li>
                            <li>
                                <span>☆</span>
                                <span>新店</span>
                            </li>
                            <li>
                                <span>☆</span>
                                <span>在线支付</span>
                            </li>
                            <li>
                                <span>☆</span>
                                <span>开发票</span>
                            </li>
                        </ul>
                    </section>
                    <footer className='filter_list_footer'>
                        <button className='filter_list_clear'>清空</button>
                        <button className='filter_list_confirm'>确定</button>
                    </footer>
                </div>
                <div className='restaurant_top'>
                    <RecommendedStore shopMessage = {restaurantList}/>
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

