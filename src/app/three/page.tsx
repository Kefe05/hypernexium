"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function HeroGlobe() {
  const globeRef = useRef();
  const [countries, setCountries] = useState({ features: [] });

  const arcs = [
    {
      startLat: 37.77,
      startLng: -122.41,
      endLat: 51.51,
      endLng: -0.12,
      color: "#60a5fa",
    },
    {
      startLat: 28.61,
      startLng: 77.2,
      endLat: -33.86,
      endLng: 151.2,
      color: "#ec4899",
    },
    {
      startLat: 40.71,
      startLng: -74.0,
      endLat: 35.68,
      endLng: 139.65,
      color: "#fbbf24",
    },
  ];

  useEffect(() => {
    // Load country data
    fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });

    if (globeRef.current) {
      // Add lighting to the scene
      const scene = globeRef.current.scene();

      // Much stronger ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
      scene.add(ambientLight);

      // Directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);

      // Additional point light
      const pointLight = new THREE.PointLight(0xffffff, 1.5);
      pointLight.position.set(-5, 3, 5);
      scene.add(pointLight);

      // Controls
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.8;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.pointOfView({ altitude: 2.5 });
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "600px", background: "#0a1929" }}>
      <Globe
        ref={globeRef}
        globeImageUrl={null}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#3b82f6"
        atmosphereAltitude={0.15}
        // Use polygonsData instead of hexPolygons
        polygonsData={countries.features}
        polygonCapColor={() => "#2563eb"}
        polygonSideColor={() => "#1e40af"}
        polygonStrokeColor={() => "#60a5fa"}
        polygonAltitude={0.01}
        // Grid lines
        showGraticules={true}
        graticuleColor="rgba(100, 150, 200, 0.3)"
        // Arcs
        arcsData={arcs}
        arcColor="color"
        arcDashLength={0.6}
        arcDashGap={0.2}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={3000}
        arcStroke={0.8}
      />
    </div>
  );
}
