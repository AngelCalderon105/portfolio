'use client';
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const ShootingStars = () => {
  return (
    <Canvas>
      {/* Add a camera or lighting if needed */}
      <Stars radius={200}  count={2000} factor={4} saturation={0} fade speed = {2} />
    </Canvas>
  );
};

export default ShootingStars;
