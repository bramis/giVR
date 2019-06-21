import React from 'react';
import t from 'prop-types';
import {
  StyleSheet, Image, View, VrButton,
} from 'react-360';

const styles = (w, h, index) => {
  const prop = w / h;

  const imgSpace = 4096 / 10;
  const toMiddle = 333 / 2;

  return StyleSheet.create({
    image: {
      position: 'absolute',
      zIndex: 1000,
      top: 0,
      left: Math.min(
        4096 - 720 * prop,
        Math.max(imgSpace * index + (toMiddle - 720 * prop / 2), 0),
      ),
      width: 720 * prop,
      height: 720,
      margin: 10,
    },
  });
};


const FullScreenImage = ({
  fullScreenId, handleClick, img,
}) => {
  const s = styles(img.width, img.height, fullScreenId);

  return (
    <View>
      <VrButton onClick={e => handleClick(fullScreenId, e)}>
        <Image
          source={{ uri: img.src }}
          style={s.image}
        />
      </VrButton>
    </View>
  );
};


FullScreenImage.propTypes = {
  fullScreenId: t.number.isRequired,
  handleClick: t.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  img: t.object.isRequired,
};

export default FullScreenImage;
