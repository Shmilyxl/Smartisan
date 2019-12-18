import styled from 'styled-components'
import border from '../../components/styled/border'

export const DetailsWrap =styled.div`
 .revert{
    position:absolute;
    left:.06rem;
    top:.1rem;
    z-index:999;
    background: linear-gradient(#131313,#070707);
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    font-size:.12rem;
    width:.54rem;
    height:.30rem;
    padding:.05rem .05rem 0 .15rem;
 }
 .revert:before{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAADACAYAAADm+lhNAAAABHNCS…BpkuaDJ4HT8vRwoxJn4ee/a7Ztq2apwhSmMIUpTGH/FfY3OSO/FGCrLwoAAAAASUVORK5CYII=) no-repeat;
    background-size: cover;
    content: " ";
    height: 100%;
    width: 6px;
    position: absolute;
    top: 50%;
    left: 9px;
 }
 .bottom_tag{
     width:100%;
     position:fixed;
     bottom:0;
     left:0;
     display:flex;
     height:.605rem;
     align-content: center;
    justify-content: space-between;
    background: #fff;
    padding: 0 .4%;
    z-index: 202;
    box-shadow: 0 -11px 27px rgba(0,0,0,.08);
    align-items:center;
 }
 .img_wrap{
  width:.52075rem;
  padding:0 .026rem;
  
 }
 .img_wrap>div{
  padding:.729167rem .11975rem
 }
 img{
     width:.2813rem;
     height:.2813rem;
 }

 .cartbtn{
     height:.3957rem;
     flex:1;
     color: #fff;
    background: #5f7ed7;
    background: linear-gradient(#6e98f4,#4b77ee);
    text-align:center;
    line-height:.3957rem;
    margin:.02600rem .026000rem;
    font-weight:700;
    border-radius:.1rem;
    font-size:.14rem;
 }
`
export const BuybtnWrap =border(styled.div`

    height:.3957rem;
    flex:1;
    text-align:center;
    line-height:.3957rem;
    border-radius:.05rem;
    margin:.02600rem .026000rem;
    color: #8c8c8c;
    font-weight:700;
    font-size:.14rem;
`)