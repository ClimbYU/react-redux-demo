import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';
import { is, fromJS} from 'immutable';


export default class Header extends Component {
    constructor(props,context){
        super(props,context)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    componentDidMount(){
      
    }
    render(){
        return (
            <div>
                <div className='box header_box'>
                    <span>&lt;</span>
                    <span>{this.props.title}</span>
                    <span>{this.props.city}</span>
                </div>
            </div>
        );
    }

}

