/**
 * Created by Rabbit on 2018/8/6.
 */
import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const { height, width } = Dimensions.get('window');

// import { Theme } from 'teaset';

/**
 * 系统是iOS
 * */
export const SYS_IOS = Platform.OS === 'ios';
/**
 * 系统是安卓
 * */
export const SYS_ANDROID = Platform.OS === 'android';
/**
 * 获取屏幕宽度
 * */
export const SCREEN_WIDTH = width;
/**
 * 获取屏幕高度
 * */
export const SCREEN_HEIGHT = height;

/**
 * 获取屏幕分辨率
 * */
export const PIXEL_RATIO = PixelRatio.get();

/**
 * 是否是iphoneX
 * */
export const MOBILE_TYPE_IPHONEX =
  SYS_IOS && SCREEN_HEIGHT >= 812 && SCREEN_WIDTH >= 375;

/**
 * 状态栏高度
 * */
export const STATUSBAR_HEIGHT = SYS_ANDROID
  ? StatusBar.currentHeight
  : MOBILE_TYPE_IPHONEX
  ? 44
  : 20;

/**
 * navibar高度
 * */
export const NAVIBAR_HEIGHT = 44;

/**
 * tabbar高度
 * */
export const TABBAR_HEIGHT = SYS_IOS ? (MOBILE_TYPE_IPHONEX ? 83 : 49) : 49;

/**
 * 设置存储
 * */
//const STORAGE = storage

/**
 * 设备信息
 * */
const DEVICE_INFO = {
  appKey: 'compassedu', // DeviceInfo.getApplicationName(),
  deviceType: SYS_IOS ? 'ios' : 'android',
  deviceId: DeviceInfo.getUniqueId(),
  version: DeviceInfo.getVersion(),
  mobiletype: DeviceInfo.getDeviceId(),
  statusBarHeight: STATUSBAR_HEIGHT,
  naviBarHeight: NAVIBAR_HEIGHT,
};

/**
 * api host
 * */
export const API_DEFAULT = 'https://api.compassedu.hk/index.php/api/v1/';
// const API_DEFAULT = 'http://118.24.185.42:880/api/v1/'

// 挂载到全局

export default {
  SYS_IOS,
  SYS_ANDROID,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PIXEL_RATIO,
  MOBILE_TYPE_IPHONEX,
  STATUSBAR_HEIGHT,
  NAVIBAR_HEIGHT,
  TABBAR_HEIGHT,

  DEVICE_INFO,
};
