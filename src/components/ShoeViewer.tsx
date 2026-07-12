import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect } from "react";

type ShoeViewerProps = {
  model: string;
  onLoaded?: (() => void) | undefined;
};

function Shoe({ model, onLoaded }: ShoeViewerProps) {
  const { scene } = useGLTF(model);

  useEffect(() => {
    onLoaded?.();
  }, [onLoaded]);

  return (
 <primitive
  object={scene}
  scale={14}
  position={[0, -1.8, 0]}
  rotation={[0, Math.PI / 2, 0]}
/>
  );
}

export default function ShoeViewer({
  model,
  onLoaded,
}: ShoeViewerProps) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 1, 5],
          fov: 45,
        }}
      >
        {/* Lights */}
        <ambientLight intensity={1.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          castShadow
        />

        <Suspense fallback={null}>
          <Shoe model={model} onLoaded={onLoaded} />

          <Environment preset="city" />

          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.5}
            scale={10}
            blur={2.5}
            far={5}
          />
        </Suspense>

       <OrbitControls
  enablePan={false}
  enableZoom
  enableRotate
  autoRotate
  autoRotateSpeed={2}
  minDistance={3}
  maxDistance={8}
/>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/src/assets/models/airmax.glb");