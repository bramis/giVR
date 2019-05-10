import React from 'react';
import { View, StyleSheet } from 'react-360';
import t from 'prop-types';

import CustomImage from '../../components/CustomImage';

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    position: 'relative',
    width: 2000,
    height: 600,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});
const Root = ({ handleClick, isFullScreen, fullScreenId }) => (
  <View style={styles.panel}>
    <CustomImage
      handleClick={handleClick}
      isFullScreen={isFullScreen}
      fullScreenId={fullScreenId}
      id={1}
      src="cat2.jpeg"
    />
    <CustomImage
      handleClick={handleClick}
      isFullScreen={isFullScreen}
      fullScreenId={fullScreenId}
      id={2}
      src="cat1.jpg"
    />
    <CustomImage
      handleClick={handleClick}
      isFullScreen={isFullScreen}
      fullScreenId={fullScreenId}
      id={3}
      uri="http://192.168.1.19:3000/image?url=https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
    />
  </View>
);

Root.propTypes = {
  handleClick: t.func.isRequired,
  isFullScreen: t.bool.isRequired,
  fullScreenId: t.number.isRequired,
};

export default Root;
