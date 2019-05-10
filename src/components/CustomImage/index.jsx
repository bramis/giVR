import React from 'react';
import {
  StyleSheet, Image, View, VrButton,
} from 'react-360';

const styles = StyleSheet.create({
  image: {
    // Fill the entire surface
    width: 333,
    height: 200,
    zIndex: 0,
    margin: 10,
  },
  image2: {
    width: 333,
    height: 200,
  },
  fullscreenImage: {
    position: 'absolute',
    zIndex: 1000,
    top: -310,
    left: -163,
    width: 666,
    height: 400,
    margin: 10,
  },
  fullscreen: {
    zIndex: 1000,
  },
});

export default ({ component, src }) => (
  <View
    style={
      component.state.isFullScreen && src === component.state.fullScreenSrc
        ? styles.fullscreen
        : { zIndex: 0 }
    }
  >
    <VrButton onClick={e => component.handleClick(src, e)}>
      <Image source={src} style={styles.image} />
    </VrButton>

    <VrButton onClick={e => component.handleClick(src, e)}>
      <Image
        source={src}
        style={
          component.state.isFullScreen && src === component.state.fullScreenSrc
            ? styles.fullscreenImage
            : { display: 'none' }
        }
      />
    </VrButton>
  </View>
);
