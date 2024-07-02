import React from 'react';

// Using the img tag to reference the SVG from the public folder
function LogoIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      src="./public/logo.svg"  // Path to your SVG in the public folder
      alt="Logo"
      width="24"
      height="24"
    />
  );
}

export default LogoIcon;