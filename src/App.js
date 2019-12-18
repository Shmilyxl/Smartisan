import React,{Component} from 'react'
import './assets/styles/reset.css'
import store from './store/'
import {Provider} from 'react-redux'
import Layout from './pages/layout'
import { directive } from '@babel/types'
import { BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
         <Layout></Layout>
      </Router>
      </Provider>
    )
  }
}

export default App
