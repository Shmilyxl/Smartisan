import styled from 'styled-components'
import border from '../../components/styled/border'
export const HeaderWrap = styled.div `
  display:flex;
 justify-content:center;
 background:#fff;
 box-sizing: border-box;
 .logo{
    width: .45rem;
    height: .45rem;
    background:red;
 }
`

export const SearchWrap =border(styled.div`
    box-sizing:border-box;
    position: sticky;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 6;
    padding: .0833333rem;
    background:#fff;
    section{
        padding:0.06rem 0.08rem;
        background: #f5f5f5;
        border-radius: 0.155rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .search_icon{
        flex-shrink: 0;
        width: .075rem;
        height: .075rem;
        margin-top: 1px;
    }
    .search_val{
        color: #b3b3b3;
    font-size: .12rem;
    margin-left: .08rem;
    }
`)

export const IndexWrap =styled.div`
    padding-top:.16666666rem;
.floor-banner-wrap-inner{
    width: calc(100% - .012rem);
    height: auto;
    margin: 0 auto;
    display:flex}
.floor-banner-wrap-item{
    margin:0 .15rem;
    width: 100%;
    height: inherit;
    overflow: hidden;
}
img{
  width:100%
}

`
export const TableWrap=styled.div`
  .am-tab-bar-bar{
      padding:0 .39rem;
      height:.56rem;
  }
  .am-tab-bar-tab-icon img{
    width:.27rem;
    height:.27rem;
  }
  .am-tab-bar-tab-title{
      font-size:.105rem;
      font-weight:700;
      color:#DD7069;
  }
`
export const ItemWrap =styled.div`
 overflow-x:scroll;
 position: relative;
 margin-top:-.2rem;
 margin-bottom:.08rem;
 ul{
    display:flex;
    margin-left:.15rem;
    margin-right:.15rem;
 }
 li{
     width:1.5rem;
     padding-right:.0625rem;
 }
 .img_wrap{
     border-radius:.1rem;
     background:#F7F7F7;
 }
 img{
    width:1.5rem;
 }
.item_title{
    margin: .03rem 0 .01rem;
    padding: 0 .03rem;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: .41663rem;
    text-overflow: ellipsis;
    overflow: hidden;
}
.item_title h3{
    font-family: Helvetica Neue,Helvetica,Arial,SCREEN GP Sans SC,PingFang SC,Hiragino Sans GB,Microsoft Yahei,微软雅黑,STHeiti,华文细黑,sans-serif;
    font-size: .1395rem;
}
.item_info{
    display: flex;
    padding: 0 .0625rem;
}
.left{
  flex:2;
}
.right{
 width:.64388rem;
}
span{
   font-size: .1265rem;
   color: #d44d44;  
}
.price{
    font-family: Arial;
    font-size: .161rem;
    font-weight: bolder;
    color: #d44d44;  
}
.tag{
    position: relative;
    display: inline-block;
    padding: .012rem .04rem .01rem;
    border-radius: .06rem;
    width:100%;
    text-align:center;
    color: #d56159;
    background: #f6ebea;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

`

export const BannerWrap =border(styled.div`
    width: calc(100% - 0.12rem);
    border-top: 1px dotted #e9e9e9;
    padding-left:.15rem;
    padding-bottom:.033333rem;
    border-bottom: 1px dotted #e9e9e9;
    figure{
        width: 100%;
        margin-left:0;
    }
    img{
      width:100%;
    }
`)

export const SwiperWrap =border(styled.div`
   height:0;
   font-size:0;
   padding:0.1833333rem .15rem 0 .15rem;
   padding-bottom:50%;
   margin-top:-.1rem;
   .am-wingblank-lg{
       margin:0;
    }
    `)

