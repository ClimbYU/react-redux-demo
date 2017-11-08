import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import $$ from 'immutable'

import Header from '../components/common/header'
import config from '../config' 
import {optionDeal} from '../api/utils'
import {getCarouselMessage} from '../actions'

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
               <Header title={title} city={locCity.name}/>
               
            </div>        
        )
    }
}

const mapStateToProps = (state) =>({
    dealInitData:state.dealInitData
});

export default connect(
    mapStateToProps,
    {getCarouselMessage}
)(Food)

