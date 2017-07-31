import React ,{ Component } from 'react'
import { Link } from 'react-router'

 export default class Bless extends Component{
    
    constructor (props) {
        super(props)
    }

    render(){
        return (
             <div>
                 <div>Bless</div>
                 <Link to = '/exchange'>next</Link>
             </div>
        )
    }
}
