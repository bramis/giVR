import React from 'react';
import { Text, View } from 'react-360';

export default (component, styles) => (
  <View style={styles.panel}>
    <View style={styles.greetingBox}>
      <Text style={styles.greeting}>Welcome to React 360</Text>
    </View>
  </View>
);
