import React from 'react';
import { View, asset } from 'react-360';

import CustomImage from '../../components/CustomImage';

export default (component, styles) => (
  <View style={styles.panel}>
    <CustomImage component={component} src={asset('cat2.jpeg')} />
    <CustomImage component={component} src={asset('cat1.jpg')} />
    <CustomImage
      component={component}
      src={{
        uri:
          'http://192.168.1.19:3000/image?url=https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      }}
    />
  </View>
);
