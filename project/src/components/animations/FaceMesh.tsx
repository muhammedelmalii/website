import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FaceMeshProps {
  inView: boolean;
}

const FaceMesh: React.FC<FaceMeshProps> = ({ inView }) => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  
  useEffect(() => {
    // Generate face mesh points
    if (inView) {
      const faceMeshPoints = [];
      // Generate a rough face-like mesh pattern
      // Oval face outline
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const x = 50 + 30 * Math.cos(angle);
        const y = 50 + 40 * Math.sin(angle);
        faceMeshPoints.push({ x, y });
      }
      
      // Eyes
      for (let i = 0; i < 10; i++) {
        // Left eye
        const angleLeft = (i / 10) * Math.PI * 2;
        const xLeft = 35 + 5 * Math.cos(angleLeft);
        const yLeft = 40 + 3 * Math.sin(angleLeft);
        
        // Right eye
        const angleRight = (i / 10) * Math.PI * 2;
        const xRight = 65 + 5 * Math.cos(angleRight);
        const yRight = 40 + 3 * Math.sin(angleRight);
        
        faceMeshPoints.push({ x: xLeft, y: yLeft });
        faceMeshPoints.push({ x: xRight, y: yRight });
      }
      
      // Nose
      faceMeshPoints.push({ x: 50, y: 50 });
      faceMeshPoints.push({ x: 45, y: 55 });
      faceMeshPoints.push({ x: 55, y: 55 });
      
      // Mouth
      for (let i = 0; i < 10; i++) {
        const angle = Math.PI + (i / 10) * Math.PI;
        const x = 50 + 15 * Math.cos(angle);
        const y = 65 + 5 * Math.sin(angle);
        faceMeshPoints.push({ x, y });
      }
      
      setPoints(faceMeshPoints);
    }
  }, [inView]);

  return (
    <motion.div 
      className="absolute inset-0 z-10"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
        {/* Face mesh points */}
        {points.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="0.5"
            fill="#CBA356"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0.4], 
              scale: [0, 1, 0.8] 
            }}
            transition={{ 
              duration: 2,
              delay: index * 0.01,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Connect some points with lines for mesh effect */}
        {points.length > 0 && points.slice(0, points.length - 1).map((point, index) => {
          // Connect to nearby points
          const connections = [];
          for (let i = 0; i < points.length; i++) {
            if (index !== i) {
              const distance = Math.sqrt(
                Math.pow(point.x - points[i].x, 2) + 
                Math.pow(point.y - points[i].y, 2)
              );
              
              // Only connect close points
              if (distance < 15) {
                connections.push(
                  <motion.line
                    key={`${index}-${i}`}
                    x1={point.x}
                    y1={point.y}
                    x2={points[i].x}
                    y2={points[i].y}
                    stroke="#CBA35660"
                    strokeWidth="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ 
                      duration: 2,
                      delay: (index * 0.01) + 0.5
                    }}
                  />
                );
              }
            }
          }
          return connections;
        })}
      </svg>
    </motion.div>
  );
};

export default FaceMesh;