import React,{Component} from 'react'
import {Route,withRouter, Redirect,Switch} from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import  Smartisan from './smartisan/home' 
import {TableWrap} from './smartisan/styled'
import Classify from './Classify/classify'
import Cart from './cart/cart'
import Login from './login/login'
import Seach from '../components/Search/search'
import layoutAnimate from '@/hoc/layoutAnimate'
import Detail from './details/details'
import Map from './map/map'
@layoutAnimate
@withRouter
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
      currentItem:'home'
    };
  }
   static getDerivedStateFromProps(props){
     console.log(props)
    return{
    selectedTab:props.location.pathname.slice(7)
    }
   }
   render(){
      console.log(this)
   console.log(this.state.currentItem)
      return (  
      <Switch>
          <Route
          path='/index'
          children={()=>{
           return(
            <TableWrap style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#DD7069"
              barTintColor="white"
              hidden={this.state.hidden}
              prerenderingSiblingsNumber={0}
            >
              <TabBar.Item
                icon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG8SURBVHgB7dhNboJAFMDxB37EpUewN2hvUG8iG4nLnqDtDboz6gKP0BvUG9QjzBFca9TOJLxFEwYG5r0B4vsnRALE8AuazANAkiRJeoAiCFCWZdPz+ZzpXZWm6RsEiB1mUJfL5UfvPueH9svlMgHmWGEFKIwdxwYrQWGsOBaYAwpjw5HDaqAwFlwMhFWgkvv9/llwfLHdbjMgjuyJVaH0U9mbnc1m8xFF0XvBNaRPjgTmisJC4LxhdVEYN84L1hSFceIaw3xRGBeuEYwKhXHgasOoURg1rhaMC4VR4pxh3CiMCucEC4XCKHCVsNAozBdXulasQCkulOl2u+0tp5zWllZYg1V6yCpxVph+R/EK3URhBme9PytsPB4f9JihoLsd9V/haDtphSVJctK4l+v1+pRv7C9gqtL3MMf7GY1G87Jrh2UnDU5/mA12u53STxBaTq1WK+VyIekE3aUE1rcE1rcE1rcE1rcEVtDUjDbA1GAw8PruITTPzGu/enRQwJPXyOQDM83yrXM5/xT1yv4ELTeZTJzvwRmWD3UHaCczL33lY5RTtd8Er9frRRzHMwjbMU3Tb5AkSZKk//0B1TQrKVOVvjcAAAAASUVORK5CYII=' }}
                selectedIcon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7ZldTsJAEIBn7dZnj9B3NcETCMYHYzTqDbiCN/AGxhvgDTQaY4I/eAIw8i5H6LMF191iSyK47UJnKM18D6S0nc58zC5NtwAMwzAMwywLAcR0D+rBuu+/mu2vKGrsPHYGQAipcCKrQAXj5GJALU0m/Fd2UgCtNInwf7KTIuik0YWzZCeF0EijCueVnRSDL70GSFhlFfT0x2B6t4pjTCwggSKcJRvJYSPyRo1lSBc+pPPI7tx0wvjc03rgjzx9TxbBdGE4w7tQYRfZNIZYujDheWTTWELpQuZwhmzHJmvQxwZUc3rhDttlxfXWfbsJOaHo9ELCRcqm10SWnlsYQza9NqL0XMKYsmkOJGlnYQrZNBeCtJMwpWyas2Dp3Lel7mG9Ri1rKPqWlavDRtb3pFmW2ZiR9Gb77vkMkPntdFeXPFWDS6czO2yTjVHiHQgwnda5erOOuXTaKmwuYJUtEXmlrcKe9C5gBWQTjLSUsmk7xyqs50YLVgoVDuWwZTtD2g5u3z91Po72G+JbBPEOoTb0T3QJ5SGEkThPvkTrw1481y1YhQ1GOtke/1PK0gjrERhuPrRbLjFoa1plhYWrDgtXHRauOixcdVi46rCwK3qN6ATzfW6CfnCp6WR1WJDMp6VMBNR8X372j/cBlREUAg9pG1kP19QopULXGOcO6yRXUBLUGtyCI3O9W+of7zV16C4sFfW2dffSAoZhGIZhVoYf816Nh+pMFPAAAAAASUVORK5CYII=' }}
                title="首页"
                key="home"
                selected={this.state.selectedTab === 'home'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'home',   
                    currentItem:'home'
                  });
                  this.props.history.push(`/index/home`)
                }}
              >
                <Smartisan
                type='home'
                onclick={this.handleClick}             
                ></Smartisan> 
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgB7ZnNbcIwFMcNBITgUDZoOkHZoOkG9MK1jcSHuJUN2gnaG0IcAhO0GzRMULpBOgHpla/0b2RXKI1jCakm0PeTIn88m/jF8fM/hjGCIAiCIAhT5HQNPM+rLZdLO5fL1Xi53W777AhIdWwwGNj5fP4NTtk71cF6vb7u9XoByzBWmrFQKDwhsWPVfPaekTZ4gTuPdu/I1phhxAP2k2x5Td/EwWIWz2TesiybHcApDh6orbLpHDtaTtYxS2P/wOUk1Ac/P2BZM0RNnxkmiqJws9n4KnuqY8Vi8QGDPmciUAh8LNpHWXBdN0RyzQiCIE4BrQgejUYOQuutLEN1+K1Wa8Iyjk4E30G2ePF6ONrvdrvPsjwcDhtS/ZsCDzjE2Hyx3fxCJ4Jvk+rhmINk65iY0RdmGGzO/HKRHSfZ95JUuyI4q/xbERxq7FvNxg4E1vVcZUtdYxj0FJ0b8Xq8imOZ73Q6MwSPG7zvxr/JyuXyVGXThnsRGa9kGQJ4ovpqJQiCOHq0B6ZCKzqyDlvAa6lUclUazQQ4nd6Ou1qtRs1mM7FN6j6G/eqBxQ5z+L6Gc5BPZO/FTWqLxcIzKYJx/20ahmEfySypTapjGOy5wnQpM6vVqp60iRuizhSO0YHpsbGXCIYu/JJ5fmCKgBKwvyNSXHPIu0DVKXWNoWMfAaQe/xsJjtzLgoiOFyxjaEUwB2Hf4SlmKqxUKsEhQz1BEARBEET2+AZhlr/qKASNpAAAAABJRU5ErkJggg==' }}
                selectedIcon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEeSURBVHgB7ddPSsNAFMfxN3/iwo09Qt2r1BsE3LgRegQ9Qk/gEaQn0BvYRXGjQm5gwQt4hIArSScxg2CwNA7RQJjy/SxChjdv8QIz4ScCAAAA4C9UaMPLeTpOEntbv6ZNk3pzVTk7WT4vJDLBgV8vzu7rAadbSnnxvj48zbLcL74+jLmWoTk9P3p4XLWVrQS0DOuNkn3ta3d+YayZ1LsvZWim9M+rtrKWnuhSjyQCvQ0ci38NrLXKJTLBMyyVZPVBTrcU8g/rvi+HYq9Y2LWZKCUHMqDCuPlv9fBvaZqOrTM3Py6vSlaVyOx4+ZQJAAC9IS1tIi01SEsSAdJSp2bSEmkJAIAOSEubSEsN0pJEgLTUqZm0RFoCAAAAsCM+AZ5EmwjEAe4zAAAAAElFTkSuQmCC' }}
                title="分类"
                key="classify"
                selected={this.state.selectedTab === 'classify'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'classify',
                    currentItem:'classify'
                  });
                  this.props.history.push('/index/classify')
                }

              }
              >
              <Classify
           
              ></Classify>
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgB7ZnLUQJBEIabVxU3MYMxAjEDjEDNQA5QRXFQI1Az0ANFFRwgAzECCAEjkAzcIwce/oO7iuA+eu3ZBZ2vamt3ahtm/nn0dM8SWSwWi+WLDBmm1+uVZrNZeblcqlWFmcykVquNyDDGhLmCriDoGsXSxmsH12A+n983Go0JGcCIsFarVc7n808YHRViOsF1Ua/XxySMuLB2u62y2exwQ5QeIa/xZfo+gg5G7kR65PIkTC6X6+Gm3OIEja6i0aN1G4i/hPhbV3zJ/c0pCSI6Yt1ut4I1NfTKEHXkNxIQV4GgddvTzQ74DVkSBKLO14r9oOnlihh4ZYg8J0FEhYFj7wEiX8KMMUrP3vNisVAkiLSwT7B+HI491twBCWJMWNpYYfvGnxUmvUHfwNOtoopisRglTBrp/Us/wCuynM2/JVbk0el0rnC7o+2oXRoH28YD0px7YsIWpoNcRAmvlCBBoZkfbOeBdERR8ihiIh0rDgqFwqHuYfpIVUTs0ZnsqIQtDFmx8nsHz/ZYrVYdd9qMKISo9uiAQ2LCFoaYrhTw7kzf9TpEY8oU/l+R7PGO7aTiTEXfSuDBruEx37RziXAswLE3LwwNCKuE24hQ+wh1bsEWFmdaCGDeeaD3RPMmU4iuMYMoYrIv0X0ia0xR8uyEVzRBuvuYQcwK0x8aKCW4dbOETafT1IRx62YJQ+iTmjAuLGEpOQ4PxTHem1Mqbk7GEhaUi5mGm5OxhAXlYrsGdyqmJowb8eyN8+DWzRKWUi4WC5YwHL70ySxLvwsnWQ+M/4l3YIpbhRIEHTpuNptRvgVYLBaL5UfeAWeL6tgW6zwZAAAAAElFTkSuQmCC' }}
                selectedIcon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgB7ZpfUhNBEMa/3h18kjI3cHm1wJITGLCo8kEkegHkBOAJlBMoJwAvoKmCR8BwAtBSXllvsFU8SbLbzgRDEv5kZyd2ssj8qrYymcxm50vv9HT3BvB4PB6PpzQQRsRhtVpR99UTIiwBXPl7+SRjPni8s1fHiBiJ4OOXC6ta2HvdrODaSVDMSNent/e3IIyoYGPViUn1RTerNuP1ZOpnp62V2UYjgRAKgqjJcBNXxHJCCBJmTkAcaZkXVmegpn8g834OQohZ+Mfi/Bsg2Oz2cMxMKzM7u42r4+idPqKe7rfT27sfIYCY4J+LCycMY0EDx80wnZutN+Lrxh7WqtFEGn7tEZ00T1tTErd2AAG+v3hW64o18PpNYg3mM2P9nq62R4cAIoKpf90mNt63pVpHZn13v4NqEEBEMPduP4zY5hxt5bYzu+ig7AEEEBHcB8F6HWrPHUMYecElwwv+37lzgkVCS72lbCGlhmlnQWbvtIB1SulTux3YeXdPDkOFludpXyYSEd0MHwyTRjoL1kH/mnYBHzAenJMLd6fFwRLGBWMZjjgLJqJo4ABGo30UghOddNRNdoXB167AEaFtibemd3bnzKHDxQ3Lc0wKOTuzvffKpJIQwllwf/p3iZQPum/IskBH3zoppHk1dS64XDsHGQuHwbKpZ7XbxKuWZz09fF6NTMN4/2FEDcLJS59XKNRJzrBOwFFovZ1XMPPFBhNZ9Ojz/i8UxC3SOtMiwtxRTo5FyrIdnG5pFShnL/mvSM+CKThwa5OH8OLpRTGcBFNGEcZMlo1Q8G3GSTAHso7Fbg5BBAe8hW2Q3jpsIOKHcMDNaRFEasajwE0w09j34UsP36zxa9iG3Fx4BOiYO4ID3sI2lMFLu87BWzgPkwujJBy/ni+8F3sL56FaKkJJcMmJvYXzKEMu3MGlCFBYcPNes97755PxwfFvlR6hIM5VS9UK18aZROhi/YauXxcW7PF4PB5PifgDcsP3A037L2wAAAAASUVORK5CYII=' }}
                title="购物车"
                key="cart"
                selected={this.state.selectedTab === 'cart'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'cart',
                  });
                  this.props.history.push('/index/cart')
                }
              }
              >
                <Cart></Cart>
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALqSURBVHgB7ZlNjtpAEIULBhBLIg4Qj8Q+vkEgJ5hs2AISAiEWSU6Q5ARMFgjxozDkAjM5AdxgZskqcU4wI1ZI/OVVZJSIKNimn4kX/iQLS1SDn7uquqpbJCYmJibmNwk5E+PxOLder+3dbmclEgknlUo91Gq1JwmJ0IQNh8MiRLzArY3Lcj9zf9rg+7uLi4tJvV6/EzJ0Yd1u106n0x3cFgMMcyDyXbPZpAlMCpHRaFSBqHsJJkpR93wvRGjC+v3+1Xa7vZHTsXu9XlFIMGesI4Ykk8mikEgJgcFgsE8QRsAdXwoJyozhgXLCwRYSFGFYnyzhkHNn3xiKMMSGJTyiI4wJ1jOKW0ctxpToCGO9ZQUv6bkQMC6psKhaqPe02mCJe0L1cmlaIBvPGKp0S3iilNxyuTROIMbC4Ib01gMeYPyblOoea8+j8GbNaTQal2IIK3l8Eh4zIUARlslkriHOEXOczWbzUQhQhGkGQ8tSwq1JbDir1ep1q9VyhACt8tAHMnFJjJ202+0HIUEtqdQl5bRZcwyb1L+gClOXxJsPHCM60ywX3BPKLhXS/1T873tQ0vshoVT3yGy1ALYlCYFQhLluNfOyQ1x9ZbvgntD6McTNDy8bVPK0LHhIaML8tB/MzZtDQhGmrYz4Sx62a0uHLkwPH1Cd3/o0/2WrY4QMVZgeRKAs0lQfpJ+yMeZexwoRSgeNZrOCDFdFzFhihoPrGkuAcbY8SZi6DrrcK7hRRYIfQPhlhm29GxwxTeQEAglzD+/eIJW/Fe52wDEcCPyA//xSKBR2pZK/9dy3MD33gsvdEtztVLRXe5XP57+Xy2VPY1/Jwz33mv5HUYruhn1bLBbV6XTqaewpTJMDEoO2I+dyvaPgWTrz+dyzaPYUpv4tERHlomvfZ8TcUaOjMabJAmvMo0QQNLXPqtXqP5vaozMGUZZEFCw3R72IcqJJZOfXECFyujBkQgdvxnfTeE6y2awjMTExMTE++QnAvhHGQUzicQAAAABJRU5ErkJggg==' }}
                selectedIcon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMRSURBVHgB7ZpNThRBFMf/VdWNCSFmPIHDWjQzJ7DAWRjDV7yAHEFPAJyAcAKHG4zCwgXIeIIhcXDr3EASdlRPPav4iMQg09P9ngyhf7tJumvqn/f6fVUBFRUVFRUVE4PCHfB9sWWVwgpAtbCFE0/0bZgNj5pfugMIIy64t2obUz5ZAaER/q5B5yJRw82b6XjC9vO9/S6EEBPce23rSWq2FNQqxiS8Mzhzbl7C4hoCRLFTaXpYRGwkeEE9TZOPEIDdwldi46ZREneaPWl2uydghN3C0Y05xEbSaV3IQ26DVXAIULWibnwjRr0EM6yCkyxpgBEFbcEMq2DlVR2MxE+jZ20NjLAKJs3z7V7n0YyxYEQkLXHiPU2whcFvYdK6DkYm3sJK0VMwMvGCuWGrtGKFFcrBHv7RGJTgJFRcs1wVF5uFU51a8IuN1Dgrrnvh0lortnqaTbCDO4IQ3usBmGDtlvpLr36FJZndmgZzuwezYII3D5PaBju0CUbY++H+cqt3Mc5hgHA0t7ffBCPsQcvpbD5stIuyBLEuCWsxwy642Qn5UvkdlEX57fO1mBEb4vUXW4dhdYtC8Aaq64jlYQIKB5swqv0AIcQEx9kyERWI2tR+sXfQgRCilVaWDDeie+Z/gwbODFnT0N+ICr4IOuPkZtoM7wwgiHgt7UyW2z3dqRdz5SseXD8sLthkJnfVlczwjnlvQlxwaO3W8z4bjlBzP1sUUcHHi631Metqe7zcEhUtUmnF4Xn6OIli36MQ1HZuuClxXMo304oip9NVGHoXflowEA/ICf7T3O7XNpgoLfjP9QWsQWamFQn5nDqh394pezugsOD+0sJaCAFs1sxNaBtjJ1XU6mMLPrcosBXeFE8ht1H0WsRYUTpG3eC+h3ctNnJ5LeLnuFE9t4WjWFLYwAQSjLDx7PN+rqYjl+DL71XkkgkXRJjPE9ByubSCEa+AypK3ShspuPfGNiSOQQWwP94ujDxpHCnYaFPHfeFMjRzpjhSsvZYqJu6EZNQDzrtuakwb9wDOM6iKioqKior/wG+ZCf8NMUBqgwAAAABJRU5ErkJggg==' }}
                title="个人中心"
                key="my"
                selected={this.state.selectedTab === 'my'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'my',
                  });
                  this.props.history.push('/index/my')
                }
              }
              >
                <Login></Login>
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJrSURBVHgB7ZnLUQJBEIabVxU3MYMxAjEDjEDNQA5QRXFQI1Az0ANFFRwgAzECCAEjkAzcIwce/oO7iuA+eu3ZBZ2vamt3ahtm/nn0dM8SWSwWi+WLDBmm1+uVZrNZeblcqlWFmcykVquNyDDGhLmCriDoGsXSxmsH12A+n983Go0JGcCIsFarVc7n808YHRViOsF1Ua/XxySMuLB2u62y2exwQ5QeIa/xZfo+gg5G7kR65PIkTC6X6+Gm3OIEja6i0aN1G4i/hPhbV3zJ/c0pCSI6Yt1ut4I1NfTKEHXkNxIQV4GgddvTzQ74DVkSBKLO14r9oOnlihh4ZYg8J0FEhYFj7wEiX8KMMUrP3vNisVAkiLSwT7B+HI491twBCWJMWNpYYfvGnxUmvUHfwNOtoopisRglTBrp/Us/wCuynM2/JVbk0el0rnC7o+2oXRoH28YD0px7YsIWpoNcRAmvlCBBoZkfbOeBdERR8ihiIh0rDgqFwqHuYfpIVUTs0ZnsqIQtDFmx8nsHz/ZYrVYdd9qMKISo9uiAQ2LCFoaYrhTw7kzf9TpEY8oU/l+R7PGO7aTiTEXfSuDBruEx37RziXAswLE3LwwNCKuE24hQ+wh1bsEWFmdaCGDeeaD3RPMmU4iuMYMoYrIv0X0ia0xR8uyEVzRBuvuYQcwK0x8aKCW4dbOETafT1IRx62YJQ+iTmjAuLGEpOQ4PxTHem1Mqbk7GEhaUi5mGm5OxhAXlYrsGdyqmJowb8eyN8+DWzRKWUi4WC5YwHL70ySxLvwsnWQ+M/4l3YIpbhRIEHTpuNptRvgVYLBaL5UfeAWeL6tgW6zwZAAAAAElFTkSuQmCC' }}
                selectedIcon={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgB7ZpfUhNBEMa/3h18kjI3cHm1wJITGLCo8kEkegHkBOAJlBMoJwAvoKmCR8BwAtBSXllvsFU8SbLbzgRDEv5kZyd2ssj8qrYymcxm50vv9HT3BvB4PB6PpzQQRsRhtVpR99UTIiwBXPl7+SRjPni8s1fHiBiJ4OOXC6ta2HvdrODaSVDMSNent/e3IIyoYGPViUn1RTerNuP1ZOpnp62V2UYjgRAKgqjJcBNXxHJCCBJmTkAcaZkXVmegpn8g834OQohZ+Mfi/Bsg2Oz2cMxMKzM7u42r4+idPqKe7rfT27sfIYCY4J+LCycMY0EDx80wnZutN+Lrxh7WqtFEGn7tEZ00T1tTErd2AAG+v3hW64o18PpNYg3mM2P9nq62R4cAIoKpf90mNt63pVpHZn13v4NqEEBEMPduP4zY5hxt5bYzu+ig7AEEEBHcB8F6HWrPHUMYecElwwv+37lzgkVCS72lbCGlhmlnQWbvtIB1SulTux3YeXdPDkOFludpXyYSEd0MHwyTRjoL1kH/mnYBHzAenJMLd6fFwRLGBWMZjjgLJqJo4ABGo30UghOddNRNdoXB167AEaFtibemd3bnzKHDxQ3Lc0wKOTuzvffKpJIQwllwf/p3iZQPum/IskBH3zoppHk1dS64XDsHGQuHwbKpZ7XbxKuWZz09fF6NTMN4/2FEDcLJS59XKNRJzrBOwFFovZ1XMPPFBhNZ9Ojz/i8UxC3SOtMiwtxRTo5FyrIdnG5pFShnL/mvSM+CKThwa5OH8OLpRTGcBFNGEcZMlo1Q8G3GSTAHso7Fbg5BBAe8hW2Q3jpsIOKHcMDNaRFEasajwE0w09j34UsP36zxa9iG3Fx4BOiYO4ID3sI2lMFLu87BWzgPkwujJBy/ni+8F3sL56FaKkJJcMmJvYXzKEMu3MGlCFBYcPNes97755PxwfFvlR6hIM5VS9UK18aZROhi/YauXxcW7PF4PB5PifgDcsP3A037L2wAAAAASUVORK5CYII=' }}
                title="地图"
                key="map"
                selected={this.state.selectedTab === 'map'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'map',
                  });
                  this.props.history.push('/index/map')
                }
              }
              >
                <Map></Map>
              </TabBar.Item>
            </TabBar> 
          </TableWrap>
           
         )  } }
          />
          <Route
          path='/search'
          children={()=>{
           return <Seach></Seach>
          }}
          />
          <Route
          path='/details/:id'
          render={()=>{
           return <Detail></Detail>
          }}
          />
          <Redirect
          from='/'
          to='/index/home'
          />
        </Switch>
        )
      }
    }

export default Layout

