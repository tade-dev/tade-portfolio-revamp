
import React, { useState, useEffect } from "react";

const CursorInteraction = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hoveringElement, setHoveringElement] = useState<string | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                     target.closest('a') || 
                     target.tagName.toLowerCase() === 'button' || 
                     target.closest('button');
      
      if (isLink) {
        setHoveringElement('link');
      } else if (target.classList.contains('project-card') || target.closest('.project-card')) {
        setHoveringElement('project');
      } else {
        setHoveringElement(null);
      }
      
      setIsVisible(true);
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Use mobile detection to disable on mobile
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div 
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: hoveringElement ? '60px' : '20px',
          height: hoveringElement ? '60px' : '20px',
          backgroundColor: 'white',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.3s ease',
          opacity: 0.7,
          scale: clicked ? '0.5' : '1',
        }}
      />
      
      {/* Trail effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i}
          className="fixed pointer-events-none z-50 rounded-full bg-blue-400"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%) scale(0.5)',
            width: `${10 - i * 1.5}px`,
            height: `${10 - i * 1.5}px`,
            opacity: 0.15 - i * 0.02,
            transition: `all ${0.1 + i * 0.04}s ease-out`,
            transitionDelay: `${i * 0.02}s`,
          }}
        />
      ))}
      
      {/* Text indicator */}
      {hoveringElement && (
        <div 
          className="fixed pointer-events-none z-50 text-xs font-medium text-white mix-blend-difference"
          style={{
            left: `${position.x + 20}px`,
            top: `${position.y + 20}px`,
            opacity: 0.8,
            transition: 'all 0.2s ease-out',
          }}
        >
          {hoveringElement === 'link' ? 'Click' : 'View'}
        </div>
      )}
    </>
  );
};

export default CursorInteraction;
