/* eslint-disable import/no-extraneous-dependencies */
import {
  configure, shallow, render, mount,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
/* eslint-enable import/no-extraneous-dependencies */

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
