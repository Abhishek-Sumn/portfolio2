import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export  function Htmld(props) {
    
  const { nodes, materials } = useGLTF("./html-3d.glb");
  return (
    <group {...props} dispose={null}>
       
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ramka2.geometry}
        material={materials["Material.009"]}
        position={[18.96, 117.48, 10.53]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group
        position={[24.05, 117.48, 10.53]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.five.geometry}
        material={materials["Material.012"]}
        position={[42.71, 209.04, 23.56]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={10}
      />
    </group>
  );
}

useGLTF.preload("/html-3d.glb");
export default Htmld