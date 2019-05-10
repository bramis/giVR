import React from 'react';
import t from 'prop-types';
import {
  StyleSheet, asset, Image, View, VrButton,
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
  isFullScreen, fullScreenId, handleClick, src, uri, id,
}) => (
  <View style={isFullScreen && id === fullScreenId ? styles.fullscreen : { zIndex: 0 }}>
    <VrButton onClick={e => handleClick(id, e)}>
      <Image source={src ? asset(src) : { uri }} style={styles.image} />
    </VrButton>

    <VrButton onClick={e => handleClick(id, e)}>
      <Image
        source={src ? asset(src) : { uri }}
        style={isFullScreen && id === fullScreenId ? styles.fullscreenImage : { display: 'none' }}
      />
    </VrButton>
  </View>
);

CustomImage.defaultProps = {
  src: '',
  uri: '',
};

CustomImage.propTypes = {
  isFullScreen: t.bool.isRequired,
  fullScreenId: t.number.isRequired,
  handleClick: t.func.isRequired,
  src: t.string,
  uri: t.string,
  id: t.number.isRequired,
};

export default CustomImage;
