import React,{Component} from 'react'
import Head from './header'
import Search from './search'
import List from '../list/list'
import {Route} from 'react-router-dom'

class home extends Component {
  render () {
    return (
   <div>
      <Head></Head>
      <Search></Search>
      <List></List>
   </div>
    )
  }
}

export default home
