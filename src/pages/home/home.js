import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Map } from "@tarojs/components";
import "./home.scss";
import iconLocation from "../../assets/images/icon_location.png";

export default class Home extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      markers: [],
      direction: 0,
      angle: ""
    };
  }

  componentWillMount() {
    //用户授权
    Taro.authorize({
      scope: "scope.userLocation"
    }).then();
    var _this = this;

    //方向方向
    Taro.onCompassChange(res => {
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
      console.log(res.direction);

      switch (true) {
        case res.direction < 22.5:
          this.setState({
            angle: "北"
          });
          break;
        case 22.5 < res.direction && res.direction < 67.5:
          this.setState({
            angle: "东北"
          });
          break;
        case 67.5 < res.direction && res.direction < 112.5:
          this.setState({
            angle: "东"
          });
          break;
        case 112.5 < res.direction && res.direction < 157.5:
          this.setState({
            angle: "东南"
          });
          break;
        case 157.5 < res.direction && res.direction < 202.5:
          this.setState({
            angle: "南"
          });
          break;
        case 202.5 < res.direction && res.direction < 247.5:
          this.setState({
            angle: "西南"
          });
          break;
        case 247.5 < res.direction && res.direction < 292.5:
          this.setState({
            angle: "西"
          });
          break;
        case 292.5 < res.direction && res.direction < 337.5:
          this.setState({
            angle: "西北"
          });
          break;
      }

      this.setState({ direction: res.direction });
      // const mapCtx = Taro.createMapContext("myMap"); //通过地图id创建地图对象

      //旋转某个marker
      // mapCtx.translateMarker({
      //   markerId: 1,
      //   destination: {
      //     latitude: this.state.latitude,
      //     longitude: this.state.longitude
      //   },
      //   autoRotate: false,
      //   rotate: res.direction
      // });
    });

    //获取位置信息
    Taro.getLocation({ type: "gcj02" }).then(function(res) {
      const latitude = res.latitude;
      const longitude = res.longitude;
      const speed = res.speed;
      const accuracy = res.accuracy;
      console.log(latitude + "  " + longitude + "  " + speed + "   " + accuracy);
      //必须使用setState方法组建才会重新渲染
      _this.setState({ latitude: latitude });
      _this.setState({ longitude: longitude });
      _this.setState({
        markers: [
          {
            id: 1,
            latitude: latitude,
            longitude: longitude,
            title: "测试",
            zIndex: "",
            iconPath: iconLocation,
            alpha: 1,
            width: "30",
            height: "30",
            rotate: "",
            callout: {
              content: "测试",
              color: "red",
              fontSize: 12,
              borderRadius: 1,
              borderWidth: 1,
              borderColor: "pink",
              bgColor: "red",
              padding: 0,
              display: "ALWAYS",
              textAlign: "center"
            },
            label: {
              content: "哈哈", //文本	String	1.2.0
              color: "green", //文本颜色	String	1.2.0
              fontSize: 12, //文字大小	Number / String	1.2.0
              anchorX: 0, //label的坐标，原点是 marker 对应的经纬度	Number / String	2.1.0
              anchorY: 0, //label的坐标，原点是 marker 对应的经纬度	Number / String	2.1.0
              borderWidth: 1, //边框宽度	Number / String	1.6.0
              borderColor: "red", //边框颜色	String	1.6.0
              borderRadius: 5, //边框圆角	Number / String	1.6.0
              bgColor: "pink", //背景色	String	1.6.0
              padding: 0, //文本边缘留白	Number / String	1.6.0
              textAlign: "center"
            }
          }
        ]
      });
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onClick = () => {
    console.log("okay");
    Taro.redirectTo({
      url: "/pages/mine/mine"
    });
  };

  // 打开系统地图
  onSysMap = () => {
    const mapCtx = Taro.createMapContext("myMap"); //通过地图id创建地图对象
    console.log(mapCtx);
    Taro.openLocation({
      latitude: 34.2777991,
      longitude: 108.95309821,
      scale: 18
    });
  };

  render() {
    const _markers = this.state.markers;
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    console.log(_markers);
    console.log(this.state);
    const { direction, angle } = this.state;
    return (
      <View className='index'>
        <Map id='myMap' longitude={longitude} latitude={latitude} scale='16' markers={_markers} className='mapContainer' />
        <Text onClick={this.onSysMap.bind(this)}>测试打开系统地图</Text>
        <Text>
          {direction}
          {angle}
        </Text>
      </View>
    );
  }
}
