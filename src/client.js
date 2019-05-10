// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const mySurface = new Surface(
    4680, /* width */
    600,
    Surface.SurfaceShape.Cylinder,
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('giVR', { /* initial props */ }),
    mySurface,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
