import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { RepeatWrapping, TextureLoader } from "three";

function FrontCover() {
  console.log('in front cover');

  const [
    map,
    normalMap
  ] = useLoader(TextureLoader, [
    'textures/harry-potter-cover.jpg',
    'textures/hardcover-normal.jpg'
  ]);

  return (
    <mesh position={[0, 0, 0.075]}>
      <boxGeometry args={[0.6666, 1, 0.02]}/>
      <meshStandardMaterial
        map={map}
        normalMap={normalMap}
        roughness={0.1}
      />
    </mesh>
  )
}

function Pages() {
  console.log('in pages');

  const [
    mapTopBottom,
    normalMapTopBottom,
    mapSide,
    normalMapSide
  ] = useLoader(TextureLoader, [
    'textures/pages-base.jpg',
    'textures/pages-normal.jpg',
    'textures/pages-base.jpg',
    'textures/pages-normal.jpg'
  ]);

  mapSide.wrapS = mapSide.wrapT = normalMapSide.wrapS = normalMapSide.wrapT = RepeatWrapping;
  mapSide.rotation = normalMapSide.rotation = 1.4;

  return (
    <mesh>
      <boxGeometry args={[0.65, 0.975, 0.13]}/>
      <meshStandardMaterial attach='material-0' color={0xF8F0E3} map={mapSide} normalMap={normalMapSide} roughness={0.8}/>
      <meshStandardMaterial attach='material-1'/>
      <meshStandardMaterial attach='material-2' color={0xF8F0E3} map={mapTopBottom} normalMap={normalMapTopBottom} roughness={0.8}/>
      <meshStandardMaterial attach='material-3' color={0xF8F0E3} map={mapTopBottom} normalMap={normalMapTopBottom} roughness={0.8}/>
    </mesh>
  );
}

function Spine() {

  return (
    <mesh position={[-0.345, 0, 0]}>
      <boxGeometry args={[0.025, 1, 0.17]}/>
      <meshStandardMaterial />
    </mesh>
  );
}

function Scene() {

  const book = useRef(null);
  useFrame(({ mouse }) => {
    book.current.rotation.set(-mouse.y * 2, mouse.x * 2, 0);
  });

  return (
    <>
      <ambientLight args={[0xaaaaaa, 2.5]}/>
      <pointLight position={[2, 0, 2]}/>
      <pointLight position={[-2, 0, 2]}/>
      <group ref={book}>
        <FrontCover />
        <Pages />
        <Spine />
      </group>
    </>
  );
}

export default function Book3D() {

  return (
    <Canvas
      style={{backgroundColor: 'skyblue', marginTop: '100px', width: '600px', height: '600px', borderRadius: '10%'}}
      camera={{position: [0, 0, 1]}}
    >
      <axesHelper args={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );

};