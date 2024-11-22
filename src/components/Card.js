//src/components/Card.js
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

const Card = ({ title, content, color, position }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  // Animate rotation
  useFrame(() => {
    ref.current.rotation.y += 0.01; // Slow rotation
    if (hovered) {
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -0.1,
        0.1
      ); // Tilt on hover
    } else {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, 0, 0.1);
    }
  });

  // Create a texture with text
  const createTextTexture = (title, content) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const cardWidth = 1024; // Larger resolution for better clarity
    const cardHeight = 1536; // Maintain aspect ratio

    canvas.width = cardWidth;
    canvas.height = cardHeight;

    // Fill background color
    context.fillStyle = color;
    context.fillRect(0, 0, cardWidth, cardHeight);

    // Title Text
    context.fillStyle = "#ffffff";
    context.font = "bold 80px Arial"; // Increase font size for better visibility
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(title, cardWidth / 2, 200); // Adjust title position

    // Content Text (Wrapped)
    context.font = "100px Arial"; // Larger font for content
    const words = content.split(" ");
    let line = "";
    const lineHeight = 100; // Adjust line height
    const startY = 400; // Start content lower to give space for title
    const maxWidth = 900; // Wrap content within this width

    let y = startY;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, cardWidth / 2, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, cardWidth / 2, y); // Final line

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16; // Increase anisotropy for better quality
    return texture;
  };

  const textTexture = createTextTexture(title, content);

  return (
<RoundedBox
  ref={ref}
  args={[4, 4, 0.9]} // Thinner card to avoid overlap (depth reduced)
  position={position}
  radius={0.2} // Reduced radius for subtle rounded corners
  smoothness={8} // Higher smoothness for better rounded edges
  onPointerOver={() => setHovered(true)}
  onPointerOut={() => setHovered(false)}
  castShadow
>
  <meshStandardMaterial
    map={textTexture}
    metalness={0.3}
    roughness={0.5} // Slightly less roughness for a cleaner look
    transparent
    opacity={1.0}
  />
</RoundedBox>
  );
};

export default Card;