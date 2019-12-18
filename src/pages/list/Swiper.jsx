import React,{Component} from 'react'
import { Carousel } from 'antd-mobile';
import {SwiperWrap} from '../smartisan/styled'
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

class Swiper extends Component {

  componentDidMount(){
    this.props.loadData()
    // simulate img loading
  }
  render() {
    console.log(this)
    return (
      <SwiperWrap>
      <Carousel
        autoplay={true}
        infinite
      >
          {this.props.list.slice(0,1).map((value,index)=>{
          return(
               value.list.map((val,index)=>{
              return(
              <img
              key={val}
                src={val.image}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />              
         )
            })
          ) 
          }) 
          }
      </Carousel>
  </SwiperWrap>
    );
  }
}

export default Swiper
