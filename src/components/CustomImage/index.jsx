import React from 'react';
import t from 'prop-types';
import {
  StyleSheet, asset, Image, View, VrButton,
} from 'react-360';

const styles = (w, h) => {
  const prop = h / w;

  return StyleSheet.create({
    image: {
      // Fill the entire surface
      width: 333,
      height: 333 * prop,
      zIndex: 0,
      margin: 10,
    },
  });
};


const CustomImage = ({
  handleClick, src, uri, id, width, height,
}) => {
  const s = styles(width, height);

  return (
    <View>
      <VrButton onClick={e => handleClick(id, e)}>
        <Image
          source={src ? asset(src) : { uri }}
          style={s.image}
        />
      </VrButton>
    </View>
  );
};

CustomImage.defaultProps = {
  src: '',
  uri: '',
  width: 0,
  height: 0,
};

CustomImage.propTypes = {
  handleClick: t.func.isRequired,
  src: t.string,
  uri: t.string,
  id: t.number.isRequired,
  width: t.number,
  height: t.number,
};

export default CustomImage;
