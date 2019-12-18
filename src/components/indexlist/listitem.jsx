import { Carousel, WingBlank } from 'antd-mobile';
import React,{Component} from 'react'
import {ItemWrap} from '../../pages/smartisan/styled'
import {get} from '../../utils/http'
import {IndexWrap} from '../../pages/smartisan/styled'
import {withRouter} from 'react-router-dom'
@withRouter
class listitem extends Component {
  state={
    list:[],
  }
  async componentDidMount(){
    let result =await get({
      url:'/api/mobile/home'
    })
    this.setState({
      list:[
        ...result.data
      ]
    })
  }
  handleClick=id=>{
    return ()=>{
  this.props.history.push(`/details/${id}`)
    }
  }
  render() {
    return (
      <>
      {
        this.state.list.slice(2).map((val,index)=>{
          return (
            <>
            {
            <div
               key={val.type+index}
            >
            <IndexWrap>
            <aside className='floor-banner-wrap-inner'>
              <figure className='floor-banner-wrap-item'>
                <img src={val.header.image} alt=""/>
              </figure>
            </aside>
            </IndexWrap>
                    <ItemWrap                  
                    >
                    <ul>
            {
              val.skuInfo.map((value,index)=>{
                   return(
                     <>
                      {
                        <li
                         key={value.skuId}
                         onClick={this.handleClick(value.skuId)}
                        ><div className='img_wrap'> <img src={value.images} alt=""/></div>
                  <article className='item_title'><h3>{value.skuMobileTitle}</h3></article>
                        <article className='item_info'>
                          <div className='left'><span className='yuan'>￥</span>
                      <span className='price'>{value.originalPrice}</span>
                          </div>
                        <div className='right'>
                        {value.promotionList.splice(0,1).map((v,index)=>{
                          return(
          
                            <span
                                  key={index}
                                className="tag">{v.tag}</span>)                       
                                })}
                        </div>
                        </article>
                        </li>
                      }
                     </>
                   )  
                  })
                }
                </ul>
              </ItemWrap> 
            </div>

            }
            </>
          )
        })
     }
     </>
    );
  }
}

export default listitem



