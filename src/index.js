import React from 'react';
import { AppRegistry } from 'react-360';

import Root from './views/Root';


export default class giVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFullScreen: false, fullScreenSrc: '' };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(src) {
    this.setState(state => ({
      isFullScreen: !state.isFullScreen,
      fullScreenSrc: src,
    }));
  }

  render() {
    const { fullScreenSrc, isFullScreen } = this.state;
    return (
      <Root
        fullScreenSrc={fullScreenSrc}
        isFullScreen={isFullScreen}
        handleClick={this.handleClick}
      />
    );
  }
}

AppRegistry.registerComponent('giVR', () => giVR);
