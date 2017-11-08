import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import $$ from 'immutable'

import Header from '../components/common/header'
import config from '../config' 
import {optionDeal} from '../api/utils'
import {getCarouselMessage,initData} from '../actions'
import Footer from '../components/common/footer'

class Food extends Component{
    
    constructor (props) {
        super(props);
        this.state = {
            index:parseInt(this.props.params.type),
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return !$$.is($$.fromJS(this.props), $$.fromJS(nextProps)) || !$$.is($$.fromJS(this.state),$$.fromJS(nextState))
    }

    componentDidMount(){
        if(this.props.dealInitData.carouselMessage.length == 0){
            const optionShop = optionDeal('get',{}, config.GET_NAV_MESSAGE);
            this.props.getCarouselMessage(optionShop);
        } if(!this.props.dealInitData.locCity.name){
            const options1 = optionDeal('get',{type:'guess'}, config.GET_CUSTOMER_INFO)
            this.props.initData(options1)
        }
    }

    render(){
        const {locCity,carouselMessage} = this.props.dealInitData
        let title = ''
        if(carouselMessage[this.state.index] &&　title == ''){
             title = carouselMessage[this.state.index].title
        }
        return (
            <div>
               <Header title={title}city={locCity.name}/>
               <div className='header_display'>
                    <section className='border_food'>
                        <span>{title}</span>
                        <span>></span>
                    </section>
                    <section  className='border_food'>
                        <span>智能排序</span>
                        <span>></span>
                    </section>
                    <section>
                        <span>筛选</span>
                        <span>></span>
                    </section>
                </div>
               
               <Footer></Footer>
            </div>        
        )
    }
}

const mapStateToProps = (state) =>({
    dealInitData:state.dealInitData
});

export default connect(
    mapStateToProps,
    {getCarouselMessage,initData}
)(Food)

