import React ,{ Component } from 'react'
import { Link } from 'react-router'


class User extends Component{
    
    constructor (props) {
        super(props)
    }

    render(){
        return (
           <div>
               <div>User</div>
               <Link to = '/'>next</Link>
           </div>      
        )
    }
}

export default User