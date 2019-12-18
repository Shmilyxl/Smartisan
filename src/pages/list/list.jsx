import React,{Component} from 'react'

import { List } from 'antd-mobile';

import Swiper from './Swiper'
import Banner from './banner'
import Main from '../../components/indexlist/indexlist'
const Item = List.Item;
const Brief = Item.Brief;
class list extends Component {
    state = {
        disabled: false,
      }
    render() {
        return (<div>
          <List className="my-list">
             <Swiper></Swiper>
             <Banner></Banner>
             <Main></Main>
          </List>
        </div>);
      }
    }

export default list


