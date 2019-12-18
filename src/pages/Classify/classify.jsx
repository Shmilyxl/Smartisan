import React,{Component} from 'react'
import Search from '../../pages/smartisan/search'
import {ClassifyWrap,LeftWrap,ListWrap, BannerWrap} from './classifystyled.js'
import {get} from '../../utils/http'

class classify extends Component {
    state={
          list:[],
          currentItem:'手机数码'
    }
  async componentDidMount(){
    let result=await get({
        url:"/api/mobile/classify",
    })
    this.setState({
        list:[...result.data]
    })
    console.log(result.data); 
  }
  handleItemClick=(item)=>{
      return()=>{ 
          this.setState({
              currentItem:item
            })
          }
  }
  render () {
    console.log(this.state.list);
    
    return (
      <ClassifyWrap>
       <Search></Search>
       <div className='contain'>
           <LeftWrap
           width='0 1px 0 0'
           >
       <section className='leftWrap'>
           <ul className='first-list'>
           {this.state.list.map((value,index)=>{
         return(
             this.state.currentItem===value.classifyName
            ?<li
            key={value.classifyId}
            value={value}
            className='active'
           >{value.classifyName}</li>
           :<li key={value.classifyId}
           onClick={this.handleItemClick(value.classifyName)}
           >
               {value.classifyName}
           </li>
            )
        })}
        </ul>
       
    </section>
    </LeftWrap>
   
     <section className='rightWrap'>
         <ListWrap
         width="0 0 1px 0"
         >
         <section className='category-sub no-banner'>
             {this.state.list.map((value,index)=>{
                 let banner=value.banner
                 return(
                     this.state.currentItem===value.classifyName&&
                     (value.banner==null||value.banner.length===0?(
                        <section className='second-and-third-list'>
                        {
                             
                            value.second.map((val)=>{
                                return(
                                    <>
                          
                               <h1>{val.classifyName}</h1>
                               <aside className='list-flex-wrap'>
                               {val.third.map((value)=>{
                                   return(
                                       <div className='flex-item'>
                                         <div className='img-cover'>
                                             <img src={value.image} alt=""/>
                                         </div>
                                         <div className='title text-ellipsis'>
                                          {value.classifyName}
                                         </div>
                                       </div>
                                   )
                               })}
                               </aside>
                           
                                </>
                            )
                        })
                    }
               </section>
                     ):(
                        <section className='second-and-third-list'>
                        <BannerWrap
                        width='0 0 1px 0'>
                            {
                                banner.map((v)=>{
                            return <img src={v.image}></img>
                            })      
                            } 
                     </BannerWrap>
                        {
                        value.second.map((val)=>{
                            return(
                                <>     
                               <h1>{val.classifyName}</h1>
                               <aside className='list-flex-wrap'>
                               {val.third.map((value)=>{
                                   return(
                                       <div className='flex-item'>
                                         <div className='img-cover'>
                                             <img src={value.image} alt=""/>
                                         </div>
                                         <div className='title text-ellipsis'>
                                          {value.classifyName}
                                         </div>
                                       </div>
                                   )
                               })}
                               </aside>
                           
                                </>
                            )
                        })
                    }
               </section>
                     )
               )
             )
            })}
           
         </section>
         </ListWrap>
     </section>
     </div>
      </ClassifyWrap>
    )
  }
}

export default classify
