import React from 'react';
import { Text, View } from 'react-360';

import Fullscreen from '../../components/Fullscreen';

export default (component, styles) => (
  <View style={styles.panel}>
    <View style={styles.greetingBox}>
      <Text style={styles.greeting}>Welcome to React 360</Text>
    </View>
    <Fullscreen component={component} />
  </View>
);
