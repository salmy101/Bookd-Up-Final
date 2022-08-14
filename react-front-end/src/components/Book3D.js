import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { RepeatWrapping, TextureLoader } from "three";
import './Book3D.scss';

function FrontCover(props) {

  const { coverImage, pages } = props;

  const map = useLoader(TextureLoader, (coverImage === 'images/no-book-thumbnail.png') ? coverImage : `https://cors-anywhere.herokuapp.com/${coverImage}`);
  const normalMap = useLoader(TextureLoader, 'textures/hardcover-normal.jpg');

  return (
    <mesh position={[0, 0, (pages && (pages / 5000 + 0.01)) || 0.075]}>
      <boxGeometry args={[0.6666, 1, 0.02]}/>
      <meshStandardMaterial
        map={map}
        normalMap={normalMap}
        roughness={0.1}
      />
    </mesh>
  )
}

function Pages(props) {

  const { pages } = props;

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
      <boxGeometry args={[0.65, 0.975, (pages && (pages / 2500)) || 0.13]}/>
      <meshStandardMaterial attach='material-0' color={0xF8F0E3} map={mapSide} normalMap={normalMapSide} roughness={0.8}/>
      <meshStandardMaterial attach='material-1' color={0x000000}/>
      <meshStandardMaterial attach='material-2' color={0xF8F0E3} map={mapTopBottom} normalMap={normalMapTopBottom} roughness={0.8}/>
      <meshStandardMaterial attach='material-3' color={0xF8F0E3} map={mapTopBottom} normalMap={normalMapTopBottom} roughness={0.8}/>
    </mesh>
  );
}

function Spine(props) {

  const { pages } = props;

  const normalMap = useLoader(TextureLoader, '/textures/spine-normal.jpg');

  return (
    <mesh position={[-0.345, 0, 0]}>
      <boxGeometry args={[0.025, 1, (pages && (pages / 2500 + 0.04)) || 0.17]}/>
      <meshStandardMaterial color={0x404040} normalMap={normalMap} roughness={0.1}/>
    </mesh>
  );
}

function BackCover(props) {

  const { pages } = props;

  return (
    <mesh position={[0, 0, (pages && (-pages / 5000 - 0.01)) || -0.075]}>
      <boxGeometry args={[0.6666, 1, 0.02]} />
      <meshStandardMaterial color={0x505050}/>
    </mesh>
  );
}

function Scene(props) {

  const book = useRef(null);
  useFrame(({ mouse }) => {
    book.current.rotation.set(-mouse.y * 1.5, mouse.x * 1.5, 0);
  });

  return (
    <>
      <ambientLight args={[0xaaaaaa, 2.5]}/>
      <spotLight args={[0xffffff, 1]} position={[0, -2, 2]}/>
      <spotLight args={[0xffffff, 1]} position={[-5, -2, 2]}/>
      <spotLight args={[0xffffff, 1]} position={[-2, -2, -2]}/>
      <group ref={book}>
        <FrontCover coverImage={props.coverImage} pages={props.pages} />
        <Pages pages={props.pages} />
        <Spine pages={props.pages} />
        <BackCover pages={props.pages} />
      </group>
    </>
  );
}

export default function Book3D(props) {

  return (
    <Canvas
      className="canvas"
      camera={{position: [0, 0, 1]}}
    >
      <Suspense fallback={null}>
        <Scene coverImage={props.coverImage} pages={props.pages} />
      </Suspense>
    </Canvas>
  );

};