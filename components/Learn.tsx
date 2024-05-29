import React, { Suspense } from 'react'
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'


function Model({ url, meshName }) {
  const { nodes } = useGLTF(url);
console.log(nodes)
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh receiveShadow castShadow geometry={nodes[meshName].geometry} material={nodes[meshName].material} />
        {/* <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} /> */}
        {/* <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} /> */}
      </group>
    </group>
  )
}

export default function Learn() {
  return (
    <>
     
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={10} position={[-10, -25, -10]} />
          <spotLight castShadow intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Model url="/tree.glb" meshName={"Mesh_tree"} />
        </Suspense>
        <OrbitControls autoRotate enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </>
  )
}