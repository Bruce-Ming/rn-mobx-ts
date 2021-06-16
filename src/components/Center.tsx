import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from './Themed';

interface CenterProps {}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
