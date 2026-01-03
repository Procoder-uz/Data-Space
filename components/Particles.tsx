import React, { useMemo } from 'react';

const PARTICLE_COUNT = 100;

export const Particles: React.FC = () => {
    const particles = useMemo(() => {
        return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
            const size = Math.random() * 1.5 + 0.5; // Smaller particles (0.5px to 2px)
            const animationDuration = Math.random() * 20 + 20; // 20s to 40s for slower movement
            const animationDelay = Math.random() * 20; // 0s to 20s delay
            return {
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `subtle-drift ${animationDuration}s ${animationDelay}s ease-in-out infinite`,
            };
        });
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-primary/30" // More transparent
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.width,
                        height: p.height,
                        animation: p.animation,
                    }}
                />
            ))}
        </div>
    );
};
