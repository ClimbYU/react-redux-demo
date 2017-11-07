import React ,{ Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Header from '../components/common/header'

class Food extends Component{
    
    constructor (props) {
        super(props);
        this.state = {
            index:this.props.params.type,
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return !$$.is($$.fromJS(this.props), $$.fromJS(nextProps)) || !$$.is($$.fromJS(this.state),$$.fromJS(nextState))
    }

    componentDidMount(){

    }

    render(){
        const {locCity,carouselMessage} = this.props.dealInitData
        return (
            <div>
               <Header city={locCity.name}/>
               
            </div>        
        )
    }
}

const mapStateToProps = (state) =>({
    dealInitData:state.dealInitData
});

export default connect(
    mapStateToProps,
)(Food)

