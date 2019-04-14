import React from 'react';
import {
  StyleSheet, Image, asset, View,
} from 'react-360';

const styles = StyleSheet.create({
  image: {
    // Fill the entire surface
    width: 1000,
    height: 600,
  },
});

export default component => (
  <View>
    <Image source={asset('cat.png')} style={styles.image} />
  </View>
);
