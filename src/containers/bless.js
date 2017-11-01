import React ,{ Component } from 'react'
import { Link } from 'react-router'
import Header from '../components/common/header'

 export default class Bless extends Component{
    
    constructor (props) {
        super(props)
    }

    render(){
        return (
             <div>
                 <Header title='城市'/>
                 <Link to = '/exchange'>next</Link>
             </div>
        )
    }
}
