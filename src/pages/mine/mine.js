import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Map, Image } from "@tarojs/components";
import BottomTabBar from "../../components/TabBar/BottomTabBar";
import "./mine.scss";
import namedPng from "../../assets/images/001.jpg";

export default class Mine extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='mine'>
        <Text>欢迎来到我的页面！</Text>
      </View>
    );
  }
}
