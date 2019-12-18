import React,{Component} from 'react'
import { Icon, Grid } from 'antd-mobile';
import {HeaderWrap} from './styled'
class header extends Component {
  
  render () {
    return (
       <HeaderWrap>
           <div className='logo'>
              <img src="../../assets/images/logo.png" alt=""/>
           </div>
       </HeaderWrap>
    )
  }
}

export default header
