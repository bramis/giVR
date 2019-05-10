import React from 'react';
import { View, StyleSheet } from 'react-360';
import t from 'prop-types';

import CustomImage from '../../components/CustomImage';

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 4680,
    height: 600,
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
});

const Root = ({
  handleClick, isFullScreen, fullScreenId, images,
}) => (
  <View style={styles.panel}>
    {images.map(({ thumbnail }, index) => (
      <CustomImage
        handleClick={handleClick}
        isFullScreen={isFullScreen}
        fullScreenId={fullScreenId}
        id={index}
        key={thumbnail}
        uri={thumbnail}
      />
    ))}
  </View>
);

Root.propTypes = {
  handleClick: t.func.isRequired,
  isFullScreen: t.bool.isRequired,
  fullScreenId: t.number.isRequired,
  images: t.arrayOf(t.string).isRequired,
};

export default Root;
