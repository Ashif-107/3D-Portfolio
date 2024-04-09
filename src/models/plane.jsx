import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/new_plane.glb";
import planesound from "../assets/Airplane+6.mp3";

export default function Plane({isplanesound, isRotating, ...props }) {
  const ref = useRef();

  const soundRef = useRef(new Audio(planesound));
  soundRef.current.volume = 0.4;
  soundRef.current.loop = true;


  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      soundRef.current.play()
      actions["Scene"].play();
    } else {
      actions["Scene"].stop();
      soundRef.current.pause()
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}