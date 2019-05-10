import React from 'react';
import { AppRegistry } from 'react-360';

import Root from './views/Root';

export default class giVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFullScreen: false, fullScreenId: 0 };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(state => ({
      isFullScreen: !state.isFullScreen,
      fullScreenId: id,
    }));
  }

  render() {
    const { fullScreenId, isFullScreen } = this.state;
    return (
      <Root
        fullScreenId={fullScreenId}
        isFullScreen={isFullScreen}
        handleClick={this.handleClick}
      />
    );
  }
}

AppRegistry.registerComponent('giVR', () => giVR);
