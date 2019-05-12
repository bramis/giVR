import React from 'react';
import t from 'prop-types';
import {
  StyleSheet, asset, Image, View, VrButton,
} from 'react-360';

const CustomImage = ({
  isFullScreen, fullScreenId, handleClick, src, uri, id, height, width,
}) => {
  const proportion = height === 0 ? 1 : height / 200;
  const fullscreenProportion = height === 0 ? 1 : height / 400;

  const styles = StyleSheet.create({
    image: {
      // Fill the entire surface
      width: width / proportion,
      height: 200,
      zIndex: 0,
      margin: 10,
    },
    fullscreenImage: {
      position: 'absolute',
      zIndex: 1000,
      top: -310,
      left: -(width / proportion) / 2,
      width: width / fullscreenProportion,
      height: 400,
      margin: 10,
    },
    fullscreen: {
      zIndex: 1000,
    },
  });

  return (
    <View style={isFullScreen && id === fullScreenId ? styles.fullscreen : { zIndex: 0 }}>
      <VrButton onClick={e => handleClick(id, e)}>
        <Image source={uri ? { uri } : asset(src)} style={styles.image} />
      </VrButton>

      <VrButton onClick={e => handleClick(id, e)}>
        <Image
          source={uri ? { uri } : asset(src)}
          style={isFullScreen && id === fullScreenId ? styles.fullscreenImage : { display: 'none' }}
        />
      </VrButton>
    </View>
  );
};

CustomImage.defaultProps = {
  src: 'cat.png',
  uri: '',
  height: 0,
  width: 0,
};

CustomImage.propTypes = {
  isFullScreen: t.bool.isRequired,
  fullScreenId: t.number.isRequired,
  handleClick: t.func.isRequired,
  src: t.string,
  uri: t.string,
  id: t.number.isRequired,
  height: t.number,
  width: t.number,
};

export default CustomImage;
