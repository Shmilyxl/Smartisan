import styled from 'styled-components'

export const CHeader=styled.div`
   background: #1d1d1d;
   height:.5rem;
   position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 199;
    h1{
    margin:0;
    color: #fff;
    font-size: .18rem;
    line-height: .20rem;
    padding: .16rem 0 0;
    text-align: center;
    position: absolute;
    top: 0;
    left: .06rem;
    right: .06rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
` 
export const Empty=styled.div`
    text-align: center;
    position:relative;
    left: 0;
    right: 0;
    margin-top:40%;
    .img-container{
    width: .88rem;
    height: 1.14rem;
    margin: 0 auto;
    }
    img{
        width:100%;
    }
    h3{
        color: rgba(0,0,0,.15);
    margin: 25px 0 9px;
    font-size: .2rem;
    }
    p{
        font-size:.135417rem;
        text-align: center;
    color: rgba(0,0,0,.15);
    }
    .buy-btn{
    display: inline-block;
    width: 1.42rem;
    height: .40rem;
    line-height: .4rem;
    font-size: .125rem;
    font-weight: 700;
    margin-top:.2rem;
    }
   .login{
    box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
    background: #5e8bdd;
    background: linear-gradient(#6f94e8,#5178df);
    border-radius: 6px;
    text-shadow: 0 -1px 0 rgba(0,0,0,.15);
    color: #fff;}  
    .box-border{
        border:.01rem solid #ccc;
        margin-left:.1rem;
        border-radius: 6px;
        color:#000;
    }
`
