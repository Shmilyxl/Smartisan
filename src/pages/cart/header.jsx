import React,{Component} from 'react'
import { CHeader} from './styled'
class header extends Component {
  state={
      title:'购物车'
  }
  componentDidMount(){
      this.setState({
        title:this.props.title
      })
  }
  render () {
      console.log(this);
      
    return (
      <CHeader>
          <h1>{this.props.title}</h1>
      </CHeader>
    )
  }
}

export default header
