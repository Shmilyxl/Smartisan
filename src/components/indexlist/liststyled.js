import styled from 'styled-components'

export const TwolistWrap = styled.div`
    position: relative;
    padding-top: .07rem;
    :before{
    position: absolute;
    content: "";
    top: 0;
    left: .06rem;
    width: calc(100% - .12rem);
    border-top: 1px dotted #e9e9e9;
    }
.headline-wrap{
    position: relative;
    padding: 0 0 .14rem .21rem;
    cursor: pointer;
}
.headline-wrap>h3{
    font-size: .164rem;
    font-weight: 700;
    color: rgba(0,0,0,.8);

}
.common-flex-box.flex-two .flex-item{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40%;
    flex: 0 0 40%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left:0 0 0 .069rem;
}
.common-flex-box .flex-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-right: .03rem;
}
.guesslike-wrap {
    margin: 0 auto;
    height: 100%;
    overflow: scroll;
    padding:0 .1168rem;
}
.common-flow-layout {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.sku-item-normal-box{
    position: relative;
    width: 100%;
    background: #fff;
    border-radius: .04rem;
    overflow: hidden;
    cursor: pointer;
}
.common-flow-layout .flow-item{
    flex: 0 0 calc(50% - 0.15rem);
    margin-bottom: .148rem;
    margin-left:.1rem;
}
.flex-item{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 40%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right:.2rem;
}
.item-cover {
    margin:0;
    overflow: hidden;
}
.item-cover img{
    width:100%;
}
.sku-item-normal-box .item-title {
    padding: .069rem 0 .0230rem;
    height:.2rem
}
.sku-item-normal-box .item-title h3{
    font-weight: 600;
    line-height: .1rem;
    color: rgba(0,0,0,.7);
    width: 100%;
    margin: 0;
    height:.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.item-bottom-info{
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 .03rem;
}
.item-bottom-info .item-price{
    font-family: Arial;
    font-size: .151rem;
    font-weight: bolder;
    color: #d44d44;
}
.item-price .yuan {
    font-size: .12rem;
}
.item-price .orignal {
    position: relative;
    margin-left: 5px;
    font-size: .121rem;
    color: #ccc;
    font-weight: 400;
    text-decoration:line-through;
}
.item-promotion-tags .tag{
    position: relative;
    display: inline-block;
    padding: .012rem .04rem .01rem;
    border-radius: .06rem;
    font-size:.1rem;
    font-weight:700;
    color: #d56159;
    background: #f6ebea;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
`