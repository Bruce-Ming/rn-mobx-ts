import React from 'react';
import { WebView } from 'react-native-webview';
interface WebviewProps {}

export const Webview: React.FC<WebviewProps> = ({}) => {
  console.log('webview');

  return (
    <WebView
      style={{ width: 375, height: 100 }}
      originWhitelist={['*']}
      source={{ uri: 'https://reactnative.dev/' }}
    />
  );
};
