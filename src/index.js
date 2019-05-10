import React from 'react';
import { AppRegistry } from 'react-360';

import axios from 'axios';

import Root from './views/Root';

export default class giVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFullScreen: false, fullScreenId: 0, images: [] };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.post('http://localhost:3000/unsplash', { query: 'mock' }).then(({ data: images }) => {
      this.setState({ images });
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
