import React,{Component} from 'react'
import Header from '../cart/header'
import {DetailsWrap,BuybtnWrap} from './detailsstyled'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {GEILIST} from '../action-types'
@withRouter
class details extends Component {
  handleback=()=>{
    return ()=>{
      this.props.history.push('/index/home')
    }
  }
  handlecart=()=>{
    return()=>{
      this.props.history.push('/index/cart')
    }
  }
    componentDidMount(){
  }

  render () {
    console.log(this)
    return (
     <DetailsWrap>
        <Header
        title='坚果'
        ></Header>
      <div className='revert' onClick={this.handleback()}>返回</div>
     <section className='bottom_tag'>
        <div className='img_wrap' onClick={this.handlecart()}>
          <div>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgB7ZnLUQJBEIabVxU3MYMxAjEDjEDNQA5QRXFQI1Az0ANFFRwgAzECCAEjkAzcIwce/oO7iuA+eu3ZBZ2vamt3ahtm/nn0dM8SWSwWi+WLDBmm1+uVZrNZeblcqlWFmcykVquNyDDGhLmCriDoGsXSxmsH12A+n983Go0JGcCIsFarVc7n808YHRViOsF1Ua/XxySMuLB2u62y2exwQ5QeIa/xZfo+gg5G7kR65PIkTC6X6+Gm3OIEja6i0aN1G4i/hPhbV3zJ/c0pCSI6Yt1ut4I1NfTKEHXkNxIQV4GgddvTzQ74DVkSBKLO14r9oOnlihh4ZYg8J0FEhYFj7wEiX8KMMUrP3vNisVAkiLSwT7B+HI491twBCWJMWNpYYfvGnxUmvUHfwNOtoopisRglTBrp/Us/wCuynM2/JVbk0el0rnC7o+2oXRoH28YD0px7YsIWpoNcRAmvlCBBoZkfbOeBdERR8ihiIh0rDgqFwqHuYfpIVUTs0ZnsqIQtDFmx8nsHz/ZYrVYdd9qMKISo9uiAQ2LCFoaYrhTw7kzf9TpEY8oU/l+R7PGO7aTiTEXfSuDBruEx37RziXAswLE3LwwNCKuE24hQ+wh1bsEWFmdaCGDeeaD3RPMmU4iuMYMoYrIv0X0ia0xR8uyEVzRBuvuYQcwK0x8aKCW4dbOETafT1IRx62YJQ+iTmjAuLGEpOQ4PxTHem1Mqbk7GEhaUi5mGm5OxhAXlYrsGdyqmJowb8eyN8+DWzRKWUi4WC5YwHL70ySxLvwsnWQ+M/4l3YIpbhRIEHTpuNptRvgVYLBaL5UfeAWeL6tgW6zwZAAAAAElFTkSuQmCC'></img>
        </div>
        </div>
       <BuybtnWrap width='1px' className='buybtn'>现在购买</BuybtnWrap>
       <div className='cartbtn'>加入购物车</div>     
      </section>
     </DetailsWrap>
    )
  }
}

export default details
