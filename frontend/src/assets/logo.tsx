import React from 'react';

interface LogoIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  darkMode?: boolean;
}

// Using the img tag to reference the SVG from the public folder
function LogoIcon(props: LogoIconProps) {
  return (
    <img
      {...props}
      src="./public/logo.svg"  
      alt="Curved Logo"
      width="20"
      height="20"
    />
  );
}

export default LogoIcon;