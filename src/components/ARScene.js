import "./PlaneDetector";

const ARScene = () => {
  return (
    <a-scene webxr="optionalFeatures: ['hit-test'];">
      <a-entity id="cube" visible="false"></a-entity>
    </a-scene>
  );
};

export default ARScene;