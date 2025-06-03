
import { useEffect, useState } from "react";

const CursorInteraction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);

      clearTimeout(moveTimer);
      
      moveTimer = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(moveTimer);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isMoving ? 'scale-150' : 'scale-100'}`}
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
    />
  );
};

export default CursorInteraction;
