import React from 'react';

export const AnimatedDataSphere: React.FC = () => (
  <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: 'rgba(255, 209, 0, 0.4)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgba(255, 209, 0, 0)', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="7.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Central Glow */}
    <circle cx="400" cy="400" r="200" fill="url(#grad1)" />

    {/* Animated Orbits and Nodes */}
    <g className="animate-spin-slow" style={{ transformOrigin: '400px 400px' }}>
      {/* Orbit 1 */}
      <circle cx="400" cy="400" r="150" fill="none" stroke="rgba(255, 209, 0, 0.2)" strokeWidth="2" />
      <circle cx="550" cy="400" r="15" fill="rgba(255, 209, 0, 0.5)" filter="url(#glow)">
        <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="10s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="250" r="10" className="animate-pulse-dot" fill="currentColor" style={{ color: '#FFD100' }}/>

      {/* Orbit 2 */}
      <g style={{ transformOrigin: '400px 400px' }} transform="rotate(45)">
        <circle cx="400" cy="400" r="250" fill="none" stroke="rgba(255, 209, 0, 0.2)" strokeWidth="2" strokeDasharray="10 10" />
         <circle cx="650" cy="400" r="18" fill="rgba(255, 209, 0, 0.5)" filter="url(#glow)">
          <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="-360 400 400" dur="15s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="150" r="12" className="animate-pulse-dot" fill="currentColor" style={{ color: '#FFD100', animationDelay: '0.5s' }} />
      </g>
      
      {/* Orbit 3 */}
      <g style={{ transformOrigin: '400px 400px' }} transform="rotate(-60)">
        <circle cx="400" cy="400" r="350" fill="none" stroke="rgba(255, 209, 0, 0.2)" strokeWidth="2" />
        <circle cx="750" cy="400" r="12" fill="rgba(255, 209, 0, 0.5)" filter="url(#glow)">
          <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="20s" repeatCount="indefinite" />
        </circle>
         <circle cx="400" cy="50" r="9" className="animate-pulse-dot" fill="currentColor" style={{ color: '#FFD100', animationDelay: '1s' }}/>
      </g>

      {/* Connecting Lines (example) */}
      <line x1="550" y1="400" x2="400" y2="150" stroke="rgba(255, 209, 0, 0.1)" strokeWidth="1">
         <animateTransform attributeName="transform" type="rotate" from="0 400 400" to="360 400 400" dur="10s" repeatCount="indefinite" />
      </line>
       <line x1="400" y1="150" x2="400" y2="50" stroke="rgba(255, 209, 0, 0.1)" strokeWidth="1">
         <animateTransform attributeName="transform" type="rotate" from="45 400 400" to="405 400 400" dur="15s" repeatCount="indefinite" />
      </line>

    </g>
  </svg>
);
