import styled from 'styled-components'
import border from '../../components/styled/border'
export const LoginWrap =styled.div`
 background:#E7E7E7;
`

export const LoginlistWrap =styled.div`
   padding:.14583rem .12500rem .02380rem;
   .box-user-info{
    padding:0 0 0 .90625rem;
    height:.8645rem;
    line-height:.8645rem; 
    font-size:.16708rem;
    background:#fff;
    border-radius:.1rem .1rem 0 0;
    position: relative;
    :after{
        content:'';
        width:.07rem;
        height:.07rem;
        position:absolute;
        right:.15rem;
        top:45%;
        border-top:.015rem solid #333;;
        border-right:.015rem solid #333;;
        border-bottom:transparent;
        border-left:transparent;
        transform:rotate(45deg)
    }
   }
   .menu-list-parallel{
       display:flex;
       justify-items:center;
       border-radius:0 0 .1rem .1rem ;
   }
   .common-box{
       margin-bottom:.14583rem;
       background:#fff;
   }
   .img_wrap{
       position:absolute;
       left:0;
       top:0;
       width:.14583rem;
       height:100%;
       background:blue;
   }
   .common-ul{
       margin-bottom:.14583rem;
       border-radius:.1rem;
       background:#fff;
   }
`

export const MenuliWrap=border(styled.li`
      height:.6238rem;
      flex:1;
      text-align:center;
      position: relative;
      p{
          font-size:.1rem;
          padding-top:.41667rem;
      }
`)
export const ListWrap=border(
    styled.li`
      height:.6238rem;
      font-size:.1777rem;
      color:#000;
      padding:0 .2rem;
      line-height:.6238rem;
      font-weight:400;
      position:relative;
      font-family: Helvetica Neue,Helvetica,Arial,SCREEN GP Sans SC,sans-serif;
      :after{
        content:'';
        width:.07rem;
        height:.07rem;
        position:absolute;
        right:.15rem;
        top:45%;
        border-top:.015rem solid #333;;
        border-right:.015rem solid #333;;
        border-bottom:transparent;
        border-left:transparent;
        transform:rotate(45deg)
    }
`
)