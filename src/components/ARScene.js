import React, { useEffect } from 'react';

const ARScene = () => {
  useEffect(() => {
    console.log('✅ AR scene mounted');
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
    >
      <a-box
        position="0 0 -1"
        color="#4CC3D9"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
      ></a-box>

      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
