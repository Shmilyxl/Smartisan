import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {TwolistWrap} from './liststyled'
import {get} from '../../utils/http'
@withRouter
class ltwolist extends Component {
    state={
        list:[]
    };
    async componentDidMount(){
        var result =await get({
          url:'/api/mobile/skulist?page=1'
        })
        this.setState({
            list:[
                ...result.data.skuInfo
            ]
        }) 
      }
    handleClick=id=>{ 
    return ()=>{
    console.log(id)
    this.props.history.push(`/details/${id}`)
    }}
  
  render () {
      console.log(this)
  
    return (
        <>
       <TwolistWrap>
            <article className="headline-wrap"><h3 >猜你喜欢</h3></article>
            <aside className='guesslike-wrap common-flow-layout clearfix'>
        {
            this.state.list.map((value,index) => {
              return (
                <>
                  {
                     (value.discountPrice==0)?(
                        <section 
                        key={value.skuId+new Date().getTime()}
                        onClick={this.handleClick(value.skuId)}
                        className="sku-item-normal-box flow-item guess-like-item">
                            <figure className="item-cover">
                                <img src={value.images} alt="商品图片"/>
                            </figure>
                            <article className="item-title">
                                  <h3 data-v-1c4a62f4="">{value.skuMobileTitle}</h3>
                            </article>
                            <article className="item-bottom-info">
                            <aside className="item-price">
                                <span className="yuan">¥</span>
                             <span data-v-1c4a62f4="">{value.originalPrice}</span>
                            </aside>
                            <aside className="item-promotion-tags">
                                {value.promotionList.splice(0,1).map((val,index)=>{
                                    return(
                                    <>
                                    {
                                    (val)?(
                                        <span
                                    key={index+val.type+new Date().getTime()}
                                    className="tag">{val.tag}</span>
                                        
                                        ):(
                                        <span
                                            value={index+val.type}
                                            key={index+val.type+new Date().getTime()}
                                        className="tag">{val.tag}</span>)                       
                                    }
                                    </>
                                )})}
                            </aside>
                            </article>
                        </section>
                     ):(
                        <section 
                        key={value.skuId+Math.random()} 
                        onClick={this.handleClick(value.skuId)}
                        value={value}
                        className="sku-item-normal-box flow-item guess-like-item">
                            <figure className="item-cover">
                                <img src={value.images} alt="商品图片"/>
                            </figure>
                            <article className="item-title">
                                  <h3 data-v-1c4a62f4="">{value.skuMobileTitle}</h3>
                            </article>
                            <article className="item-bottom-info">
                            <aside className="item-price">
                                <span className="yuan">¥</span>
                             <span data-v-1c4a62f4="">{value.discountPrice}</span>
                                <span className="orignal">
                                    <span className="yuan">¥</span>
                                     {value.originalPrice}
                                </span>
                            </aside>
                            <aside className="item-promotion-tags">
                            {value.promotionList.map((val,index)=>{

                                    return(
                                    <>
                                    {
                                    (value.promotionList.length<=1)?(
                                        <span
                                    key={index+val.type+Math.random()}
                                    className="tag">{val.tag}</span>
                                        
                                        ):(<span
                                            value={index+val.type}
                                            key={index+Math.random()}
                                            className="tag"></span>)                       
                                    }
                                    </>
                                )})}
                            </aside>
                            </article>
                        </section>
                     ) 
                  
                  }
              </>
              )
            })
        }
        </aside>
     </TwolistWrap>
    </>
    
    )
  }
}

export default ltwolist
