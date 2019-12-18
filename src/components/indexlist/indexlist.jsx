import React,{Component} from 'react'

import Item from './listitem'
import TwoList from './ltwolist'

import {get} from '../../utils\/http'
class indexlist extends Component {
  async componentDidMount(){
    let result =await get({
      url:'/api/mobile/skulist?page=1'
    })
    
  }
  render () {
    return (
      <>
        <Item></Item>
        <TwoList></TwoList>
      </>
    )
  }
}

export default indexlist
