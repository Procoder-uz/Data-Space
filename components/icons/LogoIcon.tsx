import React from 'react';
import logoImage from './logo.png';


export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <img src={logoImage} className="w-[100px] p-0 m-0" alt="" />
);
