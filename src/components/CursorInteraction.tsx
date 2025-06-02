
import { useEffect, useState } from "react";

const CursorInteraction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor trail */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-sm animate-pulse"></div>
      </div>
      
      {/* Secondary cursor trail */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-md"></div>
      </div>
      
      {/* Tertiary cursor trail */}
      <div
        className={`fixed pointer-events-none z-30 transition-all duration-700 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
      >
        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-lg"></div>
      </div>
    </>
  );
};

export default CursorInteraction;
