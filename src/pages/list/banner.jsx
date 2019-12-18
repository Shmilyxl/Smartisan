import React,{Component} from 'react'
import {BannerWrap} from '../smartisan/styled'
import {connect} from 'react-redux'
import {GEILIST} from '../action-types'
const mapState=state=>({
  list:state.home.list
})
const mapDispatch = dispatch => ({
  loadData() {
    dispatch({
      type:GEILIST,
      url:'/api/mobile/home'
    })
  }
})
@connect(mapState, mapDispatch)
class banner extends Component {
  componentDidMount(){
    this.props.loadData()
    // simulate img loading
  }
  render () {
    console.log(this)
    return (
     <BannerWrap>
         <figure>
           {
             this.props.list.slice(1,2).map((value,index)=>{
               return(
               <img src={value.image} alt=""/>
               )
             })
           }
             
         </figure>
     </BannerWrap>
    )
  }
}

export default banner
