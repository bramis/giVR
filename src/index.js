import React from 'react';
import { AppRegistry, StyleSheet } from 'react-360';

import root from './views/Root';

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
    return root(this, styles);
  }
}

AppRegistry.registerComponent('giVR', () => giVR);
