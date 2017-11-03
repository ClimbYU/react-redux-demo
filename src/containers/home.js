import React ,{ Component ,PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import $$ from 'immutable'

import {initData} from '../actions'
import config from '../config' 
import {optionDeal} from '../api/utils'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import NavContent from '../components/home/navContent'
import RecommendedStore from '../components/home/recommendedStore'
import SearchModule from '../components/home/searchModule'

 class Home extends Component{

    constructor (props) {
        super(props);
        this.getInfo = this.getInfo.bind(this)
    }
    componentWillMount(){
    }
    componentDidMount(){
        const options1 = optionDeal('get',{type:'guess'}, config.GET_CUSTOMER_INFO)
        this.props.initData(options1)
    }
    componentWillReceiveProps(nextProps){
        // console.log( nextProps === this.props) 
    }
    componentWillUpdate(nextProps,nextState){
        
    }
    shouldComponentUpdate(nextProps, nextState){
        return !$$.is($$.fromJS(this.props), $$.fromJS(nextProps)) || !$$.is($$.fromJS(this.state),$$.fromJS(nextState))
    }
    getInfo(){
        // const options = optionDeal('get',{type:'group'})
        // this.props.initData(options)
    }
    render(){
        const {hotCity,locCity,allCity,navMessage,shopList} = this.props.dealInitData
        return (
            <div>
                <Header title='饿了么' city={locCity.name}/>
                <SearchModule/>
                <NavContent message={navMessage}/>
                <div>
                    <div className='shop-padding'>附近商家</div>
                    <RecommendedStore shopMessage = {shopList}/> 
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
    {initData}
)(Home)