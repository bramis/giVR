import React from 'react';
import t from 'prop-types';
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

const CustomImage = ({
  isFullScreen, fullScreenSrc, handleClick, src,
}) => (
  <View
    style={
      isFullScreen && src === fullScreenSrc
        ? styles.fullscreen
        : { zIndex: 0 }
    }
  >
    <VrButton onClick={e => handleClick(src, e)}>
      <Image source={src} style={styles.image} />
    </VrButton>

    <VrButton onClick={e => handleClick(src, e)}>
      <Image
        source={src}
        style={
          isFullScreen && src === fullScreenSrc
            ? styles.fullscreenImage
            : { display: 'none' }
        }
      />
    </VrButton>
  </View>
);

CustomImage.propTypes = {
  isFullScreen: t.bool.isRequired,
  fullScreenSrc: t.string.isRequired,
  handleClick: t.func.isRequired,
  src: t.string.isRequired,
};

export default CustomImage;
