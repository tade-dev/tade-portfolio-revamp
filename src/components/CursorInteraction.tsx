
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

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

      // Clear existing timer
      clearTimeout(moveTimer);
      
      // Set timer to stop moving animation
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
    <>
      {/* Main rocket cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isMoving ? 'scale-110' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <div className={`transform transition-transform duration-200 ${isMoving ? 'rotate-12' : 'rotate-0'}`}>
          <Rocket 
            size={24} 
            className={`text-blue-500 drop-shadow-lg transition-all duration-200 ${
              isMoving ? 'text-purple-500' : 'text-blue-500'
            }`} 
          />
        </div>
      </div>
      
      {/* Rocket trail effect */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-300 ${
          isVisible && isMoving ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 8,
        }}
      >
        <div className="w-8 h-2 bg-gradient-to-r from-orange-400/40 to-red-500/40 rounded-full blur-sm"></div>
      </div>
      
      {/* Secondary trail */}
      <div
        className={`fixed pointer-events-none z-30 transition-all duration-500 ${
          isVisible && isMoving ? 'opacity-40' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 6,
        }}
      >
        <div className="w-6 h-1.5 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-md"></div>
      </div>
    </>
  );
};

export default CursorInteraction;
