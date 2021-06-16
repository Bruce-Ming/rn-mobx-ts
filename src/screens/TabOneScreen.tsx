import { observer } from 'mobx-react';
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useCounterStore } from '../stores/CounterStore';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';

const TabOneScreen = observer(() => {
  const { count, increment, decrement } = useCounterStore(); // OR useContext(CounterStoreContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>首页哈哈哈Tab One</Text>
      <Text>{count}</Text>
      <View style={styles.todo}>
        <Button title="增加" onPress={() => increment()} />
        <Button title="减少" onPress={() => decrement()} />
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Video
        style={{ width: 375, height: 300 }}
        volume={1.0}
        muted={false}
        controls={true}
        resizeMode={'contain'}
        playWhenInactive={false}
        playInBackground={false}
        ignoreSilentSwitch={'ignore'}
        progressUpdateInterval={250.0}
        source={{ uri: 'https://www.runoob.com/try/demo_source/movie.mp4' }}
      />
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>
  );
});
export default TabOneScreen;
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
  todo: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
