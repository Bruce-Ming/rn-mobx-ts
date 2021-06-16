import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import { AppTabs } from './AppTabs';
import { Center } from './components/Center';
import { Text, View } from './components/Themed';

interface RoutesProps {}
const Stack = createStackNavigator();
export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            header: () => null,
          }}
          component={AppTabs}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Register() {
  return (
    <Center>
      <Text>Rigister页面</Text>
    </Center>
  );
}
