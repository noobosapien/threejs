
import React from 'react'
import { Canvas} from '@react-three/fiber'
import Box from '@/components/Box';
import Learn from '@/components/Learn';
import { Loader } from '@react-three/drei';





export default function Home() {
  return (
    <>
    <div className="bg" />
      {/* <h1>
        Learn <span style={{ fontSize: '0.4em' }}>with</span>
        <br />
        <span>Jason</span>
      </h1> */}
    <Canvas dpr={[1.5, 2]} linear shadows>
    <Learn/>
  </Canvas>
  <div className="layer" />

  <Loader />
  </>
  );
}
