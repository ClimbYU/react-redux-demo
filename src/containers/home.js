import React ,{ Component ,PureComponent } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import $$ from 'immutable'

import {initData} from '../actions'
import config from '../config' 
import {optionDeal} from '../api/utils'

 class Home extends Component{

    constructor (props) {
        super(props);
        this.getInfo = this.getInfo.bind(this)
    }
    componentWillMount(){
      
    }
    componentDidMount(){
        const options1 = optionDeal('get',{type:'group'})
        this.props.initData(options1)
    }
    componentWillReceiveProps(nextProps){
        // console.log( nextProps === this.props) 
    }
    componentWillUpdate(nextProps,nextState){
        // console.log(nextProps)
        // console.log(nextState)
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.props !== nextProps;
    }
    getInfo(){
        // const options = optionDeal('get',{type:'group'})
        // this.props.initData(options)
    }
    render(){
        const {hotCity,locCity,allCity} = this.props.dealInitData
        return (
            <div>
                <div>Home</div>
                <button onClick={this.getInfo}>获取</button>
                {/* <button onClick={this.props.getCustomer}>获取</button> */}
                <div>
                    {hotCity.map((_data,index) => <div className='component_container common_back' key={index+1}>{index+1}：{_data.name}</div>)}
                    {locCity.name}
                    {/* {allCity.map((_data,index) => <div key={index+1}>{index+1}：{_data.name}</div>)} */}
                </div>      
                <Link to = '/bless'>next</Link>
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