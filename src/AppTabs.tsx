import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabFourScreen from './screens/TabFourScreen';
import TabOneScreen from './screens/TabOneScreen';
import TabThreeScreen from './screens/TabThreeScreen';
import TabTwoScreen from './screens/TabTwoScreen';
import { BottomTabParamList } from './types';

interface AppTabsProps {}
const Tabs = createBottomTabNavigator<BottomTabParamList>();
export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="TabOne"
        options={{ tabBarLabel: 'Home' }}
        component={TabOneScreen}
      />
      <Tabs.Screen name="TabTwo" component={TabTwoScreen} />
      <Tabs.Screen name="TabThree" component={TabThreeScreen} />
      <Tabs.Screen name="TabFour" component={TabFourScreen} />
    </Tabs.Navigator>
  );
};
