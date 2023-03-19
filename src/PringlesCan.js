import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import gsap from "gsap";
import { useScroll } from "@react-three/drei";


export function PringlesCan(){
    const ref = useRef(); 
    const tl = useRef();
    const scroll = useScroll();
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/scene.gltf"
    )
 


    useLayoutEffect(()=>{
        tl.current = gsap.timeline();

        tl.current.to(
            gltf.scene.position,
            {
                duration:1.5,
                x: 0.175
            }
        )

        tl.current.to(
            gltf.scene.position,
            {
                duration:1.5,
                y: .5,
                x: -.75
            },
            
        )
    },[]);

    let posZ = 0;

        useEffect(()=>{
            gltf.scene.scale.set(1, 1, 1);
            gltf.scene.rotateZ(.5,0,0);
            gltf.scene.position.set(2,-.08,0);
            gltf.scene.traverse((object)=>{
                if(object instanceof Mesh){
                    object.castShadow = false;
                    object.receiveShadow = false;
                }
            });

        },[gltf]);


        useFrame((state,delta)=>{
            posZ+=delta;
            gltf.scene.rotateY(delta*0.1,0,0);
            gltf.scene.position.y += Math.sin(posZ) * 0.000075;
            tl.current.seek(scroll.offset * tl.current.duration());

        });
 
    return<primitive object={gltf.scene}/>;

}