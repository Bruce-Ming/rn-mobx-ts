import * as React from 'react';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { NavProps } from '../types';

export default function UserInfo({ navigation, route }: NavProps<'UserInfo'>) {
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
      <Text style={styles.title}>用户信息</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
