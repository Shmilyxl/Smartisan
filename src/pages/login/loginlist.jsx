import React,{Component} from 'react'
import {LoginlistWrap} from './styled'
import {MenuliWrap,ListWrap} from './styled'
class loginlist extends Component {
  render () {
    return (
      <LoginlistWrap>
          <section className=' box-user-info'>
              <div className='img_wrap'>
                  <img src="../../assets/images/default-user-avatar.png" alt=""/>
              </div>
                  登陆/注册
          </section>
          <ul className='common-box menu-list-parallel box-order'>
              <MenuliWrap
              width='0 1px 0 0'
              ><p>全部订单</p> </MenuliWrap>
               <MenuliWrap
              width='0 1px 0 0'
              ><p>待付款</p> </MenuliWrap>
               <MenuliWrap
              width='0 1px 0 0'
              ><p>待收获</p> </MenuliWrap>
               <MenuliWrap
              width='0 1px 0 0'
              ><p>售后</p> </MenuliWrap>
          </ul>
          <ul className='common-ul menu-list-vertical'>
              <ListWrap
              width='0 0 1px 0'
              >地址管理</ListWrap>
              <ListWrap
               width='0 0 1px 0'
              >我的优惠券</ListWrap>
              <ListWrap
               width='0 0 1px 0'
              >优惠购买码</ListWrap>
          </ul>
          <ul className='common-ul menu-list-vertical'>
              <ListWrap
              width='0 0 1px 0'
              >零售门店</ListWrap>
              <ListWrap
               width='0 0 1px 0'
              >以旧换新</ListWrap>
              <ListWrap
               width='0 0 1px 0'
              >常见问题</ListWrap>
                 <ListWrap
               width='0 0 1px 0'
              >服务支持</ListWrap>
          </ul>
          <ul className='common-ul menu-list-vertical'>
              <ListWrap
              width='0 0 1px 0'
              >意外碎屏保险</ListWrap>
              <ListWrap
               width='0 0 1px 0'
              >延长保修服务</ListWrap>
          </ul>
      </LoginlistWrap>
    )
  }
}

export default loginlist