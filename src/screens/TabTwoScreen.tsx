import { observer } from 'mobx-react';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useCounterStore } from '../stores/CounterStore';

const TabTwoScreen = observer(() => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two2</Text>
      <Text>{count}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
});
export default TabTwoScreen;
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
