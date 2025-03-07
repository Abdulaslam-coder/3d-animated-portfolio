import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { SecondModel } from "./SecondModel"
import { OrbitControls,PerspectiveCamera, Stage } from "@react-three/drei"


const SecondModelContainer = () => {
  return (
    <Canvas>
       <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
            <SecondModel/>
        </Stage>
        
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
       
       </Suspense>
    </Canvas>
  )
}

export default SecondModelContainer 