import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { WebView } from '@tarojs/components'
import './mine.scss'

export default class Mine extends Component {

    config = {
        navigationBarTitleText: '我的'
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (<WebView src='http://www.wuhuan.me' />
            // <View className='index'>
            //     <Text>欢迎来到我的页面！</Text>
                
            // </View>
        )
    }
}

