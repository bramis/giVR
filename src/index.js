import React from 'react';
import { AppRegistry } from 'react-360';

import axios from 'axios';

import Root from './views/Root';

export default class giVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      fullScreenId: 0,
      images: [{ thumbnail: 'empty', width: 1000, height: 600 }],
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.post('http://localhost:3000/google', { query: 'mock' }).then(async ({ data: images }) => {
      const data = await Promise.all(
        images.map(async item => ({
          ...item,
          src: (await axios.get(`http://localhost:3000/image?url=${item.src}`)).data,
        })),
      );

      this.setState({ images: data });
    });
  }

  handleClick(id) {
    this.setState(state => ({
      isFullScreen: !state.isFullScreen,
      fullScreenId: id,
    }));
  }

  render() {
    const { fullScreenId, isFullScreen, images } = this.state;

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Root
        fullScreenId={fullScreenId}
        isFullScreen={isFullScreen}
        handleClick={this.handleClick}
        images={images}
      />
    );
  }
}

AppRegistry.registerComponent('giVR', () => giVR);
