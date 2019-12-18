import React,{Component,createRef} from 'react'
import {Search,BtnWrap,Searchlist} from './searchstyled'
import {withRouter} from 'react-router-dom'
import {get} from '../../utils/http'
import _ from 'lodash'
//v1/search/suggest?keyword=12
//http://shopapi.smartisan.com/v1/search/hot-words
@withRouter
class search extends Component {
  constructor(){
    super()
    this.inputRef=createRef()
  }
  state={
    keyword:'',
    arr:[],
    list:[],
  }
  handleClick=()=>{
     this.props.history.push('/index/home')
 }
 handleChange=async (e)=>{
   let value=e.target.value
   console.log(value)
   let result=await get({
    url:`/api/v1/search/suggest?keyword=${value}`
    })
   this.setState({
     keyword:value,
     arr:[
      ...result.data
      ]
    })
    console.log(result)
 }
 async componentDidMount(){
    let list =await get({
      url:'/api/v1/search/hot-words'
    })
    this.setState({
      list:[
        ...list.hot
      ]
    })
 }
  render () {
    console.log(this.state.list)
    return (
    <Search>
      <header>
          <section className='intWrap'>
            <span><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyN0JBQ0NFNTQ2QTIxMUU4OTc5MjlEODQyOERGRDZCMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyN0JBQ0NFNjQ2QTIxMUU4OTc5MjlEODQyOERGRDZCMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3QkFDQ0UzNDZBMjExRTg5NzkyOUQ4NDI4REZENkIyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3QkFDQ0U0NDZBMjExRTg5NzkyOUQ4NDI4REZENkIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ncNiIgAAA9FJREFUeNrMmVlIVGEUx++MQ7agldkuSlGR0UNQtphBe7RHVNRU5pIPvfRQFNVjYRRRFEkRlGGrVj5lD0EpYoYttkEZBoU1ZJYYlGXbaP9DR5iGOd9d5t7L/OGH8p259/7nu99yvjOepqYmzYJGgflgGkgHaSAB+MAX8AG8BA9BJbgPOjWb5DFhuifYBArARJPPeQvOg+OgxQ3THpAH9oGhUT6vAxSBvaDdKdOp4CLI0uwV9Xw2qLZysVcRmwUeOWC4uzNug21WLvYJ7StAKYg3eJ+PzC+QDIaDOJ1rKH4YDAE7ozU9G5SBHorrfoByhl5xW1icrs0Ay4AfpCjutYOvP2B1TKfxkEgSPk/L1imelM0Gn0FfIAcU8luIpC6wBlwza9rLvSaN4XdgPaixOI4H8rK3QIh/BuPBezMTMV9h+AVvJDVRTL5PYDEoFuL9wVEzPd0LvOZJEa4AGw7YtHJ4eRldK8QngXojPZ0rGA7yzQM2LnedvKs2CvHdRodHgRA/CWodWKdpN9wixJbr7bxkeiyYIGy5hZpzquQNJtIyvErP9FwhVs7ZmpM6IbTP0zOdqTDttG7wGw3XVD3T6UKs2gXTP0GdsKYnq0ynRmhv4cXeDTUI7cNUphOEBMgttQrtiSrTccJa6pZ+Kw4foumvZr6lA+qnWMtF081Ckh7vkunRilxFNN0oJOgZLhimITAlQvs3Vbbn5eN9JC1xwfRkMDhCe71qXpHpKiGWrXN6sUP5Qvstvc2ljhP8cFHSstlBw6ncMZFUpmeaXkOJEKf6xCCHTBcJk/2uIm39LzUtEnKAAeCCgZO1WW0FS4XYQaP5dIviqEMZ12kbjVPaeUSI3QPXzZwR9wOp3JTDWV+iDT1cKnRAkA8GXWZM0w60gS+WThRPwCILZkeCCnBM8caol58ZPWSG6g7Ypfj8CM6Ba7kI00fn3ll8+m7gk7hKmUaHoVSApGPWHoPJDm0Ez0Oytd5gDO+oSRbeSgmv30GzpknbwSFVtuWglMZVVVMqDi5UJS5R6A94oIhT8f6MNFS8Oje/CcaBs0ZmtUHVckFmuqau3YnGvQYeQmM1j8sMl/lcZ1ZdfOakEvIM8JTng9+A8eJw4x4LPxT1BSvBHO6tNGHct3IGWcVr/Bvhfj7uDFWt4xx3XNCq6XBRHTAlZOPp4HpJm4l7kPFLYLXiM1RxpfJd0GfDGCWTr2yYmH7+XzK+kf/m+rTYkVHjrXYMD7sVx2NcMt7u1WJPNNnWgatC/HEsmg41fiWsnQr//lg13W2cxjhVVr9r/346mQkCfwUYACzE4s6QiHG6AAAAAElFTkSuQmCC'/></span>
            <input 
             onChange={this.handleChange}
            onKeyup={this.handleKeyUp}
            type="text" placeholder='请输入搜索关键字'
            ref={this.inputRef}
            />
          </section>
          <BtnWrap
          width='1px'
          radius='1px'
          onClick={this. handleClick}
          >
             取消
          </BtnWrap>
      </header>
      {this.state.arr.length>1?(
        <ul>
        {this.state.arr.map((value,key)=>{
          return(
           <Searchlist 
           width='1px'
           key={key}
           >
            {value}
         </Searchlist>
          )
        })}
   
     </ul>
      ):(
        <section className='hotsearch'>
        <h4>热门搜索</h4>
         <ul >
           {this.state.list.map((value,index)=>{
             return(
             <li className='hotitem' key={index}>{value}</li>
             )
           })}
         </ul>
      </section>
      )}
    
    
    </Search>
    )
  }
}

export default search
