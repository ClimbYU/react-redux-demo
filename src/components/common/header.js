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
        const localName =  this.props.city.get('locCity').isEmpty() ? '' : this.props.city.getIn(['locCity','name']);
        return (
            <div>
                <div className='box header_box'>
                    <span>&lt;</span>
                    <span>{this.props.title}</span>
                    <span>{localName}</span>
                </div>
            </div>
        );
    }

}

