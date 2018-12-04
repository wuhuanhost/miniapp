import Taro, { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { View, Text } from "@tarojs/components";
import "./bottom-tab-bar.scss";

export default class BottomTabBar extends Component {
  config = {
    navigationBarTitleText: "我的页面",
    tabBar: [
      {
        title: "首页",
        id: 1,
        url: "/pages/index/index",
        icon: "",
        iconisActive: ""
      },
      {
        title: "我的",
        id: 2,
        url: "/pages/mine/mine",
        icon: "",
        iconisActive: ""
      }
    ]
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  switchTabbar(url, e) {
    console.log(e);
    Taro.switchTab({
      url: url
    });
  }

  render() {
    var isActiveId = this.props.isActive;

    function getActive(id) {
      return parseInt(isActiveId) === parseInt(id) ? "active" : "";
    }

    return (
      <View className='bottom-tabbar-container'>
        {this.config.tabBar.map(item => {
          return (
            <View className='tab-bar-item' key={item.id} onClick={this.switchTabbar.bind(this, item.url)}>
              <View className='icon'> </View>
              <View className={["title", getActive(item.id)]}>
                <Text>{item.title}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

BottomTabBar.defaultProps = {
  isActive: 1
};

BottomTabBar.propTypes = {
  isActive: PropTypes.string
};
