import React,{Component} from 'react'
import Header from '../cart/header'
import {LoginWrap} from './styled'
import Loginlist from './loginlist'
class login extends Component {
  render () {
    return (
     <LoginWrap>
         <Header title='个人中心'></Header>
         <Loginlist></Loginlist>
     </LoginWrap>
    )
  }
}

export default login
