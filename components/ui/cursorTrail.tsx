// app/components/ui/CursorTrail.tsx

'use client';

import { ReactNode, useEffect } from 'react';

interface CursorTrailProps {
  children: ReactNode;
}

export const CursorTrail: React.FC<CursorTrailProps> = ({ children }) => {
  useEffect(() => {
    const circles = document.querySelectorAll<HTMLElement>('.circle');
    const coords = { x: 0, y: 0 };
    const circlePositions = new Map<HTMLElement, { x: number; y: number }>();

    const colors = [
        "#c5c69b"
      ];
      

    circles.forEach((circle, index) => {
      circlePositions.set(circle, { x: 0, y: 0 });
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        const position = circlePositions.get(circle)!;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${((circles.length - index)) / (circles.length)})`;

        const nextCircle = circles[index + 1] || circles[0];
        const nextPosition = circlePositions.get(nextCircle)!;
        x += (nextPosition.x - x) * 0.25;
        y += (nextPosition.y - y) * 0.25;

        position.x = x;
        position.y = y;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="circle fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999999]"
        />
      ))}
      <div>{children}</div>
    </>
  );
};
