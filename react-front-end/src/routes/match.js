import React from "react";
import { Canvas } from '@react-three/fiber';


export default function Match() {


  return (
    <Canvas style={{marginTop: 100}}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );

};