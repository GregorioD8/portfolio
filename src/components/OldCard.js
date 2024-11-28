import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const Card = ({ color, position, frontText, backText, route }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // For navigation to project pages

  useFrame(() => {
    if (hovered) {
      ref.current.rotation.y += 0.02; // Rotate when hovered
    }
    // Smooth rotation reset when not hovered
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      hovered ? -0.1 : 0,
      0.1
    );
  });

  // Function to create a rounded rectangle shape
  const createRoundedRectShape = (width, height, radius) => {
    const x = -width / 2;
    const y = -height / 2;
    const shape = new THREE.Shape();

    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);

    return shape;
  };

  // Create text texture with wrapping (same as before)
  const createTextTexture = (
    message,
    bgColor = "#333333",
    textColor = "#ffffff",
    fontSize = 50
  ) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const size = 512; // Higher resolution for better quality

    canvas.width = size;
    canvas.height = size;

    // Background color
    context.fillStyle = bgColor;
    context.fillRect(0, 0, size, size);

    // Text styles
    context.fillStyle = textColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = `bold ${fontSize}px Arial`;

    // Wrap text function
    const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
      const words = text.split(" ");
      let line = "";
      const lines = [];

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
          lines.push(line);
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      const totalHeight = lines.length * lineHeight;
      let startY = y - totalHeight / 2 + lineHeight / 2;

      for (let k = 0; k < lines.length; k++) {
        context.fillText(lines[k], x, startY + k * lineHeight);
      }
    };

    // Center and wrap text
    wrapText(context, message, size / 2, size / 2, size - 40, fontSize * 1.2);

    // Convert to texture
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  };

  // Create materials
  const plainMaterial = new THREE.MeshStandardMaterial({
    color: color,
    metalness: 0.3,
    roughness: 0.5,
  });

  // Text textures
  const frontTexture = createTextTexture(frontText, "#333333", "#ffffff", 50);
  const backTexture = createTextTexture(backText, "#333333", "#ffffff", 50);
  const planeColor = "#ffffff"; // Change this to match the plane color with the RoundedBox

  // Create the rounded rectangle shape
  const shape = createRoundedRectShape(3.6, 3.6, 0.2);

  // Create geometry from shape with UV mapping
  const geometry = new THREE.ShapeGeometry(shape);

  // Manually compute UVs
  geometry.computeBoundingBox();

  const boundingBox = geometry.boundingBox;

  const max = boundingBox.max;
  const min = boundingBox.min;

  const uvAttribute = new Float32Array(geometry.attributes.position.count * 2);

  for (let i = 0; i < geometry.attributes.position.count; i++) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);

    uvAttribute[i * 2] = (x - min.x) / (max.x - min.x);
    uvAttribute[i * 2 + 1] = (y - min.y) / (max.y - min.y);
  }

  geometry.setAttribute("uv", new THREE.BufferAttribute(uvAttribute, 2));

  return (
    <group
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => navigate(route)} // Navigate to project page
    >
      {/* Main rounded box */}
      <RoundedBox
        args={[4, 4, 0.9]}
        radius={0.2}
        smoothness={8}
        castShadow
        material={plainMaterial}
      />

      {/* Front text plane with rounded corners */}
      <mesh position={[0, 0, 0.46]} castShadow geometry={geometry}>
        <meshStandardMaterial
          map={frontTexture}
          color={planeColor} // Plane color (change if needed)
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back text plane with rounded corners */}
      <mesh
        position={[0, 0, -0.46]}
        rotation={[0, Math.PI, 0]}
        castShadow
        geometry={geometry}
      >
        <meshStandardMaterial
          map={backTexture}
          color={planeColor} // Plane color (change if needed)
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Card;