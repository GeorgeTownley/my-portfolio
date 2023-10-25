import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // This sets the background color to black.

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
    cube.position.x = -4; // move left
    cube.position.y = 2; // move up

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    const handleWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    window.addEventListener("resize", handleWindowResize);
    animate();

    const currentRef = mountRef.current;

    return () => {
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return <div ref={mountRef} className="three-scene"></div>;
}

export default ThreeScene;
