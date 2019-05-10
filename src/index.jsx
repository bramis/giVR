import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
} from 'react-360';

import axios from 'axios';

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
  },
  greeting: {
    fontSize: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default class giVR extends React.Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios.post('http://localhost:3000/unsplash', { query: 'mock' })
      .then(({ data: images }) => {
        this.setState({ images });
      });
  }

  render() {
    const { images } = this.state;
    // Reference the count in our UI
    return (
      <View style={styles.panel}>
        {images.map(({ thumbnail, src }) => (
          <Image key={src} source={{ uri: thumbnail }} style={styles.image} />
        ))}
      </View>
    );
  }
}

AppRegistry.registerComponent('giVR', () => giVR);
