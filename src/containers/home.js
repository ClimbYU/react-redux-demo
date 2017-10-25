import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

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
    getInfo(){
        // const options = optionDeal('get',{type:'group'})
        // this.props.initData(options)
    }
    render(){
        const {data} = this.props.customerInfo;
        return (
            <div>
                <div>Home</div>
                <button onClick={this.getInfo}>获取</button>
                {/* <button onClick={this.props.getCustomer}>获取</button> */}
                <div>
                    {/* {data.map((_data,index) => <div key={index+1}>{index+1}：{_data.traderSerialId}</div>)} */}
                    {data}
                </div>      
                <Link to = '/bless'>next</Link>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>({
    customerInfo:state.customerInfo
});

export default connect(
    mapStateToProps,
    {initData}
)(Home)