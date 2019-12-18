import React,{Component} from 'react'
import {Router,withRouter, Redirect} from 'react-router-dom'
import {SearchWrap} from './styled'
@withRouter

class search extends Component {

  handleClick=()=>{
    this.props.history.push('/search')
  }
  render () {
    console.log(this);
    
    return (
      <SearchWrap
      width='0 0 1px 0'
      onClick={this.handleClick}
      >
          <section>
              <aside className='search_icon'></aside>
              <aside className='search_val'>请输入搜索关键字</aside>
          </section>
      </SearchWrap>
    )
  }
}

export default search