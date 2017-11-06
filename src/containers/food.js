import React ,{ Component } from 'react'
import { Link } from 'react-router'

class Food extends Component{
    
    constructor (props) {
        super(props)
    }

    render(){
        return (
            <div>
                <div>Exchange</div>
                <Link to = '/recharge'>next</Link>
            </div>        
        )
    }
}

export default Food