import React from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundPaperShader() {
  const { scrollY } = useScroll();
  
  // Subtle parallax modifiers
  // Panning down slightly as user scrolls
  const y = useTransform(scrollY, [0, 5000], [0, 250]);
  
  // Rotating very slowly based on scroll depth
  const rotate = useTransform(scrollY, [0, 5000], [0, 15]);
  
  // Scaling up starting to hide the edges when rotating
  const scale = useTransform(scrollY, [0, 5000], [1.1, 1.3]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '-10vh',     // Overbleed to prevent clipping during parallax
        left: '-10vw',
        width: '120vw',
        height: '120vh',
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
        y,           // framer motion accelerated CSS transforms
        rotate,
        scale,
      }}
    >
      <MeshGradient
        style={{ width: '100%', height: '100%' }}
        colors={["#040404", "#100011", "#0f0015", "#330047"]}
        speed={1.0}
        backgroundColor="#000000"
      />
    </motion.div>
  );
}
