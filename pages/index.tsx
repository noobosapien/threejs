
import React from 'react'
import { Canvas} from '@react-three/fiber'
import Box from '@/components/Box';
import Learn from '@/components/Learn';
import { Loader } from '@react-three/drei';





export default function Home() {
  return (
    <>
    <div className="bg" />
      
    <Canvas dpr={[1.5, 2]} linear shadows>
    <Learn/>
  </Canvas>
  <div className="layer" />

  <Loader />
  </>
  );
}
