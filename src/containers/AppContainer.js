import React ,{Component} from 'react'
import { Provider } from 'react-redux'
import {Router} from 'react-router'

class AppContainer extends Component{

    render(){
        const {history,routes} = this.props

        return  <Router history={history} routes={routes} />
    }
}

export default AppContainer