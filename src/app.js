import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./app.scss";
import BottomTabBar from "./components/TabBar/BottomTabBar";
import Index from "./index/index";

class App extends Component {
  config = {
    pages: ["pages/home/home", "pages/mine/mine"],
    tabBar: {
      color: "#8a8a8a", //底部bar字体颜色
      selectedColor: "#1296db", //字体选中颜色
      backgroundColor: "#FFF", //bar整体背景颜色
      borderStyle: "#EEE", //bar上方border颜色
      list: [
        {
          pagePath: "pages/home/home",
          text: "首页",
          iconPath: "./assets/images/icon_home.png",
          selectedIconPath: "./assets/images/icon_home_active.png"
        },
        {
          pagePath: "pages/mine/mine",
          text: "我的",
          iconPath: "./assets/images/icon_user.png",
          selectedIconPath: "./assets/images/icon_user_active.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <View style='width:750px;height:1134px'>
        <View style='width:750px;height:800px;background:red'>
          <Index />
        </View>
        <View style='width:100%;height:20%;'>
          <BottomTabBar isActive='2'> </BottomTabBar>
        </View>
      </View>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
