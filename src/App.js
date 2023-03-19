import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Header } from './Header';
import './style.css';
import { TextOverlay } from './TextOverlay';
import { PerspectiveCamera, ScrollControls } from '@react-three/drei';
import { PringlesCan } from './PringlesCan';

function App() {

  return (
   <>
    <Header/>
    <TextOverlay />

    <Canvas className='pringlesCan' shadows>
      <ScrollControls pages={3} damping={0.25} >
        <Suspense fallback={null}>
    
          <PerspectiveCamera makeDefault fov={35} position={[.15, .1, .25]}/>
          <color args={['#CC0A27']} attach="background"/>
          <PringlesCan/>

          <spotLight
            color ={[1, 1, 1]}
            intensity ={.5}
            angle={0.6}
            penumbra={0.5}
            position={[1,0,1]}
            castShadow
          />


  
        </Suspense>
      </ScrollControls>
    </Canvas>

    <div className='waves'/>

    <div className='description'>
      <span className='subTitle'>GET IN TOUCH</span><br/><br/>
      <span className='pharagraph'>Got a burning question about our products, promotions or anything else Pringles related? Our support team is here to help.</span>
      <div>
        <button onClick={()=> {window.location = "contact";}}>Contact Us</button>
      </div>
    </div>

    <div>

    </div>
    
    
    </>
  );
}

export default App;
