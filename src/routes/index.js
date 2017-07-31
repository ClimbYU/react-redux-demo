/**
 * 必须引入才可以使用react的相关api
 */
import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'

import Home from '../components/home/home'
// import Bless from '../components/bless/bless'
const Bless = (location,cb) => {
    require.ensure([],require => {
      /**
       * webpack支持es6，所以要用默认写法 require('../components/bless/bless').default 
       * 必须配合 getComponent 使用才可以使用 cb(null,Bless)
       */
      cb(null,require('../components/bless/bless').default)
    },'bless')
};

// import Exchange from '../components/exchange/exchange'  
const Exchange = (location,cb) => {
    require.ensure([],require => {
       /**
       * webpack支持es6，所以要用默认写法 require('../components/bless/bless').default 
       * 必须配合 getComponent 使用才可以使用 cb(null,Bless)
       */
      cb(null, require('../components/exchange/exchange').default)
    },'exchange')
};

// import Recharge from '../components/recharge/recharge'
const Recharge = (location,cb) => {
    require.ensure([],require => {
       /**
       * webpack支持es6，所以要用默认写法 require('../components/bless/bless').default 
       * 必须配合 getComponent 使用才可以使用 cb(null,Bless)
       */
      cb(null,require('../components/recharge/recharge').default)
    },'recharge')
};

// import SignCard from '../components/signCard/signCard'
const SignCard = (location,cb) => {
    require.ensure([],require => {
       /**
       * webpack支持es6，所以要用默认写法 require('../components/bless/bless').default 
       * 必须配合 getComponent 使用才可以使用 cb(null,Bless)
       */
      cb(null,require('../components/signCard/signCard').default)
    },'signCard')
};
// import User from '../components/user/user'
const User = (location,cb) => {
    require.ensure([],require => {
       /**
       * webpack支持es6，所以要用默认写法 require('../components/bless/bless').default 
       * 必须配合 getComponent 使用才可以使用 cb(null,Bless)
       */
      cb(null, require('../components/user/user').default)
    },'user')
};

const routes =
      <Route>
         <Route path = "/" component = {Home} >
            <IndexRoute component={Home}/> 
         </Route>      
        <Route path = "/bless" getComponent = {Bless}/>
        <Route path = "/exchange" getComponent = {Exchange}/>
        <Route path = "/recharge" getComponent = {Recharge}/>
        <Route path = "/signCard" getComponent = {SignCard}/>
        <Route path = "/user" getComponent = {User}/> 
      </Route>

export default routes