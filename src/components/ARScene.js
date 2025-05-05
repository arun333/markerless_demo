import React from "react";

const ARScene = () => {
  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {/* AR Box */}
      <a-box
        position="0 0 -2"
        material="color: red; opacity: 0.8"
        scale="0.5 0.5 0.5"
      ></a-box>

      {/* Light */}
      <a-light type="ambient" intensity="0.5"></a-light>

      {/* CAMERA - required for AR.js to start webcam */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
