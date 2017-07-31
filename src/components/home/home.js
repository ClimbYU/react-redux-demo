import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {fetchPosts} from '../../actions/fetchActions'



 class Home extends Component{

    constructor (props) {
        super(props);
    }
    componentWillMount(){
      
    }
    componentDidMount(){

      this.props.fetchPosts('/customer/listQuotaRecords?code=031TOoU70SVstK1Z8WT70yuxU70TOoUO')
    }
    render(){
        console.log(this.props)
        const {name,cardPhone,url,flag,userInfo} = this.props.customerInfo
        const userInfoList = userInfo ? userInfo.quotaOrderList.length : flag;
        console.log(flag);
        return (
            <div>
                <div>Home</div>
                <div>{userInfoList}</div>      
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
    mapStateToProps,
    {fetchPosts}
)(Home)