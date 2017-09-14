import React ,{ Component } from 'react'
import { Link } from 'react-router'

class Recharge extends Component{
    
    constructor (props) {
        super(props)
    }

    render(){
        return (
            <div>
                <div>Recharge</div>
                <Link to = '/signCard'>next</Link>
            </div>
        )
    }
}

export default Recharge