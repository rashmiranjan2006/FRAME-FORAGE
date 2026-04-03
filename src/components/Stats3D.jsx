import { useEffect, useRef } from "react";
import * as THREE from "three";

const arrowData = [
  { num: "200+", desc: "Projects Completed" },
  { num: "75+", desc: "Brands Served" },
  { num: "340%", desc: "Avg. Engagement Growth" },
];

const arrowAngles = [
  Math.PI * 0.7, // left
  Math.PI * 0.5, // center
  Math.PI * 0.3, // right
];

const Stats3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let renderer, scene, camera, sphere;
    let arrowHelpers = [];
    let tips = [];
    let frameId;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 20;
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0); // transparent
      renderer.setSize(320, 320);
      mountRef.current.appendChild(renderer.domElement);

      // Sphere
      const geometry = new THREE.SphereGeometry(12, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xff6600, wireframe: true });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      // Arrows
      const arrowLength = 6;
      const arrowColor = 0xff6600;
      arrowHelpers = [];
      tips = [];
      // Arrange arrows one below another, all on the left side, facing left
      const baseY = 10; // top y
      const gapY = 8;   // vertical gap between arrows
      for (let idx = 0; idx < arrowData.length; idx++) {
        const x = -12; // left side of the earth
        const y = baseY - idx * gapY;
        const z = 0;
        const dir = new THREE.Vector3(-1, 0, 0).normalize();
        const origin = new THREE.Vector3(x, y, z);
        const arrowHelper = new THREE.ArrowHelper(dir, origin, arrowLength, arrowColor, 0.8, 0.4);
        scene.add(arrowHelper);
        arrowHelpers.push(arrowHelper);
        tips.push(origin.clone().add(dir.clone().multiplyScalar(arrowLength)));
      }

      animate();
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
      updateLabels();
    };

    const updateLabels = () => {
      tips.forEach((tip, idx) => {
        const vector = tip.clone().project(camera);
        const x = (vector.x * 0.5 + 0.5) * 320;
        const y = (-vector.y * 0.5 + 0.5) * 320;
        const label = labelRefs.current[idx];
        if (label) {
          label.style.left = `${x}px`;
          label.style.top = `${y}px`;
        }
      });
    };

    init();
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (renderer) {
        renderer.dispose();
        mountRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: 320, height: 320 }}>
      <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0 }} />
      {arrowData.map((data, idx) => (
        <div
          key={idx}
          ref={el => (labelRefs.current[idx] = el)}
          style={{ position: "absolute", pointerEvents: "none", transform: "translate(-50%,-100%)" }}
        >
          <span style={{ color: "#ff6600", fontSize: 28, fontWeight: 700 }}>{data.num}</span>
          <span style={{ color: "#111", fontSize: 14, fontWeight: 600, background: "#fff", borderRadius: 8, padding: "2px 10px", marginTop: 2, boxShadow: "0 2px 8px #0002" }}>{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats3D;
