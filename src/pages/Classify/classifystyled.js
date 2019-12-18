import styled from 'styled-components'
import border from '../../components/styled/border'

export const ClassifyWrap=styled.div`
.contain{
    display:flex;
    justify-content: space-between;
    height:5.64rem;
    background:#fff;
    overflow:hidden;
}
.rightWrap{
    flex:1;
    overflow-y:scroll;
    flex-wrap: wrap;
}

`
export const LeftWrap=border(styled.div`
.leftWrap{
    width:.9rem;
    height:100%;
}
.leftWrap .first-list{
    padding:.26125rem .0625rem 0 .0625rem;
    height:100%;
}
.leftWrap .first-list li{
    margin-bottom:.16708rem;
    padding:.03333rem .083333rem .02917rem .083333rem;
    text-align:center;
}
.active{
    color: #d44d44;
    background: #f6ebea;
    border-radius: .05rem;
    font-weight:700;
}

`)

export const ListWrap=border(styled.div`

.second-and-third-list h1{
    color: rgba(0,0,0,.8);
    font-size: .16666rem;
    font-weight: 700;
    line-height:.4080rem;
    margin-left: .18888rem;
}
.list-flex-wrap{
    padding:0 0 .166667rem;
    display:flex;
    align-content: flex-start;
    justify-content: flex-start;
    padding: 0 .08rem;
    flex-wrap: wrap;
}
.flex-item{
    flex: 0 0 33.333%;
    padding: 0 .015rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: .1666667rem;
}
.img-cover{
    width:.85555rem;
}
.img-cover img{
    width:100%;
}
.title {
    color: #333;
    text-align: center;
    font-size: .104167rem;
    font-weight: 700;
    margin-top: .05280rem;
    text-align:center;
}
.text-ellipsis {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`)

export const BannerWrap =border(styled.div`
   padding:.18750rem .125rem;
   img{
      width:100%;
      border-radius:.1rem;
   }


`)