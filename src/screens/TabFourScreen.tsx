import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { Button } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Webview } from '../components/Webview';
import { ParamList } from '../types';
type Props = StackScreenProps<ParamList, 'Root'>;

export default function TabFourScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 4</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Go to UserInfo"
        onPress={() => navigation.navigate('UserInfo')}
      />
      <Webview />
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
