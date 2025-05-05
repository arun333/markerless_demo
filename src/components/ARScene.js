import React, { useEffect } from 'react';

const ARScene = () => {
  useEffect(() => {
    console.log('AR scene mounted');
  }, []);

  return (
    <a-scene
      embedded
      renderer="logarithmicDepthBuffer: true;"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: true"
    >
      <a-box
        position="0 0 -3"
        rotation="0 45 45"
        color="#4CC3D9"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
      ></a-box>

      <a-camera position="0 0 0" />
    </a-scene>
  );
};

export default ARScene;
