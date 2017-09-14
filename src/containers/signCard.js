import React ,{ Component } from 'react'
import { Link } from 'react-router'

class SignCard extends Component{
    
    constructor (props) {
        super(props)
    }

    render(){
        return (
            <div>
                <div>SignCard</div>
                <Link to = '/user'>next</Link>
            </div>
                
        )
    }
}

export default SignCard