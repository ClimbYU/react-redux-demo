import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {fetchPostsGet,fetchPosts} from '../api/fetchActions'



 class Home extends Component{

    constructor (props) {
        super(props);
    }
    componentWillMount(){
      
    }
    componentDidMount(){

    //   this.props.fetchPostsGet('/customer/listQuotaRecords?code=0611ulz124Eit11gl8B12Ycjz121ulzk')
    // this.props.fetchPosts('/getCustomerInfo','011cnz202rlmkX0QLpZZ1c9E202cnz2u')
    }
    render(){
        const {data} = this.props.customerInfo;
        return (
            <div>
                <div>Home</div>
                <div>
                    {data.map((_data,index) => <div key={index+1}>{index+1}：{_data.traderSerialId}</div>)}
                </div>      
                <Link to = '/bless'>next</Link>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>({
    customerInfo:state.customerInfo,
    // rout:state.routing
});

export default connect(
    mapStateToProps
)(Home)