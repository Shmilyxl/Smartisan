import React from 'react'
import {CSSTransition} from 'react-transition-group'
import { withRouter } from 'react-router-dom'
import '../../assets/styles/animation.css'

export default (Layout)=>{
  const layoutAnimate =props=>{
      console.log(props.match)
   return (
    <CSSTransition
    in={!!props.match}
    timeout={300}
    classNames={{
    enter:'animated',
    enterActive:props.type==='home'? 'slideInLeft':'slideInright',
    exit:'animated',
    exitActive:props.type==='classify'?'slideOutLeft':'slideOutRight'
    }}
mountOnEnter
unmountOnExit
   >
  <Layout {...props}></Layout>
   </CSSTransition>
   )
  }
  return withRouter(layoutAnimate)
}