import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[0, 4, 4]}
        intensity={200}
        color="#E8ADFF"
        penumbra={0.1}
      />
      <spotLight
        position={[0, 0, 3]}
        intensity={50}
        color="blue"
        penumbra={0.1}
      />
      <spotLight
        position={[3, 0, 0]}
        intensity={50}
        color="#C72C2C"
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        penumbra={0.1}
      />
      <primitive
        object={new THREE.RectAreaLight("#4A6EFF", 8, 3, 5)}
        intensity={70}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight position={[0, 1, 0]} intensity={50} color="#829FFF" />
    </>
  );
};

export default HeroLights;
