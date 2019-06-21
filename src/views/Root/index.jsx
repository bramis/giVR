import React from 'react';
import { View, StyleSheet } from 'react-360';
import t from 'prop-types';

import CustomImage from '../../components/CustomImage';
import FullScreenImage from '../../components/FullScreenImage';

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 4096,
    height: 720,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
  },
  greeting: {
    fontSize: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  fullscreenPanel: {
    zIndex: 10000,
    width: 4096,
    height: 720,
    position: 'absolute',
  },
});

const Root = ({
  handleClick, isFullScreen, fullScreenId, images,
}) => (
  <View>
    <View style={styles.panel}>
      {images.map(({
        src, thumbnail, width, height,
      }, index) => (
        <CustomImage
          handleClick={handleClick}
          id={index}
          key={thumbnail}
          uri={src}
          height={height}
          width={width}
        />
      ))}
    </View>
    <View style={styles.fullscreenPanel}>
      {isFullScreen
        ? (
          <FullScreenImage
            handleClick={handleClick}
            img={images[fullScreenId]}
            fullScreenId={fullScreenId}
          />
        )
        : <View />
  }
    </View>
  </View>

);

Root.propTypes = {
  handleClick: t.func.isRequired,
  isFullScreen: t.bool.isRequired,
  fullScreenId: t.number.isRequired,
  images: t.arrayOf(t.object).isRequired,
};

export default Root;
