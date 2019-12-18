import React,{Component} from 'react'
import CHeader from './header'
import Contain from './contain'
class cart extends Component {
  render () {
    return (
      <div>
         <CHeader title='购物车'></CHeader>
         <Contain></Contain>
      </div>
    )
  }
}

export default cart
