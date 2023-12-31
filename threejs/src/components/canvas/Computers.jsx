// import { extend } from '@react-three/fiber'
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// extend({ OrbitControls })
const Computers = (props) => {
  
  const { isMobile,Dmodel } = props
  const computer = useGLTF(`./${Dmodel}/scene.gltf`);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={[0, -2.25, -1.5]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = (Dmodel) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuery);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} Dmodel={Dmodel.Dmodel}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;