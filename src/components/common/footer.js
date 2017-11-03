import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';
import { is, fromJS} from 'immutable';

import '../../styles/footer.scss'

export default class Footer extends Component{
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
                <section className='footer-container'>
                    <section className='footer-content'>
                        <section>☆</section>
                        <span>外卖</span>
                    </section>
                    <section className='footer-content'>
                        <section>☆</section>
                        <span>订单</span>
                    </section>
                    <section className='footer-content'>
                        <section>☆</section>
                        <span>我的</span>
                    </section>
                </section>
            </div>
        )
    }
}