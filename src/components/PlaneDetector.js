const AFRAME = window.AFRAME;
AFRAME.registerComponent("hit-test", {
    init: function () {
      navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test"],
      }).then((session) => {
        console.log("WebXR hit-test initialized.");
      });
    },
  });