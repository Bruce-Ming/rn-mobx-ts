/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { RouteProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ParamList =
  | RootStackParamList
  | BottomTabParamList
  | TabOneParamList
  | TabThreeParamList
  | TabTwoParamList
  | TabFourParamList
  | HomeParamList
  | RegisterParamList;

export type RootStackParamList = {
  Root: undefined;
  UserInfo: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type HomeParamList = {
  Home: undefined;
};
export type RegisterParamList = {
  Register: undefined;
};

export type NavProps<U extends ParamListBase, T extends keyof U> = {
  navigation: StackNavigationProp<U, T>;
  route: RouteProp<U, T>;
};
