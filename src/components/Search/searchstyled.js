import styled from 'styled-components'
import border from '../styled/border'
export const Search =styled.div`
 header{
    position: fixed;
    top: 0;
    left: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
     height:.5rem;
     background-color: #f5f5f5;
     box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
     padding: .09583rem 0 .1rem .06250rem ;
     z-index: 205;
    display:flex;
 }
 .intWrap{
     flex:1;
     background:#fff;
     border-radius: .25rem;
     position:relative;
 
 }
 .intWrap>span{
    position: absolute;
    left: 0;
    top: 0;
    padding:.03rem 0 0 .1rem;
 }
 .intWrap>span>img{
     width:.15rem;
 }
 .intWrap input{
    width:100%;
    height:100%;
    background-color: transparent;
    border: none;
    border-radius: .25rem;
    padding:0 .31250rem;
    opacity: .7;
    box-shadow:3px 2px 3px  rgba(0,0,0,.1);
    font-size:.14rem;
 }
  
  .hotsearch{
      margin-top:.5rem;
      padding:0 .14167rem;
  }
  .hotsearch>h4{
    font-size: .145833rem;
    line-height: .152rem;
    color: #8e8e8e;
    font-weight: 400;
    padding: .25rem 0 .15625rem .0729167rem;
  }
  .hotitem{
    position: relative;
    font-size: .13rem;
    font-weight: 700;
    height: .3rem;
    line-height:.3rem;
    display: inline-block;
    padding: 0 .16rem 0;
    opacity: 1;
    -webkit-transition: opacity .15s ease-out;
    transition: opacity .15s ease-out;
    text-align: center;
    border-radius: .2rem;
    color: #696969;
    margin: 0 4.16px 8.33px 0;
    color: #e78612;
    background-color: #fff7e4;
  }
  .hotitem:nth-child(1){
    color: #cd3f36;
    background-color: #ffe7e5;
  }
  .hotitem:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -42.85714%;
    left: 0;
    right: -42.85714%;
    border: 1px solid #ffca6d;
    border-radius: 1.8rem;
    -webkit-transform: scale(.7);
    transform: scale(.7);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.hotitem:nth-child(1):before{
    border: 1px solid #f1948c;
  }
` 
export const BtnWrap=border(styled.div`

    position: relative;
    font-size: .14rem;
    font-weight: 700;
    width: .6249rem;
    height: .3103rem;
    line-height: .3103rem;
    text-align: center;
    margin-left:.12500rem;
    margin-right:.125rem;
    color: #626262;
`)
export const Searchlist=border(styled.li`
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .166667rem;
    height: .528remrem;
    line-height: .528rem;
    padding: 0 .1875rem 0;
    color: #333;
`)