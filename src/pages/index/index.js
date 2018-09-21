import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick=(e)=>{
    console.log("okay")
    Taro.redirectTo({
      url: '/pages/mine/mine'
    })
  }



  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.onClick}>跳转到我的页面</Button>
      </View>
    )
  }
}

